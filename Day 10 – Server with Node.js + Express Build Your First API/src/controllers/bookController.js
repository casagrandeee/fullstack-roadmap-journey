import book from "../models/Book.js";

class BookController {

    static async listBooks(req, res) {
        try {
            const booksList = await book.find({});
            res.status(200).json(booksList);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to retrieve books.`});
        }
    };

    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const bookFinded = await book.findById(id);
            res.status(200).json(bookFinded);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to retrieve the book.`});
        }
    };

    static async registerBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({message: "Book registered successfully!", book: newBook});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to register book.`});
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Book updated successfully!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Updated failed.`});
        }
    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({message: "Book deleted successfully!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Delete failed.`});
        }
    };
}

export default BookController;