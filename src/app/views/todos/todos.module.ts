import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: [TodosComponent],
})
export class TodosModule { }
