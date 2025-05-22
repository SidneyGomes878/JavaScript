/* Desafio proposto pelo curso de JavaScript da Digital Innovation One

elabore um algoritmo que calcule o que deve ser pago por um produto, considerando 
o preço normal de etiqueta, escolha da condição de pagamento e coloque desconto no pagamento. 

*/

const Produto = "Saxofone"
const Preco = 2500
const pagamento = "Cartão"

const DescontoPix10 = Preco * 0.10
const DescontoCartao5 = Preco * 0.05
const totalPix = Preco - DescontoPix10
const totalCartao = Preco - DescontoCartao5

if (pagamento === "Pix" || "pix") {
    console.log(`O preço do produto é ${Preco} e o pagamento em Pix tem 10% de desconto, totalizando R$:${totalPix}`)
}

else if (pagamento === "Cartão" || "cartão") {
    console.log (`o preço do produto é ${Preco} e o pagamento no cartão tem 5% de desconto, totalizando ${totalCartao}`)
}
else {
    console.log("Forma de pagamento inválida use Pix ou Cartão")
}