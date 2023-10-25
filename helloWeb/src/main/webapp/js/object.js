// object.js
console.log('object start....');

let obj1 = {
	name: 'Hong',
	age: 20
}
// 주소 참조 
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);

//복사. 참조가 아님 obj의 값을 가지고 새로운 값을 생성
let obj3 = { ...obj1 }; //obj1 을 펼쳐서 obj3를 만듬
obj3.age = 24;
console.log(obj1);


// 클래스.
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;
	}
	getWeight() {
		return this.weight;
	}
	showInfo() {
		return `이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`
	}
	//학생의 정보: 학생번호 ,이름 , 영어 ,수학.
	makeTr(student={sno,sname,engScore,mathScore}){
		//tr>td*4
        let str ='';
        str += '<tr>';
        str += '<td>' + student.sno + '</td>';
        str += '<td>' + student.sname + '</td>';
        str += '<td>' + student.engScore + '</td>';
        str += '<td>' + student.mathScore + '</td>';
        str += '</tr>';
        return str;
	}
	makeHtml(studAry=[]){
		//html생성
		let table = '<table border="1"><tbody>';
		table += studAry.reduce((acc,stud) => acc + this.makeTr(stud), '');
		table += '</tbody></table>';
		this.html = table;
		
/*		let obj = this;
		table += studAry.reduce(function(acc,stud){
			return acc + this.makeTr(stud)
		}, '');
		
		let html = '';
        html += '<table border="1">';
        html += '<tbody>';
        studAry.forEach(function(item){
			console.log(item)
			html += this.makeTr(item);
		})
		studAry.reduce((acc,stud) => acc + this.makeTr(stud));
        html += '</tbody>';
        html += '</table>';*/
  
	}
	showPage(dom){
		//innerHtml 속성에 html 저장
		dom.innerHTML = this.html;
//        dom.innerHTML += html;
	}
}
const mem1 = new Member('홍길동',20,156.7);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동 몸무게는' , mem1.getWeight(), 'kg입니다.');
