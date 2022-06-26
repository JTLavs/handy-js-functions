import { chunk, head, compact, tail, sortBy, insertElement, isPrime, capitalize, noOfVowels, noOfConsonants } from '../src/'
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
        const result = head(arg);
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
        const result = chunk(arg, length);
        expect(result).toStrictEqual(expected);
    });
});

describe('compact', () => {
    each([
        [ [0,1,undefined,{},null,false], [1, {}] ],
    ])
    .it('will return the expected result', (arg, expected) => {
        const result = compact(arg);
        expect(result).toStrictEqual(expected);
    });
});

describe('tail', () => {
    each([
        [ [0,1,2,3,4,5], [1,2,3,4,5] ],
    ])
    .it('will return the expected result', (arg, expected) => {
        const result = tail(arg);
        expect(result).toStrictEqual(expected);
    });
});

describe('sortBy', () => {
    each(sortByData)
    .it('will return the expected results', (arr, prop, expected) => {
        const result = sortBy(arr, prop);
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
        expect(isPrime(val)).toBe(expected)
    })
});

describe('insertElement', () => {
    each([
        [[1,2,4,5], 2, 3]
    ])
    .it('will contain the element', (arr, index, element) => {
        expect(insertElement(index, element, arr)[index]).toBe(element);
    })
});

describe('capitalize', () => {
    it('will capitalize the first character', () => {
        expect(capitalize("test")).toBe("Test");
        expect(capitalize("Test")).toBe("Test");
        expect(capitalize("123")).toBe("123");
        expect(capitalize("TEST")).toBe("TEST");
        expect(capitalize("tEST")).toBe("TEST");
    });
});

describe('noOfVowels', () => {
    it('will return the correct number of vowels', () => {
        expect(noOfVowels('test')).toBe(1);
        expect(noOfVowels('hello there')).toBe(4);
        expect(noOfVowels('')).toBe(0);
        expect(noOfVowels('   ')).toBe(0);
    });
});

describe('noOfConsonants', () => {
    it('will return the correct number of consonants', () => {
        expect(noOfConsonants('test')).toBe(3);
        expect(noOfConsonants('hello there')).toBe(6);
        expect(noOfConsonants('')).toBe(0);
        expect(noOfConsonants('   ')).toBe(0);
    });
});