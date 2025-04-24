contador = 1
num1 = 0
num2 = 1
while(contador <=10){
    console.log(`${contador}, ${num1}`);
    soma = num1 + num2
    num1 = num2
    num2 = soma
    contador++
}