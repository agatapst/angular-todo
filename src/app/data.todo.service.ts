import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataTodoService {
  todos: Todo[] = [];

  constructor() { }

  addNewTodo(todo: Todo): DataTodoService {
    this.todos.push(todo);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  deleteLastTodo(): DataTodoService {
    this.todos.pop();
    return this;
  }

  deleteAll(): DataTodoService {
    this.todos = [];
    return this;
  }
}
