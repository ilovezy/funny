var skin = localStorage.getItem('skin') || ''
if (skin){
  changeSkin(skin)
}

var $iosDialog1 = $('#iosDialog1')
$('#j_changeSkin').on('click', function () {
  $iosDialog1.fadeIn(200)
})

$('#cancel').on('click', function () {
  $iosDialog1.fadeOut(200)
})

$('input[name=skinType]').on('change', function () {
  var skin = $(this).val()
  console.log('e')
  changeSkin(skin)
})

$('#confirm').on('click', function () {
  var skin = $('input[name=skinType]:checked').val()
  localStorage.setItem('skin', skin)
  changeSkin(skin)
  $iosDialog1.fadeOut(200)
})

function changeSkin(skin) {
  var cssStyle = document.getElementById('skinColour');
  cssStyle.href = "./css/basic-" + skin + ".css";
}