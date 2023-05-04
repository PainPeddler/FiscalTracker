const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
    // Render the login form
    res.render('login');
});

router.post('/', async (req, res) => {
    // Handles the login form submission
    const { email, password } = req.body;

    // Validate user
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        res.status(401).send('Invalid email or password');
        return;
    }

    // bcrypt.compare is taking two arguments
    // the plain-text password entered by the user and
    // the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        res.status(401).send('Invalid email or password')
        return;
    }

    // If the user is authenticated, redirect them to their profile
    res.redirect('/profile');
});

module.exports = router;