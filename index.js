const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require("helmet");
const apiRouter  = require('./routes/apiRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// defining the Express app
const app = express();
app.use(express.json());
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});