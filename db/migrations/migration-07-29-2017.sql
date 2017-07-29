
DROP DATABASE to_do
\c to_do

DROP TABLE IF EXISTS users
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL
    password_digest TEXT NOT NULL,
    firstname VARCHAR,
    lastname VARCHAR
);


DROP TABLE IF EXISTS items
CREATE TABLE items(
    id BIGSERIAL PRIMARY KEY,
    title TEXT,
    category, TEXT,
    description, TEXT
);