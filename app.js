import dotenv from "dotenv";

dotenv.config();

import express from "express";
import "./src/database";
import homeRoutes from "./src/routes/homeRoutes";
import photoRoutes from "./src/routes/photoRoutes";
import studentRoutes from "./src/routes/studentRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import userRoutes from "./src/routes/userRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/students/", studentRoutes);
    this.app.use("/photos/", photoRoutes);
  }
}

export default new App().app;
