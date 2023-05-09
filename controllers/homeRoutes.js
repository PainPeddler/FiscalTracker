const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  router.get('/profile', (req, res) => {
  
    res.render('profile');
  });
  
  module.exports = router;
  

