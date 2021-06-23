import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { MatCardModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [AlbumsComponent]
})
export class AlbumsModule { }
