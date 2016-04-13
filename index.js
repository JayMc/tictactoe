module.exports = function() {

	function resetGame() {
		gameOver = false
		board = Array(['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'])
		players = Array()
		players.push('O')
		players.push('X')
		
	}

	function checkWin() {
		// check horizontal 3 match
		for (var i = 0; i < 3; i++) {
			if (board[i][0] != '-' && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
				gameOver = true
				return board[i][0]
			} 
		};

		// check if vertical win
		for (var i = 0; i < 3; i++) {
			if (board[0][i] != '-' && board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
				gameOver = true
				return board[0][i]
			} 
		};
		
		// check if diagonal win
		if (board[0][0] != '-' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
				gameOver = true
				return board[0][0]
			} 
		if (board[0][2] != '-' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
				gameOver = true
				return board[0][2]
			} 

		return false
	}

	// check no more empty space and nobody won
	function checkDraw() {
		if (!checkWin()) {
			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					if (board[i][j] == '-') {
						return false
					}
				}
			}
			return true;
		}
	}

	function checkAllowedMove(posRow, posCol) {
		if (board[posRow][posCol] == '-') return true
		else return false
	}

	function turn(player, posObj) {
		// console.log(gameOver)
		if (gameOver) return false

		if (!checkAllowedMove(posObj.posRow, posObj.posCol)) return false

		board[posObj.posRow][posObj.posCol] = player
		viewBoard()

		if (checkWin() == 'X') console.log('X wins')
		if (checkWin() == 'O') console.log('O wins')
		if (checkDraw()) console.log('draw')
		return true
	}

	function viewBoard() {
		console.log(board[0])
		console.log(board[1])
		console.log(board[2])
		console.log('-----------------')
	}

	function chooseRandomSpace() {
		return {
			posRow: getRandomInt(0, 2),
			posCol: getRandomInt(0, 2)
		}
	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// play game
	function playGame() {
		resetGame()
		for (var i = 0; i <= 1000; i++) {	
			// 10 tries per turn - a turn will return false if the random space was already taken.
			for (var j = 0; j <= 10; j++) {
				if (turn(players[i%2], chooseRandomSpace())) break;
			};

			if (gameOver) break;
		};
	}

	for (var i = 0; i < 5; i++) {
		playGame()
	};

}