let botaoTema = document.getElementById("botao-tema")
let gerarQuadrado = document.getElementById("gerar-quadrado")
let limparQuadrado = document.getElementById("excluir-quadrado")
let limparLista = document.getElementById("limpar-quadrado")
let quadrado;
let quadrados = []
botaoTema.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode")
})
gerarQuadrado.addEventListener("click", function(){
    quadrado = document.createElement("div")
    quadrado.className = "quadrado"
    document.body.appendChild(quadrado)
    quadrados.push(quadrado)
})
limparQuadrado.addEventListener("click", function(){
    if(quadrados.length > 0){
        let removerQuadrado = quadrados.pop()
        removerQuadrado.remove()
    }
})
limparLista.addEventListener("click", function(){
    if(quadrados.length > 0){
        quadrados.forEach(quadrado => {
            quadrado.remove()
        });
        quadrados = []
    }
})