let erro = "e303"
let newErro = erro.toUpperCase()
switch (newErro) {
    case "E101":
        console.log(`Voce esta com problemas de internet!`);
        break;
    case "E202":
        console.log(`Estamos com problemas no nosso servidor, por favor, aguarde!`);
        break;
    case "E303":
        console.log(`Há um erro de login, por favor, redigite seus dados!`);
        break;
        default:
            console.log(`Comando digitado indisponível!`);
        break;
}
