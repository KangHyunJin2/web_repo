// ajax2.js
import { table } from './ajaxModule.js';

//onclick 이벤트 등록. <tutton onclick="addMember()";>
//member = {name:"Hong", age:20} member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e) { //e는 

	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;





	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		//사용자 입력값: reCode=OK => {vo: mid , pass, name, phone}
		//tr 생성해서 tb생성. 화면출력. id="list"의 innerHTML 속성활용.
		//retCode=NG => alert('처리중 에러')
		//console.log(typeof xhtp.responseText);

		let ret = JSON.parse(xhtp.responseText);
		if (ret.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(ret.vo);
		}
		else {
			alert("처리중 에러(회원아이디: " + ret.vo + ")")
		}

	}

}//end of function addMember(e).

function modMember() {

	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../ModMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText);
		console.log(result)
		// returncode: "OK/NG" , vo: mid,pass,name,phone
		// 데이터 영역의 tr
		console.log(document.querySelectorAll('#list tr'));
		document.querySelectorAll('#list tr').forEach(tr => {
			console.log(tr.childrens);
			if (tr.children[0].innerHTML == result.vo.mid) {
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;
			}
		})

	}
}


