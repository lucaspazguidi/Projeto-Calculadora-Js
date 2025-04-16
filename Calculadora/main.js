const botoes = document.querySelectorAll(".tecla");
const visor = document.getElementById("visor");
const operadores = document.querySelectorAll(".operador")
const igual = document.getElementById("igual")
const limpar = document.getElementById("clean")
const apagar = document.getElementsByClassName("apagar")
let expressao = ""

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        const numero = botoes[i].getAttribute("data-num")
        expressao += numero;
        visor.innerText = expressao;
    });
}
for (let d = 0; d < operadores.length; d++) {
    operadores[d].addEventListener("click", function () {
        const operador = operadores[d].getAttribute("data-num")
        expressao += operador;
        visor.innerText = expressao;
    });
}
igual.addEventListener("click", function(){
    try{
    const resultado = eval(expressao);
    visor.innerText = resultado;
    expressao = resultado.toString();}
    catch(erro){
        visor.innerText = "Erro";
        expressao = ""
    }
})
limpar.addEventListener("click", function(){
    expressao = ""
    visor.innerText = ""
})
apagar[0].addEventListener("click", function(){
    expressao = expressao.slice(0,-1);
    visor.innerText = expressao;
})