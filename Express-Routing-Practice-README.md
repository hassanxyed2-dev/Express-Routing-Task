# Express Routing Practice

A beginner-friendly Express.js practice project focused on understanding
**Express setup, static files, routes, route parameters, JSON responses,
and running a local server**.

## What I Practiced

### 1. Express Setup

The project imports Express and creates an Express application:

``` js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
```

This creates the Express server and sets the application port to `3000`.

### 2. Static Files

The project serves files from the `public` folder:

``` js
app.use(express.static(path.join(__dirname, 'public')));
```

This allows static files such as HTML, CSS, JavaScript, and images to be
served by Express.

### 3. Route Parameters

I practiced dynamic routing with:

``` js
app.get('/hello/:name', (req, res) => {
    res.send('Hello World!' + req.params.name);
});
```

Here, `:name` is a route parameter and its value can be accessed using:

``` js
req.params.name
```

For example:

``` text
http://localhost:3000/hello/Hassan
```

### 4. About Route

I created an `/about` route:

``` js
app.get('/about', (req, res) => {
    res.json({ "Gillani": 91 });
});
```

The browser displays the JSON response:

``` json
{
  "Gillani": 91
}
```

This helped me practice sending JSON data from an Express API.

### 5. Sending Responses

I also practiced different response methods by keeping examples in
comments:

-   `res.send()` --- send text
-   `res.sendFile()` --- send an HTML/file
-   `res.status()` --- set an HTTP status code
-   `res.json()` --- send JSON data

### 6. HTML / Bootstrap Practice

The HTML file contains a Bootstrap-style navigation bar with:

-   Navbar
-   Home link
-   Link
-   Dropdown menu
-   Disabled link
-   Search form
-   Search button

The HTML structure uses Bootstrap navbar classes such as `navbar`,
`navbar-expand-lg`, `nav-item`, `nav-link`, and `dropdown-menu`.

## Project Flow

``` text
Browser
   ↓
Express Server
   ↓
Route Matching
   ↓
Response
```

Examples:

``` text
GET /about
       ↓
JSON Response
       ↓
{ "Gillani": 91 }
```

``` text
GET /hello/Hassan
       ↓
req.params.name
       ↓
Hello World!Hassan
```

## How to Run

### 1. Install dependencies

``` bash
npm install express
```

### 2. Start the server

``` bash
node index.js
```

### 3. Open in browser

``` text
http://localhost:3000
```

For the About API:

``` text
http://localhost:3000/about
```

For the dynamic route:

``` text
http://localhost:3000/hello/Hassan
```

## Technologies Used

-   Node.js
-   Express.js
-   JavaScript
-   HTML
-   Bootstrap classes

## Learning Outcome

Through this practice, I learned the basic Express.js workflow:

1.  Create an Express application.
2.  Set a server port.
3.  Serve static files.
4.  Create GET routes.
5.  Use dynamic route parameters.
6.  Access parameters with `req.params`.
7.  Send text responses with `res.send()`.
8.  Send JSON responses with `res.json()`.
9.  Understand basic middleware usage.
10. Run and test routes using a browser.

## Author

**Hassan Gillani**
