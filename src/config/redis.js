// config/redis.js
const { createClient } = require('redis');

const redisClient = createClient();

redisClient.on('error', (err) => console.log('Redis Client Error', err));

const connectRedis = async () => {
  await redisClient.connect();
  console.log('Connected to Redis');
};

module.exports = { redisClient, connectRedis };
