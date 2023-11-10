<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
    
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Simple</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="resources/boot-shop/css/styles.css" rel="stylesheet" />
    </head>
    <body>
 
             
              	   <tiles:insertAttribute name="header"></tiles:insertAttribute>
            
                   <tiles:insertAttribute name="body"></tiles:insertAttribute>
                
				   <tiles:insertAttribute name="footer"></tiles:insertAttribute>

        
    </body>
</html>
