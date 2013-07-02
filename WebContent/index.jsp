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
	<script>
		    var res = ["pam/picture/tyr.jpg", "images/xjqxz5.jpg", "images/gif.gif"];
			_bg(0, res, 10000); /* 自定义res */
			//_bg(1, 1, 10000); /* 使用Server，0 - 单？1 - 多(间隔时间)？ */
			
			//var res = ["music/music", "music/snq"];
			//var res = ["music/music"];
			//_audio(0, res); /* 自定义res */
			_audio(1, 1); /* 使用Server，0 - 单？1 - 多？ */
		</script>

</body>
</html>