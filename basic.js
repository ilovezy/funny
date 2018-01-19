// 换肤
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

//发布
$('#j-release').on('click', function () {
  $(this).html('&#xe60a;')
  $('#j-release-panel').fadeToggle()
})

// icon点击效果，有需要的话后台自定义一下吧
$('.panel-wrap .action-wrap').on('click', '.iconfont',function () {
  $(this).toggleClass('active')
})

// 收藏按钮
$('.icon-love').on('click', function () {
  if ($(this).hasClass('active')){
    console.log('1')
    $(this).removeClass('active')
    $(this).find('.icon').html('&#xe63b;') // 爱心变成实心 xe65e
  } else {
    console.log('2')

    $(this).addClass('active')
    $(this).find('.icon').html('&#xe65e;') // 爱心变空心 xe63b
  }
})

// 点赞按钮 需要后台自己做数据交互了
$('.comment-list .content-top .right').on('click', function () {
  var $number = $(this).find('.number')
  var $numberHTML = Number($number.html())
  console.log($numberHTML)

  if ($(this).hasClass('active')){
    $(this).removeClass('active')
    $number.html($numberHTML-1)
  } else {
    $(this).addClass('active')
    $number.html($numberHTML+1)
  }
})

// 分享按钮，也要后台自己做了
$('.icon-share').on('click', function () {
  $('#j-share-panel').fadeToggle()
})

$('#j-share-mask').on('click', function () {
  console.log('da')
  $('#j-share-panel').fadeOut()
})

// index页面 tab 切换，需要后台自己做ajax数据获取和渲染
$('#j-tab-select').on('click', 'li', function () {
  if (!$(this).hasClass('active')){
    $(this).siblings('li').removeClass('active')
    $(this).addClass('active')

    $('#j-tab-container .tab-wrap').removeClass('active')
    $('#' + $(this).attr('data-target')).addClass('active')
  }
})


// 返回顶部动画
function goTop(acceleration, time) {
  acceleration = acceleration || 0.3;
  time = time || 16;
  var x1 = 0;
  var y1 = 0;
  var x2 = 0;
  var y2 = 0;
  if (document.documentElement) {
    x1 = document.documentElement.scrollLeft || 0;
    y1 = document.documentElement.scrollTop || 0;
  }
  if (document.body) {
    x2 = document.body.scrollLeft || 0;
    y2 = document.body.scrollTop || 0;
  }
  var x3 = window.scrollX || 0;
  var y3 = window.scrollY || 0;
// 滚动条到页面顶部的水平距离
  var x = Math.max(x1, Math.max(x2, x3));
// 滚动条到页面顶部的垂直距离
  var y = Math.max(y1, Math.max(y2, y3));
// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
  var speed = 1 + acceleration;
  window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
// 如果距离不为零, 继续调用迭代本函数
  if (x > 0 || y > 0) {
    var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
    window.setTimeout(invokeFunction, time);
  }
}

$('.back-to-top').on('click', function () {
  goTop();
  // $("html").scrollTop(0); // 如果需要滚动到顶部的动画的话就用 goTop
})