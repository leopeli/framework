import { Component, OnInit } from '@angular/core';
import { ModelAlbums } from './albums.model';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: ModelAlbums[];

  constructor(private _albums: AlbumsService) { }

  ngOnInit() {
    this._albums.getAlbums().subscribe(albums => {
      this.albums = albums;
    })
  }

}
