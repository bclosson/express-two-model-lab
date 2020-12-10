
// -------------------------------- REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// DOTENV
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// SET VIEW ENGINE
app.set('view engine', 'ejs');

// Controllers
const ctrl = require('./controllers');



// -------------------------------- MIDDLEWARE
// Body Parser - put request data on req.body
app.use(bodyParser.urlencoded({extended: false}));







// -------------------------------- ROUTES

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Team Route
app.use('/teams', ctrl.teams);


// --------------------------------- LISTENER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
