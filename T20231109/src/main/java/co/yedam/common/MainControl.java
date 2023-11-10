package co.yedam.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		try {
			resp.sendRedirect("productList.do");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
