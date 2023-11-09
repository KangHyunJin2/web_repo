package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class firstServlet
 */
//@WebServlet("/FirstServlet.do")
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	// init -> service -> destroy.

	public FirstServlet() {
		super();

	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("service실행."); // 서비스가 있으면 서비스만 호출이 된다 그러므로 서비스에 기능을 넣으면 된다
		doGet(req, resp); // 서비스 라는 메서드에서 doGet 을 실행하겠다

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");

		String name = "홍길동";
		int age = 20;
		for (int i = 0; i < 5; i++) {
			response.getWriter().print("<p>" + i + "번째이름은" + name + ",나이는" + age + "입니다.</p>");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
