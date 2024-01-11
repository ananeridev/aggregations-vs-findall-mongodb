const mongoose = require('mongoose');
const Hero = require('../hero');

async function runAggregation() {
  try {
    const aggregationResult = await Hero.aggregate([
      { $group: { _id: '$power', total: { $sum: 1 } } },
    ]);

    console.log('Result of aggregation:', aggregationResult);
  } catch (error) {
    console.error('Error on aggregation:', error);
  } finally {
    mongoose.connection.close();
  }
}

runAggregation();
