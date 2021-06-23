import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _headerService: HeaderService
    ) { }

  ngOnInit() {
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
