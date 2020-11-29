const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');

// Test DB
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully!'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Express
const app = express();

// View engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => res.render('index'));

app.use('/notices', require('./routes/notices'));

// Listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));