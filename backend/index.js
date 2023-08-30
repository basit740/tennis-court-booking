const express = require('express');
const dotenv = require('dotenv');
const app = express();

// configure the environment variables

dotenv.config({
	path: './config/config.env',
});

const PORT = process.env.PORT;

app.listen(PORT, function () {
	console.log('backend is listening on port ' + PORT);
});

// first http request

app.get('/', function (request, response) {
	// take like 10 mins

	response.status(200).json({
		message: 'Yes, I am from backend',
	});
});

app.get('/book', function (request, response) {
	response.status(200).json({
		message: 'Tennis court is booked',
	});
});

/// 200 - 400
/// 400 - 499
/// 500 ->>
