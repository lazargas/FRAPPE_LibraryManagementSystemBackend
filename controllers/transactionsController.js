import Transaction from '../models/Transaction.js';

const transactionController = {};

// Create a new transaction
transactionController.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).send(transaction);
    } catch (error) {
        res.status(500).send("Error creating transaction: " + error.message);
    }
};

// Retrieve all transactions
transactionController.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({}).populate('book member');
        res.send(transactions);
    } catch (error) {
        res.status(500).send("Error fetching transactions: " + error.message);
    }
};

// Retrieve a single transaction by ID
transactionController.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id).populate('book member');
        if (!transaction) {
            res.status(404).send("Transaction not found");
            return;
        }
        res.send(transaction);
    } catch (error) {
        res.status(500).send("Error fetching transaction: " + error.message);
    }
};

// Update a transaction by ID
transactionController.updateTransaction = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            res.status(404).send("Transaction not found");
            return;
        }

        updates.forEach(update => transaction[update] = req.body[update]);
        await transaction.save();

        res.send(transaction);
    } catch (error) {
        res.status(500).send("Error updating transaction: " + error.message);
    }
};

// Delete a transaction by ID
transactionController.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);

        if (!transaction) {
            res.status(404).send("Transaction not found");
            return;
        }
        res.send(transaction);
    } catch (error) {
        res.status(500).send("Error deleting transaction: " + error.message);
    }
};

export default transactionController;
