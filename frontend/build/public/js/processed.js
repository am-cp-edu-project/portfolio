$('.name h3').click(function() {
    if (!$(this).parent().find("block").is(':visible')) {
        $(this).parent().find("block").show(200);
    }
    else {
        $(this).parent().find("block").hide(200);
    }
});