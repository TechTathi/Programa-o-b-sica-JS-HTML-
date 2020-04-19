var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

var peso = prompt("Digite o peso do objeto na Terra");

var planeta = prompt("Qual o planeta que deseja saber o Peso do objeto (marte ou jupter)?")
var pesofinal;
if(planeta == "marte"){

    pesofinal = (peso / gTerra) * gMarte;

    document.write("O peso do objeto em Marte é: " + pesofinal);

}else if (planeta == "jupter"){

    pesofinal = (peso / gTerra) * gJupter;

    document.write("O peso do objeto em Jupter é: " + pesofinal);

}else{

    document.write("Não podemos calcular o peso desse planeta.");
}







