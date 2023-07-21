function solucao(disparos) {
    
    let cont = 0;

for (let disparo of disparos) {
    if (disparo > 70) {
        cont += 1
    }
}

if (cont < 3) {
    console.log('ELIMINADO');
} else {
    console.log(cont);
}

}