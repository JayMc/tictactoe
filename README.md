<p align="center">
	<img height="200" width="200" src="https://cloud.githubusercontent.com/assets/1852458/14522299/3a833da4-0271-11e6-92e4-862d8fec539d.png">
</p>

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

## build from source
Source is written in ES6/ES2015. If you make any changes run ```npm run compile``` before running tests.
You'll also need [Babel](https://babeljs.io/)

## Attribution
Logo by [Adam Mullin](https://thenounproject.com/search/?q=tictactoe&i=3983)