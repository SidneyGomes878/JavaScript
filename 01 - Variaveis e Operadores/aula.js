let PrecoCombustivel = 6.08;;
let consumo = 10;
let distancia = 100;

let valorGasto = (distancia / consumo) * PrecoCombustivel;
console.log("Valor gasto na viagem: R$" + valorGasto.toFixed(2));
