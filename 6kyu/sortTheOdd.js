// Sort the Odd

function sortArray(array) {
  let oddNum = array.filter(isOdd).sort(ascending);
  return array.map(newArr);

  function ascending(a,b){
    return a>b;
  }

  function isOdd(number){
    return number%2;
  }

  function newArr(number){
    return isOdd(number)? oddNum.shift() : number;
  }

}
