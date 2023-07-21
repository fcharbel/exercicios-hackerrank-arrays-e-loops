function solucao(primeiraLetra, segundaLetra, palavras) {
    
let check = false;
for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        check = true;
        console.log(palavra);
    }
}

if (!check) {
    console.log('NENHUMA');
}
}