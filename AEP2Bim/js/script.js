const respostasCorretas = {
  banana: 'organico',
  pet: 'plastico',
  papelao: 'papel',
  papel: 'papel',
  vidro: 'vidro',
  restoComida: 'organico',
  lata: 'metal',
  frascoVidro: 'vidro',
  jornais: 'papel',
  revista: 'papel',
  sacola: 'plastico',
  lataAco: 'metal',
  cartao: 'plastico'
};

let itemSelecionado = null;

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', (event) => {
    itemSelecionado = event.target.id;
  });
});

function allowDrop(event) {
  event.preventDefault();
}

function drop(event, categoria) {
  event.preventDefault();
  const feedback = document.getElementById('feedback');

  if (respostasCorretas[itemSelecionado] === categoria) {
    document.getElementById(itemSelecionado).remove();
    feedback.textContent = '✅ Correto! Bom trabalho!';
    feedback.style.color = '#2e8b57';

    if (document.querySelectorAll('.item').length === 0) {
      feedback.textContent = '🎉 Parabéns! Você separou todos os resíduos corretamente!';
      feedback.classList.add('success');
    }

  } else {
    feedback.textContent = '❌ Ops! Essa não é a lixeira correta.';
    feedback.style.color = '#d62828';
  }
}
