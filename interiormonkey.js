var aImages = new Array();
var aURL = new Array();
var aArtists = new Array();
var iPrev = -1;
var iRnd = -1;

aImages[0] = "images/esquire-master.jpg";
aImages[1] = "images/dev1.jpg";
aImages[2] = "images/dev2.jpg";
aImages[3] = "images/dev3.jpg";
aImages[4] = "images/dev4.jpg";
aImages[5] = "images/franklin-stairs.jpg";
aImages[6] = "images/franklin-lobby.jpg";

aURL[0] = "http://kunst.canvasinabox.com/?_globalsearch=47-7";
aURL[1] = "http://kunst.canvasinabox.com/?_globalsearch=48-7";
aURL[2] = "http://kunst.canvasinabox.com/?_globalsearch=46-7";
aURL[3] = "http://kunst.canvasinabox.com/?_globalsearch=133-18";
aURL[4] = "http://kunst.canvasinabox.com/?_globalsearch=174-27";
aURL[5] = "http://kunst.canvasinabox.com/?_globalsearch=173-27";
aURL[6] = "http://kunst.canvasinabox.com/?_globalsearch=25-5";

aArtists[0] = "Marcel Verkaart";
aArtists[1] = "Marcel Verkaart";
aArtists[2] = "Marcel Verkaart";
aArtists[3] = "Marco Schippers";
aArtists[4] = "Sylvia Hennequin";
aArtists[5] = "Sylvia Hennequin";
aArtists[6] = "Jonathan Vos";

$(document).ready(function() {

  /* Define the function that triggers to fade in the background as soon as the image has loaded */
  $("img#bg").load(function() {
    /* Fade in during 3 seconds */
    $("img#bg").fadeTo(3000,1);

    /* Animate the picture description during 1 second */
    setTimeout(function() { $("#image_description").animate({right: '+=150'}, 1000) }, 1000);

    /* Set the timeout to fade out the image and the description after 10 seconds*/
    setTimeout(function() {
      $("#image_description").animate({right: '-=150'}, 1000);
      $("img#bg").fadeOut(3000);

      /* Load the next image after 4 seconds */
      setTimeout(LoadImages,4000);
    }, 10000);
  });

  /* Start the slideshow one second after the page is ready */
  setTimeout(LoadImages,1000);

});

function LoadImage(iNr) {

  /* Assign the new image to the background */
  $("img#bg").attr("src", aImages[iNr]);

  /* Assign the artist name to the description */
  $("#image_artist").html(aArtists[iNr]);

  /* Assign the image url to the description */
  $("a#image_url").attr("href", aURL[iNr]);
  $("a#image_url").html("for sale @canvasinabox.com");

};

function LoadImages() {
  /* Select a random image number and make sure this is not equal to the previous image */
  while(iPrev == iRnd) {
    iRnd = Math.floor(Math.random()*aImages.length);
  }
  /* Show the selected image */
  LoadImage(iRnd);

  iPrev = iRnd;

};
