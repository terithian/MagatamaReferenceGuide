$(document).ready(function() {
    var current_open = 0;
    $('.magatama-entry').on('click', function() {
        var entrynum = $(this).attr('data-entry');
        if ( entrynum == current_open ) {
            current_open = 0;
            $('.magatama-info.entry' + entrynum).removeClass('active').stop().slideUp(300);
        }
        else {
            current_open = entrynum;
            
            if ( $('.magatama-info.active').length ) {
                $('.magatama-info.active').removeClass('active').stop().slideUp(300, function() {
                    $('.magatama-info.entry' + entrynum).addClass('active').stop().slideDown(500);
                });
            }
            else {
                $('.magatama-info.entry' + entrynum).addClass('active').stop().slideDown(500);
            }
        }
    });
});