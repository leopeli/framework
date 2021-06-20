import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule { }
