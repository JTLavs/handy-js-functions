## Functions

<dl>
<dt><a href="#chunk">chunk([arr], [learrngth])</a> &#8594; <code>Array.&lt;Array.&lt;any&gt;&gt;</code></dt>
<dd><p>Returns an array of chunks of specified length</p>
</dd>
<dt><a href="#compact">compact(arr)</a> &#8594; <code>array</code></dt>
<dd><p>Returns a new array with falsey values removed.</p>
</dd>
<dt><a href="#difference">difference(arr, exclude)</a> &#8594; <code>arr</code></dt>
<dd><p>Returns a new array with values in the exclude array removed</p>
</dd>
<dt><a href="#fill">fill(arr, value, [start], [end])</a> &#8594; <code>arr</code></dt>
<dd><p>Fills the array from the specified start to end indices</p>
</dd>
<dt><a href="#uniq">uniq(arr)</a> &#8594; <code>array</code></dt>
<dd><p>Returns a new array with duplicate values removed.</p>
</dd>
<dt><a href="#head">head(arr)</a> &#8594; <code>any</code></dt>
<dd><p>Returns the first array value</p>
</dd>
<dt><a href="#nth">nth(arr, n)</a> &#8594; <code>any</code></dt>
<dd><p>Returns element nth positions from the start of the array is n is positive
otherwise returns element nth positions from the end if n is negative.</p>
</dd>
<dt><a href="#pull">pull(arr, ...args)</a> &#8594; <code>Array.&lt;any&gt;</code></dt>
<dd><p>Returns an array with the passed elements excluded</p>
</dd>
<dt><a href="#tail">tail(arr)</a> &#8594; <code>array</code></dt>
<dd><p>Returns all elements except the first element</p>
</dd>
<dt><a href="#take">take(arr, n)</a> &#8594; <code>array</code></dt>
<dd><p>Returns a portion of an array to n from the start of the array</p>
</dd>
<dt><a href="#takeRight">takeRight(arr, n)</a> &#8594; <code>array</code></dt>
<dd><p>Returns a portion of an array to n from the end of the array</p>
</dd>
<dt><a href="#mean">mean(arr)</a> &#8594; <code>number</code></dt>
<dd><p>Returns the average of an array of numerical values</p>
</dd>
<dt><a href="#capitalize">capitalize(str)</a> &#8594; <code>string</code></dt>
<dd><p>Returns a string with the first character converted to uppercase</p>
</dd>
<dt><a href="#insertElement">insertElement(index, element, arr)</a> &#8594; <code>arr</code></dt>
<dd><p>Inserts an element in the nth position</p>
</dd>
<dt><a href="#sortBy">sortBy(prop, arr)</a> &#8594; <code>Array.&lt;any&gt;</code></dt>
<dd><p>Sorts by a property on an array of objects</p>
</dd>
<dt><a href="#endsWithChar">endsWithChar(str, char)</a> &#8594; <code>Boolean</code></dt>
<dd><p>Checks if a string ends with a character</p>
</dd>
<dt><a href="#repeat">repeat(str, n)</a> &#8594; <code>string</code></dt>
<dd><p>Repeats a string n times</p>
</dd>
<dt><a href="#replace">replace(str, newVal, target)</a> &#8594; <code>string</code></dt>
<dd><p>Replaces a substring with another substring</p>
</dd>
<dt><a href="#words">words(str, pattern)</a> &#8594; <code>Array.&lt;string&gt;</code></dt>
<dd><p>Returns the words from a string as an array</p>
</dd>
<dt><a href="#omit">omit(obj, val)</a> &#8594; <code>object</code></dt>
<dd><p>Removes values from an object</p>
</dd>
<dt><a href="#pick">pick(obj, val)</a> &#8594; <code>object</code></dt>
<dd><p>Returns properties specified from an object</p>
</dd>
<dt><a href="#isDivisibleBy">isDivisibleBy(x, y)</a> &#8594; <code>Boolean</code></dt>
<dd><p>Checks if a number x is divisible by divisor y with no remainder</p>
</dd>
<dt><a href="#nextWithNoRemainder">nextWithNoRemainder(x, y)</a> &#8594; <code>number</code></dt>
<dd><p>Returns the next divisor with no remainder of a number if the passed divisor y has a remainder</p>
</dd>
<dt><a href="#factors">factors(a)</a> &#8594; <code>Array.&lt;number&gt;</code></dt>
<dd><p>Returns all the factors for a number</p>
</dd>
<dt><a href="#isPrime">isPrime(a)</a> &#8594; <code>boolean</code></dt>
<dd><p>Returns true if the number is a prime number</p>
</dd>
<dt><a href="#multiples">multiples(x, length)</a> &#8594; <code>Array.&lt;number&gt;</code></dt>
<dd><p>Calculates the multiples of x up until length</p>
</dd>
<dt><a href="#median">median(arr)</a> &#8594; <code>number</code></dt>
<dd><p>Calculates the median value of an array</p>
</dd>
<dt><a href="#primesUpTo">primesUpTo(n)</a> &#8594; <code>Array.&lt;number&gt;</code></dt>
<dd><p>Returns the number of prime numbers up until n (inclusive)</p>
</dd>
<dt><a href="#noOfVowels">noOfVowels(str)</a> &#8594; <code>number</code></dt>
<dd><p>Returns the number of vowels in a string</p>
</dd>
<dt><a href="#noOfConsonants">noOfConsonants(str)</a> &#8594; <code>number</code></dt>
<dd><p>Returns the number of consonants in a string</p>
</dd>
<dt><a href="#removeSpaces">removeSpaces(str)</a> &#8594; <code>string</code></dt>
<dd><p>Removes spaces from a string</p>
</dd>
<dt><a href="#letterOccurance">letterOccurance(str)</a> &#8594; <code>number</code></dt>
<dd><p>Returns the occurences of a letter in a string</p>
</dd>
<dt><a href="#formatNumber">formatNumber(number)</a> &#8594; <code>string</code></dt>
<dd><p>Converts a large number to a string with a suffix</p>
</dd>
<dt><a href="#roman">roman(number)</a> &#8594; <code>string</code></dt>
<dd><p>Converts a number to its roman numberal</p>
</dd>
<dt><a href="#isAnagram">isAnagram(a, b)</a> &#8594; <code>boolean</code></dt>
<dd><p>Returns true if a and b are anagrams</p>
</dd>
</dl>

