sorvete = ["morango", "chocolate", "creme"]
sorveteEscolhido = sorvete[Math.floor(Math.random() * sorvete.length)]

switch (sorveteEscolhido) {
    case sorvete[0]:
        console.log(`Seu sorvete de ${sorveteEscolhido} está pronto!`);
        break;
    case sorvete[1]:
        console.log(`Seu sorvete de ${sorveteEscolhido} está pronto!`);
        break;
    case sorvete[2]:
        console.log(`Seu sorvete de ${sorveteEscolhido} está pronto!`);
        break;
    default:
        console.log("Escolha um sabor disponivel");
        break;
}
