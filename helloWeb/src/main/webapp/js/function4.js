//function4.js
//생성자 함수.. Member
function Member(name , age , height){
    this.name = name;
    this.age =age;
    this.height = height;
    this.showInfo = function () {
		return `이름은 ${this.name}이고 나이는 ${this.age}세 입니다`;
	}
}

//makeTr 함수.
function makeTr(member){
    let str = '';
    str += '<tr>';
    str += '<td>' + member.name + '</td>';
    str += '<td>' + member.age + '</td>';
    str += '<td>' + member.height + '</td>';
    str += '<td>' + member.showInfo() + '</td>';
    str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
    str += '</tr>';
    return str;
}

//onclick은 dom 아무곳에 써도 된다 
document.getElementById('saveBtn').onclick = function(e){
    console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

    
    const mem = new Member(name, age, height);
    str = makeTr(mem);

    //덮어씌어지지않고 저장 += 쓴다
    document.getElementById('list').innerHTML += str;
   
    //입력초기화. 시켜서 다시 등록
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('height').value = "";
    document.getElementById('name').focus();

    // function Member()... , makeTr(member),
}