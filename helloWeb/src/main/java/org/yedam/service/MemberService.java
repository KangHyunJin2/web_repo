package org.yedam.service;

import java.util.List;

public interface MemberService {
	// 회원목록 : memberlist()
	public List<MemberVO> memberlist();
	public boolean addMember(MemberVO vo);
	public boolean modifyMember (MemberVO vo);
}
