// ajax2.js
import {table} from './ajaxModule.js';

const xhtp = new XMLHttpRequest();
xhtp.open('get', '../AddMemberServ.html?mid=M009&pass=9999&name=Kim&phone=010-9876-0987');
xhtp.send();
xhtp.onload = function(){
	console.log(xhtp.responseText);
	
}
