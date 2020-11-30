const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice')

// Index
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.render('notices', { notices: notices.map(notice => notice.toJSON()) })
  } catch (error) {
    console.log(error);
  }
});

// Add
router.get('/add', (req, res) => res.render('add'));

router.post('/add', async (req, res) => {
  // const data = {
  //   title: 'fake title',
  //   content: 'fake content',
  // }

  // const { title, content } = data;
  const { title, content } = req.body;

  try {
    await Notice.create({
      title, content
    })
    res.redirect('/notices');
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;