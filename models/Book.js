const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Book Title is required"],
		},

		author: {
			type: String,
			required: [true, "Author Name is required"],
		},

		genre: String,

		publishedYear: {
			type: Number,
			required: [true, "Published Year is required"],
		},

		isAvailable: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

//compile the scema to form model

const Book = mongoose.model("Book", bookSchema);

module.export = Book;
