const options = {
  connect: (client, dc, isFresh) => {
        const cp = client.connectionParameters;
        console.log(isFresh)
        console.log('Connected to database:', cp.database);
  },
  query: (e) => {
    console.log(e.query);
  },
  
};

const pgp = require('pg-promise')(options);

const db = (() => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'delorean_to_do',
      port: 5432,
      host: 'localhost',
      user: 'postgres',
      password: ''
    });
  }
  else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
  // console.log(`test: ${pgp(process.env.DATABASE_URL)}`);
  // return pgp(process.env.DATABASE_URL);
})();

// const db = pgp(process.env.DATABASE_URL);
module.exports = db;