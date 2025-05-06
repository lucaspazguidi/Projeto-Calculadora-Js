const perguntas = [
    {
        pergunta:"Qual a capital do Brasil?",
        opcoes:["Sao paulo", "Brasilia", "Salvador","Rio de Janeiro"],
        correta: "Brasilia"
    },
    {
        pergunta:"Qual o maior time do Brasil?",
        opcoes:["Sao paulo", "Corinthians", "Flamengo","Palmeiras"],
        correta: "Corinthians"
    },
    {
        pergunta:"Como nao ser corno?",
        opcoes:["Trair", "Nao ser trouxa", "Trair, importante", "Pegar a mae"],
        correta:"Pegar a mae"
    }
]

let question = document.getElementById("question")
let respostas = document.getElementById("answers")
let botaoNext = document.getElementById("next")
let indexAtual = 0
let pontos = 0
function mostrarPergunta(){
    if(indexAtual >= perguntas.length){
        question.innerHTML = `Fim do quiz! Sua pontuação é ${pontos} de ${perguntas.length}.`;
        respostas.innerHTML = ''; 
        botaoNext.style.display = 'none'; 
    }else{
        question.innerHTML = `Fim do quiz! Sua pontuação é ${pontos} de ${perguntas.length}.`;
        respostas.innerHTML = ''; // Limpa as respostas
        botaoNext.style.display = 'none'; // Esconde o botão "Next"
        question.innerHTML = perguntas[indexAtual].pergunta
        mostrarRespostas(perguntas[indexAtual].opcoes)
        }
    }
function verificarResposta(opcao,button){
    if(opcao == perguntas[indexAtual].correta){
        button.classList.add("correto")
        pontos ++ 
    }
    else{
        button.classList.add("errado")
    }
    let buttons = document.querySelectorAll(".container-answer")
    buttons.forEach(button => {
        button.disabled = true
    })
    setTimeout(() => {
        indexAtual++
        mostrarPergunta()
    }, 1250)
}   
function mostrarRespostas(opcoes){
    respostas.innerHTML = ""
    opcoes.forEach(opcao => {
        const button = document.createElement("button")
        button.innerHTML = opcao
        button.classList = "container-answer"
        button.addEventListener("click", function(){
            verificarResposta(opcao,button)
        })
        respostas.appendChild(button)
    })
}
botaoNext.addEventListener("click", function(){
    mostrarPergunta()
}) 
