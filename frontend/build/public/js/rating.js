function getUsers () {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', '/getRating', true)

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let qq = ''
    for (let user of data.Users) {
      qq += '<tr><td class="name"><a href="/user/' + user.Id + '" class="goto">' + user.Name + '</a></td><td class="ball">' + user.Ball + '</td></tr>'
    }
    document.getElementById('users').innerHTML = qq
  }
  xhr.send()
};

getUsers()
