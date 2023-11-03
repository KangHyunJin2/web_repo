package co.yedam.common;

import co.yedam.board.service.BoardVO;
import co.yedam.student.serviceImpl.BoardDAO;

public class MainExe {

	public static void main(String[] args) {
		BoardDAO dao = new BoardDAO();
		BoardVO vo = new BoardVO();
		vo.setTitle("test");
		vo.setWriter("user03");
		vo.setContent("content_modify");
		vo.setBoardNo(5);
		System.out.println(dao.update(vo)); //추가
//		System.out.println(dao.insert(vo)); 여기다 if 문 추가하자
		
		
		
		
		
		
		//		// 학생아이디, 비밀번호, 이름 ,학과, 생일
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		// 2012-03-05(한국) Nov-23-2012(국제)이기 떄문에..
//		// Date ->> String : sdf.format().
//		// String ->> Date : sdf.parse().
//
//		StudentVO vo = new StudentVO();
//		vo.setStudentId("kang");
//		vo.setStudentName("강현진");
//		vo.setStudentPassword("1234");
//		vo.setStudentDept("목탁디자인과");
//		try {
//			vo.setStudentBirthday(sdf.parse("2001-01-01"));
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//
//		StudentService svc = new StudentServiceImpl();
//		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));
//
//		
////		svc.editStudent(vo); // vo 로 수정
////		svc.addStudent(vo); // vo 로 추가
////		svc.removeStudnet("new12"); //삭제 id 기준
//
//		svc.listStudent()//
//				.forEach(student -> System.out.println(student));

	}
}