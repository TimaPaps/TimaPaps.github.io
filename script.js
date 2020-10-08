$('.user-foto').click(function() {
    $('.portfolio').css('background-color', 'rgb(255, 166, 0)');
    $('.portfolio-left').css('background-color', 'rgb(216, 41, 41)');
    $('.portfolio-right').css('background-color', 'rgb(255, 166, 0)');
    $('h1').css('color', 'rgb(0, 47, 255)');    
    $('.portfolio-left p').fadeIn(3000);
    $('.user-foto').attr("src", 'images/bender_and_me.jpg');
});

$('.botton').click(function() {
    $('.about-me').slideToggle(2500);
    $('.about-me h3').css('color', 'rgb(0, 47, 255)');
    $('.about-me span').css('color', 'rgb(30, 71, 252)');
});