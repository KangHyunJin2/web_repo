//test2.js

//head
const today = new Date();
console.log(today.getDate());

function makeHead(){
	const days = ['일','월','화','수','목','금','토','일']
	return days.reduce((acc,day) => {
		return acc + '<th>' + day + '</th>';
	}, '<thead><tr>')
}


function makeBody(){
	let tbody = '</thead><tbody><tr>';
	for(let i = 1; i <= 30; i++){
		console.log(i);
		
		let styles = '';
		if(i & 7 == 1){
			styles = '';
			if(i == today.getDate()){
				styles += 'font-weight: bolder';
			}
			tbody += '<td style="' + styles + '"align="right">' + i + '</td>';
		} else {
			if(i == today.getDate()){
				
			}
		}
		if(i % 7 == 0){
			tbody += '</tr><tr>'
		}
		
	}
	tbody += '</tr></tbody>';
	return tbody;
}
function novemberCal(){
	let thead = makeHead();
	let tbody = makeBody();
	let table = '<table border="1">' + thead + tbody + '</table>'
	document.getElementById('show').innerHTML = table;
}
novemberCal();