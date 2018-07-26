import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../code/dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  birthDate: any = {};

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const Id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(Id).subscribe(serviceResponse => {
      this.user = serviceResponse.Data;
      const d = new Date(this.user.BirthDate);
      this.birthDate.year = d.getFullYear();
      this.birthDate.month = d.getUTCMonth();
      this.birthDate.day = d.getUTCDay();
    });
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }

}
