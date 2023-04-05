let range = (start, end, step) => {
    array = [];
    if (step==undefined) {
        for (i=start; i<=end; i++) {
        array.push(i);
        };
    } else {
        for (i=start; i<=end; i=i+step) {
            array.push(i);
        };
    };
    console.log(array);
};
range (1,10,2);

function sum(start, end) {
    result=0;
    for (i=start; i<=end; i++) {
        result+=i;
    };
    console.log(result);
};
sum (1,10)

