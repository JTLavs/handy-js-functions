/**
 * Returns an array of chunks of specified length
 * @example chunk([1,2,3,4,5,6,7], 2) => [[1,2], [3,4], [5,6], [7]] 
 * @param {any[]} [arr = []] - the original array 
 * @param {number} [length = 0] - the length of each chunk
 * @returns {any[][]} - the array with chunks
 */
const chunk = (arr = [], length = 0) => {
    if (!arr || !length) {
        return [];
    }

    let outerArray = [];

    while (arr.length > 0) {
        outerArray.push(arr.splice(0,length));
    }

    return outerArray;
}

/**
 * Returns a new array with falsey values removed.
 * @example compact([undefined, 1, 0, null, 'hello']) => [1,'hello'] 
 * @param {array} arr the original array 
 * @returns {string}
 */
function compact(arr) {
    return arr.filter(el => !!el);
}

/**
 * Returns a new array with values in the exclude array removed
 * @example difference(['alice', 'bob', 'dave'], ['alice', 'bob']) => ['dave'] 
 * @param {array} arr the original array 
 * @param {array} exclude the array with the values to exclude
 * @returns {arr}
 */
const difference = (arr, exclude) => arr.filter(el => !exclude.includes(el));

/**
 * Fills the array from the specified start to end indices
 * @example fill([1,2,3,4,5,6,7], 0, 1, 3) => [1,0,0,4,5,6,7] 
 * @param {any[]} arr the original array
 * @param {number} value the fill value
 * @param {number} [start=0] the start value to fill from
 * @param {number} [end=arr.length] the end value to stop filling at (not inclusive)
 * @returns {arr}
 */
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

/**
 * Returns a new array with duplicate values removed.
 * @example uniq([1,1,2,4,4,5,6]) => [1,2,4,5,6]
 * @param {any[]} arr array with duplicate values 
 * @returns {array} array with any duplicate values removed.
 */
const uniq = (arr) => {
    let newArr = [];

    arr.forEach(el => {
        if(!newArr.includes(el)) {
            newArr.push(el);
        }
    });

    return newArr;
}

/**
 * Returns the first array value
 * @example head([1,2,3,4,5]) => 1
 * @param {any[]} arr
 * @returns {any} the first element
 */
const head = (arr) => {
    if (!arr || arr.length === 0) {
        return [];
    }

    return arr[0];
}

/**
 * Returns element nth positions from the start of the array is n is positive
 * otherwise returns element nth positions from the end if n is negative.
 * @example nth([1,2,3,4,5], 3) => 4
 * nth([1,2,3,4,5], -3) => 2
 * @param {any[]} arr array of elements 
 * @param {number} n the position of the element to be returned
 * @returns {any} the nth element
 */
const nth = (arr, n) => n < 0 ? arr.reverse()[-n] : arr[n];

/**
 * Returns an array with the passed elements excluded
 * @example nth([1,2,3,4,5], 1,2,3) => [4,5]
 * @param {any[]} arr - array of elements 
 * @param {...any} args - elements to exclude
 * @returns {any[]} - the array with the elements removed
 */
const pull = (arr, ...args) => arr.filter(el => !args.includes(el));

/**
 * Returns all elements except the first element
 * @example tail([1,2,3,4,5]) => [2,3,4,5]
 * @param {any[]} arr the original array 
 * @returns {array} array containing all elements except the first element
 */
const tail = (arr) => arr.slice(1, arr.length);

/**
 * Returns a portion of an array to n from the start of the array
 * @example take([1,2,3,4,5], 3) => [1,2,3]
 * @param {any[]} arr the original array
 * @param {number} n the index to slice the array 
 * @returns {array} array containing all elements from arr[0] to arr[n]
 */
const take = (arr, n) => arr.slice(0, n);

/**
 * Returns a portion of an array to n from the end of the array
 * @example takeRight([1,2,3,4,5], 3) => [3,4,5] 
 * @param {array} arr the original array
 * @param {number} n the index to slice the array
 * @returns {array} array containing all elements from arr[arr.length-1] to arr[n]
 */
const takeRight = (arr, n) => arr.reverse().slice(0, n).reverse();

/**
 * Returns the average of an array of numerical values
 * @example take([1,2,3,4,5]) => 3
 * @param {number[]} arr the original array of numerical values
 * @returns {number} the average of the elements in the array
 */
const mean = (arr) => arr.reduce((prev, curr) => prev + curr) / arr.length;

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

/**
 * Returns a string with the first character converted to uppercase
 * @example capitalize('hello') => 'Hello'
 * @param {string} str the original string
 * @returns {string} the string with the first character capitalized
 */
function capitalize(str) {
    return [str[0].toUpperCase(), ...str.toLowerCase().split('').slice(1, str.length)].join('');
}

/**
 * Inserts an element in the nth position
 * @param {number} index the index to insert the element
 * @param {any} element the element to insert
 * @param {any[]} arr the array in which to insert the element 
 * @returns {arr} the array with the inserted element
 */
function insertElement(index, element, arr) {
    arr.splice(index, 0, element);
    return arr;
}

/**
 * Sorts by a property on an arry of objects
 * @param {string} prop the name of the prop
 * @param {any[]} arr array of objects
 * @returns {any[]} the array sorted by the property
 */
const sortBy = (arr, prop) => arr.sort((a,b) => {
    if (a[prop] === undefined || b[prop] === undefined) {
        console.error(`${prop} not found on obj`);
        return;
    }

    return _compare(a[prop], b[prop]);
});

function _compare(a,b) {
    if (a === b) return 0;
    return (a < b) ? -1 : 1;
}

