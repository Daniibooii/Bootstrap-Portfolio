$("#about-image2").hide();
$("#email-address-image").hide();

/*var clickDisabled = false;

function clickDisabler(){
   clickDisabled = true;
   setTimeout(clickEnabler, 3000)
   };

 function clickEnabler(){
   clickDisabled = false;
   };
*/
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
//  clickDisabler();
});

$(".icon2").click(function(){
  $(".icon2").hide();
  revealEmail();
});
});
