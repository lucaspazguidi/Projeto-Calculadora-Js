let nota1 = 10 
let nota2 = 2
let nota3 = 5
media = (nota1+nota2+nota3) / 3
newMedia = media.toFixed(2)
if(media >= 7){
    alert(`Parabens! Com sua média de ${newMedia}, você passou de ano.`);
}
else{
    alert(`Infelizmente, com sua nota de ${newMedia}, você nao passou de ano.`);
}