/* Desafio proposto pelo curso de JavaScript da Digital Innovation One

O IMC – Indice de Massa Corporal é um critério da Organização Mundial de 
Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC: IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição 
.*/ 

const nome = "Jonh";
const peso = 60;
const altura = 1.90;

const imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(nome + ' está abaixo do peso');
}
else if (imc >= 18.5 && imc < 24.9){
  console.log(nome + ' está com o peso normal');
}
 else if (imc >= 25 && imc < 29.9){
  console.log(nome + ' está com sobrepeso'); 
}
