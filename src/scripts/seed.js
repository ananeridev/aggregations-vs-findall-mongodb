const mongoose = require("mongoose");
const Hero = require("../hero");

const heroesData = [
  { name: "Iron Man", power: "Genius, billionaire, playboy, philanthropist" },
  { name: "Captain America", power: "Super soldier serum" },
  { name: "Thor", power: "God of Thunder" },
  { name: "Hulk", power: "Superhuman strength" },
  { name: "Black Widow", power: "Master spy and martial artist" },
  { name: "Hawkeye", power: "Master archer" },
  { name: "Black Panther", power: "Enhanced strength and agility" },
  { name: "Spider-Man", power: "Spider-like abilities" },
  { name: "Doctor Strange", power: "Mastery of the mystic arts" },
  { name: "Captain Marvel", power: "Cosmic powers" },
];

Hero.insertMany(heroesData)
  .then((result) => {
    console.log("Heroes successfuly inserted:", result);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error: ", error);
    mongoose.connection.close();
  });
