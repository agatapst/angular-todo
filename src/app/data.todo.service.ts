import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataTodoService {
  todos: Todo[] = [];

  constructor() { }
}
