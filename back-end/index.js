let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router()
let app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

let book = require("./route/ApiBook");
let user = require("./route/ApiUser");

app.use('/users', user);
app.use('/books', book);

app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(80, () => console.log("Server is running"));