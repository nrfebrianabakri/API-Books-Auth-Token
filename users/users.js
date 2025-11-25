const bcrypt = require("bcrypt");

module.exports = [
  {
    id: 1,
    username: "admin1",
    password: bcrypt.hashSync("admin123", 10), 
    role: "admin"
  },
  {
    id: 2,
    username: "budi",
    password: bcrypt.hashSync("budi123", 10), 
    role: "user"
  }
];
