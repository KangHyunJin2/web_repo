package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public LoginServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		<!-- http://localhost:8080/helloWeb/LoginServlet 서블릿페이지-->
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		Map<String, Integer> map = new HashMap<>();
		map.put("홍길동", 90);
		map.put("김길동", 95);
		map.put("박길동", 80);

		Set<String> keyset = map.keySet();

		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter(); // 출력스트림.

		out.print("톰캣을 재시작을 해야지 바뀐 내용이 적용됩니다..."); // Servlet 을 써서 홈페이지 찾아가기
		out.print("<br>");
		out.print("<h3>학생이름과 점수</h3>");
		// out.print("<table border='1'><thead<><tr>"); //이렇게 할수있다 라는 예
		// out.print("<th>학생이름</th><th>점수</th></tr></thead>");
		String str = "<table border='1'><thead<><tr>";
		str += "<th>학생이름</th><th>점수</th></tr></thead>";
		str += "<tbody>";
		for (String item : keyset) {
			str += "<tr><td>" + item + "</td><td>"
					+ map.get(item) + "</td></tr>";
		}
		str += "</tbody></table>";
		out.print(str);
		
		out.print("<a href='index.html'>첫페이지</a>"); //하이퍼링크 처음페이지가기
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
