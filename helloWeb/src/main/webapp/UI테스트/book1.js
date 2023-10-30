import {table} from './bookModule.js';

let books = [];

let xhtp = new XMLHttpRequest();

xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadJson;

function loadJson(){
	let result = JSON.parse(xhtp.responseText);
	
	console.log(result);
	let tr = "";
	result.forEach((acc) =>{
		let res = '<tr>';
		for(let prop in acc) {
			res += "<td>" + acc[prop] + "</td>"
		}
		res += '<td><button>삭제</button></td>';
		res += '</tr>';
		
		tr += res;
	})
	
	document.getElementById('body').innerHTML += tr;
}