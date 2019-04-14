
$(document).ready(function () {
    
    function starter() {
        $('.cont').animate({"opacity": "1"}, 900);
        $('.name').fadeIn(1000);
        $('.rRect').animate({
            "width": "25%",
            "box-shadow": "0 0 20px gray"
        }, 1000, 'easeInOutCirc');
        $('.name').animate({
            "color": "white"
        }, 1000);
    };

    $(".action").click(function (e) {
        e.preventDefault();
        starter();       
    });

    $(".rev").click(function (e) {
        e.preventDefault();
        $('.name').fadeIn(1000);
        $('.name').animate({
            "color": "gray"
        }, 1000);
        $('.rRect').animate({
            "width": "0%",
            "box-shadow": "0"
        }, 1000, 'easeInOutCirc');   
    });

    starter();
});