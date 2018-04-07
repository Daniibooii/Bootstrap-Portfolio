$("#about-image2").hide();
$("#email-address-image").hide();

$(document).ready(function(){

function revealDoggo (){
$("#about-image2").show();
};

function revealEmail (){
$("#email-address-image").show();
};

$("#about-image1").click(function(){
  $("#about-image1").hide();
  revealDoggo();
});

$(".icon2").click(function(){
  $(".icon2").hide();
  revealEmail();
});
});
