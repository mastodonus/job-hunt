const express = require('express')
const postgres = require('../infrastructure/postgres')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await postgres.query('SELECT * FROM job_hunt.application');
    res.json({applications: rows});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});


module.exports = router;