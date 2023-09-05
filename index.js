const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
// defining the Express app
const app = express();


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());


// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});