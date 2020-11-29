const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Test DB
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully!'))
  .catch(err => console.error('Unable to connect to the database:', err));

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => res.send('INDEX'));

app.use('/notices', require('./routes/notices'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));