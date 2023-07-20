function solucao(precos) {
      
  let menorValor = Number.MAX_VALUE;
  
  for (let x = 0; x < precos.length; x++) {
      for (let y = 0 + x; y < precos.length; y++) {
          if (precos[x] - precos[y] > 0 && precos[x] - precos[y] < menorValor) {
              menorValor = precos[x] - precos[y];
          }
      }
  
  }
  
  console.log(menorValor);
  }