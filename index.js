//import express
const express = require('express');

//create express appinstance
const app = express();

//define port
const port = 3075;
//define index route



app.get('/', (req, res) => {
    // send index.html
    res.sendFile(__dirname + '/index.html');
})

// define about route
app.get('/about', (req, res) => {
    // send about.html
    res.sendFile(__dirname + '/about.html');
})
// define contact route
app.get('/contact', (req, res) => {
    // send contact.html
    res.sendFile(__dirname + '/contact.html');
})


app.get('/', (req, res) => {
    // business logic for root route
    res.send('Hello World!');
})

app.get('/Api/about', (req, res) => {
    // business logic for root route
    res.send('adaeze ofuani');
})





//listen port 3070
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
