var botao = document.getElementById("botao");

botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz(){

    var numInteracoes = document.getElementById("numInteracoes").value;
    var resultado = document.getElementById("resultado");
    //lert("O numero de interações é: " + numInteracoes);


    var numero = 1;
    while(numero <= numInteracoes){
        if (((numero % 3) == 0) && ((numero % 5) == 0)){
            console.log("FizzBuzz")
        }else if ((numero % 3) == 0){
            console.log("Fizz")
        }else if ((numero % 5) == 0){
            console.log("Buzz")
        }else{
            console.log(numero)
        }
        numero++;
    }
}

