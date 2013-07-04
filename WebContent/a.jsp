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
<link rel=stylesheet type=text/css href="<%=path%>/css/pamDemo.css">
<script language="javascript" type="text/javascript"
	src="<%=path%>/pam/js/pam.js"></script>
</head>

<body>
	<div class="Div">
		<div class="wapper">
			<div class="centerPosition">
				<h1>
					<a href="index.jsp" class="pamFont">欢迎使用pam.js</a>
				</h1>
			</div>

			<div class="centerPosition">
				<a href="p.jsp" class="pamFont"> >>Picture </a>
			</div>
			<div>
				<ul>
					<li class="pamFont">使用Local图片，直接调用_bg，参数1为本地的标识(0-Local，1-Server)，参数2为存放本地图片路径的数组，参数3为图片替换的间隔时间，单位：ms(如果参数2数组长度为1，则参数3随意，pam.js中不检查)</li>
					<div>
						<code> </code>
					</div>
					<div>
						<code>var res = ["images/xjqxz5.jpg", "images/gif.gif"];</code>
					</div>
					<div>
						<code>_bg(0, res, 10000);</code>
					</div>
					<li class="pamFont">使用Server图片，直接调用_bg，参数1为Server的标识(0-Local，1-Server)，参数2为单播还是组播的标识(0-单，1-组)，参数3为图片替换的间隔时间，单位：ms(如果参数2为0，则参数2随意，pam.js中不检查)</li>
					<div>
						<code>_bg(1, 1, 10000);</code>
					</div>
				</ul>


			</div>

			<div class="centerPosition">
				<a href="a.jsp" class="pamFont"> >>Audio </a>
			</div>

			<div class="centerPosition">
				<a href="m.jsp" class="pamFont"> >>Movie </a>
			</div>
		</div>
	</div>

	<script>
		//var res = ["musics/music", "musics/snq"];
		//var res = ["musics/music"];
		//_audio(0, res);
		_audio(1, 1);
	</script>
</body>
</html>