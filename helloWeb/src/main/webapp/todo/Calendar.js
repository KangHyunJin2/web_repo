//Calendar.js

function makehead(){
	let cal = ['월','화','수','목','금','토','일'];
	let head = '';
	head += '<table border="1"><thead>';
	cal.forEach((item) => head += '<th>' + item + '</th>');
	head += '</thead>';
}
//cal.forEach((item) => console.log(item))

// makeHtml(calAry) {
//     let table = '<table border="1"><tbody>';
//     table += calAry.reduce((acc, cal) => {});

//     table += '</tbody></table>';
// }

const calendars = [
   week = {일,월,화,수,목,금,토}
]
console.log('ah');

week.makeHtml(calendars);
function makebody(){
	let body = '';
	body += '<tbody>';
	for(let i = 1; i <= 31; ++i){
		body +='<tr>' + i + '</tr>';
		if(i % 7){
			body += '<td></td>';
		
		body +='</tr>';
		body +='</tbdoy>'
	}
}
}
	const Calendar = [31,28,31,30,31,30,31,31,30,31,30,31];
