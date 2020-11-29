const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice')

router.get('/', async (req, res) => {
  try{
    const notices = await Notice.findAll();
    res.render('notices', { notices: notices.map(notice => notice.toJSON()) })
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;