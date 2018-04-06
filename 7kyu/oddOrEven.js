function oddOrEven(array) {
  var sumAll = array.reduce(function (a, b) {
  return a + b;
  }, 0);
  if(sumAll%2 === 0){
    return "even";
  } else {
    return "odd";
  }
}
