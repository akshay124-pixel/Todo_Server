import express from "express";
import cors from "cors";
import dbconnect from "./utils/dbconnect.js";
import dotenv from "dotenv";
import router from "./Routes/Route.js";
import errorhandler from "./Middleware/errorhandler.js";
const app = express();
const port = 4000;
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api", router);
app.use(errorhandler);
dbconnect().then(
  app.listen(port, () => {
    console.log(`Application listing on ${port}`);
  }),
);
