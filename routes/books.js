const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
];

function nextId() {
  return books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
}

// List all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a single book by ID
router.get('/:id', (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

// Create a new book
router.post('/', (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || typeof year !== 'number') {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }

  const newBook = {
    id: nextId(),
    title,
    author,
    year,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Update an existing book
router.put('/:id', (req, res) => {
  const bookId = Number(req.params.id);
  const { title, author, year } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  if (!title || !author || typeof year !== 'number') {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }

  book.title = title;
  book.author = author;
  book.year = year;

  res.json(book);
});

// Delete a book
router.delete('/:id', (req, res) => {
  const bookId = Number(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const deletedBook = books.splice(index, 1)[0];
  res.json(deletedBook);
});

module.exports = router;
