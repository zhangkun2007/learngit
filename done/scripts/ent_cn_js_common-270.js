if(g_HttpRelativeWebRoot!=undefined&&g_HttpRelativeWebRoot!=""){
	if(g_HttpRelativeWebRoot.indexOf(ssUrlPrefix)!=-1){
		g_HttpRelativeWebRoot = g_HttpRelativeWebRoot.substring(g_HttpRelativeWebRoot.indexOf(ssUrlPrefix),g_HttpRelativeWebRoot.length);
	}
}


var flag = 0  ;
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
jQuery.easing['jswing'] = jQuery.easing['swing'];
(function($){
	$.htmlGrid = function(gridconfig){
		var gconfig = {
			linecolor : '#4affff',
			gridwidth : 32,
			gridmarginright : 7,
			gridcols  : 24	
		}
		if(gridconfig){
			gconfig.linecolor = gridconfig.linecolor||'#4affff';	
			gconfig.gridwidth = gridconfig.gridwidth||32;
			gconfig.gridmarginright = gridconfig.gridmarginright||7;
			gconfig.gridcols = gridconfig.gridcols||24;
		}
		var dd = document.documentElement
		if(!$.browser.msie&&!$.browser.mozilla) {
			dd = document.body;
		}
		var gridhtml = '<div id="htmlgrid" style="width:100%; overflow:hidden; height:100%; position:fixed; left:-1px; top:0px; z-index:99999; display:none;"><div style="background-color:#000; width:100%; height:100%; position:absolute; left:0px; top:0px; z-index:10;"></div><div style="background:transparent; width:100%; height:100%; position:absolute; left:0px; top:0px; z-index:50;"><div style="margin:0px auto; display:block; padding:0px; height:100%; overflow:hidden; width:'+(((gconfig.gridwidth+1)*gconfig.gridcols)+gconfig.gridmarginright*(gconfig.gridcols-1))+'px;">';
		for(var i = 0;i<gconfig.gridcols;i++){
			gridhtml += '<div style="overflow:hidden;margin:0px; padding:0px; display:block; float:left; height:100%; width:'+(gconfig.gridwidth-1)+'px; border:1px solid '+gconfig.linecolor+'; border-width:0px 1px; text-align:center; font-family:Arial; font-size:10px; color:'+gconfig.linecolor+';';
			if(i < (gconfig.gridcols - 1)){
				gridhtml += 'margin-right:'+gconfig.gridmarginright+'px;';
			}
			gridhtml += '" title="'+(i+1)+'"><span style="display:block; padding:0px;">'+(i+1)+'</span></div>';			
		}
		gridhtml += '</div></div></div>';
		$(gridhtml).appendTo(document.body).find('div:eq(0)').css('opacity',0.3);
		$('<div id="htmlelementgrid" style="background:#222; line-height:24px; color:#fff; font-size:12px; border:1px solid #000; position:fixed; z-index:99999; top:0px; left:0px; display:none; padding:20px;"></div><div id="htmlelementmousegrid" style="background:#666; line-height:24px; color:#fff; font-size:12px; border:1px solid #333; position:absolute; z-index:99999; top:0px; left:0px; display:none; padding:0px 10px; height:24px; overflow:hidden;"></div><div id="htmlelementmousegridX" style="background:#ff0000; line-height:1px; position:fixed; z-index:100003; top:0px; left:0px; display:none; overflow:hidden; width:100%; height:1px;"></div><div id="htmlelementmousegridY" style="background:#ff0000; line-height:100%; position:fixed; z-index:100002; top:0px; left:0px; display:none; overflow:hidden; width:1px; height:100%;"></div><div id="htmlruler_x" style="background:url(groups/entwebtemplate/documents/enterprise_webasset/ruler_h.png) repeat-x; height:18px; width:100%; position:fixed; left:0px; top:0px; overflow:hidden; z-index:100000; display:none;"></div><div id="htmlruler_y" style="background:url(groups/entwebtemplate/documents/enterprise_webasset/ruler_v.png) repeat-y; height:100%; width:18px; position:absolute; left:0px; top:0px; overflow:hidden; z-index:100001; display:none;"></div>').appendTo(document.body);
		$('#htmlelementgrid').css('opacity',0.6);
		var mouseCoords = function(ev) 
		{ 
			if(ev.pageX || ev.pageY){ 
			return {x:ev.pageX+ dd.scrollLeft, y:ev.pageY-dd.scrollTop}; 
			} 
			return{ 
			x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
			y:ev.clientY + document.body.scrollTop - document.body.clientTop 
			}; 
		}
		$(document.body).mousemove(function(ent){
			ev= ent || window.event; 
			$('#htmlelementmousegridX').css('top',((mouseCoords(ev).y)-1)+'px');
			$('#htmlelementmousegridY').css('left',((mouseCoords(ev).x)-1)+'px');
		});
		$(document.body).find('*').each(function(){
			$(this).mouseover(function(ent){
				var entsrc = ent.target || window.event.srcElement;
				$('#htmlelementtagName').html($(entsrc).attr('tagName'));
				$('#htmlelementmousegrid').html('<span style="color:#4affff;">'+$(entsrc).attr('tagName')+'</span>&nbsp;,&nbsp;???:&nbsp;<span style="color:yellow;">'+$(entsrc).width()+'px</span>&nbsp;,&nbsp;???:&nbsp;<span style="color:yellow;">'+$(entsrc).height()+'px</span>'+'&nbsp;,&nbsp;??????:&nbsp;<span style="color:yellow;">'+$(entsrc).offset().left+'px</span>&nbsp;,&nbsp;??????:&nbsp;<span style="color:yellow;">'+$(entsrc).offset().top+'px</span>&nbsp;,&nbsp;??????:&nbsp;<span style="color:yellow;">'+$(entsrc).text().length+'</span>&nbsp;,&nbsp;??????:&nbsp;<span style="color:yellow;">'+($(entsrc).attr('className')||'??????'+'</span>'));
				$('#htmlelementparenttagName').html($(entsrc).parent().attr('tagName'));
				$('#htmlelementsize').html($(entsrc).width()+'px  '+$(entsrc).height()+'px');			
				$('#htmlelementposition').html($(entsrc).offset().left+'px  '+$(entsrc).offset().top+'px');	
				$('#htmlelementmousegrid').css({left:$(entsrc).offset().left+'px',top:(($(entsrc).offset().top-28)<=0?($(entsrc).offset().top+$(entsrc).height()):($(entsrc).offset().top-28))+'px'});
			});
		});
		$('#htmlelementmousegridX,#htmlelementmousegridY').unbind('mouseover');
		$('#htmlruler_y,#htmlruler_x').unbind('mouseover');
		$('#htmlgrid').unbind('mouseover');
		$('#htmlgrid div').unbind('mouseover');
		$('#htmlruler_y').css({'height':$(dd).height()+'px'});
		var xi = parseInt($(dd).width()/50)+1,xh = '';
		var yi = parseInt($(dd).height()/50)+1,yh='';
		for(var i=0; i<xi; i++){
			xh += '<span style="position:absolute;left:'+(i*50+2)+'px;top:0px; display:block; color:#333; font-size:10px; font-family:Arial;">'+(i*50)+'</span>';			
		}
		for(var i=0; i<yi; i++){
			yh += '<span style="position:absolute;left:4px;top:'+(i*50+2)+'px; width:8px; word-wrap:break-word; overflow:hidden; height:40px; display:block; color:#333; line-height:10px; font-size:10px; font-family:Arial;">'+(i*50)+'</span>';			
		}
		$('#htmlruler_x').html(xh);
		$('#htmlruler_y').html(yh);
		$(document).bind('keypress',function(e)    
		{   
			if(e.which == 127 || e.which == 8){//ctrl + ?????? ??????dom??????????????????????????????
				if($('#htmlelementgrid').is(':visible')){
					$('#htmlelementgrid').hide();
					$('#htmlelementmousegrid').hide();
					$('#htmlelementmousegridX').hide();
					$('#htmlelementmousegridY').hide();
					$('#htmlruler_y,#htmlruler_x').hide();
					$('#htmlelementgrid').html('');
				}else{
					$('#htmlgrid').hide();
					var htmltotal = '';
					htmltotal += '???????????????????????????<span id="htmlelementtagName" style="color:yellow;"></span><br/>';
					htmltotal += '???????????????????????????<span id="htmlelementsize" style="color:yellow;"></span><br/>';
					htmltotal += '???????????????????????????<span id="htmlelementposition" style="color:yellow;"></span><br/>';
					htmltotal += '????????????????????????????????????<span id="htmlelementparenttagName" style="color:yellow;"></span><br/>';
					htmltotal += 'css????????????'+$(document.styleSheets).length+'???<br/>';
					htmltotal += 'js????????????'+$(document).find('script').length+'???<br/>';
					htmltotal += '????????????'+window.screen.width+' x '+window.screen.height+'<br/>';
					htmltotal += '???????????????'+document.body.scrollWidth +' x '+document.body.scrollHeight+'<br/>';
					htmltotal += '??????DOM?????????'+($(document.body).find('*').length)+'???<br/>';
					htmltotal += '???????????????'+($(document.body).find('*:hidden')).length+'???<br/>';
					htmltotal += 'div?????????'+($(document.body).find('div').length)+'???<br/>';
					htmltotal += 'dt?????????'+($(document.body).find('dt').length)+'???<br/>';
					htmltotal += 'dd?????????'+($(document.body).find('dd').length)+'???<br/>';
					htmltotal += 'span?????????'+($(document.body).find('span').length)+'???<br/>';
					htmltotal += 'form?????????'+($(document.body).find('form').length)+'???<br/>';
					htmltotal += 'img?????????'+($(document.body).find('img').length)+'???<br/>';
					htmltotal += '???????????????'+($(document.body).find('h1,h2,h3,h4,h5,h6').length)+'???<br/>';
					htmltotal += 'ul?????????'+($(document.body).find('ul').length)+'???<br/>';
					htmltotal += 'li?????????'+($(document.body).find('li').length)+'???<br/>';
					htmltotal += 'a?????????'+($(document.body).find('a').length)+'???<br/>';
					htmltotal += 'p?????????'+($(document.body).find('p').length)+'???<br/>';
					htmltotal += 'table?????????'+($(document.body).find('table').length)+'???<br/>';
					htmltotal += '??????????????????'+($(document.body).text().length)+'???<br/>';
					$('#htmlelementgrid').html(htmltotal);
					$('#htmlelementmousegrid').show();
					$('#htmlelementgrid').show();
					$('#htmlelementmousegridX').show();
					$('#htmlelementmousegridY').show();
				}
			}
			if(e.which == 28 || e.which == 92){//ctrl + \ ?????????????????????
				if($('#htmlgrid').is(':visible')){
					$('#htmlgrid').hide();
					$('#htmlelementmousegridX').hide();
					$('#htmlelementmousegridY').hide();
					$('#htmlruler_y,#htmlruler_x').hide();
				}else{
					$('#htmlelementgrid').hide();
					$('#htmlelementmousegrid').hide();
					$('#htmlelementmousegridX').hide();
					$('#htmlelementmousegridY').hide();
					$('#htmlgrid').css({'height':$(dd).height()+'px'});
					$('#htmlgrid').show();
				}			
			}
			if($('#htmlelementgrid').is(':visible')){
				switch(e.which){				
					case 119://w ??????dom?????????????????????
						$('#htmlelementgrid').css({'bottom':'auto','top':'0px'});
						break;
					case 115://s ??????dom?????????????????????
						$('#htmlelementgrid').css({'bottom':'0px','top':'auto'});
						break;
					case 97://a ??????dom?????????????????????
						$('#htmlelementgrid').css({'right':'auto','left':'0px'});
						break;
					case 100://d ??????dom?????????????????????
						$('#htmlelementgrid').css({'right':'0px','left':'auto'});
						break;
					case 101://e ?????????????????????????????????
						if($('#htmlelementmousegridX').is(':visible')){
							$('#htmlelementmousegridX').hide();
							$('#htmlelementmousegridY').hide();
						}else{
							$('#htmlelementmousegridX').show();
							$('#htmlelementmousegridY').show();
						}						
						break;
					case 114://r ????????????dom?????????????????????
						if($('#htmlelementmousegrid').is(':visible')){
							$('#htmlelementmousegrid').hide();
						}else{
							$('#htmlelementmousegrid').show();
						}
						break;	
					case 102://f ??????????????????
						if($('#htmlruler_y').is(':visible')){							
							$('#htmlruler_y,#htmlruler_x').hide();
						}else{
							$('#htmlruler_y,#htmlruler_x').show();
						}
						break;			
				}
			}
			if($('#htmlgrid').is(':visible')){
				var og = $('#htmlgrid').find('div:eq(0)');
				var oga = 0;			
				switch(e.which){				
					case 119://w ????????????????????????????????????
						oga=(parseInt(parseFloat(og.css('opacity'))*10)+1)/10;
						if(oga>=1)oga=1;
						og.css('opacity',oga);
						break;
					case 115://s ????????????????????????????????????	
						oga=(parseInt(parseFloat(og.css('opacity'))*10)-1)/10;;
						if(oga<=0 || oga>=1)oga=0;
						og.css('opacity',oga);
						break;
					case 97://a ?????????????????????????????????	
						oga = parseInt($('#htmlgrid').offset().left);
						oga--;
						$('#htmlgrid').css('left',oga+'px');
						break;
					case 100://d ?????????????????????????????????
						oga = parseInt($('#htmlgrid').offset().left);
						oga++;
						$('#htmlgrid').css('left',oga+'px');
						break;
					case 101://e ???????????????????????????
						$('#htmlgrid').css('left','-1px');
						og.css('opacity',0.3);
						break;	
					case 113://q ?????????????????????????????????
						if($('#htmlelementmousegridX').is(':visible')){
							$('#htmlelementmousegridX').hide();
							$('#htmlelementmousegridY').hide();
						}else{
							$('#htmlelementmousegridX').show();
							$('#htmlelementmousegridY').show();
						}						
						break;
					case 102://f ??????????????????
						if($('#htmlruler_y').is(':visible')){
							$('#htmlgrid').find('span').css({'padding':'0px'});
							$('#htmlruler_y,#htmlruler_x').hide();
						}else{
							$('#htmlgrid').find('span').css({'padding':'20px 0px'});
							$('#htmlruler_y,#htmlruler_x').show();
						}
						break;		
				}	
				
			}
		});
	}		  
})(jQuery);
(function($){
	$.fn.wordLimit = function(num){	
		this.each(function(){	
			if(!num){
				var copyThis = $(this.cloneNode(true)).hide().css({
					'position': 'absolute',
					'width': 'auto',
					'overflow': 'visible'
				});	
				$(this).after(copyThis);
				if(copyThis.width()>$(this).width()){
					$(this).text($(this).text().substring(0,$(this).text().length-4));
					$(this).html($(this).html()+'...');
					copyThis.remove();
					$(this).wordLimit();
				}else{
					copyThis.remove(); //????????????
					return;
				}	
			}else{
				var maxwidth=num;
				if($(this).text().length>maxwidth){
					$(this).text($(this).text().substring(0,maxwidth));
					$(this).html($(this).html()+'...');
				}
			}					 
		});
	}		  
})(jQuery);
(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = $.curCSS;
		$.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			fx.start = [start[0],start[2]];
			var end = toArray(fx.end);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);
