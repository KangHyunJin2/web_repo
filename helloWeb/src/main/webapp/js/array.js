//array1.js
//push 배열 마지막에 추가
//https://www.mockaroo.com/
const arr1 = []
arr1.push(10);
arr1.push('ten');
arr1.push({name:"Hong", age:20});

//unshift  배열 계열 앞쪽에 추가
arr1.unshift(20);

console.log('크기:', arr1.length); //배열의 크기
//arr1.length = 5; //크기를 지정. 줄일수도 있음 


arr1.pop(); //pop 뒤에서 부터 제거 arr1.shift() => 앞에서부터 제거 

arr1.splice(3, 2, 50,60); //매개값으로 추가, 삭제, 수정

for(let ary of arr1){  //배열 for문 으로 돌림
    console.log(ary);
}
