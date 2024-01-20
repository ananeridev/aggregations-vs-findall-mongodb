const mongoose = require('mongoose');
const Hero = require('../hero');

module.exports.runAggregation = async function(heroSchema) {
  try {
    const aggregationResult = await Hero.aggregate([
      { $group: { _id: '$power', total: { $sum: 1 } } },
    ]);

    console.log('Result of aggregation:', aggregationResult);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error on aggregation:', error);
  }
}