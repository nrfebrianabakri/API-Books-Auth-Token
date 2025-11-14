const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("images"));

let books = [
  { id: 1, title: "5 cm", author: "Donny Dhirgantoro" },
  { id: 2, title: "Hujan", author: "Tere Liye" },
  { id: 3, title: "Perahu Kertas", author: "Dee Lestari" }
];

const logger = require("./middlewares/logger");
const validateBook = require("./middlewares/validateBook");

const bookRoutes = require("./routes/bookRoutes")(books, validateBook);

// Middleware logging (global)
app.use(logger);

// Router
app.use("/books", bookRoutes);

// Error Handler (harus paling bawah)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
    error: err.message
  });
});

app.listen(port, () =>
  console.log(`API berjalan di http://localhost:${port}`)
);
