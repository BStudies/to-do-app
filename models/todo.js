const db = require('../db/config');
console.log('after db import');

const Todo = {};

Todo.findAll = (user_id) => {
    return db.query(`
    SELECT * FROM todos
    WHERE user_id = $1
    `,[user_id]);
}



module.exports = Todo;