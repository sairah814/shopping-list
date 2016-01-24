/*jslint browser: true*/
/*global $, jQuery, alert*/

// On pressing enter you add the item to a list underneath
$(document).ready(function () {
    //Add an item to the list
    function getItem() {
        $(document).keydown(function (key) {
            if (key.keyCode == 13) {
                itemAdder();
                $('#add-item').val('');
            }
        });
        $('#submit').click(function () {
            itemAdder();
            $('#add-item').val('');
        });
    }
    getItem();

    var styleunchecked = '<span class="unchecked"><i class="fa fa-circle-o"></i></span>';
    var styleremove = '<span class="remove"><i class="fa fa-remove"></i></span>';
    var stylechecked = '<span class="checked"><i class="fa fa-check-circle-o"></i></span>';

    function itemAdder() {
        var newitem = $('#add-item').val();
        if (newitem.length !== 0) {
            $('#active-list').prepend("<li>" + styleunchecked + newitem + styleremove + "</li>");
        } else {
            alert("Please enter an item to add");
        }
    }
    // If you check an item, it is moved to 'Done'
    $(document).on('click', '.unchecked', function () {
        var moveitem = $(this).closest('li');
        $(moveitem).slideToggle("slow", function () {
            $(moveitem).find('.unchecked').replaceWith(stylechecked);
            $('#done-list').prepend(moveitem);
            $(moveitem).slideToggle();
        });
    });

    //Only show done list when there is something in it

    /*function appearDone() {
        var donelistitems = $('#done-list').children();
        var donecount = donelistitems.length;
        if (donecount == 0) {
            $('#done-head').hide();
        }
        if (donecount > 0) {
            $('#done-head').show();
        }
    }
    appearDone();*/

    //You can move a done item back to the active list
    $(document).on('click', '.checked', function () {
        var returnitem = $(this).closest('li');
        $(returnitem).slideToggle(function () {
            $(returnitem).find('.checked').replaceWith(styleunchecked);
            $('#active-list').prepend(returnitem);
            $(returnitem).slideToggle("slow");
        });
    });
    // If you remove the item, it is removed from the list
    $(document).on('click', '.remove', function () {
        $(this).closest('li').remove();
    });

    // If you click clear all then all items are removed from the 'Done' list
    $(document).on('click', '#clearall', function () {
        $('#done-list').find('li').remove();
    });
});
