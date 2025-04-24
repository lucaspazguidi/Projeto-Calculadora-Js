let prioridade = "URGENTE"
let newPrioridade = prioridade.toLowerCase()
switch (newPrioridade) {
    case "urgente":
        console.log(`Voce será atendido imediatamente!`);
        break;
    case "comum":
        console.log(`Voce será atendido ao ser chamado no giche!`);
        break;
    case "informação":
        console.log(`Voce será redirecionado para o menu de informações`);
        break;
        default:
            console.log(`Comando digitado indisponível`);
        break;
}
