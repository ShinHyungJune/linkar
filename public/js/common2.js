$(document).ready(function(){
	autoSection();
	spaceboxHeight();
});

$(window).resize(function(){
	spaceboxHeight();
});

// auto section
function autoSection(){
	var is_header = $("header").length;
	var is_footer = $("footer").length;
	
	if(is_header > 0){
		var header = $("header").outerHeight();
		$("section").css({"padding-top":header+"px"});
	}

	if(is_footer > 0){
		var footer = $("footer").outerHeight();
		$("section").css({"padding-bottom":footer+"px"});
	}
}

// spacebox height
function spaceboxHeight(){
	var Hei = $(document).height();

	var is_header = $("header").length;
	var is_footer = $("footer").length;
	
	if(is_header > 0){
		Hei = Hei - $("header").outerHeight();
	}

	if(is_footer > 0){
		Hei = Hei - $("footer").outerHeight();
	}

	var is_space = $(".space-box").length;

	if(is_space > 0){
		$(".space-box").css({"min-height":Hei+"px"});
	}
}

// toggle
function toggle(obj){
	var parent = $(obj).closest("li");

	parent.toggleClass("active");
}