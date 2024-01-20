const mongoose = require('mongoose');

jest.setTimeout(10000); // 10 seconds
describe('Database Connection', () => {
  beforeAll(async () => {
    process.env.MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/test';

    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  it('should be connected to the database', async () => {
    const isConnected = mongoose.connection.readyState;
    expect(isConnected).toBe(1);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});