package co.yedam.reply.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class DelReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");
		
		ReplyService svc = new ReplyServiceImpl();
		
		if(svc.delReply(Integer.parseInt(bno))) {
			try {
				resp.getWriter().print("{\"retCode\" : \"OK\"}");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				resp.getWriter().print("{\"retCode\" : \"NG\"}");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
