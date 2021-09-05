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
    
    var current_shopping_items = 0;
    $('.info-row .magatama-info .info-box table tr:not(:first-child)').on('click', function() {
        if ( current_shopping_items < 8 ) {
            var name = $(this).find('td:first-child').text();
            var maga_name = $(this).closest('.magatama-info').attr('data-maga_name');
            var method = $(this).find('td:last-child').text();
            
            $('#shopping_list .prototype').clone().removeClass('prototype')
                .find('.name').text(name).end()
                .find('.maga-name').text(maga_name).end()
                .find('.method').text(method).end()
                .find('.remove-button').on('click', function() {
                    $(this).closest('tr').remove();
                    current_shopping_items--;
                }).end()
                .appendTo('#shopping_list table');
            
            current_shopping_items++;
        }
    });
});