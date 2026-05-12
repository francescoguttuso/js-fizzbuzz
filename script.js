for (let i = 0; i < 101; i++) {
    if (i === 0) {
        // Se il numero è 0, scrivo zero
        console.log(i);
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        // Al posto del numero, FIZZBUZZ
        console.log("FIZZBUZZ");
    }
    else if (i % 3 === 0) {
        // Al posto del numero, FIZZ
        console.log("FIZZ");
    }
    else if (i % 5 === 0) {
        // Al posto del numero, BUZZ
        console.log("BUZZ");
    }
    else {
        // Altrimenti stampiamo il numero normale
        console.log(i);
    }
}



