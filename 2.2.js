for (a=1 ; a<101 ; a++) {
    if (a % 3 == 0 && a % 5 == 0)  {
        console.log ('FIZZBUZZ');
    } else if (a % 3 == 0) {
        console.log ('FIZZ');
    } else if (a % 5 == 0) {
        console.log ('BUZZ');
    } else console.log(a);
};