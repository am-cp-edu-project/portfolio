function getUsers () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', '/zxcvbn', true)

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let qq = ''
    for (let i = 0; i < data.Info.length; ++i) {
      qq += '<div class="name"><h3>' + data.Info[i].user + '</h3><block><p><a href="/user/' + data.Info[i].Id + '" class="goto">Перейти к профилю</a></p>'
      for (let j = 0; j < data.Info[i].Achievements.length; ++j) {
        qq += '<br><p>Критерий: <criteria>' + data.Info[i].Achievements[j] + '</criteria></p>'
        qq += '<div>Описание: <desc>' + data.Info[i].Comments[j] + '</desc></div>'
        qq += ' <br><div class="input-container"><textarea class="form-control" rows="3" placeholder="Введите комментарий..."></textarea></div><br><button type="button" class="btn btn-success btn-sm">Принять</button><button type="button" class="btn btn-danger btn-sm">Отклонить</button>'
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
