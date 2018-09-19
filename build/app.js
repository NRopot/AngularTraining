"use strict";
const express = require("express");
const port = 8080;
const app = express();
let users = require('./users');
app.get('/users', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send(users);
});
app.get('/users/:id', function (req, res) {
    res.type('application/json');
    res.send(users.filter(item => item.id == req.params.id));
});
app.post('/users/add', function (req, res) {
    res.type('application/json');
    res.send({
        id: 4,
        name: "newItem",
        age: 99
    });
});
app.put('/users/:id', function (req, res) {
    res.type('application/json');
    res.send(users.filter(item => item.id == req.params.id).age = '18');
});
app.delete('/users/:id', function (req, res) {
    res.type('application/json');
    res.send(users.filter(item => item.id == req.params.id));
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=app.js.map