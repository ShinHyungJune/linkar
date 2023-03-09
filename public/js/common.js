$(document).ready(function(){
    $(".m-script-pop").click(function(){
        $($(this).attr("data-target")).toggle();
    });

    $(".m-script-toggle").click(function(){
        $($(this).attr("data-target")).toggleClass("active");
    });
});
