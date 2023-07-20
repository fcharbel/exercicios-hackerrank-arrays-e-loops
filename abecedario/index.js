function solucao(letra, palavras) {
    
    let quantPerdedores = 0;
    for (let fruta of palavras) {
        let primeiraLetra = fruta[0];
        if (fruta[0] !== letra) {
            quantPerdedores += 1;
        }
    }
        
        console.log(quantPerdedores);
};