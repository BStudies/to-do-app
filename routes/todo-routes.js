const express = require('express');
const todoRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');


const todosController = require('../controllers/todos-controller');


// todoRoutes.get('/', authHelpers.loginRequired, authHelpers.loginRedirect, todosController.index)
todoRoutes.get('/', authHelpers.loginRequired,  todosController.index)
todoRoutes.post('/add', authHelpers.loginRequired, todosController.create)


module.exports = todoRoutes;