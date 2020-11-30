const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(cors());

//create connection to database
const db = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "ravenbooks",
});

app.get("/reviews", (req, res) => {
  db.query("SELECT * FROM book_reviews", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/reviews", (req, res) => {
  const insertQuery = "INSERT INTO book_reviews SET ?";

  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Review Added to Database");
    }
  });
});

app.put("/reviews", (req, res) => {
  const updateQuery =
    "UPDATE book_reviews SET book_review = ?, book_rating = ? WHERE id = ?";
  db.query(
    updateQuery,
    [req.body.book_review, req.body.book_rating, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/reviews/:id", (req, res) => {
  db.query(
    "DELETE FROM book_reviews WHERE id = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});
