// eg. chunk([1,2,3,4]) 
// returns [[1,2], [3,4]]
function chunk(arr, length) {
    if (!arr || arr.length == 0 || !length || length == 0) {
        return [];
    }

    let outerArray = [];

    while (arr.length > 0) {
        outerArray.push(arr.splice(0,length));
    }

    return outerArray;
}

// compact - filters out falsey values
const compact = (arr) => arr.filter(el => !!el);

// difference - returns a new array with the exclude values removed
const difference = (arr, exclude) => arr.filter(el => !exclude.includes(el));

// fill - fills the specified array with the value from start to end
const fill = (arr, value, start = 0, end = arr.length) => {

    if (start === end) {
        arr[start] = value;
    }

    arr.forEach(el => {
        if (arr.indexOf(el) >= start && arr.indexOf(el) < end) {
            arr[arr.indexOf(el)] = value;
        }
    });

    return arr;
}

const uniq = (arr) => {
    let newArr = [];

    arr.forEach(el => {
        if(!newArr.includes(el)) {
            newArr.push(el);
        }
    });

    return newArr;
}

// returns the first element of the array
const head = (arr) => {
    if (!arr || arr.length === 0) {
        return [];
    }

    return arr[0];
}

// returns the nth element in the arr from the front if positive, 
// otherwise returns the nth element from the end
const nth = (arr, n) => n < 0 ? arr.reverse()[-n] : arr[n];

// excludes the passed arguments from the array
// eg. pull([1,2,3], 1, 2) returns [3]
const pull = (arr, ...args) => arr.filter(el => !args.includes(el));

// returns all elements but the first
const tail = (arr) => arr.slice(1, arr.length);

// returns a slice of the array up to n
const take = (arr, n) => arr.slice(0, n);

// returns a slice of n elements from the array from the end
const takeRight = (arr, n) => arr.reverse().slice(0, n).reverse();

const zipObject = (keys, values) => {
    if (!values || !keys) {
        console.error("values or keys array is undefined");
        return;
    }

    if (keys.length === 0 || values.length === 0 || keys.length !== values.length) {
        console.error("No elements specified in array or array lengths do not match");
        return;
    }

    for (var i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }

    return obj;
}

export {
    head,
    chunk,
    compact,
    tail,
    uniq,
    takeRight,
    take,
}
