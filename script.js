for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
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



