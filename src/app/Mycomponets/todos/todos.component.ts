import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule, NgLocaleLocalization } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  localItem : null | string;
  todos:Todo[];
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
      else
      {
        this.todos = JSON.parse(this.localItem);
      }
  }
  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    console.log("onClick has been triggered", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log("Added Todo to the list", todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
