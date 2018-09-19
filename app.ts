const express = require("express");
const port = 8080;
const app = express();

let users = require('./users');

app.get('/users', function (req, res) {
	res.set('Content-Type','application/json');
	res.send(users);
});

app.get('/users/:id', function (req, res) {
	res.type('application/json');
  	res.send(users.filter(item => item.id == req.params.id)[0]);
});

app.post('/users/add', function (req, res) {
	res.type('application/json');
	users.push({
		id					:4,      	  	//req.params.id,
		name				:'Alex', 	  	//req.params.name,
		password			:'ewq123',	  	//req.params.password,
		date_of_birth		:'1997.12.16',	//req.params.date_of_birth,
		first_login			:'2018.09.19',	//req.params.first_login,
		next_notification	:'2018.08.17', 	//req.params.next_notification,
		information			:'Inform' 	   	//req.params.information
	});
	res.send(users[users.length - 1]);
});

app.put('/users/:id', function (req, res) {
	res.type('application/json');
	console.log(req.params.id);
	res.send(users.filter(item => item.id == req.params.id)[0].name = '18'); 
});

app.delete('/users/:id', function (req, res) {
	res.type('application/json');
	users = users.filter(item => item.id != req.params.id);
	res.send(users);
});
app.listen(port,()=>{
	console.log(`Server started on port ${port}`);
});

