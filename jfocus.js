/**
用法：
//轮播图

【滑动】
	-------------------
	html:
	-------------------
	<div class="focus">
		<ul>
			<li><a href="" title="" target="_blank" style="background:url('') no-repeat center center transparent"></a></li>
			<li><a href="" title="" target="_blank" style="background:url('') no-repeat center center transparent"></a></li>
			<li><a href="" title="" target="_blank" style="background:url('') no-repeat center center transparent"></a></li>
		</ul>
	</div>
	-------------------
	js:
	-------------------
	$(".focus").jfocus({"effectType":"slider"});
	
	-------------------
	css:
	--------------------
	.focus {	width: 780px;height: 300px;	position: relative;	overflow: hidden; margin-bottom:10px;}
	.focus ul {	width:55555px;	height: 300px;	position: absolute;	z-index: 1;}
	.focus ul li {	width: 780px;	height: 300px;	overflow: hidden;	float: left;}
	.focus ul li a{    display: block;    width: 780px;    height: 300px;}
	.focus img {	width: 780px;	height: 300px;}
	.focus .pagination {	font-size: 0;	*word-spacing: -1px ;	text-align: center;	width: 300px;	height: 6px;	padding: 7px 10px;	position: absolute;		z-index: 3;	left: 50%;margin-left:-150px;	bottom: 5px;}
	.focus .pagination span {	background: #ccc;	vertical-align: top;	letter-spacing: normal;	word-spacing: normal;	display: inline-block;	*display: inline ;	list-style: none;	width: 20px;	height: 20px;	margin-left: 4px;	cursor: pointer;}
	.focus .pagination span.on {	background: #000;}

=====================================================
【淡入淡出】
	-------------------
	html
	-------------------
	<div class="focus-fadeIn">
		<ul>
			<li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
			<li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
			<li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
			<li><a href="" title="" target="_blank"> <img src="" alt=""></a></li>
		</ul>
   </div>
	-------------------
	js
	-------------------
	$(".focus-fadeIn").jfocus({"effectType":"fadeinout"});
	
	-------------------
	css:
	--------------------
	.focus-fadeIn {	width:100%;height: 530px;	position: relative;	overflow: hidden;}
	.focus-fadeIn ul {	width:100%;	height: 530px;		z-index: 1;}
	.focus-fadeIn ul li {	width:100%;height: 530px;overflow: hidden;	float: left;position: absolute;left:0px;top:0px;}
	.focus-fadeIn ul li a{display:block;width:100%;height: 530px;}
	.focus-fadeIn img {	width:100%;height: 530px;}
	.focus-fadeIn .pagination {	font-size: 0;	*word-spacing: -1px 	text-align: center;	width: 300px;	height: 6px;	padding: 7px 10px;	position: absolute;		z-index: 3;	left: 50%;margin-left:-150px;	bottom: 15px;}
	.focus-fadeIn .pagination span {	background: #343434;	vertical-align: top;	letter-spacing: normal;	word-spacing: normal;	display: inline-block;	*display: inline 	list-style: none;	width: 60px;	height: 15px;	margin-left: 4px;	cursor: pointer;}
	.focus-fadeIn .pagination span.on {	background: #4e4e4e;}
**/
(function($) {
	$.fn.jfocus = function(settings) {
		var defaults = {
			effectType:"slider",//slider or fadeinout
			time: 5000
		};
		var settings = $.extend(defaults, settings);
		return this.each(function(){
			var $this = $(this);
			var sWidth = $this.width();
			var len = $this.find("ul li").length;
			var index = 0;
			var picTimer;
			var btn = "<div class='pagination'>";
			for (var i = 0; i < len; i++) {
				btn += "<span></span>";
			}
			btn += "</div><div class='arrow pre'></div><div class='arrow next'></div>";
			$this.append(btn);
			$this.find(".pagination span").removeClass("on").mouseenter(function() {
				index = $this.find(".pagination span").index(this);
				showPics(index);
			}).eq(0).trigger("mouseenter");
			$this.find(".pre").click(function() {
				index -= 1;
				if (index == -1) {
					index = len - 1;
				}
				showPics(index);
			});
			$this.find(".next").click(function() {
				index += 1;
				if (index == len) {
					index = 0;
				}
				showPics(index);
			});
			//$this.find("ul").css("width", sWidth * (len));
			$this.hover(function() {
				clearInterval(picTimer);
			},
			function() {
				picTimer = setInterval(function() {
					showPics(index);
					index++;
					if (index == len) {
						index = 0;
					}
				},
				settings.time);
			}).trigger("mouseleave");
			function showPics(index) {
				//淡入淡出效果
				var lis = $this.find("ul li");
				lis.stop();
				lis.eq(index).siblings().animate({
					opacity:0
				},1000,null,function(){
					$(this).removeClass('active');
				});
				//显示当前图像
				lis.eq(index).animate({
					opacity:1
				},1000,null,function(){
					$(this).addClass('active');
				})

				
				//滑动效果
				var nowLeft = -index * sWidth;
				$this.find("ul").stop(true, false).animate({
					"left": nowLeft
				},
				300);
				
				
				$this.find(".pagination span").removeClass("on").eq(index).addClass("on");
			}
		});
	}
	$.fn.jfade = function(settings) {
		var defaults = {
			start_opacity: "1",
			high_opacity: "1",
			low_opacity: ".1",
			timing: "500"
		};
		var settings = $.extend(defaults, settings);
		settings.element = $(this);
		//set opacity to start
		$(settings.element).css("opacity", settings.start_opacity);
		//mouse over
		$(settings.element).hover(
		//mouse in
		function() {
			$(this).stop().animate({
				opacity: settings.high_opacity
			},
			settings.timing); //100% opacity for hovered object
			$(this).siblings().stop().animate({
				opacity: settings.low_opacity
			},
			settings.timing); //dimmed opacity for other objects
		},
		//mouse out
		function() {
			$(this).stop().animate({
				opacity: settings.start_opacity
			},
			settings.timing); //return hovered object to start opacity
			$(this).siblings().stop().animate({
				opacity: settings.start_opacity
			},
			settings.timing); // return other objects to start opacity
		});
		return this;
	}
	
})(jQuery);
