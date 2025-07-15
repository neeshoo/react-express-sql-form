const express = require('express');
const router = express.Router();
const pool = require('../db/db');

router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, phone) VALUES ($1, $2, $3)',
      [name, email, phone]
    );
    res.status(200).send('Form submitted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data');
  }
});

module.exports = router;
