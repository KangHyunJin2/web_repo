// dom1.js

const fruits = ['수박', '사과', '복숭아', '포도'];

// #show>ul>li:수박+li:사과+li:복숭아+li:포도
// createElement, appendChild, innerHTML 속성.



let fruitul = document.createElement('ul');
document.getElementById('show').appendChild(fruitul);


document.querySelector('ul').appendChild(li5);
let li5 = document.createElement('li')
li5.innerHTML = "애플망고";

fruits.forEach((item) => {
	let fruitli = document.createElement('li');
	fruitli.innerHTML = item;

	fruitli.appendChild(fruitul);
})

// ul생성
const ul = document.createElement('ul');
// li 생성
fruits.forEach(fruit => {
	const li = document.createElement('li'); //<li></li>
	li.innerHTML = fruit; //<li>수박</li>  수박찍고
	ul.appendChild(li);  // <ul><li>수박</li></ul>
})

document.getElementById('show').appendChild(ul);







