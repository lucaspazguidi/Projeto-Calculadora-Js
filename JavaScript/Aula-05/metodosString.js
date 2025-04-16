let nome = "Thiago Lira"
console.log(nome.charAt(3)); // Acessa pelo indice e se nao existir nao retorna nada.
console.log(nome[3]); // Acessa pelo indíce e se nao existir retorna indefinido. 
console.log(nome.toLocaleUpperCase());
console.log(nome.toLocaleLowerCase());
console.log(nome.substring(1,4));
char = nome.split(" ")
console.log(char[0]);
newName = nome.replace("Lira", "Abravanel")
console.log(newName);
let trim = "      Eduzin       "
console.log(trim.trim());
console.log(nome.indexOf("h"));
console.log(nome.lastIndexOf("a"));
console.log(nome.search("a"));
console.log(nome.startsWith("F"));
console.log(nome.endsWith("a"));
