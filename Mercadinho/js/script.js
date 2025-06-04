// coxexao com a api

const divCatalogo = document.getElementById('catalogo-produtos');

async function fetchProdutos(){
    try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaProdutos = await resposta.json();
        console.log(listaProdutos);
        renderizarLista(listaProdutos);
    }catch(error){
        console.log("Erro na API: ", error);
        divCatalogo.innerHTML = "<h3>Indísponivel. Tente novamente mais tarde.</h3>";
    }
}

function renderizarLista(vetor){

}

fetchProdutos();
