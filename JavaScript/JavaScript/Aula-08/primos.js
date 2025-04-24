for (d = 2; d <= 20; d++) {
    let éprimo = true
    for (i = 2; i < d; i++){ 
        if (d % i == 0) {
            éprimo = false
            break;
        }
    }
        if (éprimo) {
            console.log(d);
        }

    

}
