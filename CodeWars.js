
//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n,
// your task is to find the sum of the minimum values in each row.
const sumOfMinimums = (arr) =>
    arr.map(m=> Math.min(...m))
        .reduce((a, el)=> a+el)
