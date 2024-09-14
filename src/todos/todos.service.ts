import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './todo.dto';

export interface Todo {
  id: number;
  text: string;
}

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  getAllTodos(): Todo[] {
    return this.todos;
  }

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = { id: this.idCounter++, text: createTodoDto.text };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: number, updateTodoDto: CreateTodoDto): Todo {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos[todoIndex].text = updateTodoDto.text;
    return this.todos[todoIndex];
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
