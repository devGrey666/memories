import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import PostRouter from "./routes/posts.js";
import UserRouter from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ extended: true, limit: "30mb" }));

const url = "mongodb://localhost:27017/Blog";
const port = process.env.PORT || 5000;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    // console.log("Connected to data Base");
    // console.log("Port", port);
    console.log(result)
    app.listen(port, () => {
      console.log(`Connected to port:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error Occurred",err);
  });

app.use("/posts", PostRouter);
app.use("/users", UserRouter);

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
