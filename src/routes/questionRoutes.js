// routes/questionRoutes.js
const express = require('express');
const { getQuestionForRegion } = require('../controllers/questionController');

const router = express.Router();

router.get('/:region', async (req, res) => {
  const { region } = req.params;
  try {
    const question = await getQuestionForRegion(region);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: 'No question found for this region' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving question', error: error.message });
  }
});

module.exports = router;
