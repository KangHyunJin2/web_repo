package co.yedam.product.service;

import java.util.List;

public interface ProductService {
	
	public List<ProductVO> productList();
	public ProductVO getProduct(String prodCode);
	
}
