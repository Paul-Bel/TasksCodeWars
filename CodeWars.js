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
// Time	Cost
// Up to 1st hour	$30
// Every subsequent half hour**	$10
// ** Subsequent charges are calculated by rounding up to nearest half hour.
function cost (mins) {
    if(mins < 0 || typeof(mins) !== 'number') return 'Enter correct number'
    const price35min = 10, price65min = 30;
    if(mins <= 65){return price65min}
    if(mins <= 95 && mins > 65 ){return price35min + price65min}
    if(mins > 95){return (Math.ceil((mins-95) / 30))*price35min+(price35min+price65min)}
    //litle return 30 + ( mins>65 ?  Math.ceil((mins-65)/30) : 0 )*10
}
