function powersOfTwo (n){
	let myArr = [];
	for(var i = 0; i <= n; i++){
		let num = (Math.pow(2,i));
		myArr.push(num);
	}
	return myArr;
}
