package co.yedam.student.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/addStudent.do")
public class AddStudentServlet extends HttpServlet {
	//init - > service -> destroy
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		super.init(config);
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//한글처리
		req.setCharacterEncoding("utf-8");
		
		StudentService svc = new StudentServiceImpl();
		
		String stdId = req.getParameter("id");
		String stdName = req.getParameter("name");
		String stdPw = req.getParameter("password");
		String stdDept = req.getParameter("sdept");
		String stdBir = req.getParameter("birthday");
		
//		System.out.println(stdId);  null 값이 나오는지 찍어서 확인
//		System.out.println(stdName);
//		System.out.println(stdPw);
//		System.out.println(stdDept);
//		System.out.println(stdBir);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		StudentVO vo = new StudentVO();
		vo.setStudentId(stdId);
		vo.setStudentName(stdName);
		vo.setStudentPassword(stdPw);
		vo.setStudentDept(stdDept);
		try {
			vo.setStudentBirthday(sdf.parse(stdBir));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		if(svc.addStudent(vo)) {
			// {"retCode: "OK"}
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			// {"retCode: "NG"}
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		
	}
	
	
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		super.destroy();
	}
}
