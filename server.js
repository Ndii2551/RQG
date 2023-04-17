const express = require("express");
const app = express();

app.get("/quote", function (req, res) {
  // generate a random quote
  const quote = getRandomQuote();
  // send the quote as a JSON response
  res.json(quote);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

const quotes = require("./quotes.json"); // for JSON file

// for JSON file
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
