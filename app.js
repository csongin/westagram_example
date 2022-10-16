require("dotenv").config();

const { DataSource } = require("typeorm");

const dataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });

const express = require('express');
const cors = require('cors');
const morgan =require('morgan');

const app = express();

app.use(cors())

app.get('/ping', (req, res, next) => {
  res.json({message: 'pong'})
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})