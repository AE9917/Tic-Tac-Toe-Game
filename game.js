const { question: getUserInput } = require("readline-sync")

var currentPlayer = 1
var board = [[" ", " " , " " ], [" ", " ", " "], [ " ", " ", " "]]
var isGameOver = false

function convertTileToCoords(tileNumber){
 var row = Math.floor((tileNumber - 1) / 3)
 var column = (tileNumber - 1) % 3
 return [row, column]
}

function updateBoard(tile, token){
  var coords = convertTileToCoords(tile)
  var row = coords[0]
  var column = coords[1]
  board[row][column] = token
}

function showBoard(){
  console.log(" " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " ")
  console.log("-----------")
  console.log(" " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " ")
  console.log("-----------")
  console.log(" " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " ")
}

function tileCheck(tile){
  var coords = convertTileToCoords(tile)
  var row = coords[0]
  var column = coords[1]
  return board[row][column] == " "

}

showBoard()

while (!isGameOver){
  var token
  var userTile = parseInt(getUserInput("Where would Player " + currentPlayer + " like to place your token? "))

  if (tileCheck(userTile)){
    if (currentPlayer == 1){
      token = "x"
      currentPlayer = 2
    } else {
      token = "o"
      currentPlayer = 1

    }

    updateBoard(userTile, token)
    showBoard()
    if (checkWinner(token)){
      isGameOver = true
      console.log( "Player " + token + " wins!")
    }
  } else {
    console.log("Invalid Tile")
  }
}

function checkWinner(token){
  if ((board[0][0] == token && board[0][1] == token && board[0][2] == token) ||
      (board[1][0] == token && board[1][1] == token && board[1][2] == token) ||
      (board[2][0] == token && board[2][1] == token && board[2][2] == token) ||
      (board[0][0] == token && board[1][0] == token && board[2][0] == token) ||
      (board[0][1] == token && board[1][1] == token && board[2][1] == token) ||
      (board[0][2] == token && board[1][2] == token && board[2][2] == token) ||
      (board[0][0] == token && board[1][1] == token && board[2][2] == token) ||
      (board[0][2] == token && board[1][1] == token && board[2][0] == token)
  ){
    return true
  } else {
    return false
  }
}
//function gameBoard(pipes, dashes)


// var name = getUserInput("Whays your name? ")
//
// console.log("you put", name)
