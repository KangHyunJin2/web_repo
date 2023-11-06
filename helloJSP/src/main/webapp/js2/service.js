/**
 * 
 */


// async function studentList() {
// 	let req = await fetch('../studentList.do'); //await 다처리되기 까지 기다림
// 	let json = await req.json(); // 얘도 데이터 다 처리될때까지 기다려!! // {"retCode":"OK"} -> {retCode: "OK"}
// 	let tbody = document.querySelector('#list');
// 	try {
// 		json.forEach(student => {
// 			tbody.append(makeTr(student));
// 		})
// 	} catch (err) {
// 		console.log('err=>', err);
// 	}
// }
export default {
	//목록처리.
	async studentList(successCallback, errorCallback) { //리스트라는 메서드 만들고
		let req = await fetch('../studentList.do');
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},

	//단건조회
	async getStudent(id, successCallback, errorCallback) {
		let req = await fetch('../getStudent.do?sid=' + id);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},

	//등록.
	async addStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../addStudent.do', optObj);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},

	//수정.
	async editStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../editStudent.do', optObj);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},

	//삭제.
	async removeStudent(id, successCallback, errorCallback) {
		let req = await fetch('../delStudent.do', id);
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	}
}