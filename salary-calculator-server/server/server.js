// Require express - gives us a function
let express = require("express");

// Create an instance of express by calling the function returned above - gives us an object
let app = express();
const PORT = 5000;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// Start up our server
app.listen(PORT, function() {
  console.log("listening on port", PORT);
});

let quoteList = [
  {
    text: "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
    author: "Emma Watson",
  },
  {
    text: "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: "Scott Adams",
  },
  {
    text: "Intelligence plus character-that is the goal of true education.",
    author: "Martin Luther King, Jr.",
  },
];

// When we visit http://localhost:5000/quotes
// in our browser, express will call this function
app.get('/quotes', function(req, res) {
    console.log('Request for /quotes was made');

    // Send back the list of quotes
    // so we can see it in our browser
    res.send(quoteList);
});