import { nanoid } from 'nanoid';
import { Todo } from '../models/Todo.js';

export const getTodoByNo = async (todoNo) => {
  return await Todo.findAll({
    where: {
      todo_no: todoNo,
    },
  });
};
export const getAllTodos = async () => {
  return await Todo.findAll();
};

export const createTodo = async (req) => {
  return await Todo.create({
    todo_no: nanoid(10),
    todo_name: req.body.todoName,
    todo_desc: req.body?.todoDesc,
  });
};

export const updateTodo = async (req) => {
  return await Todo.update(
    {
      todo_name: req.body.todoName,
      todo_desc: req.body?.todoDesc,
    },
    {
      where: {
        todo_no: req.body.todo_no,
      },
    },
  );
};
