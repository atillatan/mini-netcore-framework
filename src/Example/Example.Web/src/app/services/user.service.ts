import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, config } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User, ServiceResponse, PagingDto } from '../code/dto';
import { MessageService } from './message.service';
import { ConfigService } from './config.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private apiUrl: String = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private configService: ConfigService
  ) {
    this.apiUrl = configService.config.DefaultAPIAddress;
  }

  // Create
  addUser(user: User): Observable<ServiceResponse<number>> {
    return this.http.post<ServiceResponse<number>>(this.apiUrl + '/api/example/postuser', user, httpOptions).pipe(
      tap((id: ServiceResponse<number>) => this.log(`added user w/ id=${id}`)),
      catchError(this.handleError<ServiceResponse<number>>('addUser'))
    );
  }

  // Read
  getUser(id: number): Observable<ServiceResponse<User>> {
    return this.http.get<ServiceResponse<User>>(`${this.apiUrl}/api/example/getuser/${id}`).pipe(
      tap(serviceResponse => this.log(`fetched user id=${serviceResponse.Data.Id}`)),
      catchError(this.handleError<ServiceResponse<User>>(`getUser id=${id}`))
    );
  }

  // Update
  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/example/putuser/${user.Id}`, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.Id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  // Delete
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.Id;
    const url = `${this.apiUrl}/api/example/deleteuser/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  // List
  getUsers(userDto: User, pagingDto: PagingDto): Observable<ServiceResponse<User[]>> {

    const dictionary = {};
    dictionary['searchDto'] = userDto;
    dictionary['pagingDto'] = pagingDto;
    this.messageService.add('UsersService: fetched users');

    return this.http.post<ServiceResponse<User[]>>(`${this.apiUrl}/api/example/listuser`, dictionary, httpOptions).pipe(
      tap(users => this.log(`fetched users`)),
      catchError(this.handleError<ServiceResponse<User[]>>(`getUsers`))
    );
  }

  // Search
  searchUsers(term: string): Observable<ServiceResponse<User[]>> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of(new ServiceResponse<User[]>());
    }
    const pagingDto = {
      'pageNumber': 1,
      'pageSize': 5,
      'orderBy': 'Id',
      'order': 'desc',
      'count': 0
    };

    const userDto = {
      'Id': 0,
      'Name': null,
      'LastName': null,
      'Age': null,
      'BirthDate': null,
      'GenderCodeId': null,
      'NationalityCodeId': null,
      'CreatedBy': 0,
      'CreateDate': new Date(),
      'UpdateDate': null,
      'UpdatedBy': null,
      'IsActive': true
    };
    const dictionary = {};
    dictionary['searchDto'] = userDto;
    dictionary['pagingDto'] = pagingDto;
    this.messageService.add('UsersService: fetched users');

    return this.http.post<ServiceResponse<User[]>>(`${this.apiUrl}/api/example/listuser`, dictionary, httpOptions).pipe(
      tap(serviceResponse => {
        this.log(`fetched users ${serviceResponse.Data.length}`);
      }),
      catchError(this.handleError<ServiceResponse<User[]>>(`getUsers`))
    );
  }


  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
