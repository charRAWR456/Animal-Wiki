$(document).ready(function(){
    $(".img-red-panda").click(function() {
        $(".red-panda-info").toggle();
        $(".sloth-info").hide();
        $(".turtle-info").hide();
    });
    $(".img-sloth").click(function() {
        $(".red-panda-info").hide();
        $(".sloth-info").toggle();
        $(".turtle-info").hide();
    });
    $(".img-turtle").click(function() {
        $(".red-panda-info").hide();
        $(".sloth-info").hide();
        $(".turtle-info").toggle();
    });

});