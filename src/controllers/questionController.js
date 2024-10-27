// controllers/questionController.js
const { redisClient } = require('../config/redis');
const Cycle = require('../models/cycleSchema');
const Question = require('../models/questionSchema');

const getQuestionForRegion = async (region) => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }

  const cachedQuestion = await redisClient.get(`question:${region}`);
  if (cachedQuestion) return JSON.parse(cachedQuestion);

  const cycle = await Cycle.findOne({ region });
  if (!cycle) return null;

  const question = await Question.findOne({ region, questionId: cycle.currentQuestionIndex });
  if (question) await redisClient.setEx(`question:${region}`, 3600, JSON.stringify(question));

  return question;
};

module.exports = { getQuestionForRegion };
