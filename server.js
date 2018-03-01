const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');

var array = [{name: 'Test 1'},{name: 'Test 2'},{name: 'Test 3'},{name: 'Test 4'}];

app.get('/', (req, res) => {
	res.render('manage.hbs', {
		pageTitle: 'HBS Example',
		array: array
	});
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});