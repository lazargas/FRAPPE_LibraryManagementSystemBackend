import express from 'express';
import { importBooks } from '../controllers/importBooks.js';
import bookController from '../controllers/bookController.js';
import memberController from '../controllers/memberController.js';
import transactionController from '../controllers/transactionsController.js';

const route = express.Router();

route.post('/import_books',importBooks);

route.post('/books', bookController.createBook);
route.get('/books', bookController.getAllBooks);
route.get('/books/:id', bookController.getBookById);
route.put('/books/:id', bookController.updateBook);
route.delete('/books/:id', bookController.deleteBook);
route.delete('/books', bookController.deleteAllBook);
route.get('/books/authors/:id',bookController.getBookByAuthor);


// Member Routes
route.post('/members', memberController.createMember);
route.get('/members', memberController.getAllMembers);
route.get('/members/:id', memberController.getMemberById);
route.put('/members/:id', memberController.updateMember);
route.delete('/members/:id', memberController.deleteMember);

// Transaction Routes
route.post('/transactions', transactionController.createTransaction);
route.get('/transactions', transactionController.getAllTransactions);
route.get('/transactions/:id', transactionController.getTransactionById);
route.put('/transactions/:id', transactionController.updateTransaction);
route.delete('/transactions/:id', transactionController.deleteTransaction);

export default route;