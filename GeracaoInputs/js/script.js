const lista = document.getElementById('saida'); //salvando dados do html
const entrada = document.getElementById('entrada');
const botao = document.getElementById('add');
const itens = []; //vetor

botao.addEventListener('click', function(){
    let valorEntrada = entrada.value;
    itens.push(valorEntrada);
    entrada.value = "";
    console.log(itens);
    saida();
});

function saida(){
    lista.innerHTML = ""; //limpa a UL

    for(let i = 0;i < itens.length;i++){
        let li = document.createElement("li"); // criando tag que quero criar no input
        li.textContent = itens[i];
        lista.appendChild(li); //passando a tag li para dentro da lista criada no html
    }
}