<a name="chunk"></a>

## chunk([arr], [length]) &#8594; <code>Array.&lt;Array.&lt;any&gt;&gt;</code>
Returns an array of chunks of specified length

**Kind**: global function  
**Returns**: <code>Array.&lt;Array.&lt;any&gt;&gt;</code> - - the array with chunks  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [arr] | <code>Array.&lt;any&gt;</code> | <code>[]</code> | the original array |
| [length] | <code>number</code> | <code>0</code> | the length of each chunk |

**Example**  
```js
chunk([1,2,3,4,5,6,7], 2) => [[1,2], [3,4], [5,6], [7]] 
```
<a name="compact"></a>

## compact(arr) &#8594; <code>array</code>
Returns a new array with falsey values removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | the original array |

**Example**  
```js
compact([undefined, 1, 0, null, 'hello']) => [1,'hello'] 
```
<a name="difference"></a>

## difference(arr, exclude) &#8594; <code>arr</code>
Returns a new array with values in the exclude array removed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | the original array |
| exclude | <code>array</code> | the array with the values to exclude |

**Example**  
```js
difference(['alice', 'bob', 'dave'], ['alice', 'bob']) => ['dave'] 
```
<a name="fill"></a>

## fill(arr, value, [start], [end]) &#8594; <code>arr</code>
Fills the array from the specified start to end indices

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> |  | the original array |
| value | <code>number</code> |  | the fill value |
| [start] | <code>number</code> | <code>0</code> | the start value to fill from |
| [end] | <code>number</code> | <code>arr.length</code> | the end value to stop filling at (not inclusive) |

**Example**  
```js
fill([1,2,3,4,5,6,7], 0, 1, 3) => [1,0,0,4,5,6,7] 
```
<a name="uniq"></a>

## uniq(arr) &#8594; <code>array</code>
Returns a new array with duplicate values removed.

**Kind**: global function  
**Returns**: <code>array</code> - array with any duplicate values removed.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | array with duplicate values |

**Example**  
```js
uniq([1,1,2,4,4,5,6]) => [1,2,4,5,6]
```
<a name="head"></a>

## head(arr) &#8594; <code>any</code>
Returns the first array value

**Kind**: global function  
**Returns**: <code>any</code> - the first element  

| Param | Type |
| --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | 

**Example**  
```js
head([1,2,3,4,5]) => 1
```
<a name="nth"></a>

## nth(arr, n) &#8594; <code>any</code>
Returns element nth positions from the start of the array is n is positive
otherwise returns element nth positions from the end if n is negative.

**Kind**: global function  
**Returns**: <code>any</code> - the nth element  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | array of elements |
| n | <code>number</code> | the position of the element to be returned |

**Example**  
```js
nth([1,2,3,4,5], 3) => 4
nth([1,2,3,4,5], -3) => 2
```
<a name="pull"></a>

