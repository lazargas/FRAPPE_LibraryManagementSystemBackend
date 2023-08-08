import express from 'express';
import cors from 'cors';
import Routes from './Routes/Routes.js';
import Connection from './database/db.js';

const app = express();
app.use(express.json()); 

// Connect to MongoDB
Connection();

app.use(cors());
app.use('/', Routes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
