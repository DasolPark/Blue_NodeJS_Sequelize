const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// Index
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.render('notices', { notices: notices.map(notice => notice.toJSON()) });
  } catch (error) {
    console.log(error);
  }
});

// Add
router.get('/add', (req, res) => res.render('add'));

router.post('/add', async (req, res) => {
  let { title, content } = req.body;
  const errors = [];

  // Validate Fields
  if (!title) {
    errors.push({ text: 'Please add a title' });
  }
  if (!content) {
    errors.push({ text: 'please add a content' });
  }

  if (errors.length > 0) {
    res.render('add', {
      errors,
      title,
      content
    })
  } else {
    title = title.toUpperCase().trim();

    try {
      await Notice.create({
        title, content
      })
      res.redirect('/notices');
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;