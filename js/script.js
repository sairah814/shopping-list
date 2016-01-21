/*jslint browser: true*/
/*global $, jQuery, alert*/

//On pressing enter you add the item to a list underneath
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

    function itemAdder() {
        /*$(document).keydown(function (key) {
            if (key.keyCode == 13) {*/
        var newitem = $('#add-item').val();
        $('#active-list').prepend("<li>" + newitem + "</li>");
        /*}
        });*/
    }
});

//2. If you remove the item, it is removed from the list
