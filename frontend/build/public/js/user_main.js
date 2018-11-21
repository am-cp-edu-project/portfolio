function check (str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/script/g, 'sсript').replace(/>/g, '&gt;')
  return str
}

function get_desc (obj) {
  let res = ''
  console.log(obj)
  for (let key in obj) {
    if (key === 'comment') {
      continue
    }
    if (key === '__v') {
      continue
    }
    if (key === 'type') {
      continue
    }
    if (key === 'date') {
      continue
    }
    if (key === 'files') {
      continue
    }
    if (key === 'status') {
      continue
    }
    if (key === '_id') {
      continue
    }
    res += '<p>' + obj[key] + '</p>'
  }
  return res
}

function getAcievement () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', '/qwerty', true)

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    console.log(2)
    document.getElementById('username').innerHTML = data.LastName + ' ' + data.FirstName + ' ' + data.Patronymic
    document.getElementsByTagName('faculty')[0].innerHTML = data.Faculty
    document.getElementsByTagName('course')[0].innerHTML = data.Course
    document.getElementsByTagName('ave_ball')[0].innerHTML = data.AverageMark

    let qq = ''
    let k = data.Achs.length
    for (let i = 0; i < k; ++i) {
      if (data.Achs[i].status !== 'Ожидает проверки') {
        continue
      }
      qq += '<div class="name"> <h4>' + data.Achs[i].date + '</h4> <block_2>'
      for (let j of data.Achs[i].files) {
        qq += '<p><a target="_blank" rel="noopener noreferrer" href="' + '/uploads/' + j + '" class="goto">Подтверждающий документ</a></p>'
      }
      qq += '<p>Критерий: <criteria class="info">' + data.Achs[i].type + '</criteria></p> <p>Описание: <desc class="info">' + get_desc(data.Achs[i]) + check(data.Achs[i].comment) + '</desc></p> <p>Статус: <status class="info">' + data.Achs[i].status + '</status></p> </block_2> </div>'
    }
    document.getElementById('row_docs').innerHTML = qq
    qq = ''
    for (let i = 0; i < k; ++i) {
      if (data.Achs[i].Status === 'Ожидает проверки') {
        continue
      }
      qq += '<div class="name"> <h4>' + data.Achs[i].date + '</h4> <block_2>'
      for (let j of data.Achs[i].files) {
        qq += '<p><a target="_blank" rel="noopener noreferrer" href="' + '/uploads/' + j + '" class="goto">Подтверждающий документ</a></p>'
      }
      qq += '<p>Критерий: <criteria class="info">' + data.Achs[i].type + '</criteria></p> <p>Описание: <desc class="info">' + get_desc(data.Achs[i]) + check(data.Achs[i].comment) + '</desc></p> <p>Статус: <status class="info">' + data.Achs[i].status + '</status></p> </block_2> </div>'
    }
    document.getElementById('archive_docs').innerHTML = qq
    $('.name h4').click(function () {
      if (!$(this).parent().find('block_2').is(':visible')) {
        $(this).parent().find('block_2').show(200)
      }
      else {
        $(this).parent().find('block_2').hide(200)
      }
    })
  }
  $('.category h3').click(function () {
    if (!$(this).parent().find('block_1').is(':visible')) {
      $(this).parent().find('block_1').show(200)
    }
    else {
      $(this).parent().find('block_1').hide(200)
    }
  })
  xhr.send()
};

getAcievement()
