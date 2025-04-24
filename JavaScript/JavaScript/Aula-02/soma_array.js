let lista = [1,2,3,4,5,6,7,8]
function mult(array){
    x = array.reduce((acc,num) => acc + num, 0)
    return console.log(x)
}
mult(lista)