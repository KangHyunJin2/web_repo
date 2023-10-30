// bookModule.js

const table = {
	
	makeHead(titles = ['도서코드','도서명','저자','출판사','가격','삭제']){
		let headTag = "<thead><tr>";
		titles.forEach(title =>{
			headTag += "<th>" + title + "</th>";
		})
		
		headTag += "</thead></tr>";
		return headTag;
	},
	
	makeBody(dataAry = [{code,title,author,press,price}]){
		let bodyTag = "<tbody id='list>";
		dataAry.forEach(item =>{
			bodyTag += this.makeTr(item);
		})
		bodyTag += "<tbody>";
		return bodyTag;
	},
	
	makeTable(titleAry , dataAry){
		let tableTag = "<table border='1'>";
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	},
	
/*	makeTr(data = {code,title,author,press,price}){
		let tr = "<tr onclick='showInfo(event, this)'>";
		for(let prop in data){
			tr += "<td>" + data[prop] + "</td>";
		}
		tr += "</tr>";
		return tr;
	}*/
}
export{table};