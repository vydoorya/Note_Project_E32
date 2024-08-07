const express = require('express')

const dotenv = require('dotenv').config();
const todoRouter = require('./router/todoRouter')
const app = express()

app.use(express.json())

app.use("/api/todoapps",todoRouter);


const port= process.env.port;

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
  });