const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

module.exports = (users) => {

  router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: "User tidak ditemukan" });

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Password salah" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      "SECRET123",
      { expiresIn: "1h" }
    );

    res.json({ message: "Login berhasil", token });
  });

  return router;
};
