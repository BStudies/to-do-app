
DROP DATABASE to-do
\c to-do

DROP TABLE IF EXISTS users
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);


