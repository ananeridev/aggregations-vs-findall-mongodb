const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: String,
  power: String,
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
