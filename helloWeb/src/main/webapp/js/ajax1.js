// ajax1.js
// Asynchronous Javascript And XML:
//비동기 vs. 동기
//동기 방식 순차적으로 처리 a > b > c > d 이런식
import { table } from './ajaxMoule.js';

let friends = [];

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


//동기 방식
// friends.push('홍길동');
// friends.push('김길동');
// friends.push('최길동');

console.log(friends);



//보류
let newMember =//  
	{ mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999" };
// newMember 값을 활용해서 tbody="list" 추가.
//ajax 실행
let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServlet2');
xhtp.send();
xhtp.onload = loadJson;

function loadJson(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText); //Json 문자열 -> 오브
	console.log(result);
}

function loadXML() {
	console.log(xhtp.responseXML);
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')
	console.log(records);

	//   console.log(records[0].children[0].innerHTML);
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent, //mid. 아이디
			pass: record.children[1].textContent, //mid. 아이디
			name: record.children[2].textContent, //mid. 아이디
			phone: record.children[3].textContent //mid. 아이디
		}
		dataAry.push(obj);
	}
	let result = table.makeTable(titles, dataAry);
	console.log(result);

	let bbo = table.makeTr(newMember);

	document.getElementById('show').innerHTML += result;
	document.getElementById('list').innerHTML += bbo;
} // end of onload.


/*let tr = '<tr><td>' + newMember.mid +
		'</td><td>' + newMember.pass +
		'</td><td>' + newMember.name +
		'</td><td>' + newMember.phone*/