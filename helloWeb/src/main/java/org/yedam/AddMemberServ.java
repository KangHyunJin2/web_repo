package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

/**
 * Servlet implementation class AddMemberServ
 */
//http://localhost:8080/helloWeb/AddMemberServ.html?mid=M009&pass=9999&name=Kim&phone=010-9876-0987
@WebServlet("/AddMemberServ.html")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//!!정말정말 중요해요 기억합시다!!
		
		//mid=M009&pass=9999&name=Kim&phone=010-9876-0987
		//(mid,pass,name,phone) {mid....} 위와 넘기는 방식이 다르지만 의미는 같다
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		
		//멤버 인스턴스 선언
		MemberVO vo = new MemberVO(mid,pass,name,phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		if(svc.addMember(vo)) {
			// {"retCode": "OK"}
			out.print("{\"retCode\": \"OK\"}");
			
		} else {
			// {"retCode:" "NG"}
			out.print("{\"retCode\": \"NG\"}");
		}
	}	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
