package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookService;
import org.yedam.service.BookVO;
import org.yedam.service.serviceImpl.BookServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class BookListServlet
 */
@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		BookService svc = new BookServiceImpl();
		List<BookVO> list = svc.booklist();
		System.out.println("데이터" + list.size());
		
		response.setContentType("text/json;charset=utf-8");
		
		PrintWriter out = response.getWriter();
//		String str = "[";
//		int cnt = 0;
		
//		  for(BookVO vo : list) {
//			  str += "{"; 
//			  str += "\"code\":\"" + vo.getCode() +"\","; 
//			  str += "\"title\":\"" + vo.getTitle() + "\","; 
//			  str += "\"author\":\""+ vo.getAuthor() + "\","; 
//			  str += "\"press\":\"" + vo.getPress() + "\",";
//			  str+= "\"price\":\"" + vo.getPrice() + "\",";
//			  str += "}";
//			  if(++cnt !=list.size()) { 
//			  str += ","; } } 
//		      str += "]";
		 
		
		Gson gson = new GsonBuilder().create();
		
		out.print(gson.toJson(list));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
