const botao = document.getElementById('registrar');
const listaObj = [];

botao.addEventListener('click',
    function (){  //função para criar um objeto de login toda vez que executada
        const login = {
            login: document.getElementById('login').value, //captura de atributos do login direto do html
            senha: document.getElementById('senha').value 
        }
        console.log(login); //teste para ver o objeto sendo criado
        listaObj.push(login);
        imprimirObjeto(login);
        console.log(listaObj);
    }  
);

function imprimirObjeto(objLogin){
    const impressao = document.getElementById('impressao');

    let pUsuario = document.createElement('p');
    pUsuario.textContent = objLogin.login;
    let pSenha = document.createElement('p');
    pSenha.textContent = objLogin.senha;

    impressao.appendChild(pUsuario);
    impressao.appendChild(pSenha);
}

function converterJson(){
    const json = JSON.stringify(listaObj);
    console.log(json);
}