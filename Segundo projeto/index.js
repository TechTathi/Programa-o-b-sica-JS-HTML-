
var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");


var teclas = {
    Up: 38,
    Right: 39,
    Down: 40,
    Left: 37
}

var x = 50; 
var y = 50;
var movimento = 10;

//var botao = document.getElementById("botao");
document.addEventListener("keydown", verTecla);

function verTecla(event){
    switch(event.keyCode){

        case teclas.Down:
            desenha("green", x, y, x, y+movimento);
            y = y + movimento;
            break;
        case teclas.Up:
            desenha("green", x, y, x, y-movimento);
            y = y - movimento;
            break;
        case teclas.Left:
            desenha("green", x , y, x-movimento, y);
            x = x - movimento;
            break;    
        case teclas.Right:
            desenha("green", x , y, x+movimento, y);
            x = x + movimento;
            break;
    }
}   
//botao.addEventListener("click", desenhaLinhaVermelha);

//function desenhaLinhaVermelha(){
    //desenha("red", x, y, 200, 200);
//}
function desenha (cor, xInicial, yInicial, xFinal, yFinal){

    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidth = 8;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();

}