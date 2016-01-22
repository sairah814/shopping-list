/*jslint browser: true*/
/*global $, jQuery, alert*/

// On pressing enter you add the item to a list underneath
$(document).ready(function () {
    function getItem() {
        $(document).keydown(function (key) {
            if (key.keyCode == 13) {
                itemAdder();
                $('#add-item').val('');
            }
        });
    }
    getItem();

    var styleunchecked = '<span class="unchecked"><i class="fa fa-circle-o"></i></span>';
    var styleremove = '<span class="remove"><i class="fa fa-remove"></i></span>';
    var stylechecked = '';

    function itemAdder() {
        var newitem = $('#add-item').val();
        $('#active-list').prepend("<li>" + styleunchecked + newitem + styleremove + "</li>");
    }
    // If you check an item, it is moved to 'Done'
    $(document).on('click', '.unchecked', function () {
        var $moveitem = $(this);
        $(this).closest('li').remove();
        $('#done-list').prepend("<li>" + stylechecked + $moveitem + "</li")
    });

    // If you remove the item, it is removed from the list
    $(document).on('click', '.remove', function () {
        $(this).closest('li').remove();
    });

    // If you click clear all then all items are removed from the 'Done' list
});