## pull(arr, ...args) &#8594; <code>Array.&lt;any&gt;</code>
Returns an array with the passed elements excluded

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - - the array with the elements removed  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | array of elements |
| ...args | <code>any</code> | elements to exclude |

**Example**  
```js
nth([1,2,3,4,5], 1,2,3) => [4,5]
```
<a name="tail"></a>

## tail(arr) &#8594; <code>array</code>
Returns all elements except the first element

**Kind**: global function  
**Returns**: <code>array</code> - array containing all elements except the first element  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | the original array |

**Example**  
```js
tail([1,2,3,4,5]) => [2,3,4,5]
```
<a name="take"></a>

## take(arr, n) &#8594; <code>array</code>
Returns a portion of an array to n from the start of the array

**Kind**: global function  
**Returns**: <code>array</code> - array containing all elements from arr[0] to arr[n]  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;any&gt;</code> | the original array |
| n | <code>number</code> | the index to slice the array |

**Example**  
```js
take([1,2,3,4,5], 3) => [1,2,3]
```
<a name="takeRight"></a>

## takeRight(arr, n) &#8594; <code>array</code>
Returns a portion of an array to n from the end of the array

**Kind**: global function  
**Returns**: <code>array</code> - array containing all elements from arr[arr.length-1] to arr[n]  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | the original array |
| n | <code>number</code> | the index to slice the array |

**Example**  
```js
takeRight([1,2,3,4,5], 3) => [3,4,5] 
```
<a name="mean"></a>

## mean(arr) &#8594; <code>number</code>
Returns the average of an array of numerical values

**Kind**: global function  
**Returns**: <code>number</code> - the average of the elements in the array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;number&gt;</code> | the original array of numerical values |

**Example**  
```js
take([1,2,3,4,5]) => 3
```
<a name="capitalize"></a>

## capitalize(str) &#8594; <code>string</code>
Returns a string with the first character converted to uppercase

**Kind**: global function  
**Returns**: <code>string</code> - the string with the first character capitalized  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the original string |

**Example**  
```js
capitalize('hello') => 'Hello'
```
<a name="insertElement"></a>

## insertElement(index, element, arr) &#8594; <code>arr</code>
Inserts an element in the nth position

**Kind**: global function  
**Returns**: <code>arr</code> - the array with the inserted element  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | the index to insert the element |
| element | <code>any</code> | the element to insert |
| arr | <code>Array.&lt;any&gt;</code> | the array in which to insert the element |

<a name="sortBy"></a>

## sortBy(prop, arr) &#8594; <code>Array.&lt;any&gt;</code>
Sorts by a property on an array of objects

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - the array sorted by the property  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | the name of the prop |
| arr | <code>Array.&lt;any&gt;</code> | array of objects |

<a name="endsWithChar"></a>

## endsWithChar(str, char) &#8594; <code>Boolean</code>
Checks if a string ends with a character

**Kind**: global function  
**Returns**: <code>Boolean</code> - if the string ends with the passed character  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to check |
| char | <code>string</code> | the character to check |

<a name="repeat"></a>

## repeat(str, n) &#8594; <code>string</code>
Repeats a string n times

**Kind**: global function  
**Returns**: <code>string</code> - the string repeated  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string repeat |
| n | <code>string</code> | the amount of repetitions |

**Example**  
```js
repeat('repeatme', 2) => 'repeatmerepeatme'
```
<a name="replace"></a>

## replace(str, newVal, target) &#8594; <code>string</code>
Replaces a substring with another substring

**Kind**: global function  
**Returns**: <code>string</code> - the string with the new substring  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string for the replacement |
| newVal | <code>string</code> | the new substring |
| target | <code>string</code> | substring to be replaced |

**Example**  
```js
replace('hello world', 'there', 'world') => 'hello there' 
```
<a name="words"></a>

## words(str, pattern) &#8594; <code>Array.&lt;string&gt;</code>
Returns the words from a string as an array

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - the array of words  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to obtain the words |
| pattern | <code>string</code> | the pattern to split the string by |

**Example**  
```js
words('give me the words') => [give, me, the, words]
```
<a name="omit"></a>

## omit(obj, val) &#8594; <code>object</code>
Removes values from an object

**Kind**: global function  
**Returns**: <code>object</code> - the new object with the properties removed  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the original object |
| val | <code>Array.&lt;any&gt;</code> | the array of values to omit |

**Example**  
```js
omit({name: 'Alice', age: 20, lives_in: 'New York'}, ['name', 'age']) => {'lives_in': 'New York'}
```
<a name="pick"></a>

## pick(obj, val) &#8594; <code>object</code>
Returns properties specified from an object

