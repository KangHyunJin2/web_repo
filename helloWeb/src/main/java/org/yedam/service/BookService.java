package org.yedam.service;

import java.util.List;

public interface BookService {
	public List<BookVO> booklist();
	
	public boolean delbook(BookVO vo);
}
