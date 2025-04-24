let n = 10
fibanacci = [0, 1]
for (i = 2; i < n; i++) {
    fibanacci.push(fibanacci[i - 1] + fibanacci[i - 2])
}
for (i = 0; i < fibanacci.length ; i++) {
    console.log(fibanacci[i]);
    
}
 
/*  
push              0       1       (1 + 0)     (1 + 1)         (2 + 1)             (3 + 2)                 (5 + 3)

numero add        0       1           1           2               3                   5                       8

indice            i = 2   i = 2      i = 2        i = 3           i = 4               i = 5                   i = 6
 
 
  
 */