$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
  });

  $('.carousel.carousel-slider').carousel({
  });
  $(document).ready(function(){
    $('.modal').modal();
  });

$("#btn").click(function(){
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        }
      $("body").css("background-color","rgb(0,0,128)");
      $(".ok").css("display","none");
      $(".blue-screen").css("display","block");
      var audio = new Audio('./audio/bluescreensound.mp3');
      audio.play();
    })

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(document).ready(function(){
  $('.parallax').parallax();
});
      
