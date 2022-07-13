import * as fn from '../src/'
import { sortByData } from './testData';
import each from 'jest-each';

describe('head', () => {
    each([
        [[0,2,3,4,5], 0],
        [[10], 10],
        [undefined, []],
        [[], []]
    ])
    .it('will return the expected result', (arg, expected) => {
        const result = fn.head(arg);
        expect(result).toStrictEqual(expected);
    });
});

describe('chunk', () => {
    each([
        [ [0,2,3,4,5], 3, [ [0,2,3], [4,5] ] ],
        [ [1,2,3,4,5,6,7,8], 2, [ [1,2], [3,4], [5,6], [7,8] ] ],
        [ [], 2, [] ],
        [ [1,2,3,4], 0, [] ]
    ])
    .it('will return the expected result', (arg, length, expected) => {
        const result = fn.chunk(arg, length);
        expect(result).toStrictEqual(expected);
    });
});

describe('compact', () => {
    each([
        [ [0,1,undefined,{},null,false], [1, {}] ],
    ])
    .it('will return the expected result', (arg, expected) => {
        const result = fn.compact(arg);
        expect(result).toStrictEqual(expected);
    });
});

describe('tail', () => {
    each([
        [ [0,1,2,3,4,5], [1,2,3,4,5] ],
    ])
    .it('will return the expected result', (arg, expected) => {
        const result = fn.tail(arg);
        expect(result).toStrictEqual(expected);
    });
});

describe('sortBy', () => {
    each(sortByData)
    .it('will return the expected results', (arr, prop, expected) => {
        const result = fn.sortBy(arr, prop);
        expect(result).toStrictEqual(expected);
    });
});

describe('isPrime', () => {
    each([
        [1, false],
        [4, false],
        [3, true],
        [13, true]
    ])
    .it('will return the expected value', (val, expected) => {
        expect(fn.isPrime(val)).toBe(expected)
    })
});

describe('insertElement', () => {
    each([
        [[1,2,4,5], 2, 3]
    ])
    .it('will contain the element', (arr, index, element) => {
        expect(fn.insertElement(index, element, arr)[index]).toBe(element);
    })
});

describe('capitalize', () => {
    it('will capitalize the first character', () => {
        expect(fn.capitalize("test")).toBe("Test");
        expect(fn.capitalize("Test")).toBe("Test");
        expect(fn.capitalize("123")).toBe("123");
        expect(fn.capitalize("TEST")).toBe("TEST");
        expect(fn.capitalize("tEST")).toBe("TEST");
    });
});

describe('noOfVowels', () => {
    it('will return the correct number of vowels', () => {
        expect(fn.noOfVowels('test')).toBe(1);
        expect(fn.noOfVowels('hello there')).toBe(4);
        expect(fn.noOfVowels('')).toBe(0);
        expect(fn.noOfVowels('   ')).toBe(0);
    });
});

describe('noOfConsonants', () => {
    it('will return the correct number of consonants', () => {
        expect(fn.noOfConsonants('test')).toBe(3);
        expect(fn.noOfConsonants('hello there')).toBe(6);
        expect(fn.noOfConsonants('')).toBe(0);
        expect(fn.noOfConsonants('   ')).toBe(0);
    });
});

describe('initials', () => {
    each([
        ['John Fitzgerald Kennedy', 'fml', ' ', 'J F K'],
        ['John Fitzgerald Kennedy', 'fl', ' ', 'J K'],
        ['John Fitzgerald Kennedy', 'f', ' ', 'J'],
        ['John Fitzgerald Kennedy', 'l', ' ', 'K'],
        ['John Fitzgerald Kennedy', 'L', ' ', 'Kennedy'],
        ['John Fitzgerald Kennedy', 'F', ' ', 'John'],
        ['John Fitzgerald Kennedy', 'M', ' ', 'Fitzgerald'],
        ['John Fitzgerald Kennedy', 'm', ' ', 'F'],
        ['Walter White', 'fl', undefined, 'W.W'],
        ['Abraham Lincoln', 'fL', undefined, 'A.Lincoln'],
        ['Abraham Lincoln', 'Fl', ' ', 'Abraham L'],
    ])
    .it('will return the correct value', (name, format, separator, expected) => {
        expect(fn.initials(name, format, separator)).toBe(expected)
    });
});

describe('palindrome', () => {
    each([
        ['racecar', true],
        ['noon', true],
        ['kayak', true],
        ['rotator', true],
        ['caravan', false],
        ['hello', false],
    ])
    .it('will return the correct value', (string, expected) => {
        expect(fn.palindrome(string)).toBe(expected)
    });
});

describe('nthfib', () => {
    each([
        [1, 0],
        [10, 34],
    ])
    .it('will return the correct value', (n, expected) => {
        expect(fn.nthfib(n)).toBe(expected)
    });
});

describe('ordinal', () => {
    each([
        [1, '1st'],
        [22, '22nd'],
        [33, '33rd'],
        [44, '44th'],
        [100, '100th'],
    ])
    .it('will return the value correctly', (number, expected) => {
        expect(fn.ordinal(number)).toBe(expected);
    });
});

describe('isLeapYear', () => {
    each([
        [2021, false],
        [2014, false],
        [2020, true],
    ])
    .it('will return the expected value', (year, expected) => {
        expect(fn.isLeapYear(year)).toBe(expected);
    });
});

describe('shiftLeft', () => {
    each([
        [[1,2,3,4,5], 2, [3,4,5,1,2]],
        [[], 1, []],
        [[1], 2, [1]],
        [[1,2,3], 4, [2,3,1]]
    ])
    .it('will return the expected results', (arr, n, expected) => {
        expect(fn.shiftLeft(arr, n)).toStrictEqual(expected);
    });
});

describe('shiftRight', () => {
    each([
        [[1,2,3,4,5], 2, [4,5,1,2,3]],
        [[], 1, []],
        [[1], 2, [1]],
    ])
    .it('will return the expected results', (arr, n, expected) => {
        expect(fn.shiftRight(arr, n)).toStrictEqual(expected);
    });
});

describe('zipObject', () => {
    each([
        [['a', 'b'], [1,2], { 'a': 1, 'b': 2 }],
        [['c', 'd', 'e'], [3,4,5], { 'c': 3, 'd': 4, 'e': 5}]
    ])
    .it('will return the expected response', (keys, values, expected) => {
        expect(fn.zipObject(keys, values)).toStrictEqual(expected)
    });
});