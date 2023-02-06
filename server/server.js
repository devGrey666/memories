const express = require("express")
const cors =require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()

const { PostRouter } = require("./routes/posts")
const { AuthRouter } = require("./routes/users")

const app = express();

app.use(morgan("combined"))
app.use(cors());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ extended: true, limit: "30mb" }));

const url = "mongodb://localhost:27017/Blog";
const port = process.env.PORT ?? 8080

// uses mongoose to connect to mongodb
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(() => {
    // console.log(result)
    app.listen(port , () => {
      console.log(`Connected to port:${port}`);
    });
  }).catch((err) => {
    console.log("Error Occurred",err);
  });


app.use("/posts", PostRouter);
app.use("/users", AuthRouter);

app.use((err, req, res, next) => {
  console.log(err.xhr);
  next(err);
});

app.use((err, req, res, next) => {
  if (req.xhr) {
    res.status(500).json({ message: "Internal Server error", error: err });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send({ message: "error", error: err });
});
