// array5.js
console.log('펭수'  > '라이언'); //true
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지']
arr1.sort(function (a, b) {
    if (a < b) {
        return -1;
    } else {
        return 1;
    }
})
arr1.sort(); //가나다 순으로 정렬
console.log(arr1) //배열자체를 변경.

const arr2 = [4, 8, 1, 12, 24, 9]
arr2.sort(function (a, b) { //가나다순이지 
    if (a < b) {
        return -1;
    } else {
        return 1;
    }
});
console.log(arr2);

const json = `
[{"id":1,"first_name":"Eliza","email":"eduddle0@salon.com"},
{"id":2,"first_name":"Jody","email":"jtheriot1@redcross.org"},
{"id":8,"first_name":"Stevy","email":"sbangley7@51.la"},
{"id":9,"first_name":"Nonie","email":"nagneau8@phoca.cz"},
{"id":10,"first_name":"Florentia","email":"ffirpo9@senate.gov"}]
`; // json -> objectm, JSON.parse() 사용.
let members = JSON.parse(json);
members.sort(function(a,b){          //이름순으로 정렬
    if(a.first_name < b.first_name)
        return -1;
     else 
        return 1;
    
}).reverse(); //sort 의 역순

console.log(members);