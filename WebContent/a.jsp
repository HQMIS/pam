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
		//var res = ["musics/music"];
		var res = ["musics/music", "musics/snq"];
		_audio(0, res); /* 自定义res */
		//_audio(1, 1); /* 使用Server，0 - 单？1 - 多？ */
	</script>
</body>
</html>