const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const PORT = 3000;


app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
