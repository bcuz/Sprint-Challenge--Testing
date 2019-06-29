const express = require('express');

const Game = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/games', (req, res) => {
  Game.getAll()
    .then(games => {
      res.status(200).json(games);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/games', async (req, res) => {
  let game = req.body;

  if (!game.title || !game.genre) {
    return res.status(422).json({ message: 'Need title and genre' });
  }

  try {
    const game = await Game.insert(req.body);
    res.status(201).json(game);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error adding the game',
    });
  }
})

server.get('/games/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);    

    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ message: 'game not found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the game',
    });
  }
});
module.exports = server;
