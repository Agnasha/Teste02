let board = ["","","","","","","","",""]
let gameOver = false

function play(cell,index){

if(board[index] !== "" || gameOver) return

board[index] = "X"
cell.innerHTML = "X"

if(checkWin("X")){
document.getElementById("status").innerHTML="Eita como é boaaaaa 😄 Um Orgulho essa menina 🎉"
gameOver = true

let btn = document.createElement("button")
btn.innerText = "Vamos continuar que tem mais coisa para responder!! Clica ai!"
btn.onclick = function(){
window.location.href="pagina3.html"
}

document.getElementById("status").appendChild(document.createElement("br"))
document.getElementById("status").appendChild(btn)

return
}


if(boardFull()){
draw()

return
}

machine()

}

function machine(){

let empty = []

for(let i=0;i<board.length;i++){
if(board[i] === ""){
empty.push(i)
}
}

let move = empty[Math.floor(Math.random()*empty.length)]

board[move] = "O"

let cells = document.getElementsByClassName("cell")
cells[move].innerHTML = "O"

if(checkWin("O")){
document.getElementById("status").innerHTML="Tu perdeu MAdame?? nossa sinhora 😅"
gameOver = true
showRestart()
return
}

if(boardFull()){
draw()
}

}

function checkWin(p){

let wins = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

for(let w of wins){
if(board[w[0]] === p && board[w[1]] === p && board[w[2]] === p){
return true
}
}

return false
}

function boardFull(){

for(let i=0;i<board.length;i++){
if(board[i] === "") return false
}

return true
}

function draw(){

document.getElementById("status").innerHTML="Não creio que empatou!! 😅"
gameOver = true
showRestart()

}

function showRestart(){

let btn = document.createElement("button")
btn.innerText = "Tenta de novo piranha!"
btn.onclick = restartGame

document.getElementById("status").appendChild(document.createElement("br"))
document.getElementById("status").appendChild(btn)

}

function restartGame(){

board = ["","","","","","","","",""]
gameOver = false

let cells = document.getElementsByClassName("cell")

for(let i=0;i<cells.length;i++){
cells[i].innerHTML=""
}

document.getElementById("status").innerHTML=""

}