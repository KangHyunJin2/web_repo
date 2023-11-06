<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>removeoform.jsp</title>
</head>
<body>
<%
	BoardVO vo = (BoardVO) request.getAttribute("vo");
	
%>

	<h3>게시글 삭제화면</h3>
	<form action="removeBoard.do" method="post">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>">
		<table border="1">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="<%=vo.getTitle() %>"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" name="writer" value="<%=vo.getWriter() %>"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="40" rows="5" name="content"<%=vo.getContent()%>></textarea>
				</td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><img src="images/<%=vo.getImage() %>" width="80px" ></td>
			</tr>
			<tr>
			<td colspan="2" align="center">
				<input type="submit" value="삭제">
				<input type="reset" value="초기화">
			</td>
			</tr>
		</table>
	</form>
</body>
</html>