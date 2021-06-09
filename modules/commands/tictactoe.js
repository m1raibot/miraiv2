module.exports.config = {
	name: "ttt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Play tictactoe with AI",
	commandCategory: "game-sp",
	cooldowns: 5,
	usages: "[random/x/o]"
};

var AIMove;

function startBoard({isX, data}) {
	data.board = new Array(3);
	data.isX = isX;
	data.gameOn = true;
	data.gameOver = false;
	data.available = [];
	for(var i = 0; i < 3; i++) data.board[i] = new Array(3).fill(0);
	return data;
}

function displayBoard(data) {
	let msg = "\n";
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var temp = data.board[i][j].toString();
			if (temp == "0") msg += "[  ]  "
			else if (temp == "1") {
				(data.isX) ? msg += "[O]  " : msg += "[X]  ";
			}   
			else {
				(data.isX) ? msg += "[X]  " : msg += "[O]  ";
			}
		}
		msg += "\n";
	}
	return msg;
}

function checkAIWon(data) {
	if(data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 1) return true;
	if(data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 1) return true;   
	for(var i = 0; i < 3; ++i) {
		if(data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 1) return true;
		if(data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 1) return true;
	}
	return false;
}

function checkPlayerWon(data) {
	if(data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 2) return true;
	if(data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 2) return true;   
	for(var i = 0; i < 3; ++i) {
		if(data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 2) return true;
		if(data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 2) return true;
	}
	return false;
}

function solveAIMove({depth, turn, data}) {
	if (checkAIWon(data)) return +1;
	if (checkPlayerWon(data)) return -1;
	let availablePoint = getAvailable(data);
	if (availablePoint.length == 0) return 0;

	var min = Number.MAX_SAFE_INTEGER;
	var max = Number.MIN_SAFE_INTEGER;

	for (var i = 0, length = availablePoint.length; i < length; i++) {
		var point = availablePoint[i];
		if (turn == 1) {
			placeMove({point, player: 1, data});
			var currentScore = solveAIMove({depth: depth + 1, turn: 2, data});
			max = Math.max(currentScore, max);
			if (currentScore >= 0) {
				if (depth == 0) AIMove = point;
			}
			if (currentScore == 1) {
				data.board[point[0]][point[1]] = 0;
				break;
			}
			 if(i == availablePoint.length - 1 && max < 0) {
				if(depth == 0) AIMove = point;
			}
		}
		else if (turn == 2) {
			placeMove({point, player: 2, data});
			var currentScore = solveAIMove({depth: depth + 1, turn: 1, data});
			min = Math.min(currentScore, min);
			if (min == -1) {
				data.board[point[0]][point[1]] = 0;
				break;
			}
		}
		data.board[point[0]][point[1]] = 0;
	}
	return turn == 1 ? max : min;
}

function placeMove({point, player, data}) {
	return data.board[point[0]][point[1]] = player;
}

function getAvailable(data) {
	let availableMove = []
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (data.board[i][j] == 0) availableMove.push([i, j]);
		}
	}
	return availableMove;
}

function checkAvailableSpot(point, pointArray) {
	if (pointArray.find(element => element.toString() == point.toString())) return true;//pointArray[i].toString() == point.toString()) return true;
	else return false;

}

function move(x, y, data) {
	if (checkGameOver(data)) return "game over";
	var availablePoint = getAvailable(data);
	var playerMove = [x, y];
	if (checkAvailableSpot(playerMove, availablePoint)) {
		placeMove({point: playerMove, player: 2, data});
	} else return "spot not available";
	if (checkGameOver(data)) return "game over!";
	solveAIMove({depth: 0, turn: 1, data});
	placeMove({point: AIMove, player: 1, data});
}

function checkGameOver(data) {
	if (getAvailable(data).length == 0 || checkAIWon(data) || checkPlayerWon(data)) return true;
	return false;
}

function AIStart(data) {
	var point = [Math.round(Math.random()) * 2, Math.round(Math.random()) * 2];
	placeMove({point, player: 1, data});
}


module.exports.handleEvent = ({ event, api }) => {
	let {body, threadID, messageID,senderID} = event;
	if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
	let data = global.moduleData.tictactoe.get(threadID);
	if (!data || data.gameOn == false) return;
	if (body == "show") return api.sendMessage(`${displayBoard(data)}`, threadID, messageID);
	if (!data.player == senderID) return;
	if(body && /^[0-9]*$/.test(body)) {
		var row = parseInt(body.substring(0, 1));
		var col = parseInt(body.substring(1));
		if(row >= 0 && row <= 2 && col >= 0 && col <= 2) {
			var temp = move(row, col, data);
			if(temp == undefined) {
				api.sendMessage(`${displayBoard(data)}`, threadID, messageID);
			}
			else {
				api.sendMessage(temp, threadID);
				api.sendMessage(`${displayBoard(data)}`, threadID);
			}
			if(checkGameOver(data)) {
				if(checkAIWon(data)) api.sendMessage("AI has won!", threadID, messageID);
				else if(checkPlayerWon(data)) api.sendMessage("Player has won!", threadID, messageID);
				else api.sendMessage("It's a draw!", threadID, messageID);
				global.moduleData.tictactoe.delete(threadID);
			}
		}
	}
}

module.exports.run = ({ event, api, args }) => {
	if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
	let {threadID, messageID, senderID} = event;
	let data = global.moduleData.tictactoe.get(threadID) || { "gameOn": false, "player": "" };
	let newData;
	if (!data.gameOn) {
	   switch (args[0]) {
		   case "random": 
				if(Math.random() > 0.5) {
				  newData = startBoard({isX: true, data, threadID});
				  api.sendMessage("you go first, X", threadID, messageID);
				  api.sendMessage(`${displayBoard(newData)}`, threadID, messageID);
				}
				else {
					newData = startBoard({isX: false, data, threadID});
					AIStart(newData);
					api.sendMessage("AI go first, O", threadID, messageID);
				}
			break;
			case "x":
				newData = startBoard({isX: true, data, threadID});
				api.sendMessage("you go first, X", threadID, messageID);
				api.sendMessage(`${displayBoard(newData)}`, threadID, messageID);
			break;
			case "o":
				newData = startBoard({isX: false, data, threadID});
				AIStart(newData);
				api.sendMessage("AI go first, O", threadID, messageID);
			break;
			default:
				if(Math.random() > 0.5) {
					newData = startBoard({isX: true, data, threadID});
					api.sendMessage("you go first, X", threadID, messageID);
					api.sendMessage(`${displayBoard(newData)}`, threadID, messageID);
				  }
				  else {
					  newData = startBoard({isX: false, data, threadID});
					  AIStart(newData);
					  api.sendMessage("AI go first, O", threadID, messageID);
				  }
			  break;
	   }
	   newData.player = senderID;
	   global.moduleData.tictactoe.set(threadID, newData);
	}
}