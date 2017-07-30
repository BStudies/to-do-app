const Todo = require('../models/todo');



const todoController = {};

// get current users todo
todoController.index = (req, res) => {
    // console.log(`getting ${req.user.username}'s todo's`)
    // return Todo.findAll(req.user.username)
    console.log('getting todos');
    Todo.findAll(req.user.id)
    .then(todos => {
        res.render('todos/todo-index', {
            currentPage: 'todos',
            message: 'ok',
            data: todos,
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    })
    console.log('finished query');
};


//insert into database
todoController.create = (req, res) =>{
    Todo.create({
        user_id: req.body.user_id,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        status: req.body.status
    }, req.user.id)
    .then(() => {
        res.redirect('/todos');
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
}



//display one
todoController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.render('todos/todo-single', {
        currentPage: 'show',
        message: 'ok',
        data: todo,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};





// update the table
todoController.update = (req, res) => {
  Todo.update({
        user_id: req.body.user_id,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        status: req.body.status
  }, req.params.id).then(todo => {
    res.redirect(`/todos/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};





// render the updating page
todoController.edit = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.render('todos/todo-single-edit', {
        currentPage: 'edit',
        data: todo,
        user_id: req.user.id,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};





todoController.delete = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.redirect('/todos');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = todoController;