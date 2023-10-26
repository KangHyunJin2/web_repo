// string3.js

let today = new Date(); // Date 내장객체.
today.getFullYear(); // 2023
today.getMonth(); // +1
today.getDate(); // 26

//날짜 변경.
today.setFullYear(2022);
today.setMonth(10); // 이건 1월달
today.setDate(11);
today.setHours(20);

console.log(today.toString); // 우리나라는 -9 시간

function dateFormat(today){
    // yyyy-MM-dd hh24:mm:ss
    return today.getFullYear()+"-"+ ("0" + (today.getMonth() + 1)).slice(-2)
    + "-"+ ("0" + today.getDate()).slice(-2)+" "+today.getHours()
    + ":"+today.getMinutes()+":"+today.getSeconds();


}
console.log(dateFormat(today));