const perguntas = [
    {
        pergunta: "O que causa as estações do ano na Terra?",
        opcoes: ["A órbita elíptica da Terra", "A inclinação do eixo da Terra", "A distância entre a Terra e o Sol", "A rotação da Terra"],
        correta: "A inclinação do eixo da Terra"
    },
    {
        pergunta: "Qual é o planeta mais denso do Sistema Solar?",
        opcoes: ["Júpiter", "Terra", "Saturno", "Marte"],
        correta: "Terra"
    },
    {
        pergunta: "Qual foi o primeiro satélite artificial lançado ao espaço?",
        opcoes: ["Apollo 11", "Sputnik 1", "Voyager 1", "Luna 2"],
        correta: "Sputnik 1"
    },
    {
        pergunta: "O que é uma supernova?",
        opcoes: ["Um planeta muito brilhante", "Uma estrela recém-formada", "Uma explosão de uma estrela no fim da vida", "Uma colisão de cometas"],
        correta: "Uma explosão de uma estrela no fim da vida"
    },
    {
        pergunta: "Qual planeta do Sistema Solar possui o maior número de luas conhecidas?",
        opcoes: ["Saturno", "Urano", "Júpiter", "Netuno"],
        correta: "Saturno"
    },
    {
        pergunta: "O que são exoplanetas?",
        opcoes: ["Planetas fora da Via Láctea", "Planetas que orbitam outras estrelas", "Satélites naturais grandes", "Planetas sem órbita"],
        correta: "Planetas que orbitam outras estrelas"
    },
    {
        pergunta: "O que é um buraco negro?",
        opcoes: ["Uma estrela gigante vermelha", "Um planeta escuro e gelado", "Uma região com gravidade tão intensa que nem a luz escapa", "Uma galáxia em formação"],
        correta: "Uma região com gravidade tão intensa que nem a luz escapa"
    },
    {
        pergunta: "Qual é o nome da galáxia onde está localizado o Sistema Solar?",
        opcoes: ["Andrômeda", "Galáxia do Triângulo", "Via Láctea", "Cinturão de Órion"],
        correta: "Via Láctea"
    },
    {
        pergunta: "Qual é o elemento químico mais abundante no universo?",
        opcoes: ["Oxigênio", "Hélio", "Carbono", "Hidrogênio"],
        correta: "Hidrogênio"
    },
    {
        pergunta: "O que é uma anã branca?",
        opcoes: ["Uma estrela em formação", "Uma estrela muito jovem", "Uma estrela que esgotou seu combustível e colapsou", "Um planeta coberto de gelo"],
        correta: "Uma estrela que esgotou seu combustível e colapsou"
    }
];

let question = document.getElementById("question");
let respostas = document.getElementById("answers");
let botaoNext = document.getElementById("botaoNext");
let botaoStart = document.getElementById("start");
let botaoRestart = document.getElementById("restart");
let indexAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    if (indexAtual >= perguntas.length) {
        question.innerHTML = `Fim do quiz! Sua pontuação é ${pontos} de ${perguntas.length}.`;
        respostas.innerHTML = '';
        botaoNext.style.display = 'none';
        botaoRestart.style.display = 'inline-block';
    } else {
        question.innerHTML = perguntas[indexAtual].pergunta;
        respostas.innerHTML = '';
        botaoNext.style.display = 'none';
        mostrarRespostas(perguntas[indexAtual].opcoes);
    }
}

function verificarResposta(opcao, button) {
    if (opcao == perguntas[indexAtual].correta) {
        button.classList.add("correto");
        pontos++;
    } else {
        button.classList.add("errado");
    }
    let buttons = document.querySelectorAll(".container-answer");
    buttons.forEach(button => {
        button.disabled = true;
    });

    botaoNext.style.display = 'inline-block';
}

function mostrarRespostas(opcoes) {
    opcoes.forEach(opcao => {
        const button = document.createElement("button");
        button.innerHTML = opcao;
        button.classList = "container-answer";
        button.addEventListener("click", function () {
            verificarResposta(opcao, button);
        });
        respostas.appendChild(button);
    });
}

botaoNext.addEventListener("click", function () {
    indexAtual++;
    mostrarPergunta();
});

botaoStart.addEventListener("click", function () {
    pontos = 0;
    indexAtual = 0;
    mostrarPergunta();
    botaoStart.style.display = 'none';
});

botaoRestart.addEventListener("click", function () {
    pontos = 0;
    indexAtual = 0;
    mostrarPergunta();
    botaoRestart.style.display = 'none';
    botaoStart.style.display = 'none';
});
