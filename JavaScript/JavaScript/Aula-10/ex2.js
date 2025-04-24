class operações {

    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
    adição() {
        alert(`O resultado da adição de ${this.num1} por ${this.num2} é ${this.num1+this.num2}.`);
    }
    sub() {
        alert(`O resultado da subtração de ${this.num1} por ${this.num2} é ${this.num1-this.num2}`);
    }
    div() {
        alert(`O resultado da divisão de ${this.num1} por ${this.num2} é ${this.num1/this.num2}.`);
    }
    mult() {
        alert(`O resultado da multiplicação de ${this.num1} por ${this.num2} é ${this.num1*this.num2}.`);
    }
}
let tipo = prompt("Digite o tipo de operação (M para multiplicação, D para divisão, A para adição e S para subtração):")
let numeros1 = Number(prompt("Digite o primeiro numero que deseja aplicar o calculo:"))
let numeros2 = Number(prompt("Digite o segundo numero que deseja aplicar o calculo:"))
let resultado = new operações(numeros1, numeros2)
let newTipo = tipo.toLocaleUpperCase()
switch (newTipo) {
    case "M":
        resultado.mult()
        break;
    case "D":
        resultado.div()
        break;
    case "A":
        resultado.adição()
        break;
    case "S":
        resultado.sub()
        break;
    default:
        alert(`Numeros digitados incorretos`);
}