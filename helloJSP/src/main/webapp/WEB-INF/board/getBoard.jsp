<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<style>
	#list span{
	margin: 20px;
	
	}
	</style>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>
<%
BoardVO vo = (BoardVO) request.getAttribute("bno");
%>
<h3>상세화면(조회화면)</h3>
<form action="modifyForm.do" name="myfrm">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo"><%=vo.getBoardNo()%></td>
			<th>작성일시</th>
			<td><%=vo.getWriterDate()%></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<td colspan="4"><textarea rows="5" cols="40"><%=vo.getContent()%></textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<%
			if (vo.getImage() != null) {
			%>
			<td colspan="3"><img style="align: center;" width="100px"
				src="images/<%=vo.getImage()%>"></td>
			<%
			} else {
			%>
			<td colspan="3"></td>
			<%
			}
			%>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<%
				if (logId != null && logId.equals(vo.getWriter())) {
				%> <input
				type="submit" class="btn btn-primary" value="수정"> <input 
				type="button" class="btn btn-warning" value="삭제">
				<%
				} else {
				%> 
				<input disabled type="submit" value="수정">
				<input disabled type="button" value="삭제"> 
				<%
				 }
 				%>
			</td>
		</tr>
	</table>
</form>

<h3>댓글등록</h3>
<table class="table">
	<tr>
		<th>댓글내용</th>
		<td><input type="text" id="content"></td>
		<td><button id ="addReply">댓글등록</button></td>
	</tr>
</table>

<h3>댓글목록</h3>
<ul id="list">
	<li style="display : none;" id="template"><span>00</span><b>첫번째글입니다.</b><span>user01</span><span>2023-06-24</span><button id = "delReply">삭제</button></li>
</ul>

<script>
	document.querySelector("input[type=button]").addEventListener('click',
			function(e) {
				document.forms.myfrm.action = 'removeForm.do';
				document.forms.myfrm.submit();
			});
	
	//댓글 목록.
	let bno = "<%=vo.getBoardNo()%>";
	let writer = "<%=logId%>";
	bno = document.querySelector('.boardNo').innerHTML;
	fetch('replyList.do?bno=' + bno)
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		result.forEach(reply => {
			let li = makeRow(reply);
			// ul>li 생성.
			document.querySelector('#list').append(li);	
		})
		
	})
	.catch(err => console.log(err));
	
	// 등록버튼.
	document.querySelector('#addReply').addEventListener('click', function(e){
		let reply = document.querySelector('#content').value;
		if(!bno || writer=='null' || !reply){
			alert('값 확인해라.');
			return;
		}
		
		// ajax. bno/writer/reply => 전달.
		fetch('addReply.do', {
			method: 'post',
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
			body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer
		})
		.then(resolve => resolve.json())
		.then(result =>{
			if(result.retCode == 'OK'){
				document.querySelector('#list').append(makeRow(result.vo));
			} else{
				alert('등록 실패')
			}
			
		})
	})
	
	
	function makeRow(reply){
		let temp = document.querySelector('#template').cloneNode(true);
		temp.style.display = 'block';
		
		console.log(temp);
		temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
		temp.querySelector('b').innerHTML = reply.reply;
		temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
		temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
		
		temp.querySelector('#delReply').addEventListener('click', function(e){
			fetch('delReply.do?bno=' + 
					reply.replyNo
			)
			.then(resolve => resolve.json())
			.then(result => {
				if(result.retCode == 'OK'){
					alert('삭제성공');
					temp.remove();
				} else {
					alert('삭제실패');
				}
			
			})
		
		})
		return temp;
	}
	
	
	</script>
	<p>
		 <a href="boardList.do">목록으로</a>
	</p>
<%@include file="../layout/footer.jsp"%>