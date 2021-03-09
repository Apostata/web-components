const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
 
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
  res.render('starting-page', { message: 'Hello from Node.js' });
});

app.listen(8081, ()=>{
  console.log('node running in port 8081');
});
