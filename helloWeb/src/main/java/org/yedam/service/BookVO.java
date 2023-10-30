package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class BookVO {
	private String code;
	private String title;
	private String author;
	private String press;
	private String price;
}
