$(document).ready(function(){
    $(".m-script-pop").click(function(){
        $($(this).attr("data-target")).toggle();
    });

    $(".m-script-toggle").click(function(){
        $($(this).attr("data-target")).toggleClass("active");
    });

    $(".m-faq-top").click(function(){
        let active = $(this).parents(".m-faq").hasClass("active");

        $(".m-faq").removeClass("active");

        active ? $(this).parents(".m-faq").removeClass("active") : $(this).parents(".m-faq").addClass("active");
    })
});
