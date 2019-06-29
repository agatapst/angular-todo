import { Component } from '@angular/core';
import { DataTodoService } from './data.todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataTodoService]
})
export class AppComponent {
  title = "TODO app";
  subtitle = "What are you up to?"
  newTodo: Todo = new Todo();

  constructor(private DataTodoService: DataTodoService) {
  }

  addNewTodo() {
    this.DataTodoService.addNewTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    return this.DataTodoService.getAllTodos();
  }

}


