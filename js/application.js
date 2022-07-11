function getSize() {
  var reg = new RegExp("(^|&)size=([^&]*)(&|$)", "i");
  var r = location.search.substr(1).match(reg);
  if (r != null) {
    return parseInt(unescape(decodeURI(r[2])));
  }
  return 4;
}

function getCount() {
  var reg = new RegExp("(^|&)count=([^&]*)(&|$)", "i");
  var e = location.search.substr(1).match(reg);
  if (e != null) {
    return parseInt(unescape(decodeURI(e[2])));
  }
  return 2;
}

var game;
window.requestAnimationFrame(function () {
  var size = getSize();
  var container = document.getElementById('grid-container');
  var html = '';
  var angka = getCount();
  for (var i = 0; i < size; ++i) {
    html += '<div class="grid-row">';
    for (var j = 0; j < size; ++j) {
      html += '<div class="grid-cell"></div>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
  game = new GameManager(size, KeyboardInputManager, HTMLActuator, LocalScoreManager, angka);
});

function changeStarterTiles(count) {
  // return parseInt(count);
  window.location.href = 'index.html?count=' + count + '&mode=' + getCount();
}

function changeSize(size) {
  window.location.href = 'index.html?size=' + size + '&mode=' + getSize();
}

function changeMode(mode) {
  window.location.href = 'index.html?size=' + getSize() + '&mode=' + mode;
}



