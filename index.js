const express = require('express');
require('./db/db')
const mvcRouter = require('./routes/route')
const app= express();

app.use(express.json());
app.use(mvcRouter)

const port = 3000;
app.listen(port , ()=>{
    console.log('port connection done..')
})