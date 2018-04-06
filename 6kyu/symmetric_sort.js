// Give you a number ```array```(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

// rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...

function sc(array){

  let sortedArr = array.sort(function (a,b){
    return a-b;
  });
  // console.log(sortedArr);

  let oddNumArr = [];
  let evenNumArr = [];

  for (let i=0; i<sortedArr.length; i++){
    if (i%2 === 0){
      evenNumArr.push(sortedArr[i]);
    } else {
      oddNumArr.push(sortedArr[i]);
    }
  }

  let endArr = oddNumArr.reverse();

  return evenNumArr.concat(endArr);
}

// sc([1,2,3,4,5,6,7,8,9]);
