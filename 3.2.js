let isEven = a => {
    for (let count; a>1; count++) {
        a=a-2;
    };
    if (a==0) {
        console.log ('chislo chetnoe');
    } else {
        console.log ('chislo nechetnoe');
    };
};

isEven(50);
isEven(75);