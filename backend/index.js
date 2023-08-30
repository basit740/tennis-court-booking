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
		success: true,
		message: 'Yes, I am from backend',
	});
});
