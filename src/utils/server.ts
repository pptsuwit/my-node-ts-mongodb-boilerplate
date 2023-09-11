const express = require("express");
import cors from "cors";
import errorHandler from "../middlewares/error-handler";
import userControllerRouter from "../controllers/user.controller";
import authControllerRouter from "../controllers/auth.controller";
import customerControllerRouter from "../controllers/customer.controller";
function createServer() {
  const app = express();
  app.use(cors());
  app.options("*", cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/api", userControllerRouter);
  app.use("/api", authControllerRouter);
  app.use("/api", customerControllerRouter);

  app.use(errorHandler);
  return app;
}
export default createServer;