**Kind**: global function  
**Returns**: <code>object</code> - the new object with the specified properties  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the original object |
| val | <code>Array.&lt;any&gt;</code> | the array of values to obtain |

**Example**  
```js
pick({name: 'Alice', age: 20, lives_in: 'New York'}, ['name', 'age']) => {'name': 'Alice', age: 20}
```
<a name="isDivisibleBy"></a>

## isDivisibleBy(x, y) &#8594; <code>Boolean</code>
Checks if a number x is divisible by divisor y with no remainder

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if divisable with no remainder otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the number |
| y | <code>number</code> | the divisor |

**Example**  
```js
isDivisibleBy(24,12) => true
isDivisibleBy(24,5) => false 
```
<a name="nextWithNoRemainder"></a>

## nextWithNoRemainder(x, y) &#8594; <code>number</code>
Returns the next divisor with no remainder of a number if the passed divisor y has a remainder

**Kind**: global function  
**Returns**: <code>number</code> - a divisor with no remainder  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the number |
| y | <code>number</code> | the divisor |

**Example**  
```js
nextWithNoRemainder(24,12) => 12
nextWithNoRemainder(24,5) => 6 
```
<a name="factors"></a>

## factors(a) &#8594; <code>Array.&lt;number&gt;</code>
Returns all the factors for a number

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - array of factors  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | the number to obtain the factors |

**Example**  
```js
factors(12) => [1,2,3,4,6,12]
```
<a name="isPrime"></a>

## isPrime(a) &#8594; <code>boolean</code>
Returns true if the number is a prime number

**Kind**: global function  
**Returns**: <code>boolean</code> - if a is prime  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | the number to check |

**Example**  
```js
isPrime(13) => true
```
<a name="multiples"></a>

## multiples(x, length) &#8594; <code>Array.&lt;number&gt;</code>
Calculates the multiples of x up until length

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - the array of multiples  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the number to obtain multiples of |
| length | <code>number</code> | the limit |

**Example**  
```js
multiples(10, 4) => [10,20,30,40]
```
<a name="median"></a>

## median(arr) &#8594; <code>number</code>
Calculates the median value of an array

**Kind**: global function  
**Returns**: <code>number</code> - the median  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;number&gt;</code> | the array of numbers |

**Example**  
```js
median([1,2,3,4,5,6,7,8,9,10]) => 5.5
```
<a name="primesUpTo"></a>

## primesUpTo(n) &#8594; <code>Array.&lt;number&gt;</code>
Returns the number of prime numbers up until n (inclusive)

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - the array of prime numbers  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | the limit |

**Example**  
```js
primesUpTo(10) => [2,3,5,7]
```
<a name="noOfVowels"></a>

## noOfVowels(str) &#8594; <code>number</code>
Returns the number of vowels in a string

**Kind**: global function  
**Returns**: <code>number</code> - the number of vowels  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string |

**Example**  
```js
noOfVowels('hello world') => 3
```
<a name="noOfConsonants"></a>

## noOfConsonants(str) &#8594; <code>number</code>
Returns the number of consonants in a string

**Kind**: global function  
**Returns**: <code>number</code> - the number of consonants  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string |

**Example**  
```js
noOfVowels('hello world') => 7
```
<a name="removeSpaces"></a>

## removeSpaces(str) &#8594; <code>string</code>
Removes spaces from a string

**Kind**: global function  
**Returns**: <code>string</code> - the string with the spaces removed  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string |

**Example**  
```js
removeSpaces('hello world') => 'helloworld'
```
<a name="letterOccurance"></a>

## letterOccurance(str) &#8594; <code>number</code>
Returns the occurences of a letter in a string

**Kind**: global function  
**Returns**: <code>number</code> - the occurences of the specified letter  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string |

**Example**  
```js
letterOccurance('hello world', 'e') => 1
```
<a name="formatNumber"></a>

## formatNumber(number) &#8594; <code>string</code>
Converts a large number to a string with a suffix

**Kind**: global function  
**Returns**: <code>string</code> - the string with the suffix  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | the number |

**Example**  
```js
formatNumber(1000000) => 1M
```
<a name="roman"></a>

## roman(number) &#8594; <code>string</code>
Converts a number to its roman numberal

**Kind**: global function  
**Returns**: <code>string</code> - the roman numeral  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | the number |

**Example**  
```js
roman(20) => XX
```
<a name="isAnagram"></a>

## isAnagram(a, b) &#8594; <code>boolean</code>
Returns true if a and b are anagrams

**Kind**: global function  
**Returns**: <code>boolean</code> - true if a and b are anagrams, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | the first string |
| b | <code>string</code> | the second string |

**Example**  
```js
isAnagram('debit card', 'bad credit') => true
```
