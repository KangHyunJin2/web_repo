package co.yedam.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		try {
			req.getRequestDispatcher("board/main.do.tiles")//
			.forward(req, resp);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
