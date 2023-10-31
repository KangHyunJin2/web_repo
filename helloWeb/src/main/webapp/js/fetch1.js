// fetch1.js
//https://poiemaweb.com/

import { table } from './ajaxModule.js';

fetch('../MemberListServlet2')
.then((resolve) =>{
    console.log(resolve);
    return resolve.json(); // json -> object
})

.then((result) =>{
    console.log(result);
    let titles = ["회원번호", "비밀번호", "이름", "연락처"];
    let dataAry = result;
    
    result = table.makeTable(titles, dataAry);
    document.getElementById('show').innerHTML = result;
})

.catch((err) =>{
    console.log('error: ' , err);
})

