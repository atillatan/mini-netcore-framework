import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User, PagingDto, ServiceResponse, BaseDto, ResultType } from '../code/dto';
import { UserService } from '../services/user.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../assets/core-module.js';
import * as utils from '../../assets/core-utility.js';






@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[];
  entry: User;
  birthDate: any = {};
  core: CoreModule = new CoreModule();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.entry = new User();

    this.core.testMethod1('core.module');
    utils.testMethod1('testMethod1');
  }

  getUsers(): void {
    this.userService.getUsers(new User(), new PagingDto()).subscribe(
      serviceResponse => { this.users = serviceResponse.Data; }
    );
  }

  addUser(): void {
    if (this.entry.Name == null) { alert('lutfen zorunlu alanlari doldurunuz!'); return; }
    if (this.birthDate.year != null) {
      const date = new Date(this.birthDate.year, this.birthDate.month, this.birthDate.day, 0, 0, 0, 0);
      this.entry.BirthDate = date;
    }

    this.userService.addUser(this.entry).subscribe(serviceResponse => {
      this.getUsers();
      this.entry = new User();
      this.birthDate = {};
    });
  }

  delete(user: User): void {
    this.userService.deleteUser(user.Id).subscribe();
    this.users = this.users.filter(h => h !== user);
  }

}