/**
 * Checks if a string ends with a character
 * @param {string} str the string to check
 * @param {string} char the character to check
 * @returns {Boolean} if the string ends with the passed character
 */
const endsWithChar = (str, char) => str.split('')[str.length-1] === char;

/**
 * Repeats a string n times
 * @example repeat('repeatme', 2) => 'repeatmerepeatme'
 * @param {string} str the string repeat
 * @param {string} n the amount of repetitions
 * @returns {string} the string repeated
 */
const repeat = (str, n) => Array(n).fill(str).join('');

/**
 * Replaces a substring with another substring
 * @example replace('hello world', 'there', 'world') => 'hello there' 
 * @param {string} str the string for the replacement
 * @param {string} newVal the new substring
 * @param {string} target substring to be replaced
 * @returns {string} the string with the new substring
 */
const replace = (str, newVal, target) => str.replace(target, newVal);

/**
 * Returns the words from a string as an array
 * @example replace('hello world', 'there', 'world') => 'hello there' 
 * @param {string} str the string to obtain the words
 * @param {string} pattern the pattern to split the string by
 * @returns {string[]} the array of words
 */
const words = (str, pattern = '') => str.split(pattern);

/**
 * Removes values from an object
 * @example omit({name: 'Alice', age: 20, lives_in: 'New York'}, ['name', 'age']) => {'lives_in': 'New York'}
 * @param {Object} obj the original object
 * @param {any[]} val the array of values to omit
 * @returns {object} the new object with the properties removed
 */
const omit = (obj, val) => {
    const newObj = {};

    Array.isArray(val) ?  val.forEach(v => obj[v] = undefined) :  obj[val] = undefined;
    
    Object.entries(obj).forEach(([key, value]) => {
        if (value) {
            newObj[key] = value;
        }
    })

    return newObj;
}

/**
 * Returns properties specified from an object
 * @example pick({name: 'Alice', age: 20, lives_in: 'New York'}, ['name', 'age']) => {'name': 'Alice', age: 20}
 * @param {Object} obj the original object
 * @param {any[]} val the array of values to obtain
 * @returns {object} the new object with the specified properties
 */
const pick = (obj, val) => {
    let newObj = {}
    Array.isArray(val) ?  val.forEach(v => newObj[v] = obj[v]) :  newObj[val] = o[val];
    return newObj;
}

const arrToObj = (a, b) => a.reduce((acc, current, idx) => ({ ...acc, [current]: b[idx] }), {});

/**
 * Checks if a number x is divisible by divisor y with no remainder
 * @example isDivisibleBy(24,12) => true
 * isDivisibleBy(24,5) => false 
 * @param {number} x the number
 * @param {number} y the divisor
 * @returns {Boolean} true if divisable with no remainder otherwise false
 */
const isDivisibleBy = (x,y) => x % y === 0; 

/**
 * Returns the next divisor with no remainder of a number if the passed divisor y has a remainder
 * @example nextWithNoRemainder(24,12) => 12
 * nextWithNoRemainder(24,5) => 6 
 * @param {number} x the number
 * @param {number} y the divisor
 * @returns {number} a divisor with no remainder
 */
function nextWithNoRemainder(x, y) {
    while (x % y !== 0) y++;
    return y;
}

/**
 * Returns all the factors for a number
 * @example factors(12) => [1,2,3,4,6,12]
 * @param {number} a the number to obtain the factors
 * @returns {number[]} array of factors
 */
const factors = (a) => {
    let i = 0;
    let factors = [];
    while (i <= Math.sqrt(a)) {
        if (a % i == 0) {
            factors.push([i, a / i ]);
        }
        i++;
    }

    return uniq(factors.flat());
}

/**
 * Returns true if the number is a prime number
 * @example isPrime(13) => true
 * @param {number} a the number to check
 * @returns {boolean} if a is prime
 */
const isPrime  = (a) => {
    let i = 2;
    while (i <= Math.sqrt(a)) {
        if(a % i == 0) return false;
        i++;
    }

    return a > 1;
}

/**
 * Calculates the multiples of x up until length
 * @example multiples(10, 4) => [10,20,30,40]
 * @param {number} x the number to obtain multiples of
 * @param {number} length the limit
 * @returns {number[]} the array of multiples
 */
function multiples(x, length){
    let arr = [];
    let i=1;
    if (!length) length = x;
    while (i <= length){
        arr.push(i*x);
        i++;
    }

    return arr;
}

/**
 * Calculates the median value of an array
 * @example median([1,2,3,4,5,6,7,8,9,10]) => 5.5
 * @param {number[]} arr the array of numbers
 * @returns {number} the median
 */
const median = (arr) => {
    const { length } = arr.sort((a,b) => _compare(a,b));
    return length % 2 === 0 ? ((arr[(length / 2) - 1] + arr[length / 2] ) / 2): arr[(length - 1) / 2];
}

/**
 * Returns the number of prime numbers up until n (inclusive)
 * @example primesUpTo(10) => [2,3,5,7]
 * @param {number} n the limit 
 * @returns {number[]} the array of prime numbers
 */
const primesUpTo = (n) => {
    let primes = [];
    [...Array(n).keys()].forEach(i => {
        if (isPrime(i)) {
            primes.push(i);
        }
    })

    return primes;
}

const toArray = (...args) => args;

export {
    head,
    chunk,
    compact,
    tail,
    uniq,
    takeRight,
    take,
    mean,
    sortBy,
    zipObject,
    capitalize,
    repeat,
    endsWithChar,
    replace,
    words,
    omit,
    pick,
    isPrime,
    isDivisibleBy,
    nextWithNoRemainder,
    arrToObj,
    multiples,
    insertElement,
    factors,
    median,
    nth,
    primesUpTo,
    fill,
    toArray,
}
