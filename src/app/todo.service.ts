import { Injectable } from '@angular/core';
import {Todo} from './shared/todo.model'

@Injectable()
export class TodoService {

 // placeholder  for last id  so we can simulate
 // automatic incrementing if id's

 lastID: number = 0;

 // placeholder for todo's
 todos: Todo[] = [];
  constructor() { 

  }

/*// simulate POST/ todo
addTodo(todo: Todo): TodoService {
  if (!todo.id){
    todo.id =++this.lastID;
  }
  this.todos.push(todo);
  return this;
}

// Simulate PUT /todos/:id
updateTodoByID(id: number, values: Object = {}): Todo{
  let todo = this.getTodoById(id);
  if(!todo){
    return null;
  }
  Object.assign(todo, values);
  return todo;
}

// Simulate GET / todos
getAllTodos(): Todo[]{
  return this.todos;
}

// Simulate GET / todos/ :id
getTodoByid(id: number): Todo{
  return this.todos
    .filter(todo => todo.id === id)
    .pop();
}

// toggle todo complete
toggleTodoComplete(todo: Todo){
  let updatedTodo = this.updateTodoByID(todo.id, {
    complete: !todo.complete
  });
  return updatedTodo;
}
*/


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

// toggle todo
  toggleTodoComplete(todo:Todo){
  	todo.completed = !todo.completed;
  	return this.put(todo);
  }






}
