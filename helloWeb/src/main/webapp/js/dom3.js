//dom3.js
// table>(thead>re>th*5)+(tbody>tr>td*5) *건수;
import table from './domTable.js';


let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=giBP07s5R8iY1FIU00JpkDiceZkxbXDFcBVWk1Qws2eTMFkxRcXP11nGYxQZVZI%2FgHch1qbxswUqDvD7J9OAHQ%3D%3D';
let titles = ['센터id','센터명','의료원','연락처'];

fetch(url)
	// function(resolve) {return resolve.Json()} 풀어서 쓰면 이렇다
	.then(resolve => resolve.json()) 
	.then(fetchCallback)
	.catch(err => {console.log('에러잉:' , err)});
	
// fetch 호출되는 함수. callback함수.
function fetchCallback(result) { 
		let rawData = result.data; //원래데이터
		console.log('hhhh' ,rawData[0]);
		
		let sidoAry = []; // sidoAry에 sido 정보를 중복된 값제거.
		rawData.forEach((center) =>{
			if(sidoAry.indexOf(center.sido) == -1){  //존재하지 않으면 -1 반환
				sidoAry.push(center.sido);
			}
		})
		console.log(sidoAry);
		
		
		let selectTag = document.getElementById('sidoList');
		sidoAry.forEach(sido =>{
			let opt = document.createElement('option');
			opt.innerHTML = sido;
			selectTag.append(opt);
		})
		// select 태그에 change이벤트 발생.
		selectTag.addEventListener('change',changCallback);
		function changCallback(e){
			console.log(e.target.value);
			let searchSido = e.target.value;
			//선택된 시도 값에 맞는 센터명만 출력
			let filterAry = rawData.filter(center => center.sido == searchSido);
			genTable(filterAry);
			
		}
		
		genTable(rawData); //초기데이터로 화면출력
//		let filterAry = rawData.filter(center => center.sido == '대전광역시');
//		let filterAry = rawData.filter((center,idx) => idx < 10); //인덱스 값으로
//		genTable(filterAry);
}

	
function genTable(rawData = [], page = 1){
	//초기화
	//document.getElementById('show') //엘리먼트 아이디 쓰고 싶으면 이거
	document.querySelector('#show').innerHTML = '';

	//첫번째, 마지막 => 계산
	let startNo = (page - 1) * 5;
	let endNo = page * 5;
		
		// 첫번째, 마지막 페이지 =>  계산.
	let totalCnt = rawData.length;
	let lastPage = Math.ceil(totalCnt / 5);
	let endPage = Math.ceil(page/5) * 5;
	let beginPage = endPage -4;
	let prevPage=false, nextPage =false;
	
	
	if(beginPage > 1){
		prevPage = true;
	}
	if(endPage < lastPage){
		nextPage = true;
	}
	if(endPage > lastPage){
		endPage = lastPage;
	}
	document.querySelector('.pagination').innerHTML = '';
	
	//이전페이지
	if(prevPage){
		let aTag = document.createElement('a');
		aTag.setAttribute('href' , '#');
		aTag.innerHTML = '&laquo;';
		aTag.addEventListener('click' , function(e){
			genTable(rawData, beginPage -1);
		})
		document.querySelector('.pagination').append(aTag);
	}
	
	
	//전체페이지
	for(let i = beginPage; i <= endPage; i++){
		let aTag = document.createElement('a');
		aTag.setAttribute('href' , '#');
		aTag.innerHTML = i;
		if(i == page){
			aTag.setAttribute('class' ,'active')
		}
		
		aTag.addEventListener('click' , function(e){
			genTable(rawData, i);
		})
		document.querySelector('.pagination').append(aTag);
	}
	
	//이후페이지
	if(nextPage){
		let aTag = document.createElement('a');
		aTag.setAttribute('href' , '#');
		aTag.innerHTML = '&raquo;';
		aTag.addEventListener('click' , function(e){
			genTable(rawData, beginPage + 5);
		})
		document.querySelector('.pagination').append(aTag);
	}

		
	let thead = table.makeHead(titles);  // 10개 씩 담아서 출력
	let mapData = rawData.reduce((acc, center, idx) => {
		if (idx >= startNo && idx < endNo) {
			let newCenter = {
				id: center.id,
				centerName: center.centerName.replace('코로나19 ', ''),
				org: center.org,
				phoneNumber: center.phoneNumber,
				lat: center.lat,
				lng: center.lng
			}
			acc.push(newCenter) //새로 생성됨 newCenter를 배열에 담는다
		}
		return acc; //추가된 배열을 반환해서 다음순번의 처리에 acc로 사용
	}, []);
		
	
	let tbody = table.makeBody(mapData); // [{},{},{}.....{}]
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl);
	//		console.log(tbody); 값이 안나와서 찍어봄

	// tr 클릭이벤트등록.
	let targetTr = document.querySelectorAll('tbody tr')
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			let lat = tr.dataset.lat;
			let lng = tr.dataset.lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);
			//				location.href = 'daumapi.html?x=' + lat + '&y=' + lng;				
		})
	})
}
/*	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

	var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴*/
