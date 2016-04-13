'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tictactoe = (function () {
	function Tictactoe() {
		_classCallCheck(this, Tictactoe);

		this.board = Array(['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']);
		this.gameOver = false;
		this.players = Array();
		this.players.push('O');
		this.players.push('X');
	}

	_createClass(Tictactoe, [{
		key: 'resetGame',
		value: function resetGame() {
			this.board = Array(['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']);
			this.gameOver = false;
		}
	}, {
		key: 'checkWin',
		value: function checkWin() {
			// check horizontal win
			for (var i = 0; i < 3; i++) {
				if (this.board[i][0] != '-' && this.board[i][0] == this.board[i][1] && this.board[i][1] == this.board[i][2]) {
					this.gameOver = true;
					return this.board[i][0];
				}
			};

			// check if vertical win
			for (var i = 0; i < 3; i++) {
				if (this.board[0][i] != '-' && this.board[0][i] == this.board[1][i] && this.board[1][i] == this.board[2][i]) {
					this.gameOver = true;
					return this.board[0][i];
				}
			};

			// check if diagonal win
			if (this.board[0][0] != '-' && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) {
				this.gameOver = true;
				return this.board[0][0];
			}
			if (this.board[0][2] != '-' && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]) {
				this.gameOver = true;
				return this.board[0][2];
			}

			return false;
		}

		// check no more empty space and nobody won
	}, {
		key: 'checkDraw',
		value: function checkDraw() {
			if (!this.checkWin()) {
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						if (this.board[i][j] == '-') {
							return false;
						}
					}
				}
				return true;
			}
		}
	}, {
		key: 'turn',
		value: function turn(player, posObj) {

			if (this.gameOver) return false;
			if (!this.checkAllowedMove(posObj.posRow, posObj.posCol)) return false;
			this.board[posObj.posRow][posObj.posCol] = player;

			return true;
		}
	}, {
		key: 'playGame',
		value: function playGame() {
			this.resetGame();
			for (var i = 0; i <= 1000; i++) {
				// 10 tries per turn - a turn will return false if the random space was already taken.
				for (var j = 0; j <= 10; j++) {
					if (this.turn(this.players[i % 2], this.chooseRandomSpace())) break;
				};

				this.checkWin();
				this.checkDraw();
				if (this.gameOver) break;
			};
		}
	}, {
		key: 'checkAllowedMove',
		value: function checkAllowedMove(posRow, posCol) {
			if (this.board[posRow][posCol] == '-') return true;else return false;
		}
	}, {
		key: 'chooseRandomSpace',
		value: function chooseRandomSpace() {
			return {
				posRow: this.getRandomInt(0, 2),
				posCol: this.getRandomInt(0, 2)
			};
		}
	}, {
		key: 'getRandomInt',
		value: function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}, {
		key: 'viewBoard',
		value: function viewBoard() {
			console.log(this.board[0]);
			console.log(this.board[1]);
			console.log(this.board[2]);
			console.log('-----------------');
		}
	}]);

	return Tictactoe;
})();

exports['default'] = Tictactoe;
module.exports = exports['default'];