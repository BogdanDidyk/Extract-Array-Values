function getRandomArray(length, min = 0, max = 9) {
    const arr = [];
    
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return arr;
}

function getArrayUniqueValues1(arr) {
    const len = arr.length;
    const uniqueValues = [];

    for (let i = 0; i < len; i++) {
        let isUniqueValue = true;
        let j = i + 1;
        while (isUniqueValue && j != len) {
            isUniqueValue = arr[i] != arr[j];
            j++;
        }

        if (isUniqueValue) uniqueValues.push(arr[i]);
    }

    return uniqueValues;
}

function getArrayUniqueValues2(arr) {
    const len = arr.length;
    const uniqueValues = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < len - 1; i++) {
        if (arr[i] != arr[i + 1]) uniqueValues.push(arr[i]);
    }
    uniqueValues.push(arr[len - 1]);

    return uniqueValues;
}

const arr = getRandomArray(20);
console.log("arr =", arr);
console.log("");
console.log(getArrayUniqueValues1(arr));
console.log(getArrayUniqueValues2(arr));