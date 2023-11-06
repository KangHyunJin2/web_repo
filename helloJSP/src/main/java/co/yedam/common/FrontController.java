package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;

public class FrontController extends HttpServlet{ //.do 면 여기로 온다 
	
	// init -> service
	Map<String, Command> map = new HashMap<>();
	
	

	@Override
	public void init(ServletConfig config) throws ServletException {
			//apdlsvpdlwl
			map.put("/main.do", new MainControl());
			//로그인	
			map.put("/loginForm.do", new LoginFormControl());
			map.put("/login.do", new LoginControl());
			map.put("/logout.do", new LogOutControl());
			
			//회원목록
			map.put("/memberList.do", new MemberListControl());
		
			map.put("/boardList.do", new BoardListControl());
			map.put("/getBoard.do", new GetBoardControl());
			//등록화면.
			map.put("/boardForm.do", new BoardFormControl());
			map.put("/addBoard.do", new AddBoardControl());
			//수정화면. 살제 처리하는건 board.do 이다
			map.put("/modifyForm.do", new ModifyFormControl());
			map.put("/modifyBoard.do", new ModifyBoardControl());
			//삭제화면
			map.put("/removeForm.do", new RemoveFormControl());
			map.put("/removeBoard.do", new RemoveBoardControl());
			
			
		}
		//		map.put("/FirstServlet.do" , new FirstContorl());
//		map.put("/second.do" , new SecondControl());
	

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("FrontController");
		//요청정보의 한글 인코딩방식.
		req.setCharacterEncoding("UTF-8");
		
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/???.do  값을 가져온다 물음표는 니가 적어야함
		String context = req.getServletContext().getContextPath();  //helloJSP
		String page = uri.substring(context.length());
		System.out.println(page); //
	
		Command controller = map.get(page);
		controller.execute(req, resp);
		
		
	}
}
