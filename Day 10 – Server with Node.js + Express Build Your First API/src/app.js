import express from 'express';
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const db = await connectDB();

db.on("error", (error) => {
    console.error("Database connection error:", error);
});

db.once("open", () => {
    console.log("Database connected successfully!");
})

const app = express();

routes(app);

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book added successfully!");
});

app.get("/books/:id", (req, res) => {
    const bookIndex = findBooks(req.params.id);
    res.status(200).json(books[bookIndex]);
});

app.put("/books/:id", (req, res) => {
    const index = findBooks(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = findBooks(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book deleted successfully!");
});

export default app;

