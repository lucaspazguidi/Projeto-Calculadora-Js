function adicao(num1, num2) {
    alert(`O resultado da adição de ${num1} por ${num2} é ${num1+num2}.`);
}
function sub(num1, num2) {
    alert(`O resultado da subtração de ${num1} por ${num2} é ${num1-num2}.`);
}
function div(num1, num2) {
    alert(`O resultado da divisão de ${num1} por ${num2} é ${num1/num2}.`);
}
function mult(num1, num2) {
    alert(`O resultado da multiplicação de ${num1} por ${num2} é ${num1*num2}.`);
}
let tipo = prompt("Digite o tipo de operação (M para multiplicação, D para divisão, A para adição e S para subtração):")
let numeros1 = parseFloat(prompt("Digite o numero que deseja aplicar o calculo:"))
let numeros2 = parseFloat(prompt("Digite o segundo numero que deseja aplicar o calculo:"))
newTipo = tipo.toLocaleUpperCase()
switch (newTipo) {
    case "M":
        mult(numeros1, numeros2)
        break;
    case "D":
        div(numeros1, numeros2)
        break;
    case "A":
        adição(numeros1, numeros2)
        break;
    case "S":
        sub(numeros1, numeros2) 
        break;
    default:
        alert(`Numero digitado indisponivel para calculo ou operação escolhida nao existe!`);
        break;
}