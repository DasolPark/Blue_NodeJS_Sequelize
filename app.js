const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));