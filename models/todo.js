const db = require('../db/config');
console.log('after db import');

const Todo = {};

Todo.findAll = (user_id) => {
    return db.query(`
    SELECT * FROM todos
    WHERE user_id = $1
    `,[user_id]);
}

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
  `, [id]);
}


Todo.create = (todo, userid) => {
    return db.one(`
        INSERT INTO todos
        (user_id,title,category,description,status)
        VALUES
        ($1,$2,$3,$4,$5)
        RETURNING *
    `, [todo.user_id, todo.title, todo.category, todo.description, todo.status])
}






Todo.update = (todo, id) => {
  return db.one(`
    UPDATE todos SET
    user_id=$1,
    title=$2,
    category=$3,
    description=$4,
    status=$5
    WHERE id = $6
    RETURNING *
  `, [todo.user_id, todo.title, todo.category, todo.description, todo.status, id]);
}





Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todos
    WHERE id = $1
  `, [id]);
}




module.exports = Todo;