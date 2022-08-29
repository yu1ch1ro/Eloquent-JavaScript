for(let t=1; t<=100; t++) {
    if(t%3!=0 && t%5!=0) {
        console.log(t);
    } else if(t%3==0 && t%5!=0) {
        console.log('Fizz'); 'proverka gita'
    } else if(t%3==0) {
        console.log('FizzBuzz');
    } else {
        console.log('Buzz');
    }
}