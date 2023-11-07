package co.yedam.board.service;

import java.util.Date;

import javax.servlet.annotation.WebServlet;

import lombok.Data;

@Data
@WebServlet
public class BoardVO {
	private int boardNo;
	private String title;
	private String content;
	private String writer;
	private Date writerDate;
	private int viewCnt;
	private String image;
	private Date lastUpdate;
	
	
	
}
