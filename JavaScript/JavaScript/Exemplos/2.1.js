let sabor = "CALABRESA"
let newSabor = sabor.toLowerCase()
switch (newSabor) {
    case "calabresa":
        console.log(`O sabor`);
        break;
    case "mussarela":
        console.log(`Voce será atendido ao ser chamado no giche!`);
        break;
    case "catupiry":
        console.log(`Voce será redirecionado para o menu de informações`);
        break;
        default:
            console.log(`Comando digitado indisponível`);
        break;
}
