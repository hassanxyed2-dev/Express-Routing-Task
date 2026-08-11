const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Store API');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Book Store API listening at http://localhost:${port}`);
});
