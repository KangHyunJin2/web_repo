//function2.js
console.log('function2.js');
//Member member = new Member() 자바에선 이거
const member = {
    name:"홍길동",
    age: 18,
    height: 178.9, //속성 필드
    showInfo: function(){
//        console.log(`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)  // 자신이 가지고있는 객체 속성 this
        return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)  // 
    }
}

const member1 = {
    name:"김길동",
    age: 19,
    height: 179.9, //속성 필드
    showInfo: function(){
//        console.log(`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)  // 자신이 가지고있는 객체 속성 this
        return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)  // 
    }
}

const member2 = {
    name:"박길동",
    age: 20,
    height: 180.9, //속성 필드
    showInfo: function(){
//        console.log(`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)  // 자신이 가지고있는 객체 속성 this
        return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`)  // 
    }
}
const members = [member, member1, member2]
//member.showInfo();

// DOM : document Object Medel
let show = document.getElementById('show'); // table>(thead>tr>th*2) + (tbody>tr>td*2) html 테이블 단축키
let str = "";
//코드작성
str += '<table border="1"><tbody>';
members.forEach(function(item, idx){
    str += makeTr(item);
})
str += '</tbody></table>';
console.log(str); 

//show.innerHTML = "<ul><li>Apple</li><li>Banana</li></ul>"; //화면에 나타남
//show.innerTEXT = "<ul><li>Apple</li><li>Banana</li></ul>"; //텍스트로 모양으로 화면에 나타남
show.innerHTML = str; // table>tbody>(tr>td*4)*3

function makeTr(member={name ,age ,height , showInfo}){  // member = {} ->  object 타입  {} 안에 적어 놓으면 구분,알아보기 쉽다 없어도 된다
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>';
    return html;
}
console.log(makeTr(member));