(function(d){function g(a){var b=a||window.event,i=[].slice.call(arguments,1),c=0,h=0,e=0;a=d.event.fix(b);a.type="mousewheel";if(a.wheelDelta)c=a.wheelDelta/120;if(a.detail)c=-a.detail/3;e=c;if(b.axis!==undefined&&b.axis===b.HORIZONTAL_AXIS){e=0;h=-1*c}if(b.wheelDeltaY!==undefined)e=b.wheelDeltaY/120;if(b.wheelDeltaX!==undefined)h=-1*b.wheelDeltaX/120;i.unshift(a,c,h,e);return d.event.handle.apply(this,i)}var f=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
f.length;a;)this.addEventListener(f[--a],g,false);else this.onmousewheel=g},teardown:function(){if(this.removeEventListener)for(var a=f.length;a;)this.removeEventListener(f[--a],g,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }

		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

var HuaWei = {};
HuaWei.namespace = function(str){
    var arr = str.split('.'),o=HuaWei;
    for(i=(arr[0]=='HuaWei')? 1 : 0; i<arr.length; i++){        
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
}
HuaWei.namespace('page.mainView');
HuaWei.namespace('form');
HuaWei.page.formExtension = function(){
	jQuery.validator.addMethod("mobileValid", function(value, element){
		 var mob = /^\d{11}$/;
		 return mob.test(value) || this.optional(element);
		},"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801");
	jQuery.validator.addMethod("telphoneValid", function(value, element){
		 var tel = /0\d{2,3}-\d{7,8}|\(0\d{2,3}\)\d{7,8}/;
		 return tel.test(value) || this.optional(element);
		},"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801");
	jQuery.validator.addMethod("telphoneOrmobile", function(value, element){
		 var tel = /^(0\d{2,3}-\d{7,8})|(0\d{2,3})\d{7,8}$/;
		 var mob = /^\d{11}$/;
		 var result=false;
		 if(tel.test(value) || mob.test(value))result=true;
		 return result || this.optional(element);
		},"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u7535\u8bdd");
	jQuery.validator.addMethod("certTelphoneOrmobile", function(value, element){
		 var tel= /^[^\u0391-\uFFE5]*$/;
		 var result=false;
		 if(value.toString().length<30&&tel.test(value))result=true;
		 return result || this.optional(element);
		},"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u7535\u8bdd");
	jQuery.validator.addMethod("CompanyNameLength", function(value, element){
		 var strlength =value.toString().length;		 
		 var result=false;
		 if(strlength<150)result=true;
		 	return result|| this.optional(element);
		},"\u516c\u53f8\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7150\u4e2a\u5b57\u7b26\u0081\uff01");
	jQuery.validator.addMethod('defaultVal',function(value,element,params){
		 var result = value.replace(/(^\s*)|(\s*$)/g, "") != params;
		 return result || this.optional(element);
	  },'\u8be5\u5b57\u6bb5\u4e0d\u80fd\u4e3a\u7a7a');
	jQuery.validator.addMethod('boolNum',function(value,element,params){
		 var rnum = /^\d{1,10}$/;
		 var result = false;
		 if(rnum.test(value))result=true;
		 return result || this.optional(element);
	  },'\u8bf7\u8f93\u5165\u6709\u6548\u6570\u5b57\uff01');
	jQuery.validator.addMethod('brifLength',function(value,element,params){
		 var strlength =value.toString().length;		 
		 var result=false;
		 if(strlength<500)result=true;
		 return result || this.optional(element);
	  },'\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01');
	jQuery.validator.addMethod('Textlength',function(value,element,params){
		 var strlength =value.toString().length;		 
		 var result=false;
		 if(strlength<121)result=true;
		 return result || this.optional(element);
	 },'\u6587\u672c\u5185\u5bb9\u592a\u957f\uff01');
}
HuaWei.page.textHighLight = function(){
	jQuery.fn.highlight = function(pat) {
		if(pat){
		 function innerHighlight(node, pat) {
		  var skip = 0;
		  if (node.nodeType == 3) {
		   var pos = node.data.toUpperCase().indexOf(pat);
		   if (pos >= 0) {
			var spannode = document.createElement('span');
			spannode.className = 'highlight';
			var middlebit = node.splitText(pos);
			var endbit = middlebit.splitText(pat.length);
			var middleclone = middlebit.cloneNode(true);
			spannode.appendChild(middleclone);
			middlebit.parentNode.replaceChild(spannode, middlebit);
			skip = 1;
		   }
		  }
		  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
		   for (var i = 0; i < node.childNodes.length; ++i) {
			i += innerHighlight(node.childNodes[i], pat);
		   }
		  }
		  return skip;
		 }
		 return this.each(function() {
		  innerHighlight(this, pat.toUpperCase());
		 });
		}
	};
	jQuery.fn.removeHighlight = function() {
		 return this.find("span.highlight").each(function() {
		  this.parentNode.firstChild.nodeName;
		  with (this.parentNode) {
		   replaceChild(this.firstChild, this);
		   normalize();
		  }
		 }).end();
	};	
	
	
}
HuaWei.page.getQueryValue = function(url,key){
	var escapeReg = function(source) {
		return String(source)
				.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	};
    var reg = new RegExp(
                        "(^|&|\\?|#)" 
                        + escapeReg(key) 
                        + "=([^&]*)(&|\x24)", 
                    "");
    var match = url.match(reg);
    if (match) {
		var result=match[2].substring(match[2].length-1,match[2].length);
        return result=='#'?match[2].substring(0,match[2].length-1):match[2];
    }    
    return null;
}
HuaWei.page.isIE6 = function(){
	var isIE = !+'\v1'; //IE?????????
	var IE6 = isIE && /MSIE (\d)\./.test(navigator.userAgent) && parseInt(RegExp.$1) < 7;
	return IE6;	
}
HuaWei.page.mainView = function(){
	var c = $('#mainview .mainviewul');
	var w = $('#mainview').width();
	var t = c.find('li').length;
	var tw = $('.index_header .cp_nav').offset().left;
	var h = '';
	var o = null;
	var autohide = $('#mainview').attr('autoHideController');
	var easing='easeInOutExpo',speed=10000,is=false;
	var animate =  $('#mainview').attr('animate');
	
	c.attr('index',0);
	if(t>1){
		for(var i=0; i<t; i++){
			h +='<a href="javascript:void(0)" index="'+i+'"';
			if(i==0)h += ' class="active"> </a>';
			else h+= '> </a>'	
		}
		$('#mainview .mainview_controler td:eq(0)').html(h);
		if(autohide && autohide == 'true'){
			$('#mainview .mainview_controler').delay(3000).animate({bottom:'-30px'},200);			
			$('#mainview').hover(function(){				
				$('#mainview .mainview_controler').stop(true,true);
				$('#mainview .mainview_controler').animate({bottom:'0px'},400);
			},function(){
				$('#mainview .mainview_controler').animate({bottom:'-30px'},200);
			});
		}
	}
	if(animate && animate=='hide'){
		c.css({'width':w+'px','position':'relative'}).find('li').each(function(index){
			$(this).css({'position':'absolute','left':'0px','top':'0px','z-index':(t-index)});			
		});
	}else{
		c.css('width',t * w+'px');
	}
	c.find('li').each(function(){
		var bc = $(this).attr('backgroundcolor');
		if(!bc)bc='transparent';
		$(this).css('background','url('+$(this).attr('src')+') center top no-repeat scroll '+bc).css('width',w+'px');
		var links = eval('('+$(this).attr('links')+')');
		var me = $(this);
		if(links){
			$(links).each(function(){
				$('<a href="'+this.href+'" class="imglinks" target="_blank" style="width:'+this.w+'px;height:'+this.h+'px;left:'+(tw+this.x)+'px;top:'+this.y+'px;"> </a>').appendTo(me);
			})
		}
	});
	var play = function(p){
		is = true;
		c.attr('index',p);
		if(animate && animate=='hide'){			
			c.find('li:lt('+p+')').fadeOut(1000);
			c.find('li:gt('+p+')').fadeOut(1000);			
			c.find('li:eq('+p+')').fadeIn(2000,function(){is=false});
		}else{
			c.animate({left:-p*$('#mainview').width()+'px'},2000,easing,function(){
				is = false;	
			});
		}
		$('#mainview .mainview_controler td:eq(0) a').removeClass('active');
		$('#mainview .mainview_controler td:eq(0) a:eq('+p+')').addClass('active');	
	}
	var autoplay = function(){
		var p = parseInt(c.attr('index'));
		p++;
		if(p>=t)p=0;
		play(p);
	}
	if(t>1){
		o = setInterval(autoplay,speed);
		$('#mainview .mainview_controler td:eq(0) a').each(function(i){
			$(this).click(function(){
				if(!is){
					clearInterval(o);
					o = null;
					var p = parseInt($(this).attr('index'));
					c.find('li').stop(true,true);
					play(p);
					o = setInterval(autoplay,speed);
				}
			});
		});
		c.find('li').each(function(){
			$(this).hover(function(){
				clearInterval(o);
				o = null;
			},function(){
				o = setInterval(autoplay,speed);
			});
			
		});
	}
	setInterval(function(){
		if(!is){
			if(!(animate && animate=='hide')){
				var p = parseInt(c.attr('index'));
				c.css('left',-p*$('#mainview').width()+'px');
			}
			c.find('li').each(function(){
				var links = eval('('+$(this).attr('links')+')');
				var me = $(this);
				if(links){
					$(links).each(function(index){
						me.find('a.imglinks:eq('+index+')').css('left',($('#head .header').offset().left+this.x)+'px');
					})
				}
			});
		}
	},100);
	$(window).resize(function(){		
		w = $('#mainview').width();
		c.find('li').css('width',w+'px');
		c.css('width',t * w+'px')
	});
	
} 
HuaWei.page.indexNewsBar = function(){
	$("#newsbar .news").jCarouselLite({
	    auto: 3000,
		visible:1,
	    scroll: 1,
		vertical:true,
		easing:'easeInOutExpo',
	    speed: 1000
    }); 	
}

HuaWei.page.naviMenu = function(){
	if (document.documentElement.clientHeight > document.documentElement.offsetHeight-4){
		$("#cp_menu").bind("vscroll",function(e){
		$(".cp_menu").slideUp();	
			})
	}
	var navi = parameter;
	if(navi){	
		if(navi.navi!=null){
			$('.nav li:eq('+navi.navi+') a').addClass('menu-active-on');
		}
	}
	$(".nav_warp").find(".cp_menuitempanel").each(function(i){
	$(".nav_warp").find(".cp_menuitempanel").eq(i).find(".nav_menu:last").addClass('navbgnone');
 });
 
	//begin
$(".cp_menuitempanel")
.css("display","block")
.css("float","left")
.each(function(i,o){
$(o).attr("data-height",$(o).outerHeight());
})
;

$("#cp_menu").bind("vscroll",function(e){
if($(document).scrollTop()<$(".index_topbox").outerHeight()||$(document).scrollTop()<=0){
	$(this).removeClass('float-navi');
	$("#offset-ph").slideUp();
	return;
}
$(this).addClass('float-navi');
		});
$(".cp_menu").find("> div > div").css("clear","both").css("width","600%").css("overflow","hidden")
.parent().css("position","relative")
.end().children().css("width","16.66%").css("margin","auto 0").css("display","inline")//.css("border","1px solid #F00")
.end().end().css("overflow","hidden").css("display","none")
.bind("vscroll",function(e){
if($(document).scrollTop()<$(".index_topbox").outerHeight()||$(document).scrollTop()<=0){
$(this).css({"position":"static"});
return;
}

$(this).css({"position":"fixed","top":"68px","width":"100%","z-index":999});
});
	$(window).bind("scroll",function(e){
$("#cp_menu, .cp_menu").trigger("vscroll");
});
/*????????????*/
var timer = null;
function showNav(_this){
	timer = setTimeout(function(){
			$(_this).addClass("hover");
			$(".cp_nav > ul.nav  > li > a").not(_this).removeClass("hover");
		$(".cp_menu").slideDown(500);
		var thisindex = $(".cp_nav > ul.nav  > li > a").index(_this) 
		$(".cp_menu").find(" > div > div").css("margin-left",-thisindex*100+"%");
		},200)
	}
$(".cp_nav > ul.nav  > li > a").mouseenter(function(){
	var _this = this;
	if($(".cp_menu:visible")){
		$(_this).addClass("hover");
		$(".cp_nav > ul.nav  > li > a").not(_this).removeClass("hover");
		var thisindex = $(".cp_nav > ul.nav  > li > a").index(_this) 
		$(".cp_menu").find(" > div > div").css("margin-left",-thisindex*100+"%");
		}
	showNav(_this);
	})
$(".cp_nav > ul.nav  > li > a").mouseleave(function(){
	clearTimeout(timer);
	})	
var closePanel=null;
$(".cp_menu,#cp_menu").hover(
	function(e){
if(closePanel)
	clearTimeout(closePanel);
},function(e){
closePanel=window.setTimeout(function(){
$(".cp_menu").slideUp(500);
$("#offset-ph").slideUp(500);
$(".cp_nav > ul.nav  > li > a").removeClass("menu-active hover");	
},500);
}
	);
	}


HuaWei.page.naviMenuNew = function(){
var nav_top = $('#navi').position().top;
//????????????????????????????????????????????????
var onWidthChange = function ()
{  
   if( $(window).width() <952 ) {
    $(".x_nav").css("width",952);
   $(".menu_div").css("width",952);
    }
	else{
	 $(".x_nav").css("width",$(window).width());
   $(".menu_div").css("width",$(window).width());
		}
}
onWidthChange();
var resizeTimer = null;
window.onresize = function(){
  resizeTimer = resizeTimer ? null : setTimeout(onWidthChange,0);
}
//hover????????????
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 500,
            outDuring: 1000,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();    
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer, that = this;
      return $(this).each(function(){
	  var that = this;
	  var hoverTimer, outTimer;
	  $(this).hover(
	  function(){
	  clearTimeout(outTimer);
	  hoverTimer = setTimeout(
	  function(){sets.hoverEvent.apply(that)},
	  sets.hoverDuring
	  );
	  },
	  
	  function(){
	  clearTimeout(hoverTimer);
	  outTimer = setTimeout(
	  function(){sets.outEvent.apply(that)},
	  sets.outDuring
	  );
	  }
	  );
	  });
    }    
//????????????
	var indexli;
	indexlix=$('#navi .menu li[is="menuindex"]').length;
	$otherNav = function(){
		$('.mainNav').css("margin-bottom",59);
		$('#navi .menu li[is="menuindex"]').hoverDelay({
			 hoverDuring: 500,
            outDuring: 500,
			hoverEvent: function(){		
		indexli = $(this).index();
		for(i=0;i<indexlix;i++){
			if(i!=indexli)
			$(this).siblings().children("a").removeClass('hover'+i)
			}
		$(this).find('a:eq(0)').addClass('hover'+indexli);
		$(this).children('.x_nav').show();	
		$(this).siblings().find('.x_nav').hide();		
				},
	outEvent: function(){
	 $(this).find(".x_nav").hide();
	$('#navi .menu li[is="menuindex"]:eq('+navi.navi+') a:eq(0)').siblings(".x_nav").show();		
	$(this).find('a:eq(0)').removeClass('hover'+indexli);	
	$(this).find('.menu_div').slideUp(500);
	
				}
				
			})
		}
	$indexNav = function(){
	$(window).scroll(function() {
	 if ($(document).scrollTop()<=nav_top+36) {
                    $("#navi").removeClass("div2")
                }
				 if ($(document).scrollTop() > nav_top+36) {
                    $("#navi").addClass("div2")
                }
})	
	$('#navi .menu li[is="menuindex"]').hoverDelay({
	hoverEvent: function(){
		$(this).siblings().find('.menu_div').hide();
	$(this).children('.x_nav').css("z-index",99);
		indexli = $(this).index();
		$(this).find('a:eq(0)').addClass('hover'+indexli);
	if($("#navi .menu li .x_nav").is(":visible")){
		$(this).children('.x_nav').show();		
		$(this).siblings().children('.x_nav').hide();		
		}
	else{
		$(this).children('.x_nav').slideDown(500);		
		$(this).siblings().children('.x_nav').slideUp(500);						
		}		
		},
	outEvent: function(){
		$(this).children('.x_nav').css("z-index",0);
		indexli = $(this).index();
	$(this).find('a:eq(0)').removeClass('hover'+indexli);	
	$(this).find('.x_nav').slideUp(500);	
	$(this).find('.menu_div').slideUp(500);
		}
	})
	}
//????????????
$subNav = function() {
	var searchst=$(".xnav_tab_head li");
		searchst.hoverDelay({	
		 hoverDuring: 300,
            outDuring: 500,
		hoverEvent: function(){
			$(this).children('.menu_div').css("z-index",99);
			$(this).children("a").addClass("on");
			$(this).siblings().children("a").removeClass("on");
			if($(".xnav_tab_head li .menu_div").is(":visible")){
			$(this).children(".menu_div").show();		
			$(this).siblings().children(".menu_div").hide();	
			}
			else{
				$(this).children(".menu_div").slideDown(500);
				$(this).siblings().children(".menu_div").slideUp(500);			
				}
			},
		 outEvent: function(){
			 $(this).children('.menu_div').css("z-index",0);
			 $(this).children("a").removeClass("on");	
			 $(this).find('.menu_div').slideUp(500);	
			 }
			})

}
//???????????????????????????????????????
var navi = parameter;
	if(navi){	
		if(navi.navi!=null){
					$(window).scroll(function() {
	 if ($(document).scrollTop()<=nav_top) {
                    $("#navi").removeClass("div2");
					
                }
				 if ($(document).scrollTop() > nav_top) {
                    $("#navi").addClass("div2");
					
                }
})	
			$('#navi .menu li[is="menuindex"]:eq('+navi.navi+') a:eq(0)').addClass('active'+navi.navi);
			$('#navi .menu li[is="menuindex"]:eq('+navi.navi+') a:eq(0)').siblings(".x_nav").slideDown(300);	
			$otherNav();	
			$(window).scroll(function() {
				$("#navi").find('.menu_div').hide();	
                if ($(document).scrollTop() <= nav_top) {
                    $('#navi .menu li[is="menuindex"]:eq('+navi.navi+') a:eq(0)').siblings(".x_nav").slideDown(300);
					
                }
				 if ($(document).scrollTop() > nav_top) {
					 $("#navi").find('.x_nav').hide();
					$("#navi").addClass("div2")
					

                }
			})
			
		}
	}else{
		$indexNav();
		var val = HuaWei.page.getQueryValue(window.location.href,'navi');
		if(val){
			$('#navi .menu li[is="menuindex"]:eq('+val+') a:eq(0)').addClass('active'+val);
		}
	}
$subNav();
}
HuaWei.page.indexAlert = function(){
	var alert_obj = null;
	$('#indeximg dd').each(function(){
		$(this).click(function(){
			if($(this).attr('href')){
				window.location.href = $(this).attr('href');					  
			}
		})
		
	})

	//&#40736;&#26631;&#28857;&#20987;&#26174;&#31034;
	$('#indeximg dd:eq(0)').click(function(){
		var me = $(this);
		$('#indexalert').css({'left':(me.offset().left)+'px','top':(me.offset().top-310)+'px'}).fadeIn(200);
	});
	//end
	
	$('#indexalert').hover(function(e){e.stopPropagation();},function(e){$(this).hide();e.stopPropagation()});	
}
HuaWei.page.searchType = function(){
	$('#search_click').click(function(){
		$('#navi').css('position','static');
		$('#search_type').slideDown(200);	
	});
	$('.searchbg input.text').focus(function(){
		$('.searchbg a.click').css('background','url(/ilink'+g_HttpRelativeWebRoot+'groups/entwebtemplate/documents/enterprise_webasset/ent_cn_img_search_hover.png) left top no-repeat scroll transparent');
		$('#search_click').trigger('click');
	}).blur(function(){$('.searchbg a.click').css('background','transparent')});
		
	$('#search_type').hover(function(){},function(){
		$('#navi').css('position','relative');
		$(this).hide();
	});	
	if(parameter){
		if(parameter.searchindex){
			$('#search_type input[type="radio"]').each(function(index, element) {
                if(index == parameter.searchindex){
					$(this).attr('checked','true');
				}
            });
		}
		if(parameter.searchtext){
			HuaWei.page.publicInputFocus('.searchbg input.text',parameter.searchtext,'#666','#999',function(){},function(){},true);
		}	
	}
}
HuaWei.page.treeInit = function(){
	var script = $('ul.tree').attr('script');
	if(script && script == 'false')script=false;
	else script = true;
	if(script){
		var nodecode = HuaWei.page.getQueryValue(window.location.href,'node');
		var childcode = HuaWei.page.getQueryValue(window.location.href,'child');
		$('ul.tree').find('a.node').each(function(index, element) {
			$(this).attr('index',index);
			var href = $(this).attr('href');
			if(href.indexOf('javascript:')==-1){
				if(href.indexOf('node=')==-1){
					if(href.indexOf('?')==-1){
						href += '?node='+index;
					}else{
						href += '&node='+index	
					}
				}
			}
			$(this).attr('href',href);
			$(this).siblings('ul').find('li:last-child').addClass('nobg');
			$(this).siblings('ul').find('a.child').each(function(i, element) {
				var href = $(this).attr('href');
				if(href.indexOf('javascript:')==-1){
					if(href.indexOf('child=')==-1 && href.indexOf('node=')==-1){
						if(href.indexOf('?')==-1){
							href += '?node='+index+'&child='+i;
						}else{
							href += '&node='+index+'&child='+i;
						}
					}
				}
				$(this).attr('href',href);
			});
		});
		$('ul.tree a.node').click(function(){
			var ul = $(this).siblings('ul');
			var show = ul.is(':visible');
			var i = $(this).attr('index');
			if(!show){
				$('ul.tree a.node:lt('+i+')').siblings('ul.childern').slideUp(400);
				$('ul.tree a.node:gt('+i+')').siblings('ul.childern').slideUp(400);
				$(this).siblings('ul').slideDown(400);
			}
		});	
		if(nodecode){
			var n = $('ul.tree a.node:eq('+nodecode+')');
			$('ul.tree').find('a.node,a.child').removeClass('selected');
			n.addClass('selected');
			if(n.siblings('ul').length>0){
				n.trigger('click');
			}
		}
		if(nodecode && childcode){
			var n = $('ul.tree a.node:eq('+nodecode+')');
			if(n.siblings('ul').length<1){
				$('ul.tree').find('a.node,a.child').removeClass('selected');
				n.addClass('selected');
			}else{
				$('ul.tree').find('a.node,a.child').removeClass('selected');
				n.trigger('click');
				n.siblings('ul').find('a.child:eq('+childcode+')').addClass('selected');
			}		
		}
	}
}
HuaWei.page.ulSameHeight = function(){
	$('div.block_s ul.blocks_item').each(function(){
		$(this).find('li[sameheight="true"]').css('height',$(this).height()+'px');		
	})	
}
HuaWei.page.videoController = function(){
	var pcw = $('div.videopanel ul:eq(0) li:eq(0)').width();
	$(".videolist dd.center li a").each(function(index, element) {
		$(this).attr('index',index);
        $(this).click(function(){
			$(".videolist dd.center li a").removeClass('play');
			$(this).addClass('play');	
			$('div.videopanel ul:eq(0)').animate({marginLeft:-parseInt($(this).attr('index'))*pcw+'px'},1000,'easeInOutExpo');
		})
    });
	var v = $('div.videolist');
	v.attr('start',0);
	var page = $(".videolist dd.center li").length-1;
	var pw = $(".videolist dd.center li:eq(0)").width();
	$(".videolist dd.left a").addClass('disabled');
	if(page<=0)$(".videolist dd.right a").addClass('disabled');
	if(page>0){
		$(".videolist dd.left a").click(function(){
			var tv = parseInt(v.attr('start'));
			tv--;
			if(tv<=0){
				$(".videolist dd.left a").removeClass('disabled').addClass('disabled');
				tv = 0
			}
			v.attr('start',tv);
			$(".videolist dd.center ul").animate({marginLeft:-tv*(pw+8)+'px'},200);
			$(".videolist dd.right a").removeClass('disabled');
		});
		$(".videolist dd.right a").click(function(){
			var tv = parseInt(v.attr('start'));
			tv++;
			if(tv>=page){
				$(".videolist dd.right a").removeClass('disabled').addClass('disabled');
				tv = page;
			}
			v.attr('start',tv);
			$(".videolist dd.center ul").animate({marginLeft:-tv*(pw+8)+'px'},200);
			$(".videolist dd.left a").removeClass('disabled');
		});
		$(".videolist dd.center ul").mousewheel(function(e,d){
			if(d>0){
				$(".videolist dd.left a").trigger('click');
			}else{
				$(".videolist dd.right a").trigger('click');
			}
			return false;
		});
	}
}
HuaWei.page.videoControllerr = function(){
	var pcw = $('div.videopanel_1 ul:eq(0) li:eq(0)').width();
	$(".videolist_1 dd.center li a").each(function(index, element) {
		$(this).attr('index',index);
        $(this).click(function(){
			$(".videolist_1 dd.center li a").removeClass('play');
			$(this).addClass('play');	
			$('div.videopanel_1 ul:eq(0)').animate({marginLeft:-parseInt($(this).attr('index'))*pcw+'px'},1000,'easeInOutExpo');
		})
    });
	var v = $('div.videolist_1');
	v.attr('start',0);
	var page = $(".videolist_1 dd.center li").length-1;
	var pw = $(".videolist_1 dd.center li:eq(0)").width();
	$(".videolist_1 dd.left a").addClass('disabled');
	if(page<=0)$(".videolist_1 dd.right a").addClass('disabled');
	if(page>0){
		$(".videolist_1 dd.left a").click(function(){
			var tv = parseInt(v.attr('start'));
			tv--;
			if(tv<=0){
				$(".videolist_1 dd.left a").removeClass('disabled').addClass('disabled');
				tv = 0
			}
			v.attr('start',tv);
			$(".videolist_1 dd.center ul").animate({marginLeft:-tv*(pw+8)+'px'},200);
			$(".videolist_1 dd.right a").removeClass('disabled');
		});
		$(".videolist_1 dd.right a").click(function(){
			var tv = parseInt(v.attr('start'));
			tv++;
			if(tv>=page){
				$(".videolist_1 dd.right a").removeClass('disabled').addClass('disabled');
				tv = page;
			}
			v.attr('start',tv);
			$(".videolist_1 dd.center ul").animate({marginLeft:-tv*(pw+8)+'px'},200);
			$(".videolist_1 dd.left a").removeClass('disabled');
		});
		$(".videolist_1 dd.center ul").mousewheel(function(e,d){
			if(d>0){
				$(".videolist_1 dd.left a").trigger('click');
			}else{
				$(".videolist_1 dd.right a").trigger('click');
			}
			return false;
		});
	}
}
HuaWei.page.tabsInit = function(){
	var tabs = HuaWei.page.getQueryValue(window.location.href,'tabs');
	$('.tabs li a').each(function(index, element) {
		if($(this).hasClass('actived')){
		$('.tabs_content:eq('+index+')').show();
		}
		else{if(index<1){if($('.tabs li a.actived').length<1){
			$(this).addClass('actived');
			$('.tabs_content:eq('+index+')').show();
		}
		}
		else{$('.tabs_content:eq('+index+')').hide();
		}
		}
		$(this).click(function(){
		$('.tabs li a').removeClass('actived');
		$(this).addClass('actived');
		$('.tabs_content').hide();
		$('.tabs_content:eq('+index+')').show(); 
	})
	});
		if(tabs){$('.tabs li a').removeClass('actived');
				$('.tabs li a:eq('+tabs+')').addClass('actived');
				$('.tabs_content').hide();
				$('.tabs_content:eq('+tabs+')').show();
} 
} 


//???????????????????????????tab??????????????????
function product_dataTab(){
	var flag=$("#tabs_docList > div ").length;
	if(flag>0){
		$("#tabsList_li").show();	
		$("#tabspanel_list").append($("#tabs_docList"));
		$("#tabs_ul").append($("#tabsList_li"));
		
	}else{
		$("#ddDiv").remove();
		$("#ulDiv").remove();
	}
}

HuaWei.page.tabsInit1 = function(){
	var tabs1 = HuaWei.page.getQueryValue(window.location.href,'tabs1');
	$('.tabs1 li a').each(function(index, element) {
		if($(this).hasClass('actived')){
		$('.tabs_content1:eq('+index+')').show();
		}
		else{if(index<1){if($('.tabs1 li a.actived').length<1){
			$(this).addClass('actived');
			$('.tabs_content1:eq('+index+')').show();
		}
		}
		else{$('.tabs_content1:eq('+index+')').hide();
		}
		}
		$(this).click(function(){
		$('.tabs1 li a').removeClass('actived');
		$(this).addClass('actived');
		$('.tabs_content1').hide();
		$('.tabs_content1:eq('+index+')').show(); 
	})
	});
		if(tabs1){$('.tabs1 li a').removeClass('actived');
				$('.tabs1 li a:eq('+tabs1+')').addClass('actived');
				$('.tabs_content1').hide();
				$('.tabs_content1:eq('+tabs1+')').show();
} 
}

HuaWei.page.starInit = function(){

	var startxt = ['','\u52a0\u6cb9\u5427','\u8fd8\u884c\u5427','\u4e0d\u9519\u54e6','\u5f88\u597d','\u592a\u68d2\u4e86'];
	$('ul.star li#startext').html(startxt[$('ul.star li.star').length]);
	var star = 0;
	$('ul.star li').each(function(index, element) {
		$(this).attr('index',index+1);
		$(this).hover(function(){
			if(star == 0){
				var i = $(this).attr('index');
				$('ul.star li').removeClass('star');
				$('ul.star li:lt('+i+')').addClass('star');
				$(this).addClass('star');
			}
		},function(){
			if(star == 0){
				$('ul.star li').removeClass('star');
			}
		});
        $(this).click(function(){
			star = (i+1)
			var i = $(this).attr('index');
			$('ul.star li').removeClass('star');
			$('ul.star li:lt('+i+')').addClass('star');
			$(this).addClass('star');
			$('ul.star li#startext').html(startxt[parseInt(i)]);
		});
    });	
	
}
HuaWei.page.showProductNews = function(){
	$('div.pro_text_news').each(function(){
        $(this).css('cursor','pointer');
        $(this).click(function(){
            var a=$(this).siblings('ul.pro_listitem_news');
            var b=a.is(':visible');
            if(b){
                a.animate({height:'hide'},400);
                $(this).find('a:eq(0)').removeClass('hideli').addClass('showli');
               // $(this).find('a:eq(0)').text('Show Products');  
            }else{
                a.animate({height:'show'},400);
                $(this).find('a:eq(0)').removeClass('showli').addClass('hideli');
               // $(this).find('a:eq(0)').text('Hide Products');
                var dd = document.documentElement;
				var navHeight = $('#cp_menu').outerHeight();
                if(!$.browser.msie&&!$.browser.mozilla) {
                    dd = document.body;
                } 
				 if ($(document).scrollTop()==0) {
                $(dd).delay(500).animate({scrollTop:a.parent().offset().top-(navHeight)},400);
				 }
				if ($(document).scrollTop()>0) {
				 $(dd).delay(500).animate({scrollTop:a.parent().offset().top-navHeight},400);
				 }
				$(".pro_listitem_news li").each(function(){
		var pro_h=$(this).height();
      	$(this).children().children("span").css("height",pro_h+"px");
			})
            }
        });
    });
    var pcode = HuaWei.page.getQueryValue(window.location.href,'product');
        if(pcode){
        var tempul = $('ul.pro_listitem_news:eq('+pcode+')').is(':visible');
        if(!tempul){
        $('ul.pro_listitem_news').hide();
        $('div.pro_text:eq('+pcode+')').trigger('click');
        }
        } 
	}
HuaWei.page.showProduct = function(){
	$('div.pro_text').each(function(){
		$(this).css('cursor','pointer');
		$(this).click(function(){
			var a=$(this).siblings('ul.pro_listitem');
			var b=a.is(':visible');
			if(b){
				a.animate({height:'hide'},400);
				$(this).find('a:eq(0)').removeClass('hideli').addClass('showli');
				//$(this).find('a:eq(0)').text('????????????');	
			}else{
				a.animate({height:'show'},400);
				$(this).find('a:eq(0)').removeClass('showli').addClass('hideli');
				//$(this).find('a:eq(0)').text('????????????');
				var dd = document.documentElement
				if(!$.browser.msie&&!$.browser.mozilla) {
					dd = document.body;
				}				
				if ($(document).scrollTop()==0) {
                $(dd).delay(500).animate({scrollTop:a.parent().offset().top-129},400);
				 }
				if ($(document).scrollTop()>0) {
				 $(dd).delay(500).animate({scrollTop:a.parent().offset().top-35},400);
				 }
			$(".pro_listitem li").each(function(){
		var pro_h=$(this).height();
      	$(this).children().children("span").css("height",pro_h+"px");
			})
            }
        });
    });
	var pcode = HuaWei.page.getQueryValue(window.location.href,'product');
		if(pcode){
		var tempul = $('ul.pro_listitem:eq('+pcode+')').is(':visible');
		if(!tempul){
		$('ul.pro_listitem').hide();
		$('div.pro_text:eq('+pcode+')').trigger('click');
		}
		} 
	 }

HuaWei.page.showPartners = function(){
	$('a.showli').each(function(){
		$(this).click(function(){
			var a=$(this).siblings('ul.pro_listitem_news_ly0429');
			var b=a.is(':visible');
			if(b){
				a.animate({height:'hide'},400);
				$(this).removeClass('downspan');
			}else{
				a.animate({height:'show'},400);
				$(this).addClass('downspan');
				
				var dd = document.documentElement
				if(!$.browser.msie&&!$.browser.mozilla) {
					dd = document.body;
				}				
				if ($(document).scrollTop()==0) {
                $(dd).delay(500).animate({scrollTop:a.parent().offset().top-129},400);
				 }
				if ($(document).scrollTop()>0) {
				 $(dd).delay(500).animate({scrollTop:a.parent().offset().top-35},400);
				 }
            }
            //load baidu map
           var curMap = $(this).parent().find('.mapright');
           var curAddr = $(this).parent().find(".mapaddr").val();
           codeLatLng(curMap,curAddr);
        });
    });
};	
	 
