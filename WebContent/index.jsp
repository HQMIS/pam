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

	<!-- <div class="movieDiv">
		<video id="_video" loop autoplay poster="video.jpg">
			<source src="movies/movie.mp4" type="video/mp4"></source>
			<source src="movies/movie.webm" type="video/webM"></source>
			<source src="movies/movie.ogv" type="video/ogg"></source>
			<p>Your browser does not support the video tag.</p>
		</video>
	</div> -->

	<div class="movieDiv">
		<!-- <bgsound loop="infinite" src="movies/movie.mp4"> -->
		<embed src="movies/movie.avi" autostart="true" loop="true" width=800
			height=500>
	</div>

	<div class="Div">
		<center>
			<h1>
				<font color="red" face="楷体_GB2312">欢迎使用pam.js</FONT>
			</h1>
		</center>
		<center>
			<a href="p.jsp">
				<font color="red" face="楷体_GB2312">>>Picture</FONT>
			</a>
			<a href="a.jsp">
				<font color="red" face="楷体_GB2312">>>Audio</FONT>
			</a>
			<a href="m.jsp">
				<font color="red" face="楷体_GB2312">>>Movie</FONT>
			</a>
		</center>
	</div>
	
	<script>
		//var res = ["images/xjqxz5.jpg", "images/gif.gif"];
		//_bg(0, res, 10000); /* 自定义res */
		//_bg(1, 1, 10000); /* 使用Server，0 - 单？1 - 多(间隔时间)？ */

		var res = [ "movies/movie" ];
		//_movie(0, res);

		//var res = ["musics/music", "musics/snq"];
		//var res = ["musics/music"];
		//_audio(0, res); /* 自定义res */
		_audio(1, 1); /* 使用Server，0 - 单？1 - 多？ */
	</script>
</body>
</html>