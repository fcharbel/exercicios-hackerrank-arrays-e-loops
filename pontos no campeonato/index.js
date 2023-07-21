function solucao(resultados) {
    
    let pontuacao = 0;
    
    for (let resultadoDeUmaPartida of resultados) {
        
        if (resultadoDeUmaPartida === 'V') {
        pontuacao += 3;
        } else if (resultadoDeUmaPartida === 'E') {
        pontuacao += 1;
    }
}

console.log(pontuacao);

}