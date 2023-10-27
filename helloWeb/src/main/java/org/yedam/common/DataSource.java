package org.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;

public class DataSource {
	private static DataSource dataSource = new DataSource();

	private DataSource() {

	}

	private static String driver = "oracle.jdbc.OracleDriver";
	private static String url = "jdbc:oracle:thin:@localhost:1521:xe";
	private static String user = "hr";
	private static String password = "1234";

	private static Connection conn;

	public static DataSource getInstance() {
		return dataSource;
	}

	public Connection getConnection() {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url, user, password);
			System.out.println();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}

}

