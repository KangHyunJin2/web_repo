//CalendarObj.js


const cal = {
	weeks: ['일', '월', '화', '수', '목', '금', '토'],


	// <table>
	// <thead>
	// 		<tr>
	// 		<th>일</th>
	// 		<th>월</th>
	// 		<th>화</th>
	// 		<th>수</th>
	// 		<th>목</th>
	// 		<th>금</th>
	// 		<th>토</th>
	// 	</tr>
	// </thead>
	makeHead() {
		let headHtml = '<table border="1"><thead><tr>';

		this.weeks.forEach((obj) => {
			headHtml += '<th>' + obj + '</th>';
		});

		headHtml += '</tr></thead>';
		return headHtml;
	},

	makeBody() {
		let bodyHtml = this.makeHead();

		const today = new Date();

		bodyHtml += "<tbody>";
		// <tr>
		let idx = 1; 
		for(let i = 1; i <= 31; ++i, ++idx) {
			if(idx == 1) {
				bodyHtml += "<tr>";
				bodyHtml += "<td class='sunday'>" + i + "</td>";
			}
			else if(idx == 7) {
				bodyHtml += "<td class='saturday'>" + i + "</td>";
				bodyHtml += "</tr>";
				idx = 0;
			}
			else {
				if(i != today.getDate()) {
					bodyHtml += "<td>" + i + "</td>";
				}
				else {
					bodyHtml += "<td id='today'>" + i + "</td>";
				}
			}
		}
		// </tr>
		bodyHtml += "</tbody>";
		return bodyHtml;
	},

	showCalendar() {
		 document.getElementById('show').innerHTML = this.makeBody();
	}
}

 
 cal.showCalendar();
 export {cal}