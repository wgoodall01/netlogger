<h1 align="center">netlogger</h1>
<p align="center">Simple node app to log HTTP requests</p>

## Instructions
Launch like so:
 - `./app.js <port> <logtype>`
 - `./app.js <logtype>`
 - `./app.js`

The default port is 8080, and the default Morgan logtype is 8080.

## So... what does it do?

It's basically a really simple wrapper around `morgan` and `express.static`. Any requests are served out of the `static/` directory, and all requests are logged with Morgan using the specified logtype to stdout.


## Why?

I use it instead of a debugging proxy for certain tasks, and to test if network requests are going through. Simple stuff like that.
