const express = require("express");
const bookRouter = require("./routes/booksRouter");
const connectDB = require("./config/dbConnect");
const app = express();
const port = 6000;

//connect to db
connectDB()

//MiddleWares
app.use(express.json());

//Routes
app.use("/api/v1/books",bookRouter)

app.listen(port, () => console.log(`app listening on port ${port}!`));
