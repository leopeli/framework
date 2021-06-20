import { Component, OnInit } from '@angular/core';
import { ModelTodos } from './todos.model';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: ModelTodos[];

  constructor(private _todosService: TodosService) { }

  ngOnInit() {
    this._todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

}
