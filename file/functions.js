/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var current = new Date(); // Ensure current is a Date object
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

    // Handle negative time differences (future dates)
    if (seconds < 0) {
        seconds = 0;
    }

    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = Math.floor(seconds % 60); // Ensure seconds is an integer
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    var result = "ผ่านมา <span class=\"digit\">" + days + "</span> วัน <span class=\"digit\">" + hours + "</span> ชั่วโมง <span class=\"digit\">" + minutes + "</span> นาที <span class=\"digit\">" + seconds + "</span> วินาที"; 
    $("#clock").html(result);
}