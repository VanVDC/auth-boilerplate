//Main starting point
const express = require("express");

const http = require("http"); //basic server//native node liberary

const bodyParser = require("body-parser"); //parser
const morgan = require("morgan"); //logger
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const mongoURL = require("./mongoSecretKey");
const cors = require("cors");

//DB setup
mongoose.connect(mongoURL.url);

//App setup..getting express to work
app.use(morgan("combined")); //logging framework middleware
app.use(cors()); //fix the browser cors error allow any domains get requests.
app.use(bodyParser.json({ type: "*/*" })); //use to parse incoming request. Turn into json.
router(app);

//Server setup..getting express to talk to outside world
const port = process.env.PORT || 3090;

const server = http.createServer(app); //basic server/

server.listen(port);
console.log("Server is listening on: " + port);
