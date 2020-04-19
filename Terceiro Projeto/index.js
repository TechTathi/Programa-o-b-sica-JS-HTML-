
var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var fundo = {

    url: "./imgs/fundo.png"
}

var vaca = {

    url: "./imgs/vaca.png"
}

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
vaca.imagem = new Image();
vaca.imagem.src = vaca.url;

fundo.imagem.addEventListener("load", carregaFundo);
vaca.imagem.addEventListener("load", carregaVaca);

function carregaFundo() {
    papel.drawImage(fundo.imagem, 0, 0);
}

function carregaVaca() {
    var numeroVacas = numeroAleatorio(2, 10);

    console.log("Vacas: ", numeroVacas);
    

    for (var i = 0; i < numeroVacas; i++) {
        var xA = numeroAleatorio(100, 400);
        console.log("xA", xA);
        
        var yA = numeroAleatorio(100, 400);
        console.log("yA", yA);

        papel.drawImage(vaca.imagem, xA, yA);
    }
}
function numeroAleatorio(x, y) {
    return Math.floor(Math.random() * (y - x) + 1) + x;
}


