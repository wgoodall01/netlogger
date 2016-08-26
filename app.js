var express = require("express");
var morgan = require("morgan");


// Get stuff from argv
var PORT = 8080;
var LOGTYPE = "common";

if(process.argv[2] && process.argv[3]){
    PORT = process.argv[2];
    LOGTYPE = process.argv[3];
} else if(process.argv[2]){
    LOGTYPE = process.argv[2];
}


var app = express();

// Log all requests
app.use(morgan(LOGTYPE));

// Serve static files from directory
app.use(express.static(__dirname + "/static"));

// Start server
app.listen(PORT);
console.log(" >> Listening on http://localhost:" + PORT + " <<");