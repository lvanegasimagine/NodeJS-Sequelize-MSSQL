var express = require('express');
var route = express();

// import controller
const controller = require('./controller');
// create route
route.get('/list',controller.list);
route.post('/create',controller.create);
route.put('/update/:id',controller.update);
route.get('/get/:id',controller.get);
route.delete('/delete/:id',controller.delete);
// exprot route
module.exports = route;