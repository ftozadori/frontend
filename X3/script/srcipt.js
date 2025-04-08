const botao = document.getElementById('add');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');

botao.addEventListener('click', function(){
    entrada.value = "Eu cliquei.";
});

botao.addEventListener('mouseover', function(){
    entrada.value = "Eu passei aqui.";
});