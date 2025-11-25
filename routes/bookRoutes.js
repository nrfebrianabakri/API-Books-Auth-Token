const express = require("express");
const router = express.Router();

module.exports = (books, validateBook, auth, authorizeRole) => {

  // GET semua buku
  router.get("/", auth, (req, res) => {
    res.json(books);
  });

  // GET buku by ID --> Semua user
  router.get("/:id", auth, (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Buku tidak ditemukan");
    res.json(book);
  });

  // POST buku baru --> Hanya admin 
  router.post("/", auth, authorizeRole("admin"), validateBook, (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author
    };

    books.push(newBook);
    res.status(201).json(newBook);
  });

  // PUT update buku --> Hanya admin
  router.put("/:id", auth, authorizeRole("admin"), validateBook, (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Buku tidak ditemukan");

    book.title = req.body.title;
    book.author = req.body.author;

    res.json(book);
  });

  // DELETE buku --> Hanya admin
  router.delete("/:id", auth, authorizeRole("admin"), (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Buku dihapus");
  });

  return router;
};
