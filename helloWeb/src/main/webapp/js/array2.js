//array2.js : MOCK_DATA.JSIN 파일 데이터 활용


const json = `
[{"id":1,"first_name":"Eliza","email":"eduddle0@salon.com"},
{"id":2,"first_name":"Jody","email":"jtheriot1@redcross.org"},
{"id":3,"first_name":"Dominique","email":"dbreckenridge2@webeden.co.uk"},
{"id":4,"first_name":"Jeana","email":"jsallowaye3@163.com"},
{"id":5,"first_name":"Micheline","email":"mlibbe4@joomla.org"},
{"id":6,"first_name":"Paddy","email":"pgreswell5@quantcast.com"},
{"id":7,"first_name":"Frayda","email":"fshill6@psu.edu"},
{"id":8,"first_name":"Stevy","email":"sbangley7@51.la"},
{"id":9,"first_name":"Nonie","email":"nagneau8@phoca.cz"},
{"id":10,"first_name":"Florentia","email":"ffirpo9@senate.gov"}]
`; // json -> object. JSON.parse() 사용. 문자열을 자바스크립트 객체타입으로 바꾸겠습니다.
let members = JSON.parse(json);
console.log(members);json

let delMember = "Micheline";
let yourinfo = {name:"Hong" , email: "hong@email.com"}
//삭제(splice)
// members.forEach((member,idx) => {
//     if(member.first_name == delMember){
//         member.splice(idx,1);
//     }
// })

members.forEach((member,idx) =>{
    if(member.first_name == delMember){
        members.splice(idx,1,{id: member.id, first_name: yourinfo.name, email: yourinfo.email});
    }
});

let inpVal = prompt("이름과 이메일 입력하세요 예) 홍길동, hong@email.com");
console.log(inpVal);

const infoAry = inpVal.split(',');
let nid = members[members.length -1].id + 1;
let newMember = {id:nid, first_name: infoAry[0], email: infoAry[1].trim()};
//배열에 추가
members.push(newMember);
//member.splice(members.length, 0 , newMember);
console.log(members);


//배열안에 배열
const dupAry = [["라이언" , 5], ["어피치", 3], ["콘", 2] , ["무지", 4]];
console.log(dupAry);
console.table(dupAry); // 콘솔창에 테이블 형태로 만들어준다 

