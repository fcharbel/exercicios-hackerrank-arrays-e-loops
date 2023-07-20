function solucao(sequencia) {

let indexOfImage = 0;

for (let item of sequencia) {
    if (item === '>') {
        if (indexOfImage === 6) {
            indexOfImage = 0;
        } else {
            indexOfImage += 1;
        }
    } else if (item === '<') {
        if (indexOfImage === 0) {
            indexOfImage = 6;
        } else {
            indexOfImage -= 1;
        }

    }
}

console.log(indexOfImage);

}