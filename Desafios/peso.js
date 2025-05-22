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
