require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// my routes

const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");


//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);




//Port
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running on port number ${port}`);
});
