//This is our main server which is serving our page and also responding to user requests.
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(express.static("public"));
router.use(bodyParser.json());

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is turned on and it is listening on port " + port);
});
