const palavra = "SORRISO"
let letrasDescobertas = ["_","_","_","_","_","_","_"]
let erros = 0
let letrasErradas = []

const partesForca = [
` +---+
 |   |
     |
     |
     |
     |
=========`,
` +---+
 |   |
 O   |
     |
     |
     |
=========`,
` +---+
 |   |
 O   |
 |   |
     |
     |
=========`,
` +---+
 |   |
 O   |
/|   |
     |
     |
=========`,
` +---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,
` +---+
 |   |
 O   |
/|\\  |
/    |
     |
=========`,
` +---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`
]

function iniciar(){
  mostrarPalavra()
  criarTeclado()
}

function mostrarPalavra(){
  document.getElementById("palavra").innerHTML = letrasDescobertas.join(" ")
}

function mostrarLetrasErradas(){
  document.getElementById("letrasErradas").innerHTML = letrasErradas.join(" - ")
}

function criarTeclado(){
  const letrasDiv = document.getElementById("letras")

  for(let i = 65; i <= 90; i++){
    let letra = String.fromCharCode(i)

    let btn = document.createElement("button")
    btn.innerText = letra

    btn.onclick = function(){
      verificar(letra, btn)
    }

    letrasDiv.appendChild(btn)
  }
}

function verificar(letra, botao){
  botao.disabled = true

  let acertou = false

  for(let i = 0; i < palavra.length; i++){
    if(palavra[i] === letra){
      letrasDescobertas[i] = letra
      acertou = true
    }
  }

  if(!acertou){
    erros++
    letrasErradas.push(letra)
    document.getElementById("forca").innerText = partesForca[erros]
    mostrarLetrasErradas()
  }

  mostrarPalavra()
  verificarFim()
}

function verificarFim(){
  if(letrasDescobertas.join("") === palavra){
    document.getElementById("status").innerHTML =
      "Acertou miseravi.. e é o mais lindo! 😄<br><br><button onclick='continuar()'>Continuar</button>"
  }

  if(erros === 6){
    document.getElementById("status").innerHTML =
      "Não creio que não saiba o que é.. Mulher ja sorriu hoje? 😅<br><br><button onclick='location.reload()'>Vamos de novo!</button>"
  }
}

function continuar(){
  window.location.href = "pagina4.html"
}

iniciar()