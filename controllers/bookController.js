import Book from '../models/Book.js';

const bookController = {};

// Create a new book
bookController.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send("Error creating book: " + error.message);
    }
};

// Retrieve all books
bookController.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.send(books);
    } catch (error) {
        res.status(500).send("Error fetching books: " + error.message);
    }
};

// Retrieve a single book by ID
bookController.getBookById = async (req, res) => {
    try {
        const book = await Book.find({"title":req.params.id});
        if (!book) {
            res.status(404).send("Book not found");
            return;
        }
        res.send(book[0]);
    } catch (error) {
        res.status(500).send("Error fetching book: " + error.message);
    }
};

bookController.getBookByAuthor = async (req, res) => {
    try {
        const book = await Book.find({"authors":req.params.id});
        if (!book) {
            res.status(404).send("Book not found");
            return;
        }
        res.send(book[0]);
    } catch (error) {
        res.status(500).send("Error fetching book: " + error.message);
    }
};

// Update a book by ID
bookController.updateBook = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const book = await Book.find({"bookID":req.params.id});
        
        if (!book) {
            res.status(404).send("Book not found");
            return;
        }

        updates.forEach(update => book[0][update] = req.body[update]);

        // console.log(req.body[0]);
        
        book[0].save();

        res.send(book[0]);
    } catch (error) {
        res.status(500).send("Error updating book: " + error.message);
    }
};

// Delete a book by ID
bookController.deleteBook = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({"bookID":req.params.id});

        if (!book) {
            res.status(404).send("Book not found");
            return;
        }
        res.send(book);
    } catch (error) {
        res.status(500).send("Error deleting book: " + error.message);
    }
};

bookController.deleteAllBook = async (req, res) => {
    try {
        const book = await Book.deleteMany({});
        res.status(200).send("All books Succesfully Deleted");
    } catch (error) {
        res.status(500).send("Error deleting book: " + error.message);
    }
};

export default bookController;
