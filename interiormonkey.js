var aImages = new Array();
var aURL = new Array();
var aArtists = new Array();
var iPrev = -1;
var iNext = -1;

aImages[0] = "images/slideshow/Change1.jpg";
aImages[1] = "images/slideshow/Change2.jpg";
aImages[2] = "images/slideshow/Change3.jpg";
aImages[3] = "images/slideshow/Change4.jpg";
aImages[4] = "images/slideshow/Change5.jpg";
aImages[5] = "images/slideshow/DBC1.jpg";
aImages[6] = "images/slideshow/DBC2.jpg";
aImages[7] = "images/slideshow/DBC3.jpg";
aImages[8] = "images/slideshow/DBC4.jpg";
aImages[9] = "images/slideshow/DBC5.jpg";
aImages[10] = "images/slideshow/DBC6.jpg";
aImages[11] = "images/slideshow/LocBox1.jpg";
aImages[12] = "images/slideshow/Pantheon1.jpg";
aImages[13] = "images/slideshow/Pantheon2.jpg";

aURL[0] = "http://kunst.canvasinabox.com/?_globalsearch=47-7";
aURL[1] = "http://kunst.canvasinabox.com/?_globalsearch=48-7";
aURL[2] = "http://kunst.canvasinabox.com/?_globalsearch=46-7";
aURL[3] = "http://kunst.canvasinabox.com/?_globalsearch=133-18";
aURL[4] = "http://kunst.canvasinabox.com/?_globalsearch=174-27";
aURL[5] = "http://kunst.canvasinabox.com/?_globalsearch=173-27";
aURL[6] = "http://kunst.canvasinabox.com/?_globalsearch=25-5";
aURL[7] = "http://kunst.canvasinabox.com/?_globalsearch=47-7";
aURL[8] = "http://kunst.canvasinabox.com/?_globalsearch=48-7";
aURL[9] = "http://kunst.canvasinabox.com/?_globalsearch=46-7";
aURL[10] = "http://kunst.canvasinabox.com/?_globalsearch=133-18";
aURL[11] = "http://kunst.canvasinabox.com/?_globalsearch=174-27";
aURL[12] = "http://kunst.canvasinabox.com/?_globalsearch=173-27";
aURL[13] = "http://kunst.canvasinabox.com/?_globalsearch=25-5";

aArtists[0] = "Marcel Verkaart";
aArtists[1] = "Marcel Verkaart";
aArtists[2] = "Marcel Verkaart";
aArtists[3] = "Marco Schippers";
aArtists[4] = "Sylvia Hennequin";
aArtists[5] = "Sylvia Hennequin";
aArtists[6] = "Jonathan Vos";
aArtists[7] = "Marcel Verkaart";
aArtists[8] = "Marcel Verkaart";
aArtists[9] = "Marcel Verkaart";
aArtists[10] = "Marco Schippers";
aArtists[11] = "Sylvia Hennequin";
aArtists[12] = "Sylvia Hennequin";
aArtists[13] = "Jonathan Vos";

$(document).ready(function() {

  if (location.hash !== "") {
    showPage(location.hash.substring(1, location.hash.length));
  }
  /* Define the function that triggers to fade in the background as soon as the image has loaded */
  $("img#bg").load(function() {
    /* Fade in during 3 seconds */
    $("img#bg").fadeTo(2000,1);

    /* Animate the picture description during 1 second */
    setTimeout(function() { $("#image_description").animate({right: '+=150'}, 500) }, 500);

    /* Set the timeout to fade out the image and the description after 10 seconds*/
    setTimeout(function() {
      $("#image_description").animate({right: '-=150'}, 1000);
      $("img#bg").fadeOut(1000);

      /* Load the next image after 4 seconds */
      setTimeout(LoadImages,2000);
    }, 5000);
  });

  /* Start the slideshow one second after the page is ready */
  setTimeout(LoadImages,100);
  $('a').click(function(){
    var page = this.dataset.for;
    showPage(page);
  });

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
  if (iNext == aImages.length -1) {
    iNext = 0;
    iPrev = aImages.length - 1;
  } else {
    iNext = iPrev+1;
    iPrev = iNext;
  }
  LoadImage(iNext);
};

function showPage(page) {
  $('.page').hide();
  $('.'+page).show();
}
