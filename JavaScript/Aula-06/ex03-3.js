let notas = [10,5,10,5]
let media = notas.reduce((acumulador, nota) => acumulador + nota,0) / notas.length
console.log(media);