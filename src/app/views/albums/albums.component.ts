import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/header/header.service';
import { ModelAlbums } from './albums.model';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: ModelAlbums[];

  userIdColor = {
    1 : '#f00',
  }

  constructor(
    private _albums: AlbumsService, 
    private _headerService: HeaderService
    ){ 
      _headerService.headerData = {
        title: 'Albums',
        icon: 'collections',
        routerUrl: '/albuns'
      }

    }

  ngOnInit() {
    this._albums.getAlbums().subscribe(albums => {
      this.albums = albums;
    })
  }

}
