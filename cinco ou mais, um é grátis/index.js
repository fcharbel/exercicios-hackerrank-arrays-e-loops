function solucao(precos) {
    
    let somaTotal = 0;
    let menorPreco = precos[0];
    if (precos.length >= 5) {
        for (let produto of precos) {
            if (produto < menorPreco) {
                menorPreco = produto;
        }
            somaTotal = somaTotal + produto;
    }
        somaTotal = somaTotal - menorPreco;
    
    } else {
        for (let produto of precos) {
            somaTotal = somaTotal + produto;
        }
    }
    console.log(somaTotal);
}