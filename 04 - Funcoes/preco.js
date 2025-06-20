const etiquete = 100
const formaDePagamento= 4

function precoDesconto(preco){
    if (formaDePagamento === 1) {
        return preco * 0.9; // 10% de desconto
    }else if (formaDePagamento === 2){
        return preco * 0.95; // 5% de desconto
    }else if (formaDePagamento === 3){
        return preco; // Sem desconto
    } else if (formaDePagamento === 4){
    return preco * 1.1; // 10% de acréscimo
    }
}
console.log(`O preço do produto é R$ ${etiquete}, e o valor final com desconto é R$ ${precoDesconto(etiquete).toFixed(2)}`); // Formata o valor para duas casas decimais



