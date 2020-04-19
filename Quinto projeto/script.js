
var cris = new Figura("Cris", "Brasil", "Atacante", "./imgs/cris.jpeg");
var marta = new Figura("Marta", "Brasil", "Meio Campo", "./imgs/marta.jpg");
var debinha = new Figura("Debinha", "Brasil", "Atacandte", "./imgs/debinha.jpg");

var colecaoFiguras = [];

colecaoFiguras.push(cris);
colecaoFiguras.push(marta);
colecaoFiguras.push(debinha);

for(i = 0; i < colecaoFiguras.length; i++){

    colecaoFiguras[i].exibir();

}

