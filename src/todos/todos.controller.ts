import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TodosService, Todo } from './todos.service';
import { CreateTodoDto } from './todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todosService.createTodo(createTodoDto);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: CreateTodoDto,
  ): Todo {
    return this.todosService.updateTodo(+id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    this.todosService.deleteTodo(+id);
  }
}
