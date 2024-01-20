require('dotenv').config();
const mongoose = require('mongoose');
const { runAggregation } = require('./scripts/aggregate');
const { seedHeroes } = require('./scripts/seed.js');

const connectionString = process.env.MONGO_CONNECTION_STRING;

async function connectToDatabaseAndAggregate() {
  try {
    await mongoose.connect(connectionString);

    console.log("Successfully connected to MongoDB!");

    const Hero = mongoose.model('Hero');
    await seedHeroes();
    await runAggregation(Hero);
  } catch (error) {
    console.error('Erro na conexão:', error);
  }
}

connectToDatabaseAndAggregate();