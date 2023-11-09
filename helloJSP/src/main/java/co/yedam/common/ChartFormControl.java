package co.yedam.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ChartFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 얘는 그냥 차트 연결시켜줌
		try {
			req.getRequestDispatcher("WEB-INF/main/chart.jsp")//
					.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
