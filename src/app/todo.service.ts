import { Injectable } from '@angular/core';
import {Todo} from './shared/todo.model'

@Injectable()
export class TodoService {
todos: Todo[] = [];
  constructor() { 

  }


// get all todos
  get() {

  	return this.todos;
  }


// add all todos
  post(todo:Todo) {
  	this.todos.push(todo);
  }


// update all todos
  put (todo:Todo){
  	this.remove(todo);
  	this.post(todo);
  }


// delete all todos
  remove(todo:Todo) {
  	let index = this.todos.indexOf(todo, 0)
  	if(index > - 1){
  		this.todos.splice(index, 1);
  	}
  }

  toggleTodoComplete(todo:Todo){
  	todo.completed = !todo.completed;
  	return this.put(todo);
  }






}
