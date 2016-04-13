# tictactoe
I wanted to expore all the possible moves of a game and store them in a graph database for move recomendations.
This module should serve as a rudimentary game environment to play against or simulate 2 computer players. It doesn't have any smart algorithms, it just uses random/brute force guesses.

## get started
```
var tic = require('tictactoe')
var toe = new tic
toe.viewBoard()
toe.playGame()
toe.viewBoard()
```

## running tests
install mocha
```
npm install mocha -g
npm install
npm test
```
