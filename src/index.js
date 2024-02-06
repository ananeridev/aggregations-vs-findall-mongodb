require('dotenv').config();

const mongoose = require('mongoose');
const { runAggregation } = require('./scripts/aggregate');
const { runFindAll } = require('./scripts/findall');
const { seedHeroes } = require('./scripts/seed.js');

const connectionString = process.env.MONGO_CONNECTION_STRING;

async function connectToDatabaseAndAggregate() {
  try {
    console.log("Successfully connected to MongoDB!");

    const Hero = mongoose.model('Hero');
    await seedHeroes();

    // Aqui se inicia o timer para a operação aggregate
    console.time('aggregate');
    await runAggregation(Hero);
    // Parar o timer para a operação aggregate
    console.timeEnd('aggregate');

    // Aqui se inicia timer para a operação find
    console.time('find');
    await runFindAll(Hero);
    // Parar o timer para a operação find
    console.timeEnd('find');
  } catch (error) {
    console.error('Erro na conexão:', error);
  } finally {
    // Fechar a conexão com o MongoDB
    await mongoose.connection.close();
  }
}

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(connectToDatabaseAndAggregate)
  .catch(error => {
    console.error('Erro na conexão:', error);
  });