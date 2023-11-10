package co.yedam.product.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class ProductInfoControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String path = "productInfo.do";
	
		String code = req.getParameter("Code");
		
		ProductService svc = new ProductServiceImpl();
		
		ProductVO vo = svc.getProduct(code);
		
		
			try {
				req.getRequestDispatcher(path).forward(req, resp);
			} catch (Exception e) {
				e.printStackTrace();
			}
		
	}

}
