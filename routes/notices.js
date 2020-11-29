const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice')

router.get('/', async (req, res) => {
  try{
    const notices = await Notice.findAll();
    console.log(notices);
    res.redirect('/');
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;