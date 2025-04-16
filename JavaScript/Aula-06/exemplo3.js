notas = [10,7,3,6,2,7,10,2,4,6,8]
soma = 0
for (let i = 0; i < notas.length;i++) {
    soma += notas[i]
}
media = soma / notas.length
let newMedia = media.toFixed(2)
resultado = media >= 7 ? console.log(`Parabens! Voce passou de ano, com a media ${newMedia}`) : console.log(`Infelizmente, você reprovou de ano, com a média ${newMedia}`);