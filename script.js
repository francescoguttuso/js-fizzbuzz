for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        // Al posto del numero, FIZZ
        console.log("FIZZ");
    } if (i % 5 === 0) {
        // Al posto del numero, BUZZ
        console.log("BUZZ");
    } if (i % 3 === 0 && i % 5 === 0) {
        // Al posto del numero, FIZZBUZZ
        console.log("FIZZBUZZ");
    }


    else {
        // Altrimenti stampiamo il numero normale
        console.log(i);
    }
}



