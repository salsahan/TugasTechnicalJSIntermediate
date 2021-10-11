// Soal - 03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];
  
function searchInArray(data, num) {  

    let newData = [].concat(...data);
    for(let i = 0; i < newData.length; i++){  
      if(newData[i] == num)
            return i;
    }
        return null;

}
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  