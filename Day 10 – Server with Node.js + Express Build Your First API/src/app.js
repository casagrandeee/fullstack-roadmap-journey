import express from 'express';

const app = express();
app.use(express.json());

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird"
    },
    {
        id: 2,
        title: "Capitalist, Socialist, and Democrat"
    }
]

function findBooks(id) {
    return books.findIndex(books => {
        return books.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the home page!");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

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