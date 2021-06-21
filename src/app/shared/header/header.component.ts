import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _headerService: HeaderService) { }

  ngOnInit() {
    console.log(this._headerService.headerData.title)
  }

  get title(): string {
    return this._headerService.headerData.title
  }

  get icon(): string {
    return this._headerService.headerData.icon
  }

  get routeUrl(): string {
    return this._headerService.headerData.routerUrl
  }

}
