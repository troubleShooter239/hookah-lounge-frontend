$(document).ready(function() {
    $('.element').each(function() {
        $(this).mouseover(function() {
            $(this).addClass('active');
            $('.element').not(this).addClass('inactive');
        });
        $(this).mouseleave(function() {
            $(this).removeClass('active');
            $('.element').not(this).removeClass('inactive');
        });
    });
});