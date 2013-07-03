/** 
 * @fileOverview pam.js which to simply deal with picture\audio\movie 
 * @author HQM
 * @version 0.0.1 
 */

/**
 * Global Variable
 */
var imgIndex = 0; // the index of the picList

var url = "http://121.199.46.162/work/pam/picture/";
var picList = [ url + "tyr.jpg", url + "xm.jpg", url + "jyf.jpg",
		url + "ly.jpg" ]; // the path list of the picture on server

/**
 * ########## ########## ########## ########## ########## ########## ########## ########## ########## *
 * 
 * the three function below is for audio
 * 
 * ########## ########## ########## ########## ########## ########## ########## ########## ########## *
 */

/**
 * @description control to broadcast audio
 * 
 * @param {int}
 *            mode 0 - diy resource(Array) 1 - use server's resource(String)
 * @param {Array
 *            or Int} res Array - path of diy resource Int - broadcast mode, 0
 *            for single replay, 1 for more replay
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
	 * when mode equals 1, we should use server's audio else when mode equals 0,
	 * we should use diy audio
	 */
	if (1 == mode) {
		// alert(window.location.href);
		/* audio list on server */
		// var audioList = ["pam/audio/snq", "pam/audio/qg", "pam/audio/xy"]; /*
		// the final goal is get the list from server */
		var url = "http://121.199.46.162/work/pam/audio/";
		var audioList = [ url + "snq", url + "qg", url + "xy" ];

		if (Sys.ie) {
			// document.write('<bgsound src="' + res[0] + '.mp3" loop="-1">');
		} else {
			if (1 == res) { // order play the audio on server
				broadcastList(audioList);
			} else { // order play the audio on server
				var slideIndex = parseInt(Math.random() * audioList.length);
				broadcastList(audioList.slice(slideIndex, slideIndex + 1));
			}
		}
	} else {
		/**
		 * if statement deal with the browser which not support html5's audio
		 * tag else statement deal with the browser that support html5's audio
		 * tag
		 */
		if (Sys.ie) {
			/* create div && append to body */
			var _notice = document.createElement("div");
			var object = document.body.appendChild(_notice);

			/*
			 * create a && set id\href\onclick\innerText\className && append to
			 * div above
			 */
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

			/* create bgsound && set id\src\loop && append to body */
			var _bgsound = document.createElement("bgsound");
			_bgsound.id = "_bgsound";
			_bgsound.src = res[0] + ".mp3";
			_bgsound.loop = -1;
			var object = document.body.appendChild(_bgsound);
			// document.write('<bgsound src="' + res[0] + '.mp3" loop="-1">');
		} else {
			broadcastList(res);
		}
	}
}

/**
 * @description broadcast audio by list
 * 
 * @param {String}
 *            res the audio list to be broadcast
 * @return {null} null
 */
function broadcastList(res) {
	/* audioIndex is the index of resource array */
	var audioIndex = 0;
	/* create audio */
	var _audio = document.createElement("audio");

	/**
	 * judge the audio and deal with if auido is null or not can play, show the
	 * notice else deal with the request
	 */
	if (_audio != null && _audio.canPlayType) {
		/* append audio to body */
		var object = document.body.appendChild(_audio);

		/* broadcat res[i] through audio */
		broadcast(_audio, res[audioIndex++]);

		/* add the callback function addEventListener to audio's object */
		_audio.addEventListener('ended', function() {
			/* judge the index of the audio to be broadcast */
			if (audioIndex >= res.length) {
				audioIndex = 0;
			}

			/* broadcat res[i] through audio */
			broadcast(_audio, res[audioIndex++]);
		}, false);
	} else {
		var _notice = document.createElement("div");
		_notice.innerText = "您现在使用的浏览器不支持audio标签";
		var object = document.body.appendChild(_notice);
	}
}

/**
 * @description broadcast audio
 * 
 * @param {object}
 *            _audio the object create by document.createElement("audio")
 * @param {String}
 *            res the audio to be broadcast
 * @return {null} null
 */
function broadcast(_audio, res) {
	/* set id\controls\preload\autoplay\className */
	_audio.id = "_audio";
	_audio.controls = "controls";
	_audio.preload = "auto";
	_audio.autoplay = "autoplay";
	_audio.className = "audio";

	/*
	 * judge the browser you are using whether support audio which is ogg format
	 * or not && select the suitable format's audio to be broadcast
	 */
	if (_audio.canPlayType("audio/ogg")) {
		_audio.src = res + ".ogg";
	} else if (_audio.canPlayType("audio/mpeg")) {
		_audio.src = res + ".mp3";
	}
}



/**
 * ########## ########## ########## ########## ########## ########## ########## ########## ########## *
 * 
 * the three function below is for picture
 * 
 * ########## ########## ########## ########## ########## ########## ########## ########## ########## *
 */

/**
 * @description control to set background
 * 
 * @param {int}
 *            mode 0 - diy resource(Array) 1 - use server's resource(String)
 * @param {Array
 *            or Int} res Array - path of diy resource Int - show background
 *            mode, 0 for just one image, 1 for slide image
 * @param {int}
 *            time the interval time of the timer, unit is millisecond(毫秒)
 * @return {null} null
 */
function _bg(mode, res, time) {
	/**
	 * when mode equals 1, we should use server's picture else when mode equals
	 * 0, we should use diy picture
	 */
	if (1 == mode) {
		if (1 == res) { // order to set picture on server in the list as
			// background
			/* set a timer, to set background every interval time */
			var timeId = window
					.setInterval("slideSetBackground(picList)", time);
			slideSetBackground(picList);
		} else { // set one picture as background
			var slideIndex = parseInt(Math.random() * picList.length);
			setBackground(picList.slice(slideIndex, slideIndex + 1));
		}
	} else {
		if (1 == res.length) {
			/*
			 * the length of the array is 1, direct set the picture index which
			 * index is 0 as background
			 */
			setBackground(res[0]);
		} else {
			/* set a timer, to set background every interval time */
			var timeId = window.setInterval("slideSetBackground(res)", time);
			slideSetBackground(res);
		}
	}
}

/**
 * @description slide to set background
 * 
 * @param {Array}
 *            res the picture list to be set as background
 * @return {null} null
 */
function slideSetBackground(res) {
	// alert(imgIndex);
	var bgImg = res[imgIndex++];
	// alert(imgIndex);
	/* judge the index of the picture to be set as background */
	if (imgIndex >= res.length) {
		imgIndex = 0;
	}
	setBackground(bgImg);
}

/**
 * @description broadcast audio
 * 
 * @param {String}
 *            res the picture to be set as background
 * @return {null} null
 */
function setBackground(res) {
	/* create div && set id\className && append to body */
	var _bgDiv = document.createElement("div");
	_bgDiv.id = "bgDiv";
	_bgDiv.className = "bgDiv";
	var object = document.body.appendChild(_bgDiv);

	/* create img && set src && append to div above */
	var _bgImg = document.createElement("img");
	_bgImg.src = res;
	var object = _bgDiv.appendChild(_bgImg);
}




/**
 * ########## ########## ########## ########## ########## ########## ########## ########## ########## *
 * 
 * the three function below is for movie(video)
 * 
 * ########## ########## ########## ########## ########## ########## ########## ########## ########## *
 */

/**
 * @description control to set movie(video) as background whichi just is broadcast movie without controls
 * 
 * @param {int}
 *            mode 0 - diy resource(Array) 1 - use server's resource(String)
 * @param {Array
 *            or Int} res Array - path of diy resource Int - broadcast mode, 0
 *            for single replay, 1 for more replay
 * @return {null} null
 */
function _movie(mode, res) {
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
	 * when mode equals 1, we should use server's audio else when mode equals 0,
	 * we should use diy audio
	 */
	if (1 == mode) {
		/* video list on server */
		var url = "http://121.199.46.162/work/pam/movie/";
		var videoList = [ url + "movie", url + "xwqzzhxcp" ];

		if (Sys.ie) {
			// document.write('<bgsound src="' + res[0] + '.mp3" loop="-1">');
		} else {
			if (1 == res) { // order play the movie(video) on server
				broadcastSetList(videoList);
			} else { // order play the audio on server
				var slideIndex = parseInt(Math.random() * videoList.length);
				broadcastSetList(videoList.slice(slideIndex, slideIndex + 1));
			}
		}
	} else {
		/**
		 * if statement deal with the browser which not support html5's video
		 * tag else statement deal with the browser that support html5's video
		 * tag
		 */
		if (Sys.ie) {
		//if (Sys.chrome) {
			/* create div && append to body */
			var _notice = document.createElement("div");
			_notice.className = "ieMovieDiv";
			var object = document.body.appendChild(_notice);

			/* create embed && set id\src\loop && append to div _notice */
			var _embed = document.createElement("embed");
			_embed.id = "_embed";
			_embed.src = res[0] + ".avi";
			_embed.autostart="true";
			_embed.loop = "true";
			_embed.className = "ieEmbed";
			var object = _notice.appendChild(_embed);
		} else {
			broadcastSetList(res);
		}
	}
}

/**
 * @description set movie(video) as background whichi just is broadcast movie without controls by list
 * 
 * @param {String}
 *            res the video list to be broadcast
 * @return {null} null
 */
function broadcastSetList(res) {
	/* videoIndex is the index of resource array */
	var videoIndex = 0;
	/* create video */
	var _video = document.createElement("video");

	/**
	 * judge the vedio and deal with if vedio is null or not can play, show the
	 * notice else deal with the request
	 */
	if (_video != null && _video.canPlayType) {
		/* append _movieDiv to body */
		var _movieDiv = document.createElement("div");
		_movieDiv.className = "movieDiv";
		var object = document.body.appendChild(_movieDiv);
		
		/* append video to body */
		var object = _movieDiv.appendChild(_video);

		/* broadcat res[i] through video */
		broadcastSet(_video, res[videoIndex++]);

		/* add the callback function addEventListener to video's object */
		_video.addEventListener('ended', function() {
			/* judge the index of the video to be broadcast */
			if (videoIndex >= res.length) {
				videoIndex = 0;
			}

			/* broadcat res[i] through video */
			broadcastSet(_video, res[videoIndex++]);
		}, false);
	} else {
		var _notice = document.createElement("div");
		_notice.innerText = "您现在使用的浏览器不支持video标签";
		var object = document.body.appendChild(_notice);
	}
}

/**
 * @description set movie(video) as background whichi just is broadcast movie without controls
 * 
 * @param {object}
 *            _movie the object create by document.createElement("movie")
 * @param {String}
 *            res the movie to be broadcast
 * @return {null} null
 */
function broadcastSet(_movie, res) {
	/* set id\controls\preload\autoplay\className */
	_movie.id = "_movie";
	//_movie.controls = "controls";
	_movie.preload = "auto";
	_movie.autoplay = "autoplay";
	//_movie.className = "video";

	/*
	 * judge the browser you are using whether support audio which is ogg format
	 * or not && select the suitable format's audio to be broadcast
	 * 
	 * mp4 is much smaller than ogv, so make mp4 header
	 */
	if (_movie.canPlayType("video/mp4")) {
		_movie.src = res + ".mp4";
	} else if (_movie.canPlayType("video/ogg")) {
		_movie.src = res + ".ogv";
	} else if (_movie.canPlayType("video/webM")) {
		_movie.src = res + ".webm";
	}
}