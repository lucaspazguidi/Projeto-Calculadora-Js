let numeros = [10,20,30,40,50,60,70]
const media = numeros.reduce((acc, num) => acc + num,0) / numeros.length
//acc = acumulador; num = iteração; reduce vai percorrer toda a lista.
console.log(media)