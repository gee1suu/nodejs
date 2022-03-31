const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
mongoose
  .connect(
    "mongodb+srv://gee1suu:today0929@boilerplate.nacnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(err));
