//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n,
// your task is to find the sum of the minimum values in each row.
const sumOfMinimums = (arr) =>
    arr.map(m => Math.min(...m))
        .reduce((a, el) => a + el)

//Write a function that doubles every second integer in a list, starting from the left.
const doubleEveryOther = (a) => {
    return a.reduce((acc, el, i) => {
        return i % 2 === 0 ? acc = [...acc, el] : acc = [...acc, el * 2]
    }, []);
}
//
// Time	Cost
// Up to 1st hour	$30
// Every subsequent half hour**	$10
// ** Subsequent charges are calculated by rounding up to nearest half hour.
function cost(mins) {
    if (mins < 0 || typeof (mins) !== 'number') return 'Enter correct number'
    const price35min = 10, price65min = 30;
    if (mins <= 65) {
        return price65min
    }
    if (mins <= 95 && mins > 65) {
        return price35min + price65min
    }
    if (mins > 95) {
        return (Math.ceil((mins - 95) / 30)) * price35min + (price35min + price65min)
    }
    //litle return 30 + ( mins>65 ?  Math.ceil((mins-65)/30) : 0 )*10
}

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(f => (f % 2 == 0) ? [f] : '')
}

//Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
let a = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
const removeConsecutiveDuplicates = s => {
    return s.split(' ')
        .filter((w, i) => w !== s.split(' ')[i + 1])
        .join(' ')
}
//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number
//Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.)
// obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// [01]
// 02 [03] 1 + 2 + 3 = 6 //2
// 04 05 [06] 3 + 3 + 6 = 12//3
// 07 08 09 [10] 6 + 4 + 10 = 20//4
// 11 12 13 14 [15] 10 + 5 + 15  35 //5
// 16 17 18 19 20 [21] 15 + 10 + 6 + 3 + 1 + 21 = 56 //6
// 22 23 24 25 26 27 [28] 21 + 15 + 10 + 6 + 3 + 1 + 28 = 84 //7

function sumTriangularNumbers(n) {
    let y = 0;
    let q = [0];
    for (let i = 1; i <= n; i++) {
        y += i; q[i-1] = y
    }
    return q.reduce((a, e)=> a + e)
}
//A twin prime is a prime number that differs from another prime number by 2.
// Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.

function isTwinPrime(n){
    function helper(n){
        let d = n-1;
        while (d > 1){
            if ((n % d) == 0) return false;
            d--;
        } return n > 1
    }
    if(!helper(n)) return false
    if(helper(n-2) || helper(n+2)){
        return true
    }
    return false
}
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

const stray = (n) => +n.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))


