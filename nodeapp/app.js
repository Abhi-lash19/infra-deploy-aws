const express = require("express");
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Server is up and running");
});

app.get("/hello", (req, res) => {
    res.send("Hello, world!");
});

app.get("/json", (req, res) => {
    res.json({ message: "This is a JSON response" });
});

// Basic error handling middleware
app.use((req, res, next) => {
    res.status(404).send("Sorry, we couldn't find that!");
});

// Server setup
app.listen(8080, () => {
    console.log("Server is up and running on port 8080");
});
