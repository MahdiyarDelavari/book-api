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

app.listen(port, () => console.log(`app listening on port ${port}!`));
