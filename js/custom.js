$(document).ready(function() {
	
  $("body").css("display", "none");
  $("body").fadeIn(1000);
    
	$(".nav a").click(function(event){
		event.preventDefault();
    
		var linkLocation = this.href;
		$("body").fadeOut(500, function() {
      window.location = linkLocation;
    });		
	});				
});

function getParam(key) {
  var query = window.location.search.substring(1);
  var pairs = query.split("&");
  for (var i=0; i<pairs.length; i++) {
    var pair = pairs[i].split("=");
    if (pair[0] == key) {
      return pair[1];
    }
  } 
}

function getContentHeight() {
  return $(document.body).height() - 25;
}

// Color Animation (extract from jQuery UI)
// http://www.onextrapixel.com/2011/10/17/animating-colors-using-css3-transitions-with-jquery-fallback/
$.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,a){$.fx.step[a]=function(c){if(!c.colorInit){c.start=getColor(c.elem,a);c.end=getRGB(c.end);c.colorInit=true}c.elem.style[a]="rgb("+Math.max(Math.min(parseInt((c.pos*(c.end[0]-c.start[0]))+c.start[0],10),255),0)+","+Math.max(Math.min(parseInt((c.pos*(c.end[1]-c.start[1]))+c.start[1],10),255),0)+","+Math.max(Math.min(parseInt((c.pos*(c.end[2]-c.start[2]))+c.start[2],10),255),0)+")"}});function getRGB(b){var a;if(b&&b.constructor==Array&&b.length==3){return b}if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)){return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]}if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)){return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55]}if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}if(a=/rgba\(0, 0, 0, 0\)/.exec(b)){return colors.transparent}return colors[$.trim(b).toLowerCase()]}function getColor(c,a){var b;do{b=$.curCSS(c,a);if(b!=""&&b!="transparent"||$.nodeName(c,"body")){break}a="backgroundColor"}while(c=c.parentNode);return getRGB(b)};
