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
      $("body").css("background-color","blue");
      $(".ok").css("display","none");
      $(".blue-screen").css("display","block");
    })
