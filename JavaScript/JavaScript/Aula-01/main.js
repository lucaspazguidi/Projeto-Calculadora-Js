class Carro{
    constructor(marca,modelo,ano,ligado){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano 
        this.ligado = false
    }
    ligar_carro(){
        if (this.ligado){
            console.log("o carro ja esta ligado, desligue-o para ligar novamente.")
        }
        else{
            this.ligado = true
            console.log("O carro está ligado!")
        }
    }
    desligar_carro(){
        if (!this.ligado){
            console.log("O carro ja estava desligado")
        }
        else{
            console.log("O carro esta desligado")
            this.ligado = false
        }
    }
    exibir_info(){
        console.log(`O seu carro é do modelo ${this.modelo}, da marca ${this.marca} e do ano ${this.ano}`)
    }
    
    }
let carro1 = new Carro("Nissan","Kicks","2020")
carro1.exibir_info()
carro1.ligar_carro()
carro1.desligar_carro()
carro1.desligar_carro()
carro1.ligar_carro()
carro1.ligar_carro()