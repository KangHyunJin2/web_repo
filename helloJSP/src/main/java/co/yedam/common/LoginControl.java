package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String id = req.getParameter("id");
		String pw = req.getParameter("pass");
		
		//session : 서버 - 클라이언트
		
		BoardService svc = new BoardServiceImpl();
		MemberVO vo = svc.loginCheck(id, pw);
		if(vo != null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", id); //아이디라는 값을 담아놈
			session.setAttribute("responsbility", vo.getResponsbility());
			
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

}
