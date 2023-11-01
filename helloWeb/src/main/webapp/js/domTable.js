// domTable.js


// 이거 기억하기

export default{
	hiddenFields: ['lat', 'lng'],
	makeHead: function(titles= ['아이디','센터명']){
		// thead>tr>th*n
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		titles.forEach(title =>{
			let th = document.createElement('th');
			th.innerHTML = title;
			tr.append(th);
		})
		thead.append(tr);
		return thead;
	},

	makeBody: function(dataAry = []){
		let tbody = document.createElement('tbody');
		dataAry.forEach(item =>{
			tbody.appendChild(this.makeTr(item));
		})
		
		return tbody;
	},
	
	makeTr: function(center = {}){
		let tr = document.createElement('tr');
		tr.setAttribute('data-lat', center.lat);// tr.dataset.lat
		tr.setAttribute('data-lng', center.lng);// tr.dataset.lng
		
		for(let prop in center){
			if(this.hiddenFields.indexOf(prop) > -1){
				continue;
			}
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}
}