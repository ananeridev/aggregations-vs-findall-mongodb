const mongoose = require('mongoose');

jest.setTimeout(30000);

describe('Database Connection', () => {
  beforeAll(async () => {
    process.env.MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/test';

    try {
      await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
      });
    } catch (error) {
      console.error(`Error connecting to the database: ${error}`);
    }
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it('should be connected to the database', async () => {
    const isConnected = mongoose.connection.readyState;
    expect(isConnected).toBe(1);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
