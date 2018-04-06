// Square every digit

function squareDigits(num){
  let result = [];
  let myStr = num.toString();

  for (i=0; i<myStr.length; i++){
  result.push(Math.pow(myStr[i],2));
  }
  return Number(result.join(""));
}
