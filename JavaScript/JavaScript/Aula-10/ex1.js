function calcular_Imc(peso,altura){
    const imc = peso / (altura **2)
    console.log(`Seu Imc é de ${imc.toFixed(2)}`);
}
calcular_Imc(80,1.6)