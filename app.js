const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Database
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("INDEX");
});

// Gig routes
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
