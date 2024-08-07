const express = require("express");
const cors = require("cors");

var corsOptions = {
     origin: 'https://mall-mystery-heroes.vercel.app', // Your production domain
  };

const app = express();
app.use(cors({ corsOptions }));

const { targetFunction } = require("./callableFunctions/targetFunction")
exports.targetFunction = targetFunction