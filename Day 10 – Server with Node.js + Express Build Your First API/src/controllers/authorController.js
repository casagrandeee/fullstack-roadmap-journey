import { author } from "../models/Author.js";

class AuthorController {

    static async listAuthors(req, res) {
        try {
            const authorsList = await author.find({});
            res.status(200).json(authorsList);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to retrieve authors.`});
        }
    };

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorFinded = await author.findById(id);
            res.status(200).json(authorFinded);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to retrieve the author.`});
        }
    };

    static async registerAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({message: "Author registered successfully!", book: newAuthor});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to register author.`});
        }
    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Author updated successfully!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Updated failed.`});
        }
    };

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({message: "Author deleted successfully!"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Delete failed.`});
        }
    };
}

export default AuthorController;