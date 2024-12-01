const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();
require("./database/dataConnect");

const app = express();

app.listen(process.env.port, () => {
  console.log(`server is running on ${process.env.port}`);
});
