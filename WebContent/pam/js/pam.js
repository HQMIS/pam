/** 
 * @fileOverview pam.js which to simply deal with picture\audio\movie 
 * @author HQM
 * @version 0.0.1 
 */

/**
 * @description control to broadcast audio
 * @param {int} mode
 *            0 - diy resource(Array)
 *            1 - use server's resource(String)
 * @param {Array or String} res
 *            Array - path of diy resource
 *            String - broadcast mode
 * @return {null} null
 */

function _audio(mode, res) {
	/* check what browser you are using */
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua
			.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua
			.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua
			.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua
			.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	/**
	 * when mode equals 1, we should use server's audio
	 * else when mode equals 0, we should use diy audio
	 */
	if (1 == mode) {
		//alert(window.location.href); 
		/* audio list on server */
		//var audioList = ["pam/audio/snq", "pam/audio/qg", "pam/audio/xy"]; /* the final goal is get the list from server */
		var url = "http://121.199.46.162/work/pam/";
		var audioList = [url+"snq", url+"qg", url+"xy"]; 
		
		if (Sys.ie) {
			//document.write('<bgsound src="' + res[0] + '.mp3" loop="-1">');
		} else {
			if ("1" == res){  /* order play the audio on server */
				broadcastList(audioList);
			} else {  /* order play the audio on server */
				broadcastList(audioList[Math.floor(Math.random()*res.length)]);
			}
			//document.write('<audio class="audio" controls="controls" preload="auto" autoplay="autoplay" loop="loop" id="_audio"><source src="'+ res + '.ogg" type="audio/ogg"><source src="' + res + '.mp3" type="audio/mpeg"></audio>');
		}
	} else {
		/**
		 * if statement deal with the browser which not support html5's audio tag
		 * else statement deal with the browser that support html5's audio tag
		 */
		if (Sys.ie) {
			/* create div && append to body */
			var _notice = document.createElement("div");
			var object = document.body.appendChild(_notice);

			/* create a && set id\href\onclick\innerText\className && append to div above */
			var _switch = document.createElement("a");
			_notice.appendChild(_switch);
			_switch.id = "_switch";
			_switch.href = "javascript:void(0);";
			_switch.onclick = function(stop) {
				var _bgsound = document.getElementById("_bgsound");
				/* judge the text of the _switch and deal with */
				if ("关闭背景音乐" == document.getElementById("_switch").innerHTML) {
					_bgsound.src = "";
					_switch.innerText = "打开背景音乐";
				} else {
					_bgsound.src = res[0] + ".mp3";
					_switch.innerText = "关闭背景音乐";
				}
			};
			_switch.innerText = "关闭背景音乐";
			_switch.className = "switch";

			/* create bgsound && set id\src\loop && append to body*/
			var _bgsound = document.createElement("bgsound");
			_bgsound.id = "_bgsound";
			_bgsound.src = res[0] + ".mp3";
			_bgsound.loop = -1;
			var object = document.body.appendChild(_bgsound);
			//document.write('<bgsound src="' + res[0] + '.mp3" loop="-1">');
		} else {
			broadcastList(res);
		}
		//document.write('<audio class="audio" controls="controls" preload="auto" autoplay="autoplay" id="_audio" onended="broadcast(res);"><source src="' + res[i] + '.ogg" type="audio/ogg"><source src="' + res[i] + '.mp3" type="audio/mpeg"></audio>');
	}
}

/**
 * @description broadcast audio by list
 * 
 * @param {String} res
 *            the audio list to be broadcast
 * @return {null} null
 */
function broadcastList(res){
	/* i is the index of resource array */
	var i = 0;
	/* create audio */
	var _audio = document.createElement("audio");

	/**
	 * judge the audio and deal with 
	 * if auido is null or not can play, show the notice
	 * else deal with the request
	 */
	if (_audio != null && _audio.canPlayType) {
		/* append audio to body */
		var object = document.body.appendChild(_audio);

		/* broadcat res[i] through audio */
		broadcast(_audio, res[i]);

		/* add the callback function addEventListener to audio's object */
		_audio.addEventListener('ended', function() {
			/* judge the index of the audio to be broadcast */
			i = i + 1;
			if (i >= res.length) {
				i = 0;
			}

			/* broadcat res[i] through audio */
			broadcast(_audio, res[i]);
		}, false);
	} else {
		var _notice = document.createElement("div");
		_notice.innerText = "您现在使用的浏览器不支持audio标签";
		var object = document.body.appendChild(_notice);
		//document.write("您现在使用的浏览器不支持audio标签");
	}
}

/**
 * @description broadcast audio
 * @param {object} _audio
 *            the object create by document.createElement("audio")
 * @param {String} res
 *            the audio to be broadcast
 * @return {null} null
 */
function broadcast(_audio, res) {
	/* set id\controls\preload\autoplay\className */
	_audio.id = "_audio";
	_audio.controls = "controls";
	_audio.preload = "auto";
	_audio.autoplay = "autoplay";
	_audio.className = "audio";

	/* judge the browser you are using whether support audio which is ogg format or not && select the suitable format's audio to broadcast */
	if (_audio.canPlayType("audio/ogg")) {
		_audio.src = res + ".ogg";
	} else if (_audio.canPlayType("audio/mpeg")) {
		_audio.src = res + ".mp3";
	}
}