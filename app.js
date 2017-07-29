const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const methodOverride = require('method-override');












const app = express();








const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}!`);
});

app.use(logger('dev'));
app.use(express.static('public'));
// app.use(bodyPa)
app.use(methodOverride('_method'));





app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');






app.get('/', (req, res)=>{
    res.render('index',{

    });
});








app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});