var nome = prompt("Insira seu nome: ")
var massa = Number(prompt("Insira seu peso em KG: "));
var altura = Number(prompt("Insira sua altura em Metros: "))
var IMC = massa / (altura*altura);

alert("Seu IMC é: "+ IMC.toFixed(1));

if(IMC < 18.5){
    alert("Abaixo do peso (Subpeso).");
    var status = ("Abaixo do peso (Subpeso).");
}
else if (IMC < 25){
    alert("Peso adequado (Normal).");
    var status = ("Peso adequado (Normal).");
}
else if (IMC < 35){
    alert("Sobrepeso (Obesidade).");
    var status = ("Sobrepeso (Obesidade).");
}
else{
    alert("Sobrepeso (Obesidade II).");
    var status = ("Sobrepeso (Obesidade II)");
}

