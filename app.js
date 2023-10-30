const express = require("express");
const app = express();

const host = "localhost"; // alamat host
const port = 3000; // alamat port

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Menjalankan server HTTP
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
