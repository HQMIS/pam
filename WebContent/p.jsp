<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!doctype html>
<html>
<head>
<link rel=stylesheet type=text/css href="<%=path%>/pam/css/pam.css">
<script language="javascript" type="text/javascript"
	src="<%=path%>/pam/js/pam.js"></script>
</head>

<body>
	<!-- <div class="bgDiv">
		<img src="images/xjqxz5.jpg" />
	</div> -->

	<div class="Div">
		<center>
			<h1>
				<font color="red" face="楷体_GB2312">欢迎使用pam.js</FONT>
			</h1>
		</center>
		<center>
			<a href="p.jsp"> <font color="red" face="楷体_GB2312">>>Picture</FONT>
			</a> <a href="a.jsp"> <font color="red" face="楷体_GB2312">>>Audio</FONT>
			</a> <a href="m.jsp"> <font color="red" face="楷体_GB2312">>>Movie</FONT>
			</a>
		</center>
	</div>

	<script>
		//var res = ["images/xjqxz5.jpg", "images/gif.gif"];
		//_bg(0, res, 10000); /* 自定义res */
		_bg(1, 1, 10000); /* 使用Server，0 - 单？1 - 多(间隔时间)？ */
	</script>
</body>
</html>