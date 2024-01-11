const mongoose = require('mongoose');

const connectionString = "";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão:'));
db.once('open', () => {
  console.log("Successfully connected to MongoDB!");
});
