function coletarNumero1(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    return numero1;
}

function coletarNumero2(){
    let numero2 = parseFloat(document.getElementById('numero2').value);
    return numero2;
}

function somar(){
    let resultado = coletarNumero1() + coletarNumero2();

    document.getElementById('resultado').innerText = resultado;
}

function dividir(){

    if(numero2 === 0){
        document.getElementById('resultado');
        innerText = "Divisão por zero"
    }else {
        let resultado = coletarNumero1() / coletarNumero2();
        document.getElementById('resultado').innerText = resultado;
    }
}

function subtrair(){
    let resultado = coletarNumero1() - coletarNumero2();

    document.getElementById('resultado').innerText = resultado;
}

function multiplicar(){

    let resultado = coletarNumero1() * coletarNumero2();

    document.getElementById('resultado').innerText = resultado;
}