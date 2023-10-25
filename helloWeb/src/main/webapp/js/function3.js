// function3.js

function Member(name, age, height) { //3개의 매개값
	console.log(this); //this는 최상위 윈도우 객체
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function () {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다`;
	}
}
var myName = 'Hong';
const member = new Member('홍길동', 20, 123.4); // 여기 this 객체자신
console.log(member.showInfo());
window.alert('하윙') //제일 상위 window

const members = [
	new Member('홍길동', 18, 123.3),
	new Member('김길동', 19, 124.3),
	new Member('박길동', 20, 125.3)
]

// 함수: table 생성.

let str = '';
str += '<table border="1"><tbody>';
str += makeTable(members)
str += '</tbody></table>';
console.log(str);

show.innerHTML = str;

function makeTable(memberAry = []) {
	let html = '';
	memberAry.forEach(function (item) {
		html += '<tr>';
		html += '<td>' + item.name + '</td>';
		html += '<td>' + item.age + '</td>';
		html += '<td>' + item.height + '</td>';
		html += '<td>' + item.showInfo() + '</td>';
		html += '</tr>';
	})
	return html;
} 
makeTable(members);