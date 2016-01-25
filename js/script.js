/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {});

//Add an item to the list
function getItem() { //pressing enter or submit button calls the itemAdder function
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

function itemAdder() { //adds the item to the list
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
    /*appearDone();*/
});

//Only show done list when there is something in it

/*function appearDone() {
    var donelistitems = $('#done-list').children();
    console.log(donelistitems);
    if ($(donelistitems).length > 1) {
        $('#done-head').hide();
    } else {
        $('#done-head').show();
    }
}*/

//You can move a done item back to the active list
$(document).on('click', '.checked', function () {
    var returnitem = $(this).closest('li');
    $(returnitem).slideToggle(function () {
        $(returnitem).find('.checked').replaceWith(styleunchecked);
        $('#active-list').append(returnitem);
        $(returnitem).slideToggle("slow");
        /*$('#done-list').find(returnitem).remove();*/
    });
    /*donelistitems = donelistitems - 1;
    appearDone();*/
});
// If you remove the item, it is removed from the list
$(document).on('click', '.remove', function () {
    $(this).closest('li').remove();
});

// If you click clear all then all items are removed from the 'Done' list
$(document).on('click', '#clearall', function () {
    $('#done-list').find('li').remove();
});
