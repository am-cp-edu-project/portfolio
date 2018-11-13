$('.category h3').click(function(){
    if(!$(this).parent().find( "block_1" ).is(':visible')) {
        $(this).parent().find("block_1").show(200);
    }
    else {
        $(this).parent().find("block_1").hide(200);
    }
});



function getUser() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/qwerty', true);

    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);

        document.getElementById("username").innerHTML = data.LastName + " " + data.FirstName + " " + data.Patronymic;
        document.getElementsByTagName("faculty")[0].innerHTML = data.Faculty;
        document.getElementsByTagName("course")[0].innerHTML = data.Course;
        document.getElementsByTagName("ave_ball")[0].innerHTML = data.AverageMark;

        qq = ''
        k = data.Achs.length;
        for(var i=0;i<k; ++i){
            qq += "<div class=\"name\"> <h4>" +  data.Achs[i].date + "</h4> <block_2> <p><a href=\"#\" class=\"goto\">Подтверждающий документ</a></p> <p>Критерий: <criteria class=\"info\">" + data.Achs[i].crit + "</criteria></p> <p>Описание: <desc class=\"info\">" + data.Achs[i].popisal + "</desc></p> <p>Статус: <status class=\"info\">"+data.Achs[i].status+"</status></p> </block_2> </div>"
        }
        document.getElementById("row_docs").innerHTML = qq;

        $('.name h4').click(function() {
            if (!$(this).parent().find("block_2").is(':visible')) {
                $(this).parent().find("block_2").show(200);
            }
            else {
                $(this).parent().find("block_2").hide(200);
            }
        });
    };
    xhr.send();
};

getUser();