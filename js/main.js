$(document).ready(function() {
    $('.sub_sub_menu').hover(
        function() {
            $(this).parent().addClass('active_sub');
        }, function() {
            $(this).parent().removeClass('active_sub');
        }
    );
    $('.sub_menu').hover(
        function() {
            $(this).parent().addClass('active_menu');
        }, function () {
            $(this).parent().removeClass('active_menu');
        }
    );
    $('.why_us_item').hover(
        function () {
            $(this).find($('.see_more')).removeClass('see_more_hide');
            $(this).find($('.see_more')).addClass('see_more_show');
        }, function () {
            $(this).find($('.see_more')).removeClass('see_more_show');
            $(this).find($('.see_more')).addClass('see_more_hide');
        }
    );
    var check = true;
    $('.about_us').waypoint(function () {
        if (check) {
            var num = [79, 90, 69, 92];
            for (let i = 0; i < num.length; i++) {
        $('progress:eq('+i+')').animate({value: num[i]},{ duration: 2000});
    }
        }
        
    }, {offset: '50%'});

    $('.nav-icon').click(function(){
        $(this).toggleClass('open');
        // $('.mobile_menu').slideToggle();
        $('.menu').toggleClass('mobile_menu');
    });
    $('#menu li').on('click', 'a', function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
      });
    
})
function initMap() {
    var uluru = {lat: 49.831844, lng: 24.027750};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
}