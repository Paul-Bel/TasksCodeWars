//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n,
// your task is to find the sum of the minimum values in each row.
const sumOfMinimums = (arr) =>
    arr.map(m=> Math.min(...m))
        .reduce((a, el)=> a+el)

//Write a function that doubles every second integer in a list, starting from the left.
const doubleEveryOther = (a) => {
    return  a.reduce((acc, el, i) => {
        return i % 2 === 0 ? acc = [...acc, el] : acc = [...acc, el*2]
    }, []);
}
//