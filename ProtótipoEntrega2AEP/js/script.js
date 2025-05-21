const respostasCorretas = {
    banana: 'organico',
    pet: 'plastico',
    papelao: 'papel',
    pilha: 'perigoso'
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
    if (respostasCorretas[itemSelecionado] === categoria) {
      document.getElementById('feedback').textContent = 'Correto! Bom trabalho!';
      document.getElementById(itemSelecionado).remove();
    } else {
      document.getElementById('feedback').textContent = 'Ops! Essa não é a lixeira correta.';
    }
  }