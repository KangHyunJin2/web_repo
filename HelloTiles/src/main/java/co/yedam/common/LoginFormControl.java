package co.yedam.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		
		
		String path = "/main/loginForm.tiles";
		
		try {
			req.getRequestDispatcher(path).forward(req, resp);
			
		} catch(Exception e) {
			e.printStackTrace();
		}

	}

}
