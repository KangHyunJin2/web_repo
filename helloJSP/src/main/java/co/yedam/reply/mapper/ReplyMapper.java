package co.yedam.reply.mapper;

import java.util.List;

import co.yedam.reply.service.ReplyVO;

public interface ReplyMapper {
	//DAO , mapper: select, insert, update , delete;
	public List<ReplyVO> replyList(int boardNo); //목록보는거
	public ReplyVO selectReply(int replyNo); //단건 조회
	public int insertReply(ReplyVO vo); //등록
	public int updateReply(ReplyVO vo);//수정
	public int deleteReply(int ReplyNo);//삭제
}
