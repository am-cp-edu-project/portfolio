$('.category h3').click(function () {
  if (!$(this).parent().find('block_1').is(':visible')) {
    $(this).parent().find('block_1').show(200)
  }
  else {
    $(this).parent().find('block_1').hide(200)
  }
})

function getAcievement () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', '/qwerty', true)

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)

    document.getElementById('username').innerHTML = data.LastName + ' ' + data.FirstName + ' ' + data.Patronymic
    document.getElementsByTagName('faculty')[0].innerHTML = data.Faculty
    document.getElementsByTagName('course')[0].innerHTML = data.Course
    document.getElementsByTagName('ave_ball')[0].innerHTML = data.AverageMark

    let qq = ''
    for (let i = 0; i < data.Achs.length; ++i) {
      qq += '<div class="name"> <h4>' + data.Achs[i].Date + '</h4> <block_2>'
      for (let j of data.Achs[i].Files) {
        qq += '<p><a target="_blank" rel="noopener noreferrer" href="' + '/uploads/' + j + '" class="goto">Подтверждающий документ</a></p>'
      }
      qq += '<p>Критерий: <criteria class="info">' + data.Achs[i].Crit + '</criteria></p> <p>Описание: <desc class="info">' + data.Achs[i].Popisal + '</desc></p> <p>Статус: <status class="info">' + data.Achs[i].Status + '</status></p> </block_2> </div>'
    }
    document.getElementById('row_docs').innerHTML = qq

    $('.name h4').click(function () {
      if (!$(this).parent().find('block_2').is(':visible')) {
        $(this).parent().find('block_2').show(200)
      }
      else {
        $(this).parent().find('block_2').hide(200)
      }
    })
  }
  xhr.send()
};

getAcievement()
