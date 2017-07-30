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
        // res.json({
        //     currentPage: 'todos',
        //     message: 'ok',
        //     data: todos,
        // });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    })
    console.log('finished query');
};



todoController.create = (req, res) =>{
    Todo.create({
        user_id: req.body.user_id,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        status: req.body.status
    }, req.user.id)
    .then(() => {
        res.redirect('/todo');
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
}

module.exports = todoController;