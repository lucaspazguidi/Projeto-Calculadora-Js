let diaEscolhido = 4
switch (diaEscolhido) {
    case 1:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é segunda-feira.`);
        break;
    case 2:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é terça-feira.`);
        break;
    case 3:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é quarta-feira.`);
        break;
    case 4:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é quinta-feira.`);
        break;
    case 5:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é sexta-feira.`);
        break;
    case 6:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é sábado.`);
        break;
    case 7:
        console.log(`Bom dia! Segundo as informações inseridas, hoje é domingo.`);
        break;
    
    default:
        console.log("Dia inválido! Digite um dia da semana que exista.");
        break;
}