const combustivelCarro = 'Disel';
const PrecoDisel = 5.79;
const PrecoGasolina = 6.08;
const PrecoEtanol = 4.99;
const consumo = 10;
const distancia = 100;

if (combustivelCarro == 'Gasolina') {
    console.log('O combustivel do carro é Gasolina');
    let valorGasto = (distancia / consumo) * PrecoGasolina;
    console.log('Valor gasto na viagem: R$' + valorGasto.toFixed(2));

}

else if (combustivelCarro == 'Etanol') {
    console.log('O combustivel do carro é Etanol');
    let valorGastoEtanol = (distancia / consumo) * PrecoEtanol;
    console.log('Valor gasto na viagem com Etanol: R$' + valorGastoEtanol.toFixed(2));
}

else if (combustivelCarro == 'Disel') {
    console.log('O combustivel do carro é Disel');
    let valorGastoDisel = (distancia / consumo) * PrecoDisel
    console.log('Valor gadto na viagem com Disel; R$!' + valorGastoDisel.toFixed(2))
}

