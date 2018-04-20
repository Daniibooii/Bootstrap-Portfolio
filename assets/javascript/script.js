$("#about-image2").hide();
$("#email-address-image").hide();
$(".img-project-description").hide();

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

function revealDispensaryApp (){
$("#dispensary-app-description").show();
};

function revealCryptoGolf (){
$("#crypto-golf-description").show();
};

function revealHappyHour (){
$("#happy-hour-description").show();
};

function revealNYTScraper (){
$("#NYT-scraper-description").show();
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

$("#dispensary-app-image").mouseover(function(){
  revealDispensaryApp();
});

$("#cryto-golf-image").mouseover(function(){
  revealCryptoGolf();
});

$("#happy-hour-image").mouseover(function(){
   revealHappyHour();
});

$("#NYT-scraper-image").mouseover(function(){
  revealNYTScraper();
});
});
