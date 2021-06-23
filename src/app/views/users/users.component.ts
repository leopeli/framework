import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/header/header.service';
import { ModelUsers } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: ModelUsers[];

  constructor(
    private _users: UsersService,
    private _headerService: HeaderService
    ) { 
      _headerService.headerData = {
        title: 'Usuários',
        icon: 'perm_identity',
        routerUrl: '/users'
      }
    }

  ngOnInit() {
    this._users.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
