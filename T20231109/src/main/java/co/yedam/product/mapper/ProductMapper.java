package co.yedam.product.mapper;

import java.util.List;

import co.yedam.product.service.ProductVO;

public interface ProductMapper {
	public List<ProductVO> selectList();
	public ProductVO select(String prodCode);
	public List<ProductVO> selectRelist();
	
}
