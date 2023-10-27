// array3.js
let pos = "Hello, World".indexOf(","); //콤마의 위치 5반환 없으면 -1 을 반환하는게  indexOf
console.log(pos);

let names = ["콘","무지","라이언","어피치"]
pos = names.indexOf("무지");
if(pos == -1){            //없는 값일때는  -1 기억하기
    console.log("없는 이름입니다")
}else{
    console.log("무지는 " + (pos + 1) + "번째 위치에 있습니다" );
}

// 민식이라는 이름이 몇명인지
//{name: "", age: 20}
let members = [
    {name: "김민식", age: 22},
    {name: "최민식", age: 23},
    {name: "김우현", age: 26}
]

//내가한거
let search = "민식";
let count = 0;
members.forEach((member) =>{    //루핑 3번 반복
    if(member.name.indexOf("민식") < 0){
        console.log("찾음")
    } else {
        ++count  
    }
})
console.log(count + "명이 있습니다.");

//교수님이 한거
let cnt = 0;
members.forEach((member) => { 
    if(member.name.indexOf(search) > -1){
        cnt++;
    }
})
console.log(cnt + "명이 있습니다.")