import { Component, OnInit } from '@angular/core';
import { ModelUsers } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: ModelUsers[];

  constructor(private _users: UsersService) { }

  ngOnInit() {
    this._users.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    })
  }

}
