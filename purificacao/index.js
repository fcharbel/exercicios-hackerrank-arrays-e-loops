function solucao(stringCorrompida) {

    
    let dadoPurificado = '';
    for (let letter of stringCorrompida) {
        if (letter === '!' || letter === '@' || letter ==='#' || letter === '$' || letter === '%' || letter ===  '&' || letter === '*' ||letter === '(' || letter ===')') {
            } else {
                dadoPurificado += letter
            }
    }
    
    console.log(dadoPurificado);
}