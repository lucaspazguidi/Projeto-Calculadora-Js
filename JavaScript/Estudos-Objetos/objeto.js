let pessoa = {
    idade:"17",
    nome:"Eduardo",
    emprego:"Programador",
    info() {
        console.log(`Seu nome é ${this.nome}, voce tem ${this.idade} anos, e seu emprego é ${this.emprego}`);
    }
}
pessoa.info()