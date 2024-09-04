const express = require('express');
const route = new express.Router();
const controller = require('../controller/controller');

route.get('/api/v1', controller.getVal);
route.get('/api/v1/:id', controller.getValId);
route.post('/api/v1', controller.postVal);
route.patch('/api/v1/:id', controller.editVal);
route.put('/api/v1/:id', controller.editVal)
route.delete('/api/v1/:id', controller.deleteVal)

module.exports = route;