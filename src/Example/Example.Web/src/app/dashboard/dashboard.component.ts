import { Component, OnInit } from '@angular/core';
import { User, PagingDto } from '../code/dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(new User(), new PagingDto()).subscribe(
      serviceResponse => {
        if (serviceResponse) {
          this.users = serviceResponse.Data;
        }
      }
    );
  }


}

