$(document).ready(function(){
    $(".sidebar .menu").click(function(){
        let isActive = $(this).hasClass("active");

        $(".sidebar .menu").removeClass("active");

        if(isActive)
            return $(this).removeClass("active");

        return $(this).addClass("active");
    });

    $(".m-script-pop").click(function(){
        $($(this).attr("data-target")).toggle();
    });
});
