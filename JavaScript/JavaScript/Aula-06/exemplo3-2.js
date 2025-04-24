let notas = [10,5,7,6]
let nota1 = notas[0]
let nota2 = notas[1]
let nota3 = notas[2]
let nota4 = notas[3]
media = (nota1+nota2+nota3+nota4) / notas.length
newMedia = media.toFixed(2)
console.log(`Sua média é ${newMedia}`);