import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataTodoService {
  todos: Todo[] = [];
  counter: number = 1;

  constructor() { }

  addNewTodo(todo: Todo): DataTodoService {
    todo.id = this.counter++;
    this.todos.push(todo);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  deleteLastTodo(): DataTodoService {
    this.counter--;
    this.todos.pop();
    return this;
  }

  deleteAll(): DataTodoService {
    this.todos = [];
    return this;
  }
}
