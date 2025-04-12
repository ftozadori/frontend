const letrasPermitidas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const tabuleiro = document.getElementById("tabuleiro");
const teclado = document.getElementById("teclado");

let linhaAtual = 0;
let posicaoAtual = 0;

const linhas = [];

// Cria o tabuleiro dinamicamente
for (let i = 0; i < 6; i++) {
  const linha = document.createElement("div");
  linha.classList.add("linha");
  const letras = [];
  for (let j = 0; j < 5; j++) {
    const letra = document.createElement("div");
    letra.classList.add("letra");
    linha.appendChild(letra);
    letras.push(letra);
  }
  tabuleiro.appendChild(linha);
  linhas.push(letras);
}

// Cria o teclado virtual
function criarTecla(valor) {
  const botao = document.createElement("button");
  botao.textContent = valor;
  botao.classList.add("tecla");
  botao.onclick = () => processarTecla(valor);
  return botao;
}

letrasPermitidas.forEach(letra => teclado.appendChild(criarTecla(letra)));
teclado.appendChild(criarTecla("ENTER")).classList.add("enter");
teclado.appendChild(criarTecla("←")).classList.add("backspace");

// Lê o teclado real
document.addEventListener("keydown", (e) => {
  let tecla = e.key.toUpperCase();
  if (tecla === "BACKSPACE") tecla = "←";
  if (tecla === "ENTER" || letrasPermitidas.includes(tecla) || tecla === "←") {
    processarTecla(tecla);
  }
});

// Processa tecla pressionada
function processarTecla(tecla) {
  const linha = linhas[linhaAtual];
  if (tecla === "←") {
    if (posicaoAtual > 0) {
      posicaoAtual--;
      linha[posicaoAtual].textContent = "";
    }
  } else if (tecla === "ENTER") {
    if (posicaoAtual === 5 && linhaAtual < 5) {
      linhaAtual++;
      posicaoAtual = 0;
    }
  } else if (letrasPermitidas.includes(tecla)) {
    if (posicaoAtual < 5) {
      linha[posicaoAtual].textContent = tecla;
      posicaoAtual++;
    }
  }
}
