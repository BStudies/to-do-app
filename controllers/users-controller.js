const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const todosController = require('./todos-controller');

const usersController = {};


usersController.create = (req, res) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password_digest: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })
    .then(user => {
        req.login(user, (err) => {
            if(err) return next(err);
            res.redirect('/user');
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}



usersController.index = (req, res) =>{
    // console.log(req);
    // res.locals.id=req.user.id;
    // console.log(res.locals);
    // res.json({
    //     user: req.user,
    //     // data: `Put a user profile on this route`,
    //     data: '/user'
    // })
    console.log(`${req.user.username} signed in`);
    res.render('users/user',{
        currentPage: `${req.user.username}'s page`,
        user: req.user,
    })
}


module.exports = usersController;