// 换肤
var skin = localStorage.getItem('skin') || ''
if (skin){
  changeSkin(skin)
}

function changeSkin(skin) {
  var cssStyle = document.getElementById('skinColour');
  cssStyle.href = "./css/basic-" + skin + ".css";
}