HuaWei.page.publicInputFocus = function(id,text,focuscolor,blurcolor,focusFun,blurFun,once){
	var color = focuscolor||'#000000',oldColor=blurcolor||'#999999';
	var focusRun = focusFun || function(){},blurRun = blurFun || function(){};
	var once = once || false;
	$(id).val(text);	
	$(id).css('color',oldColor);
	$(id).focus(function(){
		tempclass = $(this).val().match(/^\s*(\S+(\s+\S+)*)\s*$/);		
		tempclass==null?tempclass='':tempclass=tempclass[1];
		if(tempclass==text){
			$(this).val('');
			$(this).css('color',color);
		}
		focusRun();
	}).blur(function(){
		if(!once){
			tempclass = $(this).val().match(/^\s*(\S+(\s+\S+)*)\s*$/);
			tempclass==null?tempclass='':tempclass=tempclass[1];
			if(tempclass.length<1){
				$(this)	.val(text);	
				$(this).css('color',oldColor);
			}
		}
		blurRun();
	});	
}
HuaWei.page.dimensionSearch = function(){
	$('ul.dimension').each(function(index, element) {
		var l = $(this).find('li.type a.dimensionitem').length;
        $(this).find('a.dimensiontype').click(function(){
			$(this).parent().addClass('show');
			$(this).siblings('div.dimension_select').slideDown(200);
		});
		$(this).find('li.type').hover(function(){},function(){
			$(this).removeClass('show');
			$('div.dimension_select').stop(true,true);
			$(this).find('div.dimension_select').hide();	
		});
    });	
	$('div.dimension_select').each(function(index, element) {
		var me = $(this);
        $(this).find('a.dimensionitem').click(function(){
			$(this).parent().parent().parent().siblings('a.dimensiontype').text($(this).text());
			$(this).parent().parent().parent().siblings('a.dimensiontype').attr("name",$(this).attr("name"));
			me.hide();	
			getV(1);
		})
    });
}
HuaWei.page.dimensionSearch_video = function(){
	$('ul.dimension_video').each(function(index, element) {
		var l = $(this).find('li.type a.dimensionitem_video').length;
        $(this).find('a.dimensiontype_video').click(function(){
			$(this).parent().addClass('show');
			$(this).siblings('div.dimension_select_video').slideDown(200);
		});
		$(this).find('li.type').hover(function(){},function(){
			$(this).removeClass('show');
			$('div.dimension_select_video').stop(true,true);
			$(this).find('div.dimension_select_video').hide();	
		});
    });	
	$('div.dimension_select_video').each(function(index, element) {
		var divself = $(this);
		$(this).find('a.dimensionitem_video').click(function(){
        	var self = $(this);
        	var a = self.parents("div:first").prev();
			a.text(self.text());
			a.attr("data-options",self.parent().attr("data-options"));
			divself.hide();	
		})
    });
}
HuaWei.page.journalsTextLimit = function(){
	$('a.imagetxt').each(function(index, element) {
        $(this).attr('title',$(this).text());
    });
	$('a.imagetxt').wordLimit();	
}
HuaWei.form.searchResultForm = function(){
	$('#search_resultForm').validate({
		rules:{key:{required:true}},
		messages:{
			key:{required:'\u8bf7\u8f93\u5165\u5173\u952e\u5b57\u518d\u641c\u7d22\uff01'}		
		},
		errorPlacement:function(error,elem){
			$('#search_reaultpannel').html('<span class="noresult">'+error.text()+'</span>');

		}
	});	
	$('#search_resultForm a.searchresult_search,#search_resultForm a.searchresult_searchresult').click(function(){
		$('#search_resultForm').submit();
	});
	$('#search_reaultpannel li').highlight($('#search_resultForm input[name="key"]').val());
	
}
HuaWei.form.buyFormCheck = function(){
	var debug = false;
	/*
	var data = HuaWei.page.cityDataBase;
	var pro = '',debug=true;
	$(data).each(function(index, element) {
        pro += '<option';
		if(index==0)pro += ' selected="selected"';
		pro += ' value="'+this.id+'">'+this.name+'</option>';
    });
	$(pro).appendTo($('#province,#province_info'));
	$('#province,#province_info').change(function(){
		var id = $(this).val();
		var obj = $(this).parent().parent().parent().find('#city,#city_info');
		obj.empty();
		pro = '';
		$(data).each(function(index, element) {
			if(this.id == id){
				$(this.citylist).each(function(j, e) {
                    pro += '<option';
					if(j==0)pro += ' selected="selected"';
					pro += ' value="'+this.code+'">'+this.name+'</option>';
                });				
			}
		});
		$(pro).appendTo(obj);
	});
	$('#province,#province_info').trigger('change');
	*/
	var bfm = $('#buy_form').validate({
		rules:{
			"buyFeedBackVO.name":{required:true,minlength:2,maxlength:100},
			"buyFeedBackVO.email":{required:true,email:true},
			"buyFeedBackVO.phone":{required:true},
			"buyFeedBackVO.title":{required:true},
			"buyFeedBackVO.mainProduct":{required:true},
			"buyFeedBackVO.region":{required:true},
			"buyFeedBackVO.country":{required:true},
			"buyFeedBackVO.itemSummarize":{required:true,maxlength:2000},
			
			"buyFeedBackVO.province":{maxlength:100},
			"buyFeedBackVO.trade":{required:true},
			"buyFeedBackVO.city":{maxlength:100},
			"buyFeedBackVO.address":{maxlength:300},
			"buyFeedBackVO.postalcode":{maxlength:50},
			"buyFeedBackVO.operationDomain":{maxlength:100},
			"buyFeedBackVO.companyName":{maxlength:100},
			"validateNumber":{required:true}		
		},
		debug:debug,
		messages:{
			"buyFeedBackVO.name":{required:'\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u59d3\u540d\u4e0d\u80fd\u5c0f\u4e8e2\u4e2a\u5b57\u7b26\uff01'},
			"buyFeedBackVO.phone":{required:'\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801\uff01'},
			"buyFeedBackVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684E-mail\uff01'},
			"buyFeedBackVO.title":{required:'\u804c\u4f4d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"buyFeedBackVO.mainProduct":{required:'\u4e3b\u8981\u4ea7\u54c1\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"buyFeedBackVO.region":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"buyFeedBackVO.country":{required:'\u56fd\u5bb6/\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"buyFeedBackVO.itemSummarize":{required:'\u9879\u76ee\u6982\u51b5\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"buyFeedBackVO.province":{maxlength:'\u7701\u4efd\u4e0d\u80fd\u5927\u4e8e100\u4e2a\u5b57\u7b26\uff01'},
			"buyFeedBackVO.trade":{required:'\u884c\u4e1a\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"buyFeedBackVO.city":{maxlength:'\u57ce\u5e02\u4e0d\u80fd\u5927\u4e8e100\u4e2a\u5b57\u7b26\uff01'},
			"buyFeedBackVO.address":{maxlength:'\u5730\u5740\u4e0d\u80fd\u5927\u4e8e300\u4e2a\u5b57\u7b26\uff01'},
			"buyFeedBackVO.postalcode":{maxlength:'\u90ae\u653f\u7f16\u7801\u4e0d\u80fd\u5927\u4e8e50\u4e2a\u5b57\u7b26\uff01'},
			"buyFeedBackVO.operationDomain":{maxlength:'\u4e1a\u52a1\u9886\u57df\u4e0d\u80fd\u5927\u4e8e100\u4e2a\u5b57\u7b26\uff01'},
			"buyFeedBackVO.companyName":{maxlength:'\u516c\u53f8\u540d\u79f0\u4e0d\u80fd\u5927\u4e8e100\u4e2a\u5b57\u7b26\uff01'},
			validateNumber:{required:'\u9a8c\u8bc1\u7801\u4e3a\u7a7a\u6216\u9519\u8bef\uff01'} 
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
			
		}
	});
	$('#buy_form').submit(function(){
		var buyMark=$("input[id='buy_mark']").val();
		var buyHref=window.location.href;
		if(buyHref.indexOf("?title=")!=-1)
		{
			allargs=buyHref.split("?")[1];
			title = decodeURIComponent(allargs.split("=")[1]);
			$("input[name='buyFeedBackVO.minisiteTitle']").val(title);
		}
		
		if(bfm.valid()&&buyMark!=""){
		//	var url=document.getElementsByName("url")[0].value;
			if($("input[name='buyFeedBackVO.feedback_URL']")){
				$("input[name='buyFeedBackVO.feedback_URL']").val(document.referrer);
			}
			$('#btn_buy_feedback').attr("disabled",true);
			$('#buy_form').ajaxSubmit(function(data){
				//trace the Behavior when ajax finish
				window.traceBehavior($('#btn_buy_feedback').data("e"));			
			
				 setTimeout(function(){window.location.href="http://enterprise.huawei.com/cn/feedback/buy_feedback/buy_feedback_success/index.htm";},500);
			});				
		}
		if(!bfm.valid()){
			$("#buy_form .error").each(function(i,v){
				if("" != $.trim($(v).val())){
					_gaq.push(['_trackEvent', 'buy_form_failed', 'buy_illegal', $(v).attr("name"),0,false]);
				}else{
					_gaq.push(['_trackEvent', 'buy_form_failed', 'buy_null', $(v).attr("name"),0,false]);
				}
			});
			_gaq.push(['_trackEvent', 'buy_sm_failed', 'buy_sm_fail', 'buy_submit',0,false]);
		}
		return false;	
	});
	
	$('#btn_buy_feedback').click(function(e){		
		$(this).data("e",e);
		$('#buy_form').submit();
	})
	
}
HuaWei.form.referFormCheck = function(){
	var debug = false;
	/*
	var data = HuaWei.page.cityDataBase;
	var pro = '',debug=true;
	$(data).each(function(index, element) {
        pro += '<option';
		if(index==0)pro += ' selected="selected"';
		pro += ' value="'+this.id+'">'+this.name+'</option>';
    });
	$(pro).appendTo($('#province,#province_info'));
	$('#province,#province_info').change(function(){
		var id = $(this).val();
		var obj = $(this).parent().parent().parent().find('#city,#city_info');
		obj.empty();
		pro = '';
		$(data).each(function(index, element) {
			if(this.id == id){
				$(this.citylist).each(function(j, e) {
                    pro += '<option';
					if(j==0)pro += ' selected="selected"';
					pro += ' value="'+this.code+'">'+this.name+'</option>';
                });				
			}
		});
		$(pro).appendTo(obj);
	});
	$('#province,#province_info').trigger('change');
	*/
	var bfm = $('#refer_form').validate({
		rules:{
			"referFeedBackVO.name":{required:true,minlength:2,maxlength:100},
			"referFeedBackVO.phone":{required:true},			
			"referFeedBackVO.email":{required:true,email:true},
			"referFeedBackVO.region":{required:true},
			"referFeedBackVO.country":{required:true},
			"referFeedBackVO.city":{maxlength:100},
			"referFeedBackVO.companyName":{required:true,maxlength:100},
			
			"referFeedBackVO.trade":{required:true},
			"referFeedBackVO.business":{required:true},
			"referFeedBackVO.hwRelative":{required:true},
			"referFeedBackVO.itemSummarize":{required:true,maxlength:2000},				
			"validateNumber":{required:true}
		},
		debug:debug,	
		messages:{
			"referFeedBackVO.name":{required:'\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u59d3\u540d\u4e0d\u80fd\u5c0f\u4e8e2\u4e2a\u5b57\u7b26\uff01'},			
			"referFeedBackVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684E-mail\uff01'},
			"referFeedBackVO.phone":{required:'\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801\uff01'},
			"referFeedBackVO.region":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"referFeedBackVO.country":{required:'\u56fd\u5bb6/\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"referFeedBackVO.city":{maxlength:'\u57ce\u5e02\u4e0d\u80fd\u5927\u4e8e100\u4e2a\u5b57\u7b26\uff01'},
			"referFeedBackVO.companyName":{required:'\u516c\u53f8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01',maxlength:'\u516c\u53f8\u540d\u79f0\u4e0d\u80fd\u5927\u4e8e100\u4e2a\u5b57\u7b26\uff01'},
			
			"referFeedBackVO.trade":{required:'\u884c\u4e1a\u4e0d\u80fd\u4e3a\u7a7a\uff01'},			
			"referFeedBackVO.business":{required:'\u804c\u4f4d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"referFeedBackVO.hwRelative":{required:'\u4e0e\u534e\u4e3a\u7684\u5173\u7cfb\u4e0d\u80fd\u4e3a\u7a7a\uff01'},		
			"referFeedBackVO.itemSummarize":{required:'\u54a8\u8be2\u95ee\u9898\u4e0d\u80fd\u4e3a\u7a7a\uff01',maxlength:'\u54a8\u8be2\u95ee\u9898\u4e0d\u80fd\u5927\u4e8e2000\u4e2a\u5b57\uff01'},	
			validateNumber:{required:'\u9a8c\u8bc1\u7801\u4e3a\u7a7a\u6216\u9519\u8bef\uff01'}
		
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
			
		}
	});
	/*function refer_from_protocol(){
		if($("input[name='refer_form_ict']").attr("checked")!="true"){
			return;
			}
		if($("input[name='refer_form_emailAgree']").attr("checked")!="true")
			return;
	}*/
	$('#refer_form').submit(function(){	
		var referMark=$("input[id='refer_mark']").val();
		if(bfm.valid()&&referMark!=""){	
			$(document).trigger("refer_form.submit");
			$('#refer_form').ajaxSubmit(function(data){
				//trace the Behavior when ajax finish
				window.traceBehavior($('#refer_form a.submits').data("e"));
				 setTimeout(function(){window.location.href="http://enterprise.huawei.com/cn/feedback/refer_feedback/refer_feedback_success/index.htm";},500);
			});	
		}
		return false;	
	});
	$('#refer_form a.submits').click(function(e){
		$(this).data("e",e);
		$('#refer_form').submit(); 
	})
	
	$(document).bind("refer_form.submit", function (e) {
		var disable_a_tag=$("a#disable_a_tag");

		if(!disable_a_tag.length)
			disable_a_tag=$(".submits").clone().attr("id","disable_a_tag").insertAfter($(".submits"));
		disable_a_tag.show().prev().hide();
	});
	
}

HuaWei.form.authorizationFormCheck = function(){
	
	var debug=false;
	var authorization_form = $('#authorization_form').validate({
		rules:{
			autorizationCoding:{required:true}	
		},
		debug:debug,
		messages:{
			autorizationCoding:{required:'\u6388\u6743\u51fd\u7f16\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#authorization_form').submit(function(){
		if(authorization_form.valid()){
			$("#authorization_form").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.authorizationFormCheck();
			});
			return false;
		}
	});
	
	$('#authorization_form a.submit').click(function(){
		$('#authorization_form').submit();
		return false;
	});	
}
HuaWei.page.setDatePickerCN = function(){
	if($.datepicker){
		$.datepicker.regional['zh-CN'] = {
			closeText: '\u5173\u95ed',
			prevText: '<\u4e0a\u6708',
			nextText: '\u4e0b\u6708>',
			currentText: '\u4eca\u5929',
			monthNames: ['\u4e00\u6708','\u4e8c\u6708','\u4e09\u6708','\u56db\u6708','\u4e94\u6708','\u516d\u6708',
			'\u4e03\u6708','\u516b\u6708','\u4e5d\u6708','\u5341\u6708','\u5341\u4e00\u6708','\u5341\u4e8c\u6708'],
			monthNamesShort: ['\u4e00','\u4e8c','\u4e09','\u56db','\u4e94','\u516d',
			'\u4e03','\u516b','\u4e5d','\u5341','\u5341\u4e00','\u5341\u4e8c'],
			dayNames: ['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'],
			dayNamesShort: ['\u5468\u65e5','\u5468\u4e00','\u5468\u4e8c','\u5468\u4e09','\u5468\u56db','\u5468\u4e94','\u5468\u516d'],
			dayNamesMin: ['\u65e5','\u4e00','\u4e8c','\u4e09','\u56db','\u4e94','\u516d'],
			weekHeader: '\u5468',
			dateFormat: 'yy-mm-dd',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: '\u5e74'};
		$.datepicker.setDefaults($.datepicker.regional['zh-CN']);	
	}
	
}
HuaWei.form.servicePartnersregFormCheck = function(){
	var debug=true;
	$('#servicepartnersreg_form').validate({
		rules:{
			company:{required:true},
			name:{required:true,minlength:2},
			phone:{required:true,telphoneOrmobile:true},
			address:{required:true},
			email:{required:true,email:true},
			developmentprocess:{required:true},
			certification:{required:true},
			technicalforce:{required:true},
			maincase:{required:true},
			appproduct:{required:true},
			code:{required:true}
		},
		debug:debug,
		messages:{
			company:{required:'\u516c\u53f8\u5168\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			name:{required:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u5c11\u4e8e2\u4e2a\u5b57\u7b26\uff01'},
			phone:{required:'\u8054\u7cfb\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u8f93\u5165\u6709\u6548\u7684\u8054\u7cfb\u7535\u8bdd\uff01'},
			address:{required:'\u516c\u53f8\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			email:{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\uff01'},
			developmentprocess:{required:'\u516c\u53f8\u53d1\u5c55\u5386\u7a0b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			certification:{required:'\u83b7\u5f97\u7684\u8ba4\u8bc1\u8d44\u683c\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			technicalforce:{required:'\u6280\u672f\u529b\u91cf\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			maincase:{required:'\u4e3b\u8981\u6210\u7acb\u6848\u4f8b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			appproduct:{required:'\u7533\u8bf7\u5408\u4f5c\u4ea7\u54c1\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			code:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	$('#servicepartnersreg_form a.submit').click(function(){
		$('#servicepartnersreg_form').submit();
	})
	
}
HuaWei.form.partnerRegisterFormCheck = function(){
	var debug=false;
	var partnersreg_form = $('#partnersreg_form').validate({
		rules:{
			"recruitVO.assoType":{required:true},
			"recruitVO.companyName":{required:true},
			"recruitVO.phoneNumber":{telphoneOrmobile:true},
			"recruitVO.regionCode":{required:true},
			"recruitVO.countryCode":{required:true},
			"recruitVO.linkManName":{required:true,minlength:2},
			"recruitVO.email":{required:true,email:true},
			"recruitVO.lastYearSaleAmount":{number:true},
			"recruitVO.employeeNumber":{required:true},
			"recruitVO.registerFund":{required:true},
			"recruitVO.coopCallingId":{required:true},
			checkCode:{required:true}		
		},
		debug:debug,
		messages:{
			"recruitVO.assoType":{required:'\u5408\u4f5c\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.companyName":{required:'\u516c\u53f8\u5168\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			 "recruitVO.phoneNumber":{telphoneOrmobile:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u683c\u5f0f\uff01'}, 
			"recruitVO.regionCode":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.countryCode":{required:'\u56fd\u5bb6\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.linkManName":{required:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u5c11\u4e8e2\u4e2a\u5b57\u7b26\uff01'},
			"recruitVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u683c\u5f0f\uff01'}, 
			"recruitVO.lastYearSaleAmount":{number:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u5b57\uff01'},
			"recruitVO.employeeNumber":{required:'\u5458\u5de5\u603b\u4eba\u6570\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.registerFund":{required:'\u6ce8\u518c\u8d44\u91d1\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.coopCallingId":{required:'\u884c\u4e1a\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#partnersreg_form').submit(function(){
		if(partnersreg_form.valid()){
			$("#partnersreg_form").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.partnerRegisterFormCheck();
			});
			return false;
		}
	});
	
	$('#partnersreg_form a.submit').click(function(){
		$('#partnersreg_form').submit();
		return false;
	});
	
	var partnersreg_service_form = $('#partnersreg_service_form').validate({
		rules:{
			"recruitVO.assoType":{required:true},
			"recruitVO.companyName":{required:true},
			 "recruitVO.phoneNumber":{telphoneOrmobile:true}, 
			"recruitVO.regionCode":{required:true},
			"recruitVO.countryCode":{required:true},
			"recruitVO.linkManName":{required:true,minlength:2},
			"recruitVO.email":{required:true,email:true},
			
			"recruitVO.employeeNumber":{required:true},
			"recruitVO.registerFund":{required:true},
			"recruitVO.coopCallingId":{required:true},
			"recruitVO.companyAddress":{required:true},
			"recruitVO.compAttestation":{required:true},
			"recruitVO.compTechnic":{required:true},
			"recruitVO.caseInfo":{required:true},
			"recruitVO.coopProduct":{required:true},
			"recruitVO.companyCourse":{required:true},
			checkCode:{required:true}		
		},
		debug:debug,
		messages:{
			"recruitVO.assoType":{required:'\u5408\u4f5c\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.companyName":{required:'\u516c\u53f8\u5168\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			  "recruitVO.phoneNumber":{telphoneOrmobile:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u683c\u5f0f\uff01'}, 
			"recruitVO.regionCode":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.countryCode":{required:'\u56fd\u5bb6\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.linkManName":{required:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u5c11\u4e8e2\u4e2a\u5b57\u7b26\uff01'},
			"recruitVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\uff01'}, 
			
			"recruitVO.employeeNumber":{required:'\u5458\u5de5\u603b\u4eba\u6570\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.registerFund":{required:'\u6ce8\u518c\u8d44\u91d1\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.coopCallingId":{required:'\u884c\u4e1a\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.companyAddress":{required:'\u516c\u53f8\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a\uff01'}, 
			"recruitVO.compAttestation":{required:'\u83b7\u5f97\u7684\u8d44\u683c\u8ba4\u8bc1\u4e0d\u80fd\u4e3a\u7a7a\uff01'}, 
			"recruitVO.compTechnic":{required:'\u516c\u53f8\u6280\u672f\u529b\u91cf\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.caseInfo":{required:'\u4e3b\u8981\u6210\u7acb\u6848\u4f8b\u4e0d\u80fd\u4e3a\u7a7a\uff01'}, 
			"recruitVO.coopProduct":{required:'\u7533\u8bf7\u5408\u4f5c\u4ea7\u54c1\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"recruitVO.companyCourse":{required:'\u516c\u53f8\u53d1\u5c55\u5386\u7a0b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#partnersreg_service_form').submit(function(){
		if(partnersreg_service_form.valid()){
			$("#partnersreg_service_form").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.partnerRegisterFormCheck();
			});
			return false;
		}
	});
	
	$('#partnersreg_service_form a.submit').click(function(){
		$('#partnersreg_service_form').submit();
		return false;
	})

}
HuaWei.form.partnersInfoFormCheck = function(){
	var debug=false;
	var partnersinfo_form = $('#partnersinfo_form').validate({
		rules:{
			"partnerInfoMaintainVO.mainApplyType":{required:true},
			"partnerInfoMaintainVO.companyName":{required:true},
			"partnerInfoMaintainVO.linkman":{required:true,minlength:2},
			"partnerInfoMaintainVO.linkmanMail":{required:true,email:true},
			"partnerInfoMaintainVO.linkmanTelephone":{required:true,telphoneOrmobile:true},
			"partnerInfoMaintainVO.contentCause":{required:true},
			checkCode:{required:true}		
		},
		debug:debug,
		messages:{
			"partnerInfoMaintainVO.mainApplyType":{required:'\u4fe1\u606f\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"partnerInfoMaintainVO.companyName":{required:'\u7ecf\u9500\u5546\u516c\u53f8\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"partnerInfoMaintainVO.linkman":{required:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u5c11\u4e8e2\u4e2a\u5b57\u7b26\uff01'},
			"partnerInfoMaintainVO.linkmanMail":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\uff01'}, 
			"partnerInfoMaintainVO.linkmanTelephone":{required:'\u8054\u7cfb\u4eba\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u8f93\u5165\u6709\u6548\u7684\u8054\u7cfb\u4eba\u7535\u8bdd\uff01'},
			"partnerInfoMaintainVO.contentCause":{required:'\u7533\u8bf7\u4fee\u6539\u5185\u5bb9\u53ca\u539f\u56e0\u4e0d\u80fd\u4e3a\u7a7a\uff01'}, 
			checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#partnersinfo_form').submit(function(){
		if(partnersinfo_form.valid()){
			$("#partnersinfo_form").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.partnersInfoFormCheck();
			});
			return false;
		}
	});
	
	$('#partnersinfo_form a.submit').click(function(){
		$('#partnersinfo_form').submit();
		return false;
	})
	
}
HuaWei.form.licenseTytxFormCheck = function(){
	var debug=false;
	var license_tytx = $('#license_tytx').validate({
		rules:{
			"licenseApplyVO.regionCode":{required:true},
			"licenseApplyVO.countryCode":{required:true},
			"licenseApplyVO.proposerName":{required:true},
			"licenseApplyVO.phone":{required:true,telphoneOrmobile:true},
			"licenseApplyVO.proposerCompany":{required:true},
			"licenseApplyVO.bargainNum":{required:true},
			"licenseApplyVO.stationName":{required:true},
			"licenseApplyVO.maxRegisterNum":{required:true},
			"licenseApplyVO.maxCallNum":{required:true},
			"licenseApplyVO.mcuNum":{required:true},
			"licenseApplyVO.maxMeetingNum":{required:true},
			"licenseApplyVO.email":{required:true,email:true},
			"licenseApplyVO.clientNum":{required:true},
			"file":{required:true},
			checkCode:{required:true}
		},
		debug:debug,
		messages:{
			"licenseApplyVO.regionCode":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.countryCode":{required:'\u56fd\u5bb6\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.proposerName":{required:'\u7533\u8bf7\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.phone":{required:'\u8054\u7cfb\u4eba\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u8054\u7cfb\u4eba\u7535\u8bdd\uff01'},
			"licenseApplyVO.proposerCompany":{required:'\u7533\u8bf7\u4eba\u5355\u4f4d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},			
			"licenseApplyVO.bargainNum":{required:'\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.stationName":{required:'\u5c40\u70b9\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.maxRegisterNum":{required:'\u6700\u5927\u6ce8\u518c\u6570\u4e0d\u80fd\u4e3a\u7a7a'},
			"licenseApplyVO.maxCallNum":{required:'\u6700\u5927\u547c\u53eb\u6570\u4e0d\u80fd\u4e3a\u7a7a'},
			"licenseApplyVO.mcuNum":{required:'\u7ba1\u7406MCU\u4e2a\u6570\u4e0d\u80fd\u4e3a\u7a7a'},
			"licenseApplyVO.maxMeetingNum":{required:'\u53ef\u7ba1\u7406\u6d3b\u52a8\u4f1a\u8bae\u6570\u4e0d\u80fd\u4e3a\u7a7a'},
			"licenseApplyVO.clientNum":{required:'\u5ba2\u6237\u7aef\u4e2a\u6570(\u5206\u7ea7\u5206\u6743)\u4e0d\u80fd\u4e3a\u7a7a'},
			"licenseApplyVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\uff01'},
			"file":{required:'\u5fc5\u987b\u4e0a\u4f20\u539f\u59cbLicense\u6587\u4ef6'},
			checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
			
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#license_tytx').submit(function(){
		if(license_tytx.valid()){
			$("#license_tytx").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.licenseTytxFormCheck();
			});
			return false;
		}
	});
	
	$('#license_tytx').parent().find('a.submit').click(function(){
		$('#license_tytx').submit();
		return false;
	})
}


HuaWei.form.licenseMcuFormCheck = function(){
	var debug=false;
	var license_mcu = $('#license_mcu').validate({
		rules:{
			"licenseApplyVO.regionCode":{required:true},
			"licenseApplyVO.countryCode":{required:true},
			"licenseApplyVO.proposerName":{required:true},
			"licenseApplyVO.phone":{required:true,telphoneOrmobile:true},
			"licenseApplyVO.email":{required:true,email:true},
			"licenseApplyVO.proposerCompany":{required:true},
			"licenseApplyVO.bargainNum":{required:function(){if(document.getElementById('radio_2').checked==false){return true;}else{return false;}}},
			"licenseApplyVO.bargainNumFront":{required:function(){if(document.getElementById('radio_2').checked==true){return true;}else{return false;}}},
			"licenseApplyVO.bargainNumBack":{required:function(){if(document.getElementById('radio_2').checked==true){return true;}else{return false;}}},
			"licenseApplyVO.stationName":{required:true},
			"licenseApplyVO.esnInfo":{required:true},
			"licenseApplyVO.lacInfo":{required:true},
			 file:{required:true},
			 checkCode:{required:true}
		},
		debug:debug,
		messages:{
			"licenseApplyVO.regionCode":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.countryCode":{required:'\u56fd\u5bb6\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.proposerName":{required:'\u7533\u8bf7\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.phone":{required:'\u8054\u7cfb\u4eba\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u8054\u7cfb\u4eba\u7535\u8bdd\uff01'},
			"licenseApplyVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\uff01'},
			"licenseApplyVO.proposerCompany":{required:'\u7533\u8bf7\u4eba\u5355\u4f4d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},			
			"licenseApplyVO.bargainNum":{required:'\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.bargainNumFront":{required:'\u524d\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.bargainNumBack":{required:'\u540e\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.stationName":{required:'\u5c40\u70b9\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.esnInfo":{required:'ESN\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.lacInfo":{required:'LAC\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			 file:{required:'\u5fc5\u987b\u4e0a\u4f20Excel\u6587\u4ef6\uff01'},
			 checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	$('#license_mcu input[name="radio"]').each(function(index, element) {
        $(this).click(function(){
			if($(this).val() == '1'){
				$('#contractnum_show').hide();
				$('#beforecontractnum_show').show();
				$('#aftercontractnum_show').show();
			}else{
				$('#contractnum_show').show();
				$('#beforecontractnum_show').hide();
				$('#aftercontractnum_show').hide();				
			}
		});
    });
    
    $('#license_mcu').submit(function(){
		if(license_mcu.valid()){
			$("#license_mcu").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.licenseMcuFormCheck();
			});
			return false;
		}
	});
    
	$('#license_mcu').parent().find('a.submit').click(function(){
		$('#license_mcu').submit();
		return false;
	})
}

HuaWei.form.licenseUniFormCheck = function(){
	var debug=false;
	var license_uni_form = $('#license_uni_form').validate({
		rules:{
			"licenseApplyVO.agentName":{required:true},
			"licenseApplyVO.edition":{required:true},
			"licenseApplyVO.proposerName":{required:true},
			"licenseApplyVO.phone":{required:true,telphoneOrmobile:true},
			"licenseApplyVO.email":{required:true,email:true},
			"licenseApplyVO.proposerCompany":{required:true},
			"licenseApplyVO.bargainNum":{required:true},
			"licenseApplyVO.stationName":{required:true},
			"licenseApplyVO.esnInfo":{required:true},
			"licenseApplyVO.applyType":{required:true},
			 file:{required:true},
			 checkCode:{required:true}
		},
		debug:debug,
		messages:{
			"licenseApplyVO.agentName":{required:'\u4ee3\u7406\u5546\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.edition":{required:'\u7533\u8bf7License\u7684\u7248\u672c\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.proposerName":{required:'\u7533\u8bf7\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.phone":{required:'\u8054\u7cfb\u4eba\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u8054\u7cfb\u4eba\u7535\u8bdd\uff01'},
			"licenseApplyVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\uff01'},
			"licenseApplyVO.proposerCompany":{required:'\u7533\u8bf7\u4eba\u5355\u4f4d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},			
			"licenseApplyVO.bargainNum":{required:'\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.stationName":{required:'\u5c40\u70b9\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.esnInfo":{required:'ESN\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.applyType":{required:'\u7533\u8bf7\u7c7b\u578b\u9009\u62e9\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			 file:{required:'\u5fc5\u987b\u4e0a\u4f20Excel\u6587\u4ef6\uff01'},
			 checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#license_uni_form').submit(function(){
		if(license_uni_form.valid()){
			$("#license_uni_form").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.licenseUniFormCheck();
			});
			return false;
		}
	});
	
	$('#license_uni_form').parent().find('a.submit').click(function(){
		$('#license_uni_form').submit();
		return false;
	})
}

HuaWei.form.licenseLlzxFormCheck = function(){
	var debug=false;
	var license_llzx = $('#license_llzx').validate({
		rules:{
			"licenseApplyVO.account":{required:true},
			"licenseApplyVO.proposerName":{required:true},
			"licenseApplyVO.phone":{required:true,telphoneOrmobile:true},
			"licenseApplyVO.email":{required:true,email:true},
			"licenseApplyVO.applyType":{required:true},
			"licenseApplyVO.bargainNum":{required:true},
			"licenseApplyVO.softwareCode":{required:true},
			"licenseApplyVO.softwareCodeNum":{required:true},
			"licenseApplyVO.validateBillNum":{required:true},
			 file:{required:true},
			 checkCode:{required:true}
		},
		debug:debug,
		messages:{
			"licenseApplyVO.account":{required:'\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.proposerName":{required:'\u7533\u8bf7\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.phone":{required:'\u8054\u7cfb\u4eba\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u8054\u7cfb\u4eba\u7535\u8bdd\uff01'},
			"licenseApplyVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\uff01'},
			"licenseApplyVO.applyType":{required:'License\u786e\u8ba4\u5355\u5e8f\u5217\u4e0d\u80fd\u4e3a\u7a7a\uff01'},			
			"licenseApplyVO.bargainNum":{required:'\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.softwareCode":{required:'\u8f6f\u4ef6\u7f16\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.softwareCodeNum":{required:'\u8f6f\u4ef6\u7f16\u7801\u6570\u91cf\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.validateBillNum":{required:'License\u786e\u8ba4\u5355\u5e8f\u5217\u53f7'},
			 file:{required:'\u5fc5\u987b\u4e0a\u4f20Excel\u6587\u4ef6\uff01'},
			 checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#license_llzx').submit(function(){
		if(license_llzx.valid()){
			$("#license_llzx").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.licenseLlzxFormCheck();
			});
			return false;
		}
	});
	
	$('#license_llzx').parent().find('a.submit').click(function(){
		$('#license_llzx').submit();
		return false;
	})
}
HuaWei.form.licenseDnmFormCheck = function(){
	var debug=false;
	var license_dnm = $('#license_dnm').validate({
		rules:{
			"licenseApplyVO.agentName":{required:true},
			"licenseApplyVO.proposerName":{required:true},
			"licenseApplyVO.phone":{required:true,telphoneOrmobile:true},
			"licenseApplyVO.email":{required:true,email:true},
			"licenseApplyVO.bargainNum":{required:true},
			"licenseApplyVO.stationName":{required:true},
			"licenseApplyVO.productName":{required:true},
			"licenseApplyVO.productType":{required:true},
			"licenseApplyVO.esnInfo":{required:true},
			"licenseApplyVO.lacInfo":{required:true},
			 file:{required:true},
			 checkCode:{required:true}
		},
		debug:debug,
		messages:{
			"licenseApplyVO.agentName":{required:'\u4ee3\u7406\u5546\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.proposerName":{required:'\u7533\u8bf7\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.phone":{required:'\u8054\u7cfb\u4eba\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u8054\u7cfb\u4eba\u7535\u8bdd\uff01'},
			"licenseApplyVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\uff01'},
			"licenseApplyVO.bargainNum":{required:'\u5408\u540c\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.stationName":{required:'\u5c40\u70b9\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.productName":{required:'\u4ea7\u54c1\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.productType":{required:'\u4ea7\u54c1\u578b\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.esnInfo":{required:'ESN\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"licenseApplyVO.lacInfo":{required:'LAC\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			 file:{required:'\u5fc5\u987b\u4e0a\u4f20Excel\u6587\u4ef6\uff01'},
			 checkCode:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#license_dnm').submit(function(){
		if(license_dnm.valid()){
			$("#license_dnm").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.licenseDnmFormCheck();
			});
			return false;
		}
	});
	
	$('#license_dnm').parent().find('a.submit').click(function(){
		$('#license_dnm').submit();
		return false;
	})
	
}
HuaWei.form.trainLoginFormCheck = function(){
	var debug=true;
	$('#login_form').validate({
		rules:{
			name:{required:true},
			password:{required:true},
			code:{required:true}		
		},
		debug:debug,
		messages:{
			name:{required:'\u8d26\u6237\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			password:{required:'\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			code:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	$('#trainLoginForm a.submit').click(function(){
		$('#login_form').submit();
	})
	
}
HuaWei.form.certificateQueryFormCheck = function(){		
	var debug=false;
	var app_certificate_query = $('#app_certificate_query').validate({
		rules:{
			"certificateVO.certificateNumber":{required:true}
		},
		debug:debug,
		messages:{
			"certificateVO.certificateNumber":{required:'\u8bc1\u4e66\u7f16\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#app_certificate_query').submit(function(){
		if(app_certificate_query.valid()){
			$("#app_certificate_query").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.certificateQueryFormCheck();
			});
			return false;
		}
	});
	
	$('#app_certificate_query a.submit').click(function(){
		$('#app_certificate_query').submit();
		return false;
	});
}
HuaWei.form.feedBackFormCheck = function(){
	var debug=false;
	var fdf = $('#feedback_form').validate({
		rules:{
			"feedbackVO.userName":{required:true,minlength:2},
			"feedbackVO.phone":{required:true},
			"feedbackVO.email":{required:true,email:true},
			"feedbackVO.content":{required:true},
			"feedbackVO.catalogId":{required:true},
			checkCodeFeedback:{required:true}		
		},
		debug:debug,
		messages:{
			"feedbackVO.userName":{required:'\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',minlength:'\u59d3\u540d\u4e0d\u80fd\u5c0f\u4e8e2\u4e2a\u5b57\u7b26\uff01'},
			"feedbackVO.phone":{required:'\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801\uff01'},
			"feedbackVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740\uff01'},
			"feedbackVO.content":{required:'\u53cd\u9988\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"feedbackVO.catalogId":{required:'\u76f8\u5173\u680f\u76ee\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			checkCodeFeedback:{required:'\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#feedback_form').submit(function(){
		var feedbackMark=$("input[id='feedback_mark']").val();
		if(fdf.valid()&&feedbackMark!=""){
			$("input[name='feedbackVO.feedback_URL']").val(document.referrer);			
			$('#feedback_btn').attr("disabled",true);
			$('#feedback_form').ajaxSubmit(function(data){
				//trace the Behavior when ajax finish
				window.traceBehavior($('#feedback_btn').data("e"));
				setTimeout(function(){window.location.href="http://enterprise.huawei.com/cn/feedback/online_feedback/online_feedback_success/index.htm";},500);
			});
		}
		return false;
	});
	$('#feedback_btn').click(function(e){
		bool = false;
		$(this).data("e",e);
		$('#feedback_form').submit();
	})
}

HuaWei.form.appCertificateFormCheck = function(){
	var debug=false;
	var app_certificate_form_step1 = $('#app_certificate_form_step1').validate({
		rules:{
			"certificateVO.lastName":{required:true},
			"certificateVO.firstName":{required:true},
			"certificateVO.name":{required:true},
			"certificateVO.regionCode":{required:true},
			"certificateVO.countryName":{required:true},
			"certificateVO.certificateType":{required:true},
			"certificateVO.certificateCode":{required:true},
			"certificateVO.companyName":{CompanyNameLength:true},
			"certificateVO.addrs":{required:true},
			"certificateVO.postalcode":{required:true},
			"certificateVO.phone":{required:true,certTelphoneOrmobile:true},
			"certificateVO.email":{required:true,email:true}	
		},
		debug:debug,
		messages:{
			"certificateVO.lastName":{required:'\u59d3\uff08\u62fc\u97f3\uff09\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.firstName":{required:'\u540d\uff08\u62fc\u97f3\uff09\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.name":{required:'\u59d3\u540d\uff08\u4e2d\u6587\u5168\u540d\uff09\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.regionCode":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.countryName":{required:'\u56fd\u5bb6/\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a\uff01??'},
			"certificateVO.certificateType":{required:'\u8bc1\u4ef6\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.certificateCode":{required:'\u8bc1\u4ef6\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.companyName":{required:'\u516c\u53f8\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7150\u4e2a\u5b57\u7b26\uff01'},
			"certificateVO.addrs":{required:'\u8bc1\u4e66\u90ae\u5bc4\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.postalcode":{required:'\u90ae\u653f\u7f16\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"certificateVO.phone":{required:'\u7535\u8bdd/\u624b\u673a\u4e0d\u80fd\u4e3a\u7a7a\uff01',certTelphoneOrmobile:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u7535\u8bdd/\u624b\u673a\u53f7\u7801\uff01'},
			"certificateVO.email":{required:'\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u586b\u5199\u6709\u6548\u7684\u90ae\u7bb1\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#app_certificate_form_step1').submit(function(){
		if(app_certificate_form_step1.valid()){
			$("#app_certificate_form_step1").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.appCertificateFormCheck();
			});
			return false;
		}
	});
	
	$('#app_certificate_form_step1 a.redsubmit').click(function(){
		$('#app_certificate_form_step1').submit();
		return false;
	});
	
	var app_certificate_form_step2 = $('#app_certificate_form_step2').validate({
		rules:{
			"certificateVO.certificateID":{required:true}
		},
		debug:debug,
		messages:{
			"certificateVO.certificateID":{required:'\u4f60\u8981\u7533\u8bf7\u7684\u8bc1\u4e66\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#app_certificate_form_step2').submit(function(){
		if(app_certificate_form_step2.valid()){
			$("#app_certificate_form_step2").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.appCertificateFormCheck();
			});
			return false;
		}
	});
	
	$('#app_certificate_form_step2 a.whitesubmit').click(function(){
    	document.certificateForm.method.value="jumpCertificateApply";
		$('#app_certificate_form_step2').submit();
		return false;
	});
	$('#app_certificate_form_step2 a.redsubmit').click(function(){
		$('#app_certificate_form_step2').submit();
		return false;
	});
	
	
	
	var app_certificate_form_step3 = function(){
		var radios;
	    var selectedRule = 0;
		if(document.getElementById("id")!=null){
	    	document.getElementsByName("certificateRuleID")[0].value=document.getElementById("id").value;
	    	selectedRule=document.getElementById("id").value;
	    }
	     radios = document.getElementsByName("certificateVO.certificateRuleID");
	    for (var i = 0; i < radios.length; i++) {
	        if (radios[i].checked == true) {
	            selectedRule = radios[i].value;
	        }
	    }
	    var element = null;
	    var prefix = "as[" + selectedRule + "]";
	    var boo=true;
	    for (var i = 0; i < 20; i++) {
	        element = document.getElementsByName(prefix + "[" + i + "].certificateVO.examineeNumber")[0];
	        if (element == null) {
	            break;
	        }
	        if(trim(element.value)==null || trim(element.value)==""){
				$(element).css('border','1px dotted red');
				$(element).attr('title',message_title1);
				boo=false;
			}
	        element = document.getElementsByName(prefix + "[" + i + "].certificateVO.registerNumber")[0];
	        if (element == null) {
	            break;
	        }
	        if(trim(element.value)==null || trim(element.value)==""){
				$(element).css('border','1px dotted red');
				$(element).attr('title',message_title2);
				boo=false;
			}
	    }
	    for (var i = 0; i < 20; i++) {
	        element = document.getElementsByName("as[" + selectedRule + "][" + i + "].certificateVO.examineeNumber")[0];
	        if (element == null) {
	            break;
	        }
		    createHidden("attestScores[" + i + "].examineeNumber", element.value);
		    element = document.getElementsByName("as[" + selectedRule + "][" + i + "].certificateVO.registerNumber")[0];
		    createHidden("attestScores[" + i + "].registerNumber", element.value);
		    element = document.getElementsByName("as[" + selectedRule + "][" + i + "].examRuleID")[0];
		    createHidden("attestScores[" + i + "].examRuleID", element.value);
		   
	    }
		return boo;
	}
	
	$('#app_certificate_form_step3 a.whitesubmit').click(function(){
		document.certificateForm.method.value="certificateApplyOne";
		$("#app_certificate_form_step3").ajaxSubmit(function(data){
			$("#insert_form_page>div").remove();
			$("#insert_form_page").append(data);
			HuaWei.form.appCertificateFormCheck();
		});
		return false;
	});

	$('#app_certificate_form_step3 a.redsubmit').click(function(){
		document.certificateForm.method.value="toCertificateApply";
		if(app_certificate_form_step3()){
			$("#app_certificate_form_step3").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.appCertificateFormCheck();
			});
			return false;
		}
	});
}

HuaWei.form.appAlliancePartnerFormCheck = function(){
	var debug=false;
	var app_alliancePartner_form_step1 = $('#app_alliancePartner_form_step1').validate({
		rules:{
			"alliancePartnerVO.certType":{required:true},
			"alliancePartnerVO.companyFullName":{required:true,Textlength:true},
			"alliancePartnerVO.companyInfo":{required:true,brifLength:true},
			"alliancePartnerVO.artificialPersonName":{required:true,Textlength:true},
			"alliancePartnerVO.companyWeb":{required:true,Textlength:true},
			"alliancePartnerVO.regionCode":{required:true},
			"alliancePartnerVO.countryName":{required:true},
			"alliancePartnerVO.employeCount":{required:true,boolNum:true},
			"alliancePartnerVO.researchEmployeeCount":{required:true,boolNum:true},
			"alliancePartnerVO.consumerEmployeeCount":{required:true,boolNum:true}
		},
		debug:debug,
		messages:{
			"alliancePartnerVO.certType":{required:'\u8ba4\u8bc1\u7c7b\u522b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"alliancePartnerVO.companyFullName":{required:'\u516c\u53f8\u5168\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01',Textlength:"\u6587\u672c\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.companyInfo":{required:'\u516c\u53f8\u7b80\u4ecb\u4e0d\u80fd\u4e3a\u7a7a\uff01',brifLength:'\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01'},
			"alliancePartnerVO.artificialPersonName":{required:'\u6cd5\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',Textlength:"\u6587\u672c\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.companyWeb":{required:'\u516c\u53f8\u7f51\u5740\u4e0d\u80fd\u4e3a\u7a7a\uff01',Textlength:"\u6587\u672c\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.regionCode":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"alliancePartnerVO.countryName":{required:'\u56fd\u5bb6/\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"alliancePartnerVO.employeCount":{required:'\u5458\u5de5\u603b\u4eba\u6570\u4e0d\u80fd\u4e3a\u7a7a\uff01',boolNum:'\u8bf7\u8f93\u5165\u6709\u6548\u6570\u5b57\uff01'},
			"alliancePartnerVO.researchEmployeeCount":{required:'\u7814\u53d1\u5458\u5de5\u4eba\u6570\u4e0d\u80fd\u4e3a\u7a7a\uff01',boolNum:'\u8bf7\u8f93\u5165\u6709\u6548\u6570\u5b57\uff01'},
			"alliancePartnerVO.consumerEmployeeCount":{required:'\u9500\u552e\u5458\u5de5\u4eba\u6570\u4e0d\u80fd\u4e3a\u7a7a\uff01',boolNum:'\u8bf7\u8f93\u5165\u6709\u6548\u6570\u5b57\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#app_alliancePartner_form_step1').submit(function(){	
		$(this).attr("accept-charset","utf-8");	
		if(app_alliancePartner_form_step1.valid()){	
			//$("input[name='companyInfofile']").remove(); 								
			$("#app_alliancePartner_form_step1").ajaxSubmit({	
				iframe:true,
				success:function(data){							
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.appAlliancePartnerFormCheck();
				}
			});
			return false;
		}
	});	

	quanxuan=function(o){	
		$(o).parent().parent().find(":checkbox").attr("checked",$(o).attr("checked"));
	}
	cancelCheck=function(o){
		var otherCheckBox = $(o).parent().parent().find(":checkbox").not("[name='all']");
		for(var i=0;i<otherCheckBox.length;i++){
			var checkbox = otherCheckBox.eq(i);
			if(!checkbox.attr("checked")){
				$(o).parent().parent().find(":checkbox[name='all']").attr("checked",false);
				return;
			}
		}
		$(o).parent().parent().find(":checkbox[name='all']").attr("checked",true);
	}
	$(".register .sg dt").live("click",function(){
          if($(this).next("dd").hasClass("dn")){ 
                   $(this).next("dd").removeClass("dn");
                   $(this).addClass("z");
          }
          else
          {
                   $(this).next("dd").addClass("dn");
              $(this).removeClass("z");
          }
          return false;
    });
	
	$('#app_alliancePartner_form_step1 a.redsubmit').click(function(){		
		$('#app_alliancePartner_form_step1').submit();
		return false;
	});
	
	var app_alliancePartner_form_step2 = $('#app_alliancePartner_form_step2').validate({
		rules:{			
			"alliancePartnerVO.solutionInfo":{required:true,brifLength:true},
			"alliancePartnerVO.linkedTelephone":{required:true,telphoneOrmobile:true},
			"alliancePartnerVO.linkedName":{required:true},
			"alliancePartnerVO.linkedemail":{required:true,email:true}
		},
		debug:debug,
		messages:{			
			"alliancePartnerVO.solutionInfo":{required:"\u5408\u4f5c\u4f19\u4f34\u7684\u5bf9\u63a5\u6d4b\u8bd5\u4ea7\u54c1/\u89e3\u51b3\u65b9\u6848\u4ecb\u7ecd\u4e0d\u80fd\u4e3a\u7a7a\uff01",brifLength:"\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.linkedTelephone":{required:'\u8054\u7cfb\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a\uff01',telphoneOrmobile:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801\uff01'},
			"alliancePartnerVO.linkedName":{required:'\u8054\u7cfb\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01',Textlength:"\u6587\u672c\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.linkedemail":{required:'\u8054\u7cfb\u4eba\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01',email:'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	var sendSolutions=function(){
		var rtechList="";
		var rtradeList="";
	
		$(".look:checkbox:checked").each(function(){ 
			rtechList=$(this).val()+","+rtechList;			
		});
		
		$(".look1:checkbox:checked").each(function(){ 
			rtradeList=$(this).val()+","+rtradeList;			
		});
		document.getElementsByName("alliancePartnerVO.techList")[0].value=rtechList;
		document.getElementsByName("alliancePartnerVO.tradeList")[0].value=rtradeList;
		
	}

	$('#app_alliancePartner_form_step2').submit(function(){	
		$(this).attr("accept-charset","utf-8");	
		if(app_alliancePartner_form_step2.valid()){
			sendSolutions();			
			$("#app_alliancePartner_form_step2").ajaxSubmit({
				iframe:true,
				success:function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);					
				HuaWei.form.appAlliancePartnerFormCheck();
				}
			});
			return false;
		}
	});
	
	$('#app_alliancePartner_form_step2 a.whitesubmit').click(function(){		
    	document.alliancePartnerForm.method.value="jumpAlliancePartnerApply";  
    	$("input[name='solutionInfofile']").remove();  	
		$("#app_alliancePartner_form_step2").ajaxSubmit(function(data){
			
			$("#insert_form_page>div").remove();
			$("#insert_form_page").append(data);
			HuaWei.form.appAlliancePartnerFormCheck();
		});			
		return false;
	});
	
	$('#app_alliancePartner_form_step2 a.redsubmit').click(function(){
		$('#app_alliancePartner_form_step2').submit();
		return false;
	});
	
	var app_alliancePartner_form_step3 = $('#app_alliancePartner_form_step3').validate({
		rules:{
			"alliancePartnerVO.businessInfo":{required:true,brifLength:true},			
			"alliancePartnerVO.integrationInfo":{required:true,brifLength:true}
		},
		debug:debug,
		messages:{
			"alliancePartnerVO.businessInfo":{required:'\u4e1a\u52a1\u9886\u57df\u53ca\u6280\u672f\u3001\u89e3\u51b3\u65b9\u6848\u7b80\u4ecb\u4e0d\u80fd\u4e3a\u7a7a\uff01',brifLength:"\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.integrationInfo":{required:'\u96c6\u6210\u80fd\u529b\u8bf4\u660e\uff08\u6848\u4f8b\u4e3e\u8bc1\uff09\u4e0d\u80fd\u4e3a\u7a7a\uff01',brifLength:"\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01"}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#app_alliancePartner_form_step3').submit(function(){	
		$(this).attr("accept-charset","utf-8");
		if(app_alliancePartner_form_step3.valid()){
			$("#app_alliancePartner_form_step3").ajaxSubmit({
				iframe:true,
				success:function(data){
					$("#insert_form_page>div").remove();
					$("#insert_form_page").append(data);
					HuaWei.form.appAlliancePartnerFormCheck();
				}
			});
			return false;
		}
	});
	
	$('#app_alliancePartner_form_step3 a.whitesubmit').click(function(){		
    	document.alliancePartnerForm.method.value="alliancePartnerApplyOne"; 
    	$("input[name='file']").remove();
    	$("input[name='businessInfofile']").remove();
    	$("input[name='integrationInfofile']").remove();
    	$("#app_alliancePartner_form_step3").ajaxSubmit(function(data){				
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.appAlliancePartnerFormCheck();
		});
		return false;
	});
	
	$('#app_alliancePartner_form_step3 a.redsubmit').click(function(){
		$('#app_alliancePartner_form_step3').submit();
		return false;
	});
	
	$("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiPartner']:eq(0)").click(function(){
	
		$("#app_alliancePartner_form_step4 div[id='partner']").show();
	});
	$("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiPartner']:eq(1)").click(function(){
		
		$("#app_alliancePartner_form_step4 div[id='partner']").hide();
	});
	$("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiChannelPartner']:eq(0)").click(function(){
		
		$("#app_alliancePartner_form_step4 div[id='channel']").show();
	});
	$("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiChannelPartner']:eq(1)").click(function(){
		
		$("#app_alliancePartner_form_step4 div[id='channel']").hide();
	});
	
	
	
	var app_alliancePartner_form_step4 =  $('#app_alliancePartner_form_step4').validate({
		//var radios;
	    //var selectedRule = 0;
	    
	    /*alert("2");
	    $("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiPartner']:eq(0)").attr("checked",true);
	    $("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiChannelPartner']:eq(0)").attr("checked",true);
	    
		if($("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiPartner']:eq(0):checked").val()=='true'){
	    	
	    	if($("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiCorporationInfo']").val()=="")
	    	  	return false;
	    }
	    if($("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiChannelPartner']:eq(0):checked").val()=='true'){
	    	if($("#app_alliancePartner_form_step4 input[name='alliancePartnerVO.huaweiCorporationInfo']").val()=="")
				return false;
	    }*/	
	    rules:{
			"alliancePartnerVO.huaweiCorporationInfo":{brifLength:true},			
			"alliancePartnerVO.certChannelPartner":{brifLength:true}
		},
		debug:debug,
		messages:{
			"alliancePartnerVO.huaweiCorporationInfo":{brifLength:"\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01"},
			"alliancePartnerVO.certChannelPartner":{brifLength:"\u7b80\u4ecb\u5185\u5bb9\u592a\u957f\uff01"}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}	       
	});
	
	$('#app_alliancePartner_form_step4 a.whitesubmit').click(function(){
		document.alliancePartnerForm.method.value="alliancePartnerApplyTwo";
		$("#app_alliancePartner_form_step4").ajaxSubmit(function(data){
			$("#insert_form_page>div").remove();
			$("#insert_form_page").append(data);
			HuaWei.form.appAlliancePartnerFormCheck();
		});	
		return false;
	});
	
	
	
	$('#app_alliancePartner_form_step4 a.redsubmit').click(function(){		
		document.alliancePartnerForm.method.value="alliancePartnerFinalApply";
		if(app_alliancePartner_form_step4.valid()){
			$("#app_alliancePartner_form_step4").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				HuaWei.form.appAlliancePartnerFormCheck();
			});
			return false;
		}
	});
}
HuaWei.form.alliancePartnerQueryFormCheck= function(){
	var debug=false;
	
	var querySolutions=function(){
		var rtechList="";
		var rtradeList="";
	
		$(".look:checkbox:checked").each(function(){ 
			rtechList=$(this).val()+","+rtechList;			
		});
		
		$(".look1:checkbox:checked").each(function(){ 
			rtradeList=$(this).val()+","+rtradeList;			
		});
		document.getElementsByName("alliancePartnerVO.techList")[0].value=rtechList;
		document.getElementsByName("alliancePartnerVO.tradeList")[0].value=rtradeList;
		document.getElementsByName("alliancePartnerVO.flag")[0].value="1";
	}
	/*$('#app_alliancePartner_query').submit(function(){	
		querySolutions();
		$("#app_alliancePartner_query").ajaxSubmit(function(data){
			$("#insert_form_page>div").remove();
			$("#insert_form_page").append(data);
			HuaWei.form.alliancePartnerQueryFormCheck();
		});
		return false;		
	});*/
	
	$('#app_alliancePartner_query a.submit').live("click",function(){		
		querySolutions();
		$("#app_alliancePartner_query").ajaxSubmit(function(data){
			$("#insert_form_page>div").remove();
			$("#insert_form_page").append(data);
			allianceParnter_detail_click();
		});
		return false;	
	});
}

HuaWei.form.sellerqueryFormCheck = function(){
	var debug=false;
	var sellerquery_form = $('#sellerquery_form').validate({
		rules:{
			"quChannelVO.assoInfoType":{required:true},
			"quChannelVO.regionId":{required:true},
			"quChannelVO.countryId":{required:true}
		},
		debug:debug,
		messages:{
			"quChannelVO.assoInfoType":{required:'\u6e20\u9053\u4f19\u4f34\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"quChannelVO.regionId":{required:'\u533a\u57df\u4e0d\u80fd\u4e3a\u7a7a\uff01'},
			"quChannelVO.countryId":{required:'\u56fd\u5bb6\u4e0d\u80fd\u4e3a\u7a7a\uff01'}
		},
		errorPlacement:function(error,elem){
			$(elem).css('border','1px dotted red');
			$(elem).attr('title',error.text());
		},
		highlight:function(elem){
			$(elem).css('border','1px dotted red');
			$(elem).removeAttr('title');
		},
		unhighlight:function(elem){
			$(elem).css('border','1px solid #ccc');
			$(elem).removeAttr('title');
		}
	});
	
	$('#sellerquery_form').submit(function(){
		if(sellerquery_form.valid()){
			$("#sellerquery_form").ajaxSubmit(function(data){
				$("#insert_form_page>div").remove();
				$("#insert_form_page").append(data);
				bind_change();
			});
			return false;
		}
	});
	
	$('#sellerquery_form a.submit').click(function(){
		 document.getElementsByName("pageNo")[0].value = 1;
		$('#sellerquery_form').submit();
		return false;
	});
}

HuaWei.page.userCustomized = function(){
	$('div.customized input[type="checkbox"]').each(function(index, element) {
        $(this).attr('id','c_'+index);
		$(this).siblings('label').attr('for','c_'+index);
    });
	$('ul.child_ul li.children').each(function(index, element) {
		var w = ($(this).width()/112);
		if(w<=1)w=1;
		else w = parseInt(w)+1;
		$(this).addClass('w'+w*120);
    });
	var node,child,children
	$('ul.father_ul').each(function(index, element) {
        $(this).find('li:eq(0) input:[type="checkbox"]:eq(0)').change(function(){
			if($(this).is(':checked')){
				$(this).parent().parent().find('input:[type="checkbox"]').attr('checked','true');
			}else{
				$(this).parent().parent().find('input:[type="checkbox"]').removeAttr('checked');	
			}
		});
		$(this).find('ul.child_ul').each(function(i, l) {
            $(this).find('li:eq(0) input[type="checkbox"]').change(function(){
				if($(this).is(':checked')){
					$(this).parent().parent().parent().find('input:[type="checkbox"]:eq(0)').attr('checked','true');
					$(this).parent().siblings('li.children').find('input:[type="checkbox"]').attr('checked','true');
				}else{					
					$(this).parent().siblings('li.children').find('input:[type="checkbox"]').removeAttr('checked');
					if($(this).parent().parent().parent().find('ul.child_ul input:checked').length<1){
						$(this).parent().parent().parent().find('input:[type="checkbox"]:eq(0)').removeAttr('checked');	
					}
				}
			});	
			$(this).find('li:gt(0) input[type="checkbox"]').change(function(){
				if($(this).is(':checked')){
					$(this).parent().parent().parent().find('input:[type="checkbox"]:eq(0)').attr('checked','true');
					$(this).parent().parent().find('input:[type="checkbox"]:eq(0)').attr('checked','true');
				}else{					
					if($(this).parent().parent().find('li.children input:checked').length<1){
						$(this).parent().parent().find('input:[type="checkbox"]:eq(0)').removeAttr('checked');	
					}
					if($(this).parent().parent().parent().find('ul.child_ul input:checked').length<1){
						$(this).parent().parent().parent().find('input:[type="checkbox"]:eq(0)').removeAttr('checked');	
					}
				}
			});
			if($(this).find('li.child input[type="checkbox"]').is(':checked')){
				var a = $(this).find('li.child input[type="checkbox"]');
				a.parent().parent().siblings('li.node').find('input:[type="checkbox"]').attr('checked','true');
				a.parent().siblings('li.children').find('input:[type="checkbox"]').attr('checked','true');
			}
			$(this).find('li.children input[type="checkbox"]').each(function(c, f) {
                if($(this).is(':checked')){
					$(this).parent().parent().siblings('li.node').find('input:[type="checkbox"]').attr('checked','true');
					$(this).parent().siblings('li.child').find('input:[type="checkbox"]').attr('checked','true');
				}
            });			
        });
    });	
}
HuaWei.page.distributorFormCheck = function(){
	if($('#distributor_reg_form').length>0){
		$('#distributor_reg_form .dateinput input').datepicker({"dateFormat":"yy-mm-dd","showAnim":'slideDown'});
		$('#distributor_reg_form .clickdate:eq(0)').click(function(){$('#distributor_reg_form .dateinput:eq(0) input').trigger('focus')});
		$('#distributor_reg_form .clickdate:eq(1)').click(function(){$('#distributor_reg_form .dateinput:eq(1) input').trigger('focus')});
	}
		
}

HuaWei.page.flashVedioPlayer = function(id,src,w,h,autoplay,imgSrc){
	 var ap = autoplay||true;
	 var video_width=w; 
	 var video_height=h;
	 var skinSrc='/ilink'+g_HttpRelativeWebRoot + 'groups/entwebtemplate/documents/enterprise_webasset/ent_cn_huaweie.xml'; 
	 var swfPlayer='/ilink'+g_HttpRelativeWebRoot + 'groups/entwebtemplate/documents/enterprise_webasset/ent_cn_swf_player.swf';
	 
	 var player_flash = jwplayer(id).setup({
		 stretching: 'exactfit',
		 //controlbar:'over',
		 //controlbar.idlehide:'true',
		 width: video_width,
		 height: video_height,
		 image:imgSrc,
		 file: src,
		 skin:skinSrc,
		 autostart :ap,
		 flashplayer: swfPlayer,
		 ga: {}
	 });
	 return player_flash;
}
HuaWei.page.flashVedioPlayerInit = function(){
	//$('a.vedioparam').fancybox({width:560,height:600,autoDimensions:false});
	//$('a.vedioparam').attr("href","#flash_player");
	//$('a.vedioplay').each(function(index, element) {
	//	$(this).click(function(){
	//		var v = $(this).parent().find('.vedioparam:eq(0)');		
	//		HuaWei.page.flashVedioPlayer('flash_player',v.attr('flafile'),v.attr('vediowidth'),v.attr('vedioheight'),'true');
	//		$('#flash_player').css({'width':v.attr('vediowidth')+'px','height':v.attr('vedioheight')+'px'});
	//		$('a.vedioparam').fancybox({width:v.attr('vediowidth'),height:v.attr('vedioheight'),autoDimensions:false});
	//		v.trigger('click');
	//	});
	// });
}
HuaWei.page.contactUsMapInit = function(){
	var mapcurrent = HuaWei.page.getQueryValue(window.location.href,'map');		
	if(mapcurrent){
		mapcurrent = $('#contactus_map a.maplink:eq('+mapcurrent+')')
		mapcurrent.addClass('mapcurrent');
		$('#'+mapcurrent.attr('formap')).show();
	}
	$('#contactus_map a.maplink').each(function(index, element) {
        var w = $(this).width()/2;
		var x = parseInt($(this).attr('x')) - w;
		$(this).css({left:x+'px',top:$(this).attr('y')+'px',visibility:'visible'});
		$(this).hover(function(){
			if(!$(this).hasClass('mapcurrent')){				
				if(mapcurrent)$('#'+mapcurrent.attr('formap')).hide();
				$('#'+$(this).attr('formap')).fadeIn(400);
			}
		},function(){
			$(this).parent().find('div').stop(true,true);
			if(!$(this).hasClass('mapcurrent')){
				$('#'+$(this).attr('formap')).fadeOut(400);
			}
			if(mapcurrent)$('#'+mapcurrent.attr('formap')).fadeIn(400);
		});
    });
	$('a.hidedetails').each(function(index, element) {
		$(this).attr('index',index);
        $(this).click(function(){
			$('.introduction_contact .country:eq('+$(this).attr('index')+') a:eq(0)').trigger('click');
		});
    });
	$('.introduction_contact .country').each(function(index, element) {
        $(this).find('a:eq(0)').attr('index',index);
		$(this).find('a:eq(0)').click(function(){
			var aindex = $(this).attr('index');
			var cd = $('.introduction_contact .country_details:eq('+aindex+')');
			$('.introduction_contact .country a').removeClass('clicked');			
			$(this).addClass('clicked');
			if(cd.is(':visible')){
				cd.slideUp(400,'easeInOutExpo');
				$('.introduction_contact .country a').removeClass('clicked');
			}else{
				$('.introduction_contact .country_details:visible').slideUp(400,'easeInOutExpo');
				cd.slideDown(400,'easeInOutExpo');
			}
		});
    });
	
	$('#foot_maplink a').each(function(index, element) {
        $(this).hover(function(){
			$('#foot_map div:visible').fadeOut(400);
			$('#foot_map .foot_map'+$(this).attr('backgroundindex')).fadeIn(400);
		},function(){			
			$('#foot_map div').stop(true,true);
			$('#foot_map div:visible').fadeOut(400);
		});
    });
}

HuaWei.page.publicCommentonInit = function(){
	$('a.commenton').fancybox();	
	HuaWei.page.publicInputFocus('.pinglunarea','\u8bc4\u8bba\u7684\u65f6\u5019\uff0c\u8bf7\u9075\u7eaa\u5b88\u6cd5\u5e76\u6ce8\u610f\u8bed\u8a00\u6587\u660e\u3002','#333','#ccc',function(){$('.pinglunarea').css('backgroundColor','#fff')},function(){$('.pinglunarea').css('backgroundColor','#f4f4f4')});
	$('a.commenton').click(function(){		
		$('#public_commenton h2.commenton_title').html($(this).parent().find('a:eq(0)').text());
	});
}
HuaWei.page.publicInputFocusInit = function(){
	HuaWei.page.publicInputFocus('#pinglun','\u8bc4\u8bba\u7684\u65f6\u5019\uff0c\u8bf7\u9075\u7eaa\u5b88\u6cd5\u5e76\u6ce8\u610f\u8bed\u8a00\u6587\u660e\u3002','#333','#ccc',function(){$('#pinglun').css('backgroundColor','#fff')},function(){$('#pinglun').css('backgroundColor','#f4f4f4')});
	HuaWei.page.publicInputFocus('div.solution_search input','','#000','#000',function(){$('div.solution_search a:eq(0)').css('background','url(/ilink'+g_HttpRelativeWebRoot+'groups/entwebtemplate/documents/enterprise_webasset/ent_cn_img_search_hover.png) left top no-repeat scroll transparent')},function(){$('div.solution_search a:eq(0)').css('background','transparent')});
	HuaWei.page.publicInputFocus('div.doc_input input','\u6587\u6863\u68c0\u7d22','#666','#666',function(){$('div.doc_input a:eq(0)').css('background','url(/ilink'+g_HttpRelativeWebRoot+'groups/entwebtemplate/documents/enterprise_webasset/ent_cn_img_search_hover.png) left top no-repeat scroll transparent')},function(){$('div.doc_input a:eq(0)').css('background','transparent')});
	HuaWei.page.publicInputFocus('div.software_input input','\u8f6f\u4ef6\u68c0\u7d22','#666','#666',function(){$('div.software_input a:eq(0)').css('background','url(/ilink'+g_HttpRelativeWebRoot+'groups/entwebtemplate/documents/enterprise_webasset/ent_cn_img_search_hover.png) left top no-repeat scroll transparent')},function(){$('div.software_input a:eq(0)').css('background','transparent')});	
}
HuaWei.page.publicFancyBoxInit = function(){
         $('a[permissions="true"]').attr('href','#permissions_alert');
         $('#buys,a.e_journal_subscribe,a[permissions="true"]').fancybox({});
         $("#foot_feedback_alert,#feedbacks,#sitemap_feedbackform").fancybox({});     
         $('a.permissions_back').click(function(){
                   $.fancybox.close();
         });
         $('#trainloginlink').fancybox({onClosed:function(){
                   window.location.href = 'train_user_infomation.html';
         }});
         var isbuy = HuaWei.page.getQueryValue(window.location.href,'isbuy');
         if(isbuy){
                   $('a.buy:eq(0)').trigger('click');
         }
         var ismsg = HuaWei.page.getQueryValue(window.location.href,'ismsg');
         if(ismsg){
                   $('a.msg:eq(0)').trigger('click');
         }
         
         
}
HuaWei.page.videolistSeach = function(){
	$('.sx_k dt.sx').click(function(){
	if($(this).hasClass('m')){
		$(this).removeClass('m')
		$(this).siblings('dd').slideUp();	
		}
		else{
			$(this).addClass('m')
			$(this).siblings('dd').slideDown();
			}	
		})
	}
var parameter;
HuaWei.page.onLoad = function(){
	//???????????????????????????????????????????????????????????????????????????radio??????????????????navi:???????????????????????????????????????0??????,searchindex:???????????????????????????????????????,searchtext:'????????????'
	parameter = eval('('+$('#main').attr('parameter')+')');
	//??????jquery??????????????????		
	HuaWei.page.formExtension();
	//??????jquery?????????????????????????????????
	HuaWei.page.textHighLight();
	//???????????????????????????
	HuaWei.page.naviMenu();
	//?????????????????????????????????
	//HuaWei.page.naviMenuNew();
	//???????????????????????????
	HuaWei.page.mainView();
	//???????????????????????????????????????	
	HuaWei.page.setDatePickerCN();
	//??????????????????????????????
	HuaWei.page.indexNewsBar();
	//??????????????????????????????
	HuaWei.page.indexAlert();
	//????????????????????????????????????
	HuaWei.page.searchType();
	//??????????????????
	HuaWei.page.treeInit();
	//?????????????????????????????????????????????
	HuaWei.page.videoController();
	HuaWei.page.videoControllerr();
	//???????????????tab????????????
	HuaWei.page.tabsInit();
	HuaWei.page.tabsInit1();
	//?????????????????????
	HuaWei.page.starInit();
	//?????????????????????????????????
	HuaWei.page.showProduct();
	//news?????????????????????????????????
	HuaWei.page.showProductNews();
	//???????????????????????????????????????
	HuaWei.page.showPartners();
	//??????????????????????????????
	HuaWei.page.ulSameHeight();
	//????????????????????????????????????
	HuaWei.page.journalsTextLimit();
	//????????????????????????????????????
	HuaWei.page.dimensionSearch();
	//????????????????????????????????????
	HuaWei.page.dimensionSearch_video();
	//??????????????????js????????????
	HuaWei.page.userCustomized();	
	//??????????????????
	HuaWei.form.buyFormCheck();
	//????????????????????????????????????
	HuaWei.form.searchResultForm();
	//??????????????????
	HuaWei.form.feedBackFormCheck();
	//?????????????????????
	HuaWei.form.authorizationFormCheck();
	//??????????????????????????????
	HuaWei.form.partnerRegisterFormCheck();
	//????????????????????????
	HuaWei.form.servicePartnersregFormCheck();
	//??????????????????????????????
	HuaWei.form.partnersInfoFormCheck();
	//??????/??????License??????
	HuaWei.form.licenseDnmFormCheck();
	//????????????License??????
	HuaWei.form.licenseLlzxFormCheck();
	//MCU License??????
	HuaWei.form.licenseMcuFormCheck();
	//???????????? LIcense??????
	HuaWei.form.licenseTytxFormCheck();
	//?????????????????????
	HuaWei.page.securityMaskEvent();
	//???????????????
	HuaWei.page.weixint();
	//????????????Tab
	HuaWei.page.SmarterCitiesTab();
	//????????????????????????
	HuaWei.page.soluctionListHeight();
	
	HuaWei.page.contactYilan();
	HuaWei.page.proYilan();
	
	//flash???????????????	
	if(document.getElementById("showevent") && $("#flvImg").html() == null){
		//alert("null");
	//alert($("div[id='showevent']").html())
	//var zz = eval('$("#mainview").html()');
	 var delayTime = setTimeout(function() {
               HuaWei.page.flashVedioPlayerInit();
            },
            400)
	 
	
	flag == 1;
	}else{
		clearTimeout(delayTime);
	HuaWei.page.flashVedioPlayerInit();
	}
	//????????????????????????
	HuaWei.form.trainLoginFormCheck();
	//??????????????????
	HuaWei.form.appCertificateFormCheck();
	//??????????????????
	HuaWei.form.certificateQueryFormCheck();
	//????????????????????????
	HuaWei.page.distributorFormCheck();
	//????????????????????????
	HuaWei.page.contactUsMapInit();
	//????????????????????????
	HuaWei.page.publicCommentonInit();
	//??????????????????????????????????????????????????????
	HuaWei.page.publicInputFocusInit();
	//??????????????????????????????
	HuaWei.page.publicFancyBoxInit();
	//????????????????????????
	HuaWei.page.videolistSeach();
	//index_header???????????????
	HuaWei.page.indexHeaderSearch();
	//??????index_banner
	HuaWei.page.indexFcous();
	//??????????????????
	HuaWei.page.indexNews();
	HuaWei.form.sellerqueryFormCheck();
	HuaWei.form.licenseUniFormCheck();
	/*byod*/
	HuaWei.form.byodGenericApplication();
	//????????????
	HuaWei.page.marketData();
	//??????????????????????????????"????????????"????????????????????????
	HuaWei.page.updateDocumentHref();
	//??????????????????????????????
	$('form').attr("autocomplete",'off');
	//??????IE6????????????
	if(HuaWei.page.isIE6())document.execCommand("BackgroundImageCache", false, true);	
	//?????????????????????????????????????????????????????????
	$('select[name="cooperationtype"]').change(function(){
		if($(this).val() == '1'){
			window.location.href = 'channel_servicepartner_register.html?node=4&child=0'	
		}
		if($(this).val() == '0'){
			window.location.href = 'channel_salepartners_register.html?node=4&child=0'	
		}
	});	
	//????????????????????????
	if($('#indeximg').length>0){
		$('div.bottomdiv').hide();
	}
	
	//??????????????????????????????????????????bug
	var bsobj = null
	setInterval(function(){
		bsobj = $('#bsPanel');
		if(bsobj.is(':visible')){
			if((bsobj.offset().left + bsobj.width())>=$(window).width()){
				bsobj.animate({'left':($(window).width()-bsobj.width()-20)+'px'});
			}
		}		
	},100);
}

function iPx(){
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) 
        return true;
    return false;
}
// JavaScript Document
HuaWei.page.supportDocumentsDetailsShow=function(){
	$('ul.doccenter_details_btn a.start').click(function(){
		$('ul.doccenter_details_list li[item="true"] ul').slideDown(400);
		$('ul.doccenter_details_list li[item="true"]').each(function(index, element) {
			$(this).find('a:eq(0)').removeClass('show').addClass('show');
		});
	})
	$('ul.doccenter_details_btn a.merger').click(function(){
		$('ul.doccenter_details_list li[item="true"] ul').slideUp(400);	
		$('ul.doccenter_details_list li[item="true"]').each(function(index, element) {
			$(this).find('a:eq(0)').removeClass('show');
		});
	})
	$('ul.doccenter_details_list li[item="true"]').each(function(index, element) {
		if(index==0)$(this).find('a:eq(0)').removeClass('show').addClass('show');
        $(this).find('a:eq(0)').click(function(){
			var node = $(this).parent().find('ul:eq(0)');
			if(!node.is(":visible")){
				$(this).removeClass('show').addClass('show');
				node.slideDown(400);				
			}else{
				$(this).removeClass('show');
				node.slideUp(400);					
			}
		})
    });
	var st = HuaWei.page.getQueryValue(window.location.href,'showtype');
	if(st){
		$('ul.doccenter_details_list li[item="true"] ul:eq(0)').hide();
		$('ul.doccenter_details_list li[item="true"] a:eq(0)').removeClass('show')
		$('ul.doccenter_details_list li[item="true"]:eq('+st+') a:eq(0)').trigger('click');
	}
}
	
HuaWei.page.channelDataInteractive = function(){
	$('ul.partners_ul').each(function(index, element) {
		var me = $(this);
		var mpt = me.next('div.channel_data_mask');
        $(this).find('a.leftarrowbig').each(function(j, e) {
			$(this).attr('index',j).click(function(a) {
				var id = $(this).attr('index');
				$('ul.partners_ul').find('a.leftarrowbig').removeClass('class_check_link');
                $(this).addClass('class_check_link');
				if(mpt.find('.channel_data_pennel:eq('+id+')').is(':visible')){
					mpt.find('.channel_data_pennel:animated').stop(true,true);
					mpt.find('.channel_data_pennel:eq('+id+')').slideUp(400);
				}else{
					$('div.channel_data_mask').find('.channel_data_pennel:animated').stop(true,true);
					$('div.channel_data_mask').find('.channel_data_pennel').slideUp(400);
					mpt.find('.channel_data_pennel:eq('+id+')').delay(400).slideDown(400);
				}
            });
			
        });
    });
	
	$('div.channel_data_pennel').each(function(index, element) {
        var cdp = $(this);
		cdp.find('dl.class_a a.channel_child').each(function(index, element) {
			$(this).attr('index',index);
            $(this).mouseenter(function(e) {
				$(cdp).find(':animated').stop(true,true);
				cdp.find('a.channel_child_check').removeClass('channel_child_check');
				$(this).addClass('channel_child_check');
				$(cdp).find('dl.class_b dd:gt('+$(this).attr('index')+'),dl.class_b dd:lt('+$(this).attr('index')+')').hide();
                $(cdp).find('dl.class_b dd:eq('+$(this).attr('index')+')').animate({width:'show'},400);
				$(cdp).find('dl.class_c dd').hide();
            });
        });
		cdp.find('dl.class_b a.channel_child').each(function(index, element) {
			$(this).attr('index',index);
            $(this).mouseenter(function(e) {
				$(cdp).find(':animated').stop(true,true);
				cdp.find('dl.class_b a.channel_child_check').removeClass('channel_child_check');
				$(this).addClass('channel_child_check');
				$(cdp).find('dl.class_c dd:gt('+$(this).attr('index')+'),dl.class_c dd:lt('+$(this).attr('index')+')').hide();
                $(cdp).find('dl.class_c dd:eq('+$(this).attr('index')+')').animate({width:'show'},400);
            });
        });
		cdp.find('dl.class_c a.class_c_item').each(function(index, element) {
			$(this).click(function(e) {
				if($(this).siblings('div.class_c_children').length>0){
					if($(this).siblings('div.class_c_children').is(':visible')){
						$(this).siblings('div.class_c_children').slideUp(400,function(){
							$(this).parent().removeClass('select_current');
						});
					}else{
						cdp.find('dl.class_c div').stop(true,true);
						$(this).siblings('div.class_c_children').slideDown(200,function(){
							$(this).parent().addClass('select_current');
						});
					}
				}
            });
		});
    });
	
}
$(function(){
	HuaWei.page.onLoad();
	HuaWei.page.supportDocumentsDetailsShow();
	HuaWei.page.channelDataInteractive();
	HuaWei.page.soluctionScroll('#tabscro0','#sLeftBtnB',"#sRightBtnB");
	HuaWei.page.soluctionScroll('#tabscro1','#sLeftBtnB1',"#sRightBtnB1");
	HuaWei.page.soluctionScroll('#tabscro2','#sLeftBtnB2',"#sRightBtnB2");
	HuaWei.page.soluctionScroll('#tabscro3','#sLeftBtnB3',"#sRightBtnB3");
	HuaWei.page.soluctionScroll('#tabscro4','#sLeftBtnB4',"#sRightBtnB4");
	
	
})
HuaWei.page.securityMaskEvent = function(){
	$('div.security_event_mask').each(function(i, element) {
        $(this).hover(function(){
			$(this).find(':animated').stop(true,true);
			$(this).find('div.security_mask_text').hide();
			$(this).find('div.security_mask_content').slideDown(400);	
		},function(){
			$(this).find('div.security_mask_content').slideUp(200);
			$(this).find('div.security_mask_text').delay(200).slideDown(100);
		});
		var me = $(this);
		$(this).find('a.security_text_mask').each(function(index, element) {
			$(this).attr('index',index);
            $(this).hover(function(){
				me.find('a.security_text_mask').removeClass('mask');
				$(this).addClass('mask');
				me.find('div.security_text_panel').hide();
				me.find('div.security_text_panel:eq('+$(this).attr('index')+')').show();
			});
        });
    });	
	
}

/*????????????-???????????????TAB*/
function setTab03Syn ( i )
	{
		selectTab03Syn(i);
	}
	
	function selectTab03Syn ( i )
	{
		switch(i){
			case 1:
			document.getElementById("Honor_TabCon1").style.display="block";
			document.getElementById("Honor_TabCon2").style.display="none";
			document.getElementById("Honor_TabCon3").style.display="none";
			document.getElementById("font1").style.color="#990000";
			document.getElementById("font2").style.color="#666666";
			document.getElementById("font3").style.color="#666666";
			break;
			case 2:
			document.getElementById("Honor_TabCon1").style.display="none";
			document.getElementById("Honor_TabCon2").style.display="block";
			document.getElementById("Honor_TabCon3").style.display="none";
			document.getElementById("font1").style.color="#666666";
			document.getElementById("font2").style.color="#990000";
			document.getElementById("font3").style.color="#666666";
			break;
			case 3:
			document.getElementById("Honor_TabCon1").style.display="none";
			document.getElementById("Honor_TabCon2").style.display="none";
			document.getElementById("Honor_TabCon3").style.display="block";
			document.getElementById("font1").style.color="#666666";
			document.getElementById("font2").style.color="#666666";
			document.getElementById("font3").style.color="#990000";
			break;
		}
	}
/*???????????????????????????*/
HuaWei.page.productDetailImg = function(){ 
var midChangeHandler = null;
    $("#imageMenu li img").hover(function() {

        if ($(this).attr("id") != "onlickImg") {
            midChange($(this).attr("src").replace("small", "mid"));
            $("#imageMenu li").removeAttr("id");
            $(this).parent().attr("id", "onlickImg");
        }
    }).live("mouseover", function() {
        if ($(this).attr("id") != "onlickImg") {
            window.clearTimeout(midChangeHandler);
            midChange($(this).attr("src").replace("small", "mid"));
            $(this).css({ "background": "none repeat scroll 0 0 #336699", "border": "1px solid #990000" });
        }
    }).live("mouseout", function() {
        if ($(this).attr("id") != "onlickImg") {
            $(this).removeAttr("style");
            midChangeHandler = window.setTimeout(function() { midChange($("#onlickImg img").attr("src").replace("small", "mid")); }, 10000);

        }
    });

    function midChange(src) {
        $("#midimg").attr("src", src).load(function() { changeViewImg(); });
		$(".big-btn").attr("href",src).load(function(){ changeViewImg(); })
    }

    
	var cur_index = 1;
	var total = $('#mainpic img').length;
	//???????????????????????????????????????
	$('#right_btn').hover(function (){
		if(cur_index<total-3){
			$(this).removeClass('pro-next');$(this).addClass('pro-next-on');
			}
		else{
			$(this).removeClass('pro-next-on');$(this).addClass('pro-next');
			}

		})
	$('#left_btn').hover(function (){
		if(cur_index>1){
			$(this).removeClass('pro-prev');$(this).addClass('pro-prev-on');
			}
		else{
			$(this).removeClass('pro-prev-on');$(this).addClass('pro-prev');
			}

		})	
	 //????????????
    $('#right_btn').click(function(){//????????????
			//alert('???????????????'+cur_index+",??????????????????("+cur_index+"<"+(total-4)+"):"+(cur_index<total-4));
			if(cur_index<total-3){
				$('#mainpic').animate({'margin-left':'-'+cur_index*77+'px'},300);
				//alert($('#mainpic').attr('style'));
				cur_index+=1;
				$(this).removeClass('next');$(this).addClass('next-on');
				$("#left_btn").removeClass('pro-prev');$('#left_btn').addClass('pro-prev-on');
			}else{$(this).removeClass('pro-next-on');$(this).addClass('pro-next')}
		});
		$('#left_btn').click(function(){//????????????
			//alert('???????????????'+cur_index+",??????????????????("+cur_index+">1):"+(cur_index>1));
			if(cur_index>1){
				cur_index-=1;
				$('#mainpic').animate({'margin-left':'-'+(cur_index-1)*77+'px'},300);
				$(this).removeClass('pro-prev');$(this).addClass('pro-prev-on');
				$('#right_btn').removeClass('pro-next');$('#right_btn').addClass('pro-next-on');
			}else{$(this).removeClass('pro-prev-on');$(this).addClass('pro-prev')}
		});
     //??????????????????
		$('#mainpic ul li a').hover(
		function(){
			$(this).children().addClass("img_hover");
			$(this).parent().siblings().children().children().removeClass("img_hover");
			return false;
		}); 
		 
		 

    //???????????????
    function mouseEnter(e) {
        if ($("#winSelector").css("display") == "none") {
            $("#winSelector,#bigView").show();
        }

        $("#winSelector").css(fixedPosition(e));
        e.stopPropagation();
    }

    //    function mouseMove(e) {
    //        $("#winSelector").css(fixedPosition(e));
    //        e.stopPropagation();
    //    }

    function mouseOut(e) {
        if ($("#winSelector").css("display") != "none") {
            $("#winSelector,#bigView").hide();
        }
        e.stopPropagation();
    }


    $("#midimg").mouseenter(mouseEnter); //????????????
    $("#midimg,#winSelector").mousemove(mouseEnter).mouseout(mouseOut); //???????????????

    var $divWidth = $("#winSelector").width(); //???????????????
    var $divHeight = $("#winSelector").height(); //???????????????
    var $imgWidth = $("#midimg").width(); //????????????
    var $imgHeight = $("#midimg").height(); //????????????
    var $viewImgWidth = $viewImgHeight = $height = null; //IE????????????????????? ???????????? ???????????? ??????????????????

    // download by http://www.codefans.net

    function changeViewImg() {
        $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));
    }
    changeViewImg();

    $("#bigView").scrollTop(0);
    function fixedPosition(e) {
        if (e == null) {

            return;
        }
        var $imgLeft = $("#midimg").offset().left; //???????????????
        var $imgTop = $("#midimg").offset().top; //???????????????
        X = e.pageX - $imgLeft - $divWidth / 2; //selector???????????? X
        Y = e.pageY - $imgTop - $divHeight / 2; //selector???????????? Y
        X = X < 0 ? 0 : X;
        Y = Y < 0 ? 0 : Y;
        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;
        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;

        if ($viewImgWidth == null) {
            $viewImgWidth = $("#bigView img").outerWidth();
            $viewImgHeight = $("#bigView img").height();
            if ($viewImgWidth < 200 || $viewImgHeight < 200) {
                $viewImgWidth = $viewImgHeight = 800;
            }
            $height = $divHeight * $viewImgHeight / $imgHeight;
            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);
            $("#bigView").height($height);
        }

        var scrollX = X * $viewImgWidth / $imgWidth;
        var scrollY = Y * $viewImgHeight / $imgHeight;
        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });
        //???????????????
        //??????????????????
        var viewH = document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
        var top = ((viewH - $height) / 2) + $(document).scrollTop();
        top = top < 0 ? 0 : top;
        var left = 277;
        if ($(window).width() > $(document.body).width()) {
            //left = left - (($(window).width() - $(document.body).width()) / 2);
        }
        $("#bigView").css({ "top": top, "left": left });


        return { left: X, top: Y };
    }
};      
/*2013-7-13 ????????????*/
$(function(){
	/*?????????????????????*/
	if($('#about_intro_flv').length>0){
		HuaWei.page.flashVedioPlayer('about_intro_flv',$('#about_intro_flv').attr('flafile'),$('#about_intro_flv').attr('vediowidth'),$('#about_intro_flv').attr('vedioheight'),'false',$('#about_intro_flv').attr('imgfile'));
	}
	/*list_video hover??????*/
	$(".list_video a").hover(function(){
		$(this).children().addClass("list_video_hover") 
		},
		function(){
			$(this).children().removeClass("list_video_hover") 
			}
		)
})
$(function(){
/*????????????hover??????*/
	$(".line-con ul li p").hover(function(){
		$(this).children("span").addClass("on");
		},
		function(){
		$(this).children("span").removeClass("on");	
			}
		)
/*?????????????????????*/
	$(".line-bt").click(function(){
		if($(this).parents("li").hasClass("line-block")){
			$(this).parents("li").removeClass("line-block");	
			$(this).siblings(".line-xcon").slideUp();
			}
		else{
			$(this).parents("li").addClass("line-block")
			$(this).siblings(".line-xcon").slideDown();
			$(this).parents("li").siblings().children(".line-xcon").slideUp();
			$(this).parents("li").siblings("").removeClass("line-block")
			$(this).parents().parents().parents(".line-ge").siblings("").children().children().children("li").removeClass("line-block")
			$(this).parents().parents().parents(".line-ge").siblings("").children().children().children("li").children(".line-xcon").slideUp();
			/*ie7 ?????? ico ????????????*/
			var a;
			a=$(this).children("span").width();
			$(this).children("span").children("em").css("width",a);
			}
		})
	})
	/*???????????????*/
HuaWei.page.weixint=function(){
	$("#weixin").hover(function(){
		$(".weixin_img").show();
		},
		function(){
			$(".weixin_img").hide();
			}
		)
}
/*????????????tab*/
HuaWei.page.SmarterCitiesTab = function(){
	$(".img_a").hover(function(){
	$(this).css("z-index",1) 
	  $(this).children(".img_con").show();
	  },
	  function(){
		$(this).css("z-index",0)   
	$(this).children(".img_con").hide();  
		  }
	  )	
var searchst=$(".tab-head li");
var searchsb=$(".tab-cont>div");
		var flag=0;
		$('.tab-head.xtab li').each(function(){
			if($(this).is(':visible')&&!flag){
				$(this).children('a').addClass('on');flag=1;
				}
		})

		$(".tab-cont.xcon > div").hide().eq($(".tab-head.xtab .on").parent().index()).show().siblings().hide();
		searchst.live("click",function(){
			$(this).siblings().children("a").removeClass("on");
			$(this).children("a").addClass("on");
			searchsb.eq(searchst.index($(this))).show().siblings().hide();
		});	
		

        var scrolls, els = $(".nav_btn");
        $(window).resize(function() {
            scrolls = [];
            els.each(function(i) {
                var id = $(this).attr("href");
            });}).trigger("resize");
        els.click(function(e) {
            e.preventDefault();
            var id = $(this).attr("href");
            id=id.substring(id.indexOf("#"));
            $('html,body').animate({
               scrollTop: $(id).offset().top-$('#cp_menu').height()+ "px"
            }, 500);
            return false;
        });

}
//????????????????????????
HuaWei.page.soluctionScroll = function(obj,objl,objr){
	  var allPic=$(obj+" .ulSmallPic li").length;
	//???????????????????????????
	function btnBInitA(){
		if(allPic > 3) {
			$(objr).attr("class","sRightBtnB");
		}
		else{
			$(objr).attr("class","sRightBtnBBan");
			}
	}
	//????????????????????????
	$(objl).mouseover(function(){
		if($(this).attr("class")=="sLeftBtnB") {
			$(this).attr("class","sLeftBtnBSel");
		}
	});
	$(objl).mouseout(function(){
		if($(this).attr("class")=="sLeftBtnBSel") {
			$(this).attr("class","sLeftBtnB");
		}
	});
	$(objl).click(function(){
		if($(this).attr("class")=="sLeftBtnBSel") {
			var leftPosition=$(obj+" .ulSmallPic").css("left");
			var leftPositionNum=Number(leftPosition.substring(0,(leftPosition.length-2)));
			leftPosition=leftPositionNum+244+"px";
			if(leftPosition=="0px") {if($(this).attr("class") != "sLeftBtnBBan") {$(this).attr("class","sLeftBtnBBan");}}
			var bestLeftNum=-($(obj+" .ulSmallPic li").length-3)*244;
			if((leftPositionNum+244) > bestLeftNum && $("sRightBtnB").attr("class") != "sRightBtnB") {$(objr).attr("class","sRightBtnB")}
			if($(obj+" .ulSmallPic").attr("rel")=="stop"){
				$(obj+" .ulSmallPic").attr("rel","moving");
				$(obj+" .ulSmallPic").stop();
				$(obj+" .ulSmallPic").animate({left:leftPosition},400,function(){$(obj+" .ulSmallPic").attr("rel","stop");});
			}
		}
	});
	
	$(objr).mouseover(function(){
		if($(this).attr("class")=="sRightBtnB") {
			$(this).attr("class","sRightBtnBSel");
		}
	});
	$(objr).mouseout(function(){
		if($(this).attr("class")=="sRightBtnBSel") {
			$(this).attr("class","sRightBtnB");
		}
	});
	$(objr).click(function(){
		if($(this).attr("class")=="sRightBtnBSel"){
			var leftPosition=$(obj+" .ulSmallPic").css("left");
			var leftPositionNum=Number(leftPosition.substring(0,(leftPosition.length-2)));
			leftPosition=leftPositionNum-244+"px";
			var bestLeftNum=-($(obj+" .ulSmallPic li").length-3)*244;
			if((leftPositionNum-244)==bestLeftNum) {$(this).attr("class","sRightBtnBBan");}
			if(leftPositionNum==0 && $(objl).attr("class")=="sLeftBtnBBan") {$(objl).attr("class","sLeftBtnB");}
			if($(obj+" .ulSmallPic").attr("rel")=="stop") {
				$(obj+" .ulSmallPic").attr("rel","moving");
				$(obj+" .ulSmallPic").stop();
				$(obj+" .ulSmallPic").animate({left:leftPosition},400,function(){$(obj+" .ulSmallPic").attr("rel","stop");});
			}
		}
	});
	btnBInitA();
	  }	
	//????????????????????????
	HuaWei.page.soluctionListHeight = function(){
	$('.category_list').each(function(){
		var lH = $(this).children('.category_list_li.l').find('.category_list_con').height();
		var rH = $(this).children('.category_list_li.r').find('.category_list_con').height();
		if(lH >rH){
			$(this).children('.category_list_li').find('.category_list_con').css('height',lH);
			}
		else{
			$(this).children('.category_list_li').find('.category_list_con').css('height',rH);
			}
		})
	}
	
	
	//jquery get/set cookie
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


//????????????????????????
$("[dflag]").click(function(){
var flagValue= $(this).attr("dflag");
var relaodlink= $(this).attr("relink");
 if(flagValue=="" || relaodlink=="") return;
                  if($.cookie(flagValue) != "true"){
                  $(this).attr("href",relaodlink)
                 // $.cookie(flagValue, "true",{expires: 30});   
                  }else{
				  var contentId = $(this).attr("relink").split("docId")[1].substring('1');
                  var downloadlink = "http://"+window.location.host+"/ilink/cnenterprise/download/"+contentId;
                  $(this).removeAttr("target").attr("href",downloadlink);
				  if(flagValue!="wlan"){
				  $.post("http://enterprise.huawei.com/enterpriseform/combination.do?method=savaCollectCombination",
								{"combinationVO.userId":$.cookie("sdnuser"),"combinationVO.eventId":$.cookie("sdneventId"),"combinationVO.contentId":contentId},function(){
				  });
					 }
                  }
         });
	 
//??????????????????
HuaWei.page.indexNews = function(){
		$('#index_news').each(function(){
		var lens = $("#index_news .news_li").length-1;
		var indexs = 0; 
		var picTimers;
		$("#index_news .con_news .news_li").eq(0).show();
		$("#index_news").hover(function(){
		clearInterval(picTimers);
	},function(){
		picTimers = setInterval(function(){
			showPicse();
		},4000); 
	}).trigger("mouseleave");
		function showPicse(){
		
		 if (indexs==lens) 
		 {
			 $("#index_news .con_news .news_li").eq(0).fadeIn(1200);
			indexs=0;
			 }
		else{		
		$("#index_news .con_news .news_li").eq(indexs).fadeOut(500);
		$("#index_news .con_news .news_li").eq(indexs+1).fadeIn(1200);
		 indexs+=1;
			}
		}
		})	
		
	}
//index_header???????????????	
	HuaWei.page.indexHeaderSearch = function(){
		
		function oBlur(){
			$(this).parents('.search').removeClass('on')
			$(this).siblings(".options").slideUp(function(){
				$(this).siblings("input.search_text").animate({width:"85px"},function(){
					$(this).siblings(".options").hide();
					$(this).parents('.search').removeClass('on')
					});
			})
		}
		 
		$(".search_n input.search_text").focus(function(){
			$(this).parents(".search").addClass("on");
			$(this).animate({width:"150px"},function(){
			if($(".search").hasClass("on")){
				$(".search_n .options").slideDown();
				}
			else{
				return false;
				}
				
				})
			})
		.bind("blur",oBlur);
		
		$(".search_n .options").mouseenter(function(){
			$(".search_n input.search_text").unbind("blur");
			setTimeout(function(){
				$(this).slideDown();
				},500)
			})
			.click(function(){
				$(".search_n input.search_text").focus();
				})
			.mouseleave(function(){
				var $thisObj = $(this);
				$(".search_n input.search_text").bind("blur",oBlur);
				setTimeout(function(){
					if($thisObj.hasClass("blank")){
						return false;}
					else{	
						$thisObj.slideUp();
						}
					},500)	
					
				})
		$(".search").mouseenter(function(){
			$(".search_n .options").addClass("blank");
			setTimeout(function(){
				if($(".search").hasClass("on")){
				   $(".search_n .options").slideDown();
					}
				},500)
			})
			.mouseleave(function(){
				$(".search_n .options").removeClass("blank");
				})
	}
	//??????index_banner	
	HuaWei.page.indexFcous = function(){
		$('.index_banner').each(function(){
		$('.index_banner').hover(function(){
			$(this).find('.prev').show();
			$(this).find('.next').show();
			},
			function(){
			$(this).find('.prev').hide();
			$(this).find('.next').hide();
				}
			)
		$('#focus .prev span').hover(function(){
			valueP();
			},
			function(){
			$(this).removeClass();	
				}
			)
		$('#focus .prev span').click(function(){
			valuePc();
			})
		$('#focus .next span').hover(function(){
			valueN();
			},
			function(){
			$(this).removeClass();	
				}
			)
		$('#focus .next span').click(function(){
			valueNc();
			})
		valueP = function(){
		if($('#focus li:eq(0)').is(":visible")){
			$('#focus .prev span').removeClass().addClass('eve_l');
			}
		if($('#focus li:eq(1)').is(":visible")){
			$('#focus .prev span').removeClass().addClass('pro_l');
			}
		if($('#focus li:eq(2)').is(":visible")){
			$('#focus .prev span').removeClass().addClass('sol_l');
			}
		}
	valuePc = function(){
		if($('#focus li:eq(0)').is(":visible")){
			$('#focus .prev span').removeClass().addClass('sol_l');
			}
		if($('#focus li:eq(1)').is(":visible")){
			$('#focus .prev span').removeClass().addClass('eve_l');
			}
		if($('#focus li:eq(2)').is(":visible")){
			$('#focus .prev span').removeClass().addClass('pro_l');
			}
		}
	valueN = function(){
		if($('#focus li:eq(0)').is(":visible")){
		    $('#focus .next span').removeClass().addClass('sol_r');
			}
		if($('#focus li:eq(1)').is(":visible")){
			 $('#focus .next span').removeClass().addClass('eve_r');
			}
		if($('#focus li:eq(2)').is(":visible")){
			 $('#focus .next span').removeClass().addClass('pro_r');
			}
		}
	valueNc = function(){
		if($('#focus li:eq(0)').is(":visible")){
			$('#focus .next span').removeClass().addClass('eve_r');
			}
		if($('#focus li:eq(1)').is(":visible")){
			$('#focus .next span').removeClass().addClass('pro_r');
			}
		if($('#focus li:eq(2)').is(":visible")){
			$('#focus .next span').removeClass().addClass('sol_r');
			}
		}
	//demo4
	$("#focus").mogFocus({
		loadAnimation : false,
		time: 8000,
		scrollWidth : 1180,
		animationWay : 'fade',
		btnStyle : 'hidden',
		thumlen : 3	,
		fadeTime : 500
	});	
		})
		}
	HuaWei.page.proYilan= function(){
$('#tabs_docList').each(function(){
 var navHeight = $('#cp_menu').outerHeight();
  var scrolls, els = $("#top_nr a");
        $(window).resize(function() {
            scrolls = [];
            els.each(function(i) {
                var id = $(this).attr("href");
            });}).trigger("resize");
        els.click(function(e) {
            e.preventDefault();
            var id = $(this).attr("href");
			id=id.substring(id.indexOf("#"));
            $('html,body').animate({
                scrollTop: $(id).offset().top-navHeight+ "px"
            }, 500);
            return false;
        });
 }); 
 $(".data_preview_top").click(function(e) {
		e.preventDefault();
		var id = $(this).attr("href");
		id=id.substring(id.indexOf("#"));
		$('html,body').animate({
			scrollTop: $(id).offset().top-$('#cp_menu').outerHeight()+ "px"
		}, 500);
		return false;
	});
}

HuaWei.page.contactYilan= function(){
$('.txtborder').each(function(){
 var navHeight = $('#cp_menu').outerHeight();
  var scrolls, els = $(".txtborder a");
        $(window).resize(function() {
            scrolls = [];
            els.each(function(i) {
                var id = $(this).attr("href");
            });}).trigger("resize");
        els.click(function(e) {
            e.preventDefault();
            var id = $(this).attr("href");
			id=id.substring(id.indexOf("#"));
            $('html,body').animate({
                scrollTop: $(id).offset().top-navHeight+ "px"
            }, 500);
            return false;
        });
 })
}

//????????????????????????????????????????????????
$("#Breadcrumb-Trail a:contains(\u65b0\u95fb\u4e2d\u5fc3)").replaceWith("<span>\u65b0\u95fb\u4e2d\u5fc3</span>");

//???????????????????????????????????????????????????????????????????????????,??????????????????
if(document.URL.indexOf("/solutions/trade/energy/index.htm")>=0)$("a").attr("target","_blank");

//?????????????????????Events?????????????????????
$("#Breadcrumb-Trail a:contains(\u6d3b\u52a8/\u4e13\u9898)").replaceWith("<span>\u6d3b\u52a8/\u4e13\u9898</span>");

/*??????????????????????????????*/
String.prototype.trim=function(){   
 return this.replace(/(^\s*)|(\s*$)/g, ""); 
 }
 var reg=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
//var reg=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
$("#collateralForm #Firstname").bind("blur",function(){
		if($("#collateralForm #Firstname").val().toString().trim().length==0){
			$("#collateralForm #Firstname").css('border','1px dotted red');
			$("[htmlfor='Firstname']").css('font-size','12px').text("\u8bf7\u8f93\u5165\u59d3\u540d!");
		}else{
			$("#collateralForm #Firstname").css('border','1px dotted #dadada');
			$("[htmlfor='Firstname']").text(" ");	
		}
	});
$("#collateralForm #Email").bind("blur",function(){
	if($("#collateralForm #Email").val()==""){
		$("#collateralForm #Email").css('border','1px dotted red');
		$("[htmlfor='Email']").css('font-size','12px').text("\u8bf7\u8f93\u5165\u90ae\u4ef6\u5730\u5740!");
	}else if(!reg.test($("#collateralForm #Email").val())){
		$("#collateralForm #Email").css('border','1px dotted red');
		$("[htmlfor='Email']").css('font-size','12px').text("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u4ef6\u5730\u5740");	
	}else{
		$("#collateralForm #Email").css('border','1px dotted #dadada');
		$("[htmlfor='Email']").text(" ");	
	}
});
	
function valdCollateralForm(){	
	var _success=true;	
	if($("#collateralForm #Firstname").val().toString().trim()==""){
		$("#collateralForm #Firstname").css('border','1px dotted red');
		$("[htmlfor='Firstname']").css('font-size','12px').text("\u8bf7\u8f93\u5165\u59d3\u540d!");
		_success=false;
	}
	if($("#collateralForm #Email").val()==""){
		$("#collateralForm #Email").css('border','1px dotted red');
		$("[htmlfor='Email']").css('font-size','12px').text("\u8bf7\u8f93\u5165\u90ae\u4ef6\u5730\u5740!");
		_success=false;
	}else if(!reg.test($("#collateralForm #Email").val())){
		$("#collateralForm #Email").css('border','1px dotted red');
		$("[htmlfor='Email']").css('font-size','12px').text("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u4ef6\u5730\u5740");
		_success=false;		
	}	
		
	return _success;
}

/*BYOD*/
HuaWei.form.byodGenericApplication = function(){
	$(".application_cont li.introduced").each(function(){
		var $oBtn = $(this).find(".imgchangebtn_wrap");
		var wrapWidth = $(this).find(".img_wrap").find("img").length*15;
				
		$(this).find(".img_wrap").width($(this).find(".img_wrap").find("img").length*182)
		$oBtn.width(wrapWidth);
		$oBtn.find("a").click(function(){
			var _this = $oBtn.find("a").index(this);
			$(this).addClass("on").siblings().removeClass("on");
			$(this).parents(".right").find(".img_wrap").animate({"margin-left":-_this*182});
			})
		
		})	
	$(".byod_gen_application .application_wrap").find("li").click(function(){
		var $icoAplation = $(".byod_gen_application .application_wrap").find("li");
		var $icoAplationa = $(this).find("a");
		var $aplationIndex = $icoAplation.index(this);
		
		$(".byod_gen_application .application_cont:visible").slideUp();
		$icoAplation.find("a").removeClass("on");		
		$icoAplation.not(this).removeClass("on");
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			//$(".byod_gen_application .application_cont:visible").slideUp();
			}
		else{
			$(this).addClass("on");
			$icoAplationa.addClass("on");
			$(".byod_gen_application .application_cont").eq($aplationIndex).slideDown(function(){
				$(this).find(".right ").addClass("right_pos").find(".imgchangebtn").addClass("imgchangebtn_pos");
				$(this).find(".download").addClass("positioning").find("img").addClass("positioning");
			}).siblings(".application_cont").hide(function(){
				$(this).find(".right ").removeClass("right_pos").find(".imgchangebtn").removeClass("imgchangebtn_pos");
				$(this).find(".download").removeClass("positioning").find("img").removeClass("positioning");
			});
						
		}
		return false;
		}).hover(function(){
			$(this).find("span").addClass("on")
			},
			function(){
			$(this).find("span").removeClass("on");	
				})
	$(".byod_gen_application .application_cont .tab_btn a").click(function(){
		var $_this = $(".byod_gen_application .application_cont .tab_btn a").index(this);
		$(this).addClass("on").siblings().removeClass("on");
		$(".application_cont .application li").eq($_this).show().siblings().hide();
		})
	$(".application_cont").find("a.mic").mouseenter(function(){
		$(this).parent().find("img").show();
		}).mouseleave(function(){
			$(this).parent().find("img").hide();	
			})		
	$("body").click(function(){
				if($(".byod_gen_application .application_cont:visible")){
				$(".byod_gen_application .application_cont:visible").slideUp();
				$(".byod_gen_application .application_wrap").find("li").removeClass("on");
				$(".byod_gen_application .application_wrap").find("li").find("a").removeClass("on");
			}
		})
	$(".byod_gen_application").click(function(event){
		event.stopPropagation();
		})
}

HuaWei.page.marketData = function(){
		$(".tab_wrap a").click(function(){
			var $thisIndex = $(".tab_wrap a").index(this);
			$(this).addClass("on").siblings().removeClass("on");
			$(".markdatatype .tab_cont").eq($thisIndex).show().siblings(".tab_cont").hide();
			})
		$(".searchBox_cont a.slideBtn").click(function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				}
			else{
				$(this).addClass("on");
				}
			$(".marketing_classes .marketall_option").slideToggle();
			})
		$(".searchBox .btn").hover(
			function(){
				$(this).addClass("on");
				},
			function(){
				$(this).removeClass("on");
				}
		)
	}
	
HuaWei.page.updateDocumentHref = function(){
	var localHref = document.location.href;
	/*??????????????????????????????"????????????"????????????????????????*/
	if(localHref.indexOf("/products/itapp/server") > 0){
		$(".content_righta > .a1").attr("href","http://enterprise.huawei.com/topic/Self_service_server/knowledge.html");
	}
}
