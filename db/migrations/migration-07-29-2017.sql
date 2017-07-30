
-- DROP DATABASE delorean_to_do
-- CREATE DATABASE delorean_to_do;
\c delorean_to_do

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);


DROP TABLE IF EXISTS todos;
CREATE TABLE todos(
    id BIGSERIAL PRIMARY KEY,
    user_id INT,
    title TEXT,
    category TEXT,
    description TEXT,
    status TEXT
);