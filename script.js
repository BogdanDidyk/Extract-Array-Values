function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(length, min, max) {
    return Array.from({length: length}, () => getRandomInteger(min, max));
}

function extractArrayValues1(arr) {
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

function extractArrayValues2(arr) {
    const len = arr.length;
    const uniqueValues = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < len - 1; i++) {
        if (arr[i] != arr[i + 1]) uniqueValues.push(arr[i]);
    }
    uniqueValues.push(arr[len - 1]);

    return uniqueValues;
}

function extractArrayValues3(arr) {
    return arr.filter((value, index, array) => array.indexOf(value) === index);
}

function extractArrayValues4(arr) {
    return Array.from(new Set(arr));
}

const arr = getRandomArray(20, 0, 15);
console.log("arr =", arr);
console.log("");
console.log(extractArrayValues1(arr));
console.log(extractArrayValues2(arr));
console.log(extractArrayValues3(arr));
console.log(extractArrayValues4(arr));