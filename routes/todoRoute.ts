import express from 'express';
import { getAllTodos, createTodo, getTodoByNo, updateTodo } from '../services/todoService.js';

const router = express.Router();

//GET /todo/all
router.get('/all', async (req, res) => {
  try {
    const result = await getAllTodos();
    res.status(200).json({ data: result });
  } catch (err) {
    return res.status(500).json({
      message: 'Error occurred in fetching todos',
    });
  }
});

//GET /todo/:todo_no
router.get('/:todo_no', async (req, res) => {
  try {
    const todoNo = req?.params?.todo_no;
    const result = await getTodoByNo(todoNo);
    res.status(200).json({ data: result });
  } catch (err) {
    return res.status(500).json({
      message: 'Error occurred in fetching todo by no',
    });
  }
});

//POST /todo/create
router.post('/create', async (req, res) => {
  try {
    const result = await createTodo(req);
    res.status(200).json({ data: result });
  } catch (err) {
    return res.status(500).json({
      message: 'Error occurred in create todo',
    });
  }
});

//POST /todo/update/:todo_no
router.post('/update', async (req, res) => {
  try {
    const result = await updateTodo(req);
    res.status(200).json({ data: result });
  } catch (err) {
    return res.status(500).json({
      message: 'Error occurred in create todo',
    });
  }
});

export default router;
