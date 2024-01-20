async function runFindAll(Hero) {
    return Hero.find({}).exec();
  }
  
  module.exports = { runFindAll };