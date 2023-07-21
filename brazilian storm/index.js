function solucao(notas) {

let menorNota = notas[0];
let maiorNota = notas[0];
let soma = 0;

for (let nota of notas) {
    if (nota < menorNota) {
        menorNota = nota;
    } else if (nota > maiorNota) {
        maiorNota = nota;
    }
}

for (let nota of notas) {
    soma += nota;
}

soma = soma - menorNota - maiorNota;
let media = soma / (notas.length - 2);

console.log(media);
}
