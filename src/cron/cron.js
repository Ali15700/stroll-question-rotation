const cron = require('node-cron');
const Cycle = require('./models/Cycle');
const Question = require('./models/Question');
const redisClient = require('redis').createClient();

cron.schedule('0 19 * * 1', async () => {
  console.log('Cron job running to update questions');
  const cycles = await Cycle.find({});

  for (const cycle of cycles) {
    const totalQuestions = await Question.countDocuments({ region: cycle.region });
    cycle.currentQuestionIndex = (cycle.currentQuestionIndex + 1) % totalQuestions;
    cycle.lastUpdate = new Date();
    await cycle.save();

    const question = await Question.findOne({
      region: cycle.region,
      questionId: cycle.currentQuestionIndex,
    });
    redisClient.setex(cycle.region, 3600, JSON.stringify(question));
  }

  console.log('Questions rotated successfully');
});
