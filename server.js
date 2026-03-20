const express = require("express");
const Book = require("./models/Book");
const app = express();
const port = 6000;

//MiddleWares
app.use(express.json());

//create new Book
app.post("/api/v1/books", async (req, res) => {
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
app.get("/api/v1/books", async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json(books);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

//get a book
app.get("/api/v1/books/:bookId", async (req, res) => {
	try {
		const book = await Book.findById(req.params.bookId);
		res.status(200).json(book);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

//delete a book
app.delete("/api/v1/books/:bookId", async (req, res) => {
	try {
		await Book.findByIdAndDelete(req.params.bookId);
		res.status(200).json({ message: "Book Deleted Successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

//update a book
app.put("/api/v1/books/:bookId", async (req, res) => {
	try {
		const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
			new: true,
		});
		res.status(200).json(book);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
