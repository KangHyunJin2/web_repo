// ajax1.js
// Asynchronous Javascript And XML:
//비동기 vs. 동기
//동기 방식 순차적으로 처리 a > b > c > d 이런식
import { table } from './ajaxMoule.js';

let friends = [];
//동기 방식
friends.push('홍길동');
friends.push('김길동');
friends.push('최길동');
console.log(friends);

//비동기 : 작업이 끝나는 순으로 처리 효율적인 방식이다
setTimeout(function() {
	friends.push('홍길동');
}, 1000); // 1000ms 

setTimeout(function() {
	friends.push('김길동');
}, 500); // 500ms

setTimeout(function() {
	friends.push('최길동');
}, 2000); // 2000ms
console.log(friends);

// XML
//http://localhost:8080/helloWeb/js/ajax.html
//http://localhost:8080/helloWeb/MemberListServlet

// DB 
// CREATE TABLE MEMBER2 (
//     mid     varchar2(10)    PRIMARY KEY,
//     pass    varchar2(10)    NOT NULL,
//     name    varchar2(30)    NOT NULL,
//     phone   varchar2(13)    DEFAULT '010-1111-2222'
// );
// INSERT INTO MEMBER2
// VALUES('M001', '1111', '홍길동', '010-1234-5678');
// INSERT INTO MEMBER2
// VALUES('M002', '2222', '김길동', '010-4567-8763');
// INSERT INTO MEMBER2
// VALUES('M003', '3333', '최길동', '010-3210-7890');
// COMMIT;
// SELECT * FROM MEMBER2;

//보류
let newMember =// XML 꺼얌 
	{ mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999" };
// newMember 값을 활용해서 tbody="list" 추가.

let xhtp = new XMLHttpRequest();

// XML 실행
//xhtp.open('get', '../MemberListServ');
//xhtp.send();
//xhtp.onload = loadXML; 


let newMember2 = //JSON 꺼얌
		{ mid: "M006", pass: "9999", name: "미주", phone: "010-3355-5555"};
//JSON 실행
xhtp.open('get', '../MemberListServlet2');
xhtp.send();
xhtp.onload = loadJson;

function loadJson() {
	console.log(xhtp.responseText);
	
	let result = JSON.parse(xhtp.responseText); //Json 문자열 -> 오브
	
	console.log(result);
	
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	
	let tb = table.makeTable(titles, result);
	
	let newM = table.makeTb(newMember2);
	
	document.getElementById('show').innerHTML += tb;
	document.getElementById('list').innerHTMl += newM;
}


function loadXML() {
	console.log(xhtp.responseXML);
	
	let doc = xhtp.responseXML;
	
	let records = doc.getElementsByTagName('record');
	
	console.log(records);

	//   console.log(records[0].children[0].innerHTML);
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent,  //mid
			pass: record.children[1].textContent, //pass
			name: record.children[2].textContent, //name
			phone: record.children[3].textContent //phone
		}
		dataAry.push(obj);
	}
	let result = table.makeTable(titles, dataAry);
	
	console.log(result);

	let bbo = table.makeTr(newMember);

	document.getElementById('show').innerHTML += result;
	document.getElementById('list').innerHTML += bbo;
} // end of onload.


// filter 와 find 의 차이는 filter 는  조건에 시작하는 배열 전체를 가져오지만 find는 String 타입으로 하나만 가져옴
// some은 true , false 로 값을 반환하는 타입 한명이라도 조건에 맞으면 true 그와 반대로 every 는 모두가 조건에 맞아야 true , false 로 값을 반환한다
// findIndex 는 그냥 index 번호를 값을 반환
let ceoList = [
	{name:"Larry Page" , age:23 , ceo:true},
	{name:"Kang Jin", age:28 , ceo:false},
	{name:"Lee Ju" , age:32 , ceo:true}
	
]

let data1 = ceoList.filter((obj) => { //조건
	return obj.age == 23
})
console.log(data1);

let data = ceoList.map((obj) => {
	return obj;  //이름만 띄우고 싶을떄는 obj.name 
})
console.log(data)