
$(document).ready(function () {
    $(".action").click(function () {
        console.log("action.click func")
        $('.cont').animate({ "width": "0%" }, 600, 'easeOutCirc');
        $('.cont').animate({ "opacity": "1" }, 900);

        $('.name').fadeIn(1000);
        $('.rRect').animate({
            "width": "25%",
            "box-shadow": "0 0 20px gray"
        }, 1000, 'easeInOutCirc');
        $('.name').animate({
            "color": "white"
        }, 1000);


    });


    function starter() {
        console.log("starter func")
        $('.cont').animate({
            "opacity": "1"

        }, 900);

        $('.name').fadeIn(1000);
        $('.rRect').animate({
            "width": "25%",
            "box-shadow": "0 0 20px gray"
        }, 1000, 'easeInOutCirc');
        $('.name').animate({
            "color": "white"
        }, 1000);
    };

    $(".rev").click(function () {
        console.log("rev.click func")
        $('.name').fadeIn(1000);
        $('.rRect').animate({
            "width": "0%",
            "box-shadow": "0"
        }, 1000, 'easeInOutCirc');
        $('.name').animate({
            "color": "gray"
        }, 1000);

    });

    starter();
});