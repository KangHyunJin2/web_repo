/**
 * 
 */

let str1 = "Hello"; // 기본데이터타입
let str2 = new String("Hello"); //객체

console.log(typeof str1, typeof str2);
console.log(str1 == str2); //값만 비교
console.log(str1 === str2); //값 & 타입 비교

console.log(str1.toUpperCase());

let result = " 공백 제거 합니다.      ".trim();
console.log(result, ' 문자갯수', result.length);

// 이거 외우기
// trim() , trimStart() , trimEnd()
// replace(), split(), slice(), substring(), substr()
// toString() , indexof() , lastIndexof(), charAt() , includes()
// concat(),

result = "Hello, World, Nice, World".replace(',','.'); 
console.log(result);

result = "Hello, World, Nice, World".replace(/,/g, '.');  //  /\s/ <- 공백찾아서 재제거 
console.log(result)
//[] , {}  /값/ <- 정규 표현식
//trimStart
const greeting = '         Hello world!     ';
console.log(greeting);
console.log(greeting.trimStart());  // 문자열 앞에 공백 제거
//trimEnd
const greeting1 = ' Hello world!    ';
console.log(greeting);
console.log(greeting.trimEnd());  // 문자열 뒤에 공백만 제거
//replace
const  p = 'dog cat';
console.log(p.replace('dog','monkey')); //문자열을 다시 정의 덮어씌우기?
//split
const str = 'Hey!! where you guys from?'; // 문자배열안에 n번째를 출력
const words = str.split(' ');
console.log(words[3]);
const chars = str.split(' ');             //같은놈이다
console.log(chars[1]);
const strCopy = str.split();               // 문자열 다 나온다
console.log(strCopy);
//slice
const animals = ['ant' , 'bison' , 'camel' , 'duck' , 'elephant'];
console.log(animals.slice(2)); // 2까지 자르고 시작 camel 부터 나옴
console.log(animals.slice(2,4)); // 2부터 4미만 camel, duck
//substring
const str3 = 'Mozilla';
console.log(str3.substring(1,3)); //oz    
console.log(str3.substring(2));  //zilla
//substr 얘는 나가리 끝을 포함한다 (1,2) // oz
//toString
const event = new Date('August 19, 1975 23:15:30'); 
console.log(event.toString());  // 값을 가져오는 아이
//indexof
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 값은 1이다 숫자로 반환









