import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

	todos: Todo[] = [];
	newTodo: Todo = new Todo();
  constructor(private todoService: TodoService){}

  ngOnInit() {
  	this.todos = this.todoService.get(); 
  }

  addTodo() {
  	this.todoService.post(this.newTodo);
  	this.newTodo = new Todo();
  }


  updateTodo(todo: Todo, $event) {
  	todo.title = $event.target.value;
  	this.todoService.put(todo);
  }

  removeTodo(todo: Todo){
  	 this.todoService.remove(todo);
  }
}
