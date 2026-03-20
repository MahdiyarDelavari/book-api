const express = require('express')
const Book = require("../models/Book");

const bookRouter = express.Router();


//create new Book
bookRouter.post("/", async (req, res) => {
    try {
        const { title, author, genre, publishedYear, isAvailable } = req.body;

        const existingBook = await Book.findOne({ title, author });

        if (existingBook) {
            return res.status(409).json({ error: "Book Already Exists" });
        }

        const book = await Book.create({
            title,
            author,
            genre,
            publishedYear,
            isAvailable,
        });

        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//get all books
bookRouter.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//get a book
bookRouter.get("/:bookId", async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//delete a book
bookRouter.delete("/:bookId", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId);
        res.status(200).json({ message: "Book Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//update a book
bookRouter.put("/:bookId", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
            new: true,
        });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = bookRouter