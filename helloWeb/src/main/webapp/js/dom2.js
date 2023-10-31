// dom2.js


//#show>table>tbody>(tr>td:사과+td:1000)+(tr>td:복숭아+td:1500)
const fruits = [
	{name: "사과", price: 1000, farmer: '홍길동'},
	{name: "복숭아", price: 1500, farmer: '김민서'},
	{name: "포도", price: 2000, farmer: '최말숙'},
	{name: "수박", price: 3000, farmer: '김선중'}
]

const table = document.createElement('table');
const tbody = document.createElement('tbody');
tb1.setAttribute('border', '1'); //<table border='1'>

fruits.forEach((obj) =>{
    const tr = document.createElement('tr');
    for(let prop in obj){
        const td1 = document.createElement('td');
        td1.innerHTML = obj[prop];
        tr.appendChild(td1);
    }
    tdb.appendChild(tr);
})
tb1.appendChild(tdb);
document.querySelector('#show').appendChild(tb1);


fruits.forEach((obj) =>{
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerHTML = obj.name;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = obj.price;
    tr.appendChild(td2);

    tbd.appendchild(tr); //tbody에 tr을 하위요소로 등록
})
tb1.appendChild(tbd);  // table 에 tbody를 하위요소로 등록
document.querySelector('#show').appendChild(tb1);


