let reverseArray = array => {
    arrayNew=[];
    for (let i of array) {
        arrayNew.unshift(i);
    };
    console.log(arrayNew);
};

reverseArray([1,2,3,7,8,9])

// doesnt work
let reverseArrayInPlace = array => {
    for (let i of array) {
        array.unshift(array.shift(i));
        return array;
    };
    
    console.log(array);
};

reverseArrayInPlace([1,2,3])