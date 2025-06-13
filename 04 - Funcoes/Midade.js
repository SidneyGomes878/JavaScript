function VerificarMaiorIdade(idade){
    if (idade >= 18) {
        return "Maior de idade";
    }else {
        return "Menor de idade";
    }    
}
console.log(VerificarMaiorIdade(20)); 
console.log(VerificarMaiorIdade(17)); 