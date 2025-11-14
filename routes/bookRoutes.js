const express = require("express");
const router = express.Router();

module.exports = (books, validateBook) => {

  // GET semua buku
  router.get("/", (req, res) => {
    res.json(books);
  });

  // GET buku by ID
  router.get("/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Buku tidak ditemukan");
    res.json(book);
  });

  // POST buku baru
  router.post("/", validateBook, (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author
    };

    books.push(newBook);
    res.status(201).json(newBook);
  });

  // PUT update buku
  router.put("/:id", validateBook, (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Buku tidak ditemukan");

    book.title = req.body.title;
    book.author = req.body.author;

    res.json(book);
  });

  // DELETE buku
  router.delete("/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Buku dihapus");
  });

  return router;
};
