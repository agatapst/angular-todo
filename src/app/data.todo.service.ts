import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataTodoService {
  todos: Todo[] = [];
  currentId: number = 1;
  
  constructor() { }
  
  addNewTodo(todo: Todo): DataTodoService {
    todo.id = this.currentId++;
    this.todos.push(todo);
    return this;
  }
  
  getAllTodos(): Todo[] {
    return this.todos;
  }
  
  deleteLastTodo(): DataTodoService {
    this.currentId--;
    this.todos.pop();
    return this;
  }
  
  deleteAll(): DataTodoService {
    this.todos = [];
    this.currentId = 1;
    return this;
  }
}
