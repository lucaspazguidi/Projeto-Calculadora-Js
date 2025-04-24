lista = ["Maça","Abacaxi","Banana","Uva","Caqui","Mexirica","Laranja","Amora","Abacate","Pitaia"]
lista.push("Goiaba")
lista.unshift("Melancia")
lista.splice([0], 0, "Pitanga")
console.log(lista);
let conc = lista.join(" - ")
console.log(conc);
lista.reverse()
console.log(lista);
lista.sort()
console.log(lista);
let lista2 = lista.includes("Pitanga")
console.log(lista2);
