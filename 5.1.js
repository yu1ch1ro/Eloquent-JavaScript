function together(array1,array2) {
    for (let item of array2) {
        for (let count of array1) {
            if (count!=item) {
                break;
        };
        array1.push(item);
    };
    console.log(array1);
};
};
together([1,2,3],[5,3,4])