function getUsers () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', '/zxcvbn', true)

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let qq = ''
    for (let i = 0; i < data.Info.length; ++i) {
      qq += '<div class="name"><h3>' + data.Info[i].user + '</h3><block><p><a href="#" class="goto">Перейти к профилю</a></p>'
      for (let j of data.Info[i].achievement) {
        qq += '<div>Описание: <desc>' + j + '</desc></div>'
      }
      qq += '</block></div>'
    }
    document.getElementById('users').innerHTML = qq

  $('.name h3').click(function () {
    if (!$(this).parent().find('block').is(':visible')) {
      $(this).parent().find('block').show(200)
    }
    else {
      $(this).parent().find('block').hide(200)
    }
    })
  }
  xhr.send()
};

getUsers()
