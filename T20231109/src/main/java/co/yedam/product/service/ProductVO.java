package co.yedam.product.service;

import javax.servlet.annotation.WebServlet;

import lombok.Data;

@Data
@WebServlet
public class ProductVO {
	private String prodCode;
	private String prodName;
	private String prodDesc;
	private int price;
	private int offPrice;
	private int like_it;
	private String prodImage;

}
