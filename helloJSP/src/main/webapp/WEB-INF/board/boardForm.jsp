<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>


	<h3>게시글 등록화면</h3>
	<form action="addBoard.do" method="post" enctype="multipart/form-data">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" class="form-control" name="title"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" readonly class="form-control" name="writer" value="<%=logId%>"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea class="form-control" cols="40" rows="5" name="content"></textarea>
				</td>
			</tr>
			<tr>
			<th>파일명</th>
			<td><input type="file" class ="form-control" name="img"></td>
			</tr>
			<tr>
			<td colspan="2" align="center">
				<input type="submit" class="btn btn-primary" value="저장">
				<input type="reset" class="btn btn-warning" value="초기화">
			</td>
			</tr>
			<hr>
		</table>
	</form>

<%@include file="../layout/footer.jsp" %>