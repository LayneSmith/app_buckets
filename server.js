const express = require("express");
const mongoose = require("mongoose");

// Import route code
const auth = require("./routes/api/auth");
const games = require("./routes/api/games");
const game = require("./routes/api/game");
const teams = require("./routes/api/teams");
const team = require("./routes/api/team");
const players = require("./routes/api/players");
const player = require("./routes/api/player");

const app = express();

// DB config from vars in config/keys.js file, similar in function to .env file
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/auth", auth); // Authentication route
app.use("/api/games", games); // A list of every game tracked
app.use("/api/game", game); // A list of every shot during a game
app.use("/api/teams", teams); // A list of every team
app.use("/api/team", team); // A list of players in each team
app.use("/api/players", players); // A list of all players
app.use("/api/player", player); // A list of all games for each player

// Port and listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
