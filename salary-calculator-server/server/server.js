let quoteList = require('./public/scripts/quoteList');

// Require express - gives us a function
let express = require("express");

// Create an instance of express by calling the function returned above - gives us an object
let app = express();
const PORT = 5000;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// Start up our server
app.listen(PORT, function () {
  console.log("listening on port", PORT);
});


// Set up 'get' request example -------------------------------------------------------------------------
// When we visit http://localhost:5000/quotes
// in our browser, express will call this function
app.get("/quotes", function (req, res) {
  console.log("Request for /quotes was made");

  // Send back the list of quotes
  // so we can see it in our browser
  res.send(quoteList);
});

// Set up 'post' request example -----------------------------------------------------------------------------
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`Get a POST request!`, req.body);

    // Grab the new quote from the request body
    let quote = req.body.quoteToAdd;

    // Push the quote into our array
    console.log(`Adding new quote: `, quote)
    quoteList.push(quote);

    // Send back a status code of 201
    res.sendStatus(201);
});