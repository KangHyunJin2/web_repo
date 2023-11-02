// student.js
//페이지 로딩되면서 바로 실행.
fetch('../studentList.do')
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	})
	.catch(err => console.log('err', err));
 
 

// 등록버튼 이벤트
document.querySelector('#addBtn').addEventListener('click', addCallback);


//수정버튼 이벤트 서블릿(db변경) - > 화면변경.
document.querySelector('#modBtn').addEventListener('click', modifyCallback);


// callback 함수
function addCallback(e) {
	//학생아이디 입력값.
	let sid = document.querySelector('input[name=sid]').value;
	let sname = document.querySelector('#sname').value;
	let pass = document.querySelector('input[name=pw]').value;
	let dept = document.querySelector('select[name=sdept]').value;
	let birthday = document.querySelector('input[name=birthday]').value;
	//				console.log(sid); //찍어보기

	let param = `id=${sid}&name=${sname}&password=${pass}&sdept=${dept}&birthday=${birthday}`;
	//				console.log(param); // 찍어보기

	//ajax 호출.
	//get: url패턴. 값의제한이있다.
	//fetch('../addStudent.do?' + param) // get방식

	//post: 파라미터 표현X 값의제한이없다X content -> type지정
	fetch('../addStudent.do', { //요청하는 url
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	}).then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				alert('성공');
				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: birthday })
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');
			}
		})
		.catch(err => console.log('err', err));
} //end of addCallback


function modifyCallback(e) {
	let id =    document.querySelector('.modal-body input[name=sid]').value;
	let pass =  document.querySelector('.modal-body input[name=pass]').value;;
	let name =  document.querySelector('.modal-body input[name=name]').value;;
	let birth = document.querySelector('.modal-body input[name=birth]').value;;
	let dept = null;
	let param = `id=${id}&name=${name}&password=${pass}&birthday=${birth}&dept=${dept}`;


	fetch('../editStudent.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	}).then(resolve => resolve.json())
		.then(result => {
			console.log(result);
			if (result.retCode == 'OK') {
				//result.vo.studentId;
				//let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId+']');
				//let newTr = makeTr(result.vo);
				//let parentElem = document.querySelector('#list');
				//parentElem.replaceChild(newTr, targetTr);
				//document.getElementBuId("myModal").style.display = 'none';
				alert('수정 성공');
				let trTags = document.getElementById('list').querySelectorAll('tr');
				trTags.forEach(obj =>{
					if (obj.childNodes[0].innerText == id){
						obj.childNodes[1].innerHTML = name;
						obj.childNodes[2].innerHTML = birth;
					}
				})
			} else {
				alert('수정 실패');
			}
		})
		.catch(err => console.log('err', err));


} //end of modifyCallback


//생성자함수 tr
function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday']
	let tr = document.createElement('tr');
	tr.addEventListener('dblclick', showModal);
	tr.setAttribute('data-sid', obj.studentId);

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}


	//				RemStudentServlet.do / delStudent.do
	//삭제 버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {
		// ajax 호출. -> 서블릿실행.
		fetch('../delStudent.do?sid=' + obj.studentId)
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				if (result.retCode == 'OK') {
					alert('삭제성공');
					tr.remove();
				} else {
					alert('삭제실패');
				}
			})
			.catch(err => console.log('error: ', err));
	})
	td.append(btn);
	tr.append(td);


	return tr;
}  // end makeTr

// 모달 보여주기
function showModal(e) {
	console.log(e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	id = this.dataset.sid; //data-sid': std1

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

	fetch("../getStudent.do?sid=" + id)
		.then(resolve => resolve.json())
		.then(result => {
			modal.style.display = "block";

			//let data = { id: "std1", name: "홍길동", pass: "1234", birth: "1995-04-01" };
			console.log(result.studentId);
			modal.querySelector('h2').innerHTML = result.studentName;
			modal.querySelector('input[name=pass]').value = result.studentPassword;
			modal.querySelector('input[name=name]').value = result.studentName;
			modal.querySelector('input[name=birth]').value = result.studentBirthday;
			modal.querySelector('input[name=sid]').value = result.studentId;
			
			
			console.log(modal.querySelector('input[name=sid]'));
			console.log(modal.querySelector('input[name=sid]').value);
		})

}
