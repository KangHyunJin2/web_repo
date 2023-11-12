package co.yedam.product.web;

import java.util.List;

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
		String path = "product/productInfo.tiles";
	
		String pno = req.getParameter("pno");
		
		ProductService svc = new ProductServiceImpl();
		
		ProductVO vo = svc.getProduct(pno);
		
		req.setAttribute("vo", vo);
		
		
		List<ProductVO> list = svc.selectList();
		
		req.setAttribute("list", list);
		
		
			try {
				req.getRequestDispatcher(path).forward(req, resp);
			} catch (Exception e) {
				e.printStackTrace();
			}
		
	}

}
