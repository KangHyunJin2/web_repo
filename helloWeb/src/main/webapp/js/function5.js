//function5.js
let sum1 = 0;
[10, 20, 30].forEach(function(num) {  //적절한 값으로 item or num
	sum1 += num; //consumer : 매개값을 소진 , 변환값은 없음.
})
console.log('forEach:' + sum1);
sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary) { //acc는 초기값  reduce는 막강한 기능이 있다
	//console.log(acc, item ,idx);
	return acc + item; //function : 매개값을 소진, 반환값을 생성.
}, 0); //<--- acc
console.log('reduce:', sum1);


function sum(a = 0, b = 0, ...args) { //parameters 매개변수
	console.log(args);
	let result = 0;
	result = a + b;
	args.forEach(function(num) { result += num });  //+ args.forEach();
	return result;
	//  return a + b + args.reduce((acc,item) => acc + item); //화살표 함수
}
console.log(sum(10, 20, 30, 40, 50, 60)); //arguments .

//reduce 연습
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;

numAry.reduce(function(acc, item, idx, ary) {
	if(acc < item){
		return item;
	}
},0);
//max = unmAry.reduce((acc, item) => acc > item ? acc : item);

console.log('최대값 :', max)

