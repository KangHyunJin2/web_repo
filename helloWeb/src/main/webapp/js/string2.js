// string2.js

const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, adipisci error quo nostrum, aliquam dolores obcaecati, necessitatibus eum consequuntur alias reprehenderit aliquid possimus expedita sed reiciendis veniam deserunt? Quasi, commodi.'
//1 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔출력

const result = words.split(' ').filter((word) => word.length > 5);
result.forEach((acc) => console.log(acc));


//2 생년월일 입력 => 남자/ 여자,
function checkGender(ssn) {
	// 950305-1678532   , 
	// 950305 1678532,
	// 9 5 0305 1678532

	//950305-1678532, 
	//9503051678532,
	//950305167853


	ssn = ssn.trim();
	ssn = ssn.split(' ').filter(el => el != '').join('');

	let = gender = '';
	if (ssn.indexOf("-") > 0) {
		gender = ssn[7]
	}
	else {
		gender = ssn[6]
	}
	
	if (gender == "1" || gender == "3") {
		gender = "남자";
	}
	else {
		gender = "여자";
	}
	return gender

	//return '남자' || '여자';
}

console.log(checkGender("960501-1176898"));



// 3. 파일명과 파일의 확장자.
let file = "d:/temp/sample/book.xls";
let fileName = '';
let fileExt = '';

let idx = file.lastIndexOf('/');
if (idx < 0) {
	FileSplit = file.split('.');
}
else {
	FileSplit = file.substring(idx + 1, file.length).split('.');
}

fileName = FileSplit[0];
fileExt = FileSplit[1];

console.log(fileName);
console.log(fileExt);

