// array4.js

const json = `
[{"id":1,"first_name":"Eliza","email":"eduddle0@salon.com"},
{"id":2,"first_name":"Jody","email":"jtheriot1@redcross.org"},
{"id":8,"first_name":"Stevy","email":"sbangley7@51.la"},
{"id":9,"first_name":"Nonie","email":"nagneau8@phoca.cz"},
{"id":10,"first_name":"Florentia","email":"ffirpo9@senate.gov"}]
`; // json -> objectm, JSON.parse() 사용.

let members = JSON.parse(json);

//1)하나만 찾고싶을때 find() 메서드
let result = members.find(function (item, idx, ary) { //매개값으로는 함수
    if (item.id > 5) {
        return true;
    }
    return false;
    // return item.id > 5;  //return을 빼고 if 써도 됨
});

//2)filter
result = members.filter((item, idx) => { //화살표임
    return idx >= 1 && idx < 3; //ture 값을 반환
})

//3)reduce
result = members.reduce((acc, item, idx) => {
    if (idx >= 1 && idx < 3) {
        acc.push(item);
    }
    return acc;
}, [0])
//console.log(result);
// 4) some, every => true / false;
result = members.every((member) => {
    console.log(member)
    return member.first_name.length > 5;
})
//console.log(result);

// 5) map : A -> B
result =  members.map(member =>{
    let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'}
    return obj;
});

console.log(result);

