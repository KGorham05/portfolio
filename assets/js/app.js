
$(document).ready(function () {
    
    let colored = true;

    function starter() {
        colored = true;
        console.log("colored: " + colored)
        $('.cont').animate({"opacity": "1"}, 900);
        $('.name').fadeIn(1000);
        $('.name').animate({"color": "white"}, 1000);
        $('.recent-work-btn').animate({
            "color":"white",
        }, 1000)
        $('.rRect').animate({
            "width": "25%",
            "box-shadow": "0 0 20px gray"
        }, 1000, 'easeInOutCirc');
        
    };

    function reverseAnimation() {
        colored = false;
        console.log("colored: " + colored)
        $('.name').fadeIn(1000);
        $('.name').animate({
            "color": "gray"
        }, 1000);
        $('.recent-work-btn').animate({
            "color":"gray",
        }, 1000)
        $('.rRect').animate({
            "width": "0%",
            "box-shadow": "0"
        }, 1000, 'easeInOutCirc');  
    }

    $(".action").click(function (e) {
        e.preventDefault();
        starter();       
    });

    $(".rev").click(function (e) {
        e.preventDefault();
        reverseAnimation();  
    });

    $(".recent-work-btn").click(function (e) {
        e.preventDefault();
        if (colored === true) {
            reverseAnimation()
        } else {
            starter();
        };
        setTimeout(function(){ window.location.href = "./portfolio.html"; }, 1000);
        
    })
    starter();
});