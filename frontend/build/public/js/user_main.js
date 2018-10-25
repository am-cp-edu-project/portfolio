$('.category h3').click(function(){
    if(!$(this).parent().find( "block_1" ).is(':visible')) {
        $(this).parent().find("block_1").show(200);
    }
    else {
        $(this).parent().find("block_1").hide(200);
    }
});

$('.name h4').click(function() {
    if (!$(this).parent().find("block_2").is(':visible')) {
        $(this).parent().find("block_2").show(200);
    }
    else {
        $(this).parent().find("block_2").hide(200);
    }
});