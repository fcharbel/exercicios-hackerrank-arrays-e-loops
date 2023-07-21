function solucao(palpite, palavra) {
    
    let acertos = 0;

for (letra of palavra) {
    if (letra === palpite) {
        acertos += 1
    }

}

console.log(acertos)
}