let instrumentos = ["violao","piano","bateria"]
let instrumentoEscolhido = instrumentos[1]
function consultoria(instrumento){
    if(instrumentoEscolhido == instrumentos[0] || instrumentoEscolhido == instrumentos[1] || instrumentoEscolhido == instrumentos[2])
        console.log(`Voce escolheu ${instrumento}, temos aula disponiveis para voce!`);
    else{
        console.log("Instrumento digitado indisponível!");
    }
}
consultoria(instrumentoEscolhido)