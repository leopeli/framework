import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
