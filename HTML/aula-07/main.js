

function exibirDetalhes(estadoEscolhido, nome, cpf, rg) {
    const div = document.createElement("div")
    div.className = "dados-exibidos"
    div.innerHTML = `Voce mora em ${estadoEscolhido.value}, seu nome completo é ${nome.value}, seu cpf é ${cpf.value}, e seu rg é ${rg.value}`
    div.style.textAlign = "center"
    document.body.appendChild(div)
}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()

    const estadoEscolhido = document.querySelector("input[name='estado']:checked")
    const nome = document.getElementById("nomeCompleto")
    const cpf = document.getElementById("cpf")
    const rg = document.getElementById("rg")
    exibirDetalhes(estadoEscolhido,nome,cpf,rg)
})
document.getElementById("limpar").addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("nomeCompleto").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("rg").value = "";
    

    const radios = document.querySelectorAll("input[name='estado']");
    radios.forEach(radio => radio.checked = false);

    const dadosExibidos = document.querySelectorAll(".dados-exibidos");
    dadosExibidos.forEach(div => div.remove());
});