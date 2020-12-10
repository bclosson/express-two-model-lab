const express = require('express');
const { Team } = require('../models');
const router = express.Router();

// Database
const db = require('../models');

// Current Path = '/teams'

// Teams Get Index
router.get('/', (req, res) => {
    // Query DB for all Teams
    db.Team.find({}, (err, allTeams) => {
        if (err) return console.log(err);

        const context = {
            name: allTeams,
            hometown: '',
            conference: '',
            division: '',
        };

        res.render('teams/index', context);
    });
});

// Get New
router.get('/new', (req, res) => {
    res.render('teams/new');
});

// Post Create
router.post('/', (req, res) => {
    // Query DB to create new author
    db.Team.create(req.body, (err, createTeam) => {
        if (err) return console.log(err);

        res.redirect('/authors');
    });
});

module.exports = router;