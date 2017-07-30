const express = require('express');
const todoRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');


const todosController = require('../controllers/todos-controller');




//getting all todos
todoRoutes.get('/', authHelpers.loginRequired,  todosController.index)
//adding a new todo
todoRoutes.post('/', authHelpers.loginRequired, todosController.create)


//get to adding screen
todoRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('todos/todo-add', {
    currentPage: 'add',
    user_id: req.user.id,
  });
});

//get to editing page to update
todoRoutes.get('/:id/edit', authHelpers.loginRequired, todosController.edit);

//get a specific todo
todoRoutes.get('/:id', todosController.show);
//update a todo
todoRoutes.put('/:id', authHelpers.loginRequired, todosController.update);
//delete a todo
todoRoutes.delete('/:id', authHelpers.loginRequired, todosController.delete);

module.exports = todoRoutes;