// coxexao com a api

const divCatalogo = document.getElementById('catalogo-produtos');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function login() {
      const usuario = document.getElementById('usuario').value;
      const senha = document.getElementById('senha').value;
      if(usuario && senha) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        fetchProdutos();
        renderizarCarrinho();
      } else {
        alert('Por favor, preencha usuário e senha.');
      }
    }

    async function fetchProdutos() {
      try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaProdutos = await resposta.json();
        renderizarLista(listaProdutos);
      } catch (error) {
        divCatalogo.innerHTML = "<h3>Indisponível. Tente novamente mais tarde.</h3>";
      }
    }

    function renderizarLista(produtos) {
      divCatalogo.innerHTML = '';
      produtos.forEach((prod, index) => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
          <img src="${prod.image}" alt="${prod.title}"/>
          <h3>${prod.title}</h3>
          <p>${prod.description.substring(0, 100)}...</p>
          <p><strong>R$ ${prod.price.toFixed(2)}</strong></p>
          <button onclick='adicionarAoCarrinho(${index})'>Adicionar ao Carrinho</button>
        `;
        divCatalogo.appendChild(div);
      });
      // Armazena produtos globalmente para referência ao adicionar ao carrinho
      window.listaProdutos = produtos;
    }

    function adicionarAoCarrinho(index) {
      const produto = window.listaProdutos[index];
      carrinho.push(produto);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      renderizarCarrinho();
    }

    function removerDoCarrinho(index) {
      carrinho.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      renderizarCarrinho();
    }

    function renderizarCarrinho() {
      const divCarrinho = document.getElementById('carrinho');
      divCarrinho.innerHTML = '';
      let total = 0;
      carrinho.forEach((item, i) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'item-carrinho';
        div.innerHTML = `${item.title} - R$ ${item.price.toFixed(2)} <button onclick="removerDoCarrinho(${i})">Remover</button>`;
        divCarrinho.appendChild(div);
      });
      document.getElementById('total').innerText = total.toFixed(2);
    }

    function finalizarCompra() {
      if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
      }
      alert("Compra finalizada com sucesso!");
      localStorage.removeItem('carrinho');
      window.location.reload();
    }