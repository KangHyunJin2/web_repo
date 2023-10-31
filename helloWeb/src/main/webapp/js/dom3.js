//dom3.js
// table>(thead>re>th*5)+(tbody>tr>td*5) *건수;
import table from './domTable.js';


let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=giBP07s5R8iY1FIU00JpkDiceZkxbXDFcBVWk1Qws2eTMFkxRcXP11nGYxQZVZI%2FgHch1qbxswUqDvD7J9OAHQ%3D%3D';
let titles = ['센터id','센터명','의료원','연락처','위도','경도'];

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
//			console.log(filterAry);
			
		}
		
		//genTable(filterAry); //초기데이터로 화면출력
//		let filterAry = rawData.filter(center => center.sido == '대전광역시');
		let filterAry = rawData.filter((center,idx) => idx < 10); //인덱스 값으로
		genTable(filterAry);
}
	
function genTable(rawData = []){
		//초기화
		//document.getElementById('show') //엘리먼트 아이디 쓰고 싶으면 이거
		document.querySelector('#show').innerHTML = '';
		//전체 rawData로 출력.
/*		let thead = table.makeHead(titles); //헤더정보
		let mapData = rawData.map(center =>{ //매핑정보 출력.
			let newCenter = {
				id: center.id,
				centerName: center.centerName.replace('코로나19 ' , ''),
				org: center.org,
				phoneNumber: center.phoneNumber,
				lat: center.lat,
				lng: center.lng
			}
			return newCenter;
		});*/
		
		let thead = table.makeHead(titles);
		let mapData = rawData.reduce((acc , center) => {
			let newCenter = {
				id: center.id,
				centerName: center.centerName.replace('코로나19 ' , ''),
				org: center.org,
				phoneNumber: center.phoneNumber,
				lat: center.lat,
				lng: center.lng
			}
			acc.push(newCenter)
			return acc;
		},[]);
		
		
		let tbody = table.makeBody(mapData); // [{},{},{}.....{}]
		let tbl = document.createElement('table');
		tbl.setAttribute('border', '1');
		tbl.append(thead,tbody);
		document.querySelector('#show').append(tbl); 
//		console.log(tbody); 값이 안나와서 찍어봄

		// tr 클릭이벤트등록.
		let targetTr = document.querySelectorAll('tbody tr')
		targetTr.forEach(tr => {
			tr.addEventListener('click', function(e){
				let lat = tr.children[4].innerHTML;
				let lng = tr.children[5].innerHTML;
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
