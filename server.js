
// -------------------------------- REQUIREMENTS
const express = require('express');
const app = express();


// DOTENV
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// SET VIEW ENGINE
app.set('view engine', 'ejs');


// -------------------------------- MIDDLEWARE








// -------------------------------- ROUTES

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});



// --------------------------------- LISTENER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
