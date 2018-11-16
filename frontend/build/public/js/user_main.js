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

function getUser() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/home', true);

    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        document.getElementsById("username").innerHTML = data.LastName + " " + data.FirstName + " " + data.Patronymic;
        document.getElementsByTagName("faculty").innerHTML = data.Faculty;
        document.getElementsByTagName("course").innerHTML = data.Course;
        document.getElementsByTagName("ave_ball").innerHTML = data.AverageMark;
    };
    xhr.send();
};

function getAch() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/home', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        if(data.curr) {                             //Если достижение - текущее, записываем его в текущие
            document.getElementsByTagName("curr_criteria").innerHTML = data.crit;
            document.getElementsByTagName("curr_desc").innerHTML = data.comment;
            document.getElementsByTagName("curr_status").innerHTML = data.status;
        }
        else {
            document.getElementsByTagName("arc_criteria").innerHTML = data.crit;
            document.getElementsByTagName("arc_desc").innerHTML = data.comment;
        }
    };
    xhr.send();
};