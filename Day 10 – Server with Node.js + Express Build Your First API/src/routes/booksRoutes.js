import express from "express";
import bookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", bookController.listBooks);

routes.get("/books/:id", bookController.listBookById);

routes.post("/books", bookController.registerBook);

routes.put("/books/:id", bookController.updateBook);

export default routes;