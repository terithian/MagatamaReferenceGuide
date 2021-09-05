$(document).ready(function() {
    var current_open = 0;
    $('.magatama-entry').on('click', function() {
        var this_entry = $(this);
        var entrynum = this_entry.attr('data-entry');
        if ( entrynum == current_open ) {
            current_open = 0;
            this_entry.removeClass('active');
            $('.magatama-info.entry' + entrynum).removeClass('active').stop().slideUp(300);
        }
        else {
            current_open = entrynum;
            
            if ( $('.magatama-info.active').length ) {
                $('.magatama-entry').removeClass('active');
                $('.magatama-info.active').removeClass('active').stop().slideUp(300, function() {
                    this_entry.addClass('active');
                    $('.magatama-info.entry' + entrynum).addClass('active').stop().slideDown(500);
                });
            }
            else {
                this_entry.addClass('active');
                $('.magatama-info.entry' + entrynum).addClass('active').stop().slideDown(500);
            }
        }
    });
});