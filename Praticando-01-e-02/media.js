/* Desafio proposto pelo curso de JavaScript da Digital Innovation One

algorítimo dado as 3 notas tiradas por um aluno em um semestre da faculdade 
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
*/

const aluno = 'Sidney';
const nota1unidade = 3
const nota2unidade = 3
const nota3unidade = 5
const media = 6

let mediaFinal = (nota1unidade + nota2unidade + nota3unidade) / 2;
console.log('A media final do aluno ' + aluno + ' é: ' + mediaFinal);

if (mediaFinal >= 6) {
    console.log('Aprovado');
}
else if (mediaFinal >= 4 && mediaFinal < 6) {
    console.log('recuperaçao');
}
else { (mediaFinal < 4)
    console.log('reprovado');
}
