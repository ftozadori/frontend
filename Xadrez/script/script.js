const tabuleiro = document.getElementById("tabuleiro");

const pecas = {
  rei: "♔",   
  torre: "♜"  
};

let pecaSelecionada = null;
let casaSelecionada = null;

for (let linha = 0; linha < 8; linha++) {
  for (let coluna = 0; coluna < 8; coluna++) {
    const casa = document.createElement("div");
    casa.classList.add("casa");

    if ((linha + coluna) % 2 === 0) {
      casa.classList.add("branca");
    } else {
      casa.classList.add("preta");
    }

    casa.dataset.linha = linha;
    casa.dataset.coluna = coluna;

    if (linha === 0 && coluna === 4) {
      casa.textContent = pecas.torre;
      casa.classList.add("peca");
    }

    if (linha === 7 && coluna === 4) {
      casa.textContent = pecas.rei;
      casa.classList.add("peca");
    }

    casa.addEventListener("click", () => {
      if (pecaSelecionada) {
       
        if (!casa.textContent) {
          casa.textContent = pecaSelecionada.textContent;
          casa.classList.add("peca");

          pecaSelecionada.textContent = "";
          pecaSelecionada.classList.remove("peca");
        }

        pecaSelecionada = null;
        casaSelecionada = null;
      } else if (
        casa.textContent === pecas.rei ||
        casa.textContent === pecas.torre
      ) {
        
        pecaSelecionada = casa;
        casaSelecionada = casa;
      }
    });

    tabuleiro.appendChild(casa);
  }
}