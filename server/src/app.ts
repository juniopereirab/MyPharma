require("dotenv").config({ path: __dirname + "/.env" });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import router from "./routes";
import seed from "./utils/seed";

const app = express();

mongoose.connect(
  `mongodb://mypharma_db:27017/MyPharma`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log(
        "Failed to Establish Connection with MongoDB with Error: ",
        err
      );
    }
  }
);

//Função para semear o banco de dados com alguns produtos.
seed()
  .then(() => {
    console.log("Products populated successfully");
  })
  .catch((error) => console.log(error.message));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "uploads")));
app.use(router);

export default app;
