const botoes = document.querySelectorAll(".tecla");
const visor = document.getElementById("visor");
const operadores = document.querySelectorAll(".operador")
const igual = document.getElementById("igual")
const limpar = document.getElementById("clean")
const apagar = document.getElementsByClassName("apagar")
const tema = document.getElementById("alterar-tema")
let expressao = ""

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        const numero = botoes[i].getAttribute("data-num")
        expressao += numero;
        visor.innerText = (expressao)
        ajustarFonte()
    });
}
for (let d = 0; d < operadores.length; d++) {
    operadores[d].addEventListener("click", function () {
        const operador = operadores[d].getAttribute("data-num")
        expressao += operador;
        visor.innerText = (expressao)
        ajustarFonte()
    });
}
igual.addEventListener("click", function(){
    try{
    const resultado = eval(expressao);
    visor.innerText = (resultado)
    ajustarFonte();
    expressao = resultado.toString();}
    catch(erro){
        visor.innerText = "Erro";
        expressao = ""
        ajustarFonte()
    }
})
limpar.addEventListener("click", function(){
    expressao = ""
    visor.innerText = ""
})
apagar[0].addEventListener("click", function(){
    expressao = expressao.slice(0,-1);
    visor.innerText = (expressao)
    ajustarFonte()
})
tema.addEventListener("click", function(){
    document.body.classList.toggle("dark")
    if(document.body.classList == "dark"){
        tema.innerText = "Tema claro"
    }
    else{
        tema.innerText = "Tema escuro"
    }
})
function ajustarFonte() {
    const texto = visor.innerText;
    const comprimento = texto.length;

    if (comprimento > 20) {
        visor.innerText = texto.slice(0, 20); 
        visor.style.fontSize = "20px";
    } else if (comprimento > 14) {
        visor.style.fontSize = "20px";
    } else if (comprimento > 10) {
        visor.style.fontSize = "28px";
    } else {
        visor.style.fontSize = "36px";
    }
}
