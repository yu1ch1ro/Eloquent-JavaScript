let countBs = (string,simbol) => {
    let count=0;
    for (let i of string) {
        if (i==simbol) {
            count++;
        };
    };
    console.log(count)
};
countBs('BndwjBjdwB', 'j')