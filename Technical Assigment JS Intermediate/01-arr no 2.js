// Soal - 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(num) {
  const average = num.reduce((a,b) => a+b)/num.length;
  let bil = 0;
  num.forEach(i => {
    if(i > average)
      bil++;
  });
  return bil;
 }

console.log(getAverage(arr1))
console.log(getAverage(arr2))

