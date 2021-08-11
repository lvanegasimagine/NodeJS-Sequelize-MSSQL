const express = require('express');
const app = express();
require('dotenv/config');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

const routes = require('./routes');
app.use('/test', routes);

app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})