//testObj.js

const cal = {
	weeks: ['일','월','화','수','목','금','토'],
	
	
	makeHead(){
		let headHtml = '<table border="1"><thead><tr>';
		
		this.weeks.forEach((obj) =>{
			headHtml += '<th>' + obj + '</th>';
		});
		
		headHtml += '</tr></thead>';
		return headHtml;
	},
	
	makeBody(){
		let bodyHtml = this.makeHead();
		
		const today = new Date();
		
		bodyHtml += "<tbody>";
		
		let idx = 1;
		
		for(let i = 1; i <=30; ++i, ++idx){
			if(idx ==1){
				bodyHtml += "<tr>";
				bodyHtml += "<td>" + i + "</td>";
				
			}
			else if (idx == 7){
				bodyHtml += "<td>" + i + "</td>";
				bodyHtml += "</tr>";
				idx = 0;
			}
			else{
				if(i != today.getDate()){
					bodyHtml += "<td>" + i + "</td>";
				}
				else {
					bodyHtml += "<td id='today'>" + i + "</td>";
				}
			}
		}
		bodyHtml += "</tbody>";
		return bodyHtml;
	},
	showCalendar(){
		document.getElementById('show').innerHTML = this.makeBody();
	}
}

cal.showCalendar();