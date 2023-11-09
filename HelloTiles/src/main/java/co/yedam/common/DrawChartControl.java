package co.yedam.common;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class DrawChartControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		// json 데이터 => [작성자, 건수]
		ReplyService svc = new ReplyServiceImpl();
		List<Map<String, Object>> list = svc.getReplyCountByWriter();
		
		Gson gson = new GsonBuilder().create();
		
		
		try {
			resp.getWriter().print(gson.toJson(list));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				
	}

}
