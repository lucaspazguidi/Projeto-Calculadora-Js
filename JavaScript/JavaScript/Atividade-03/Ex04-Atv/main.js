let nome = prompt("Digite a palavra desejada")
let text = "Edu eu voce tu ele nos vóis eles cabrinha magico!"
if(text.includes(nome)){
    alert(`A palavra ${nome} foi encontrada no texto.`);
}
else{
    alert(`A palavra ${nome} nao foi encontrada no texto.`);
}