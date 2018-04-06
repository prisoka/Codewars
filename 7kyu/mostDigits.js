// Most digits

function findLongest(array){
  var result = 0;
  for (i=0; i<array.length; i++){
    if (array[i].toString().length>result.toString().length) {
    result = array[i];
    }
  }
  return result;
}
