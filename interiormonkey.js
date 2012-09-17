var aImages = new Array();
var aDescription = new Array();
var aClients = new Array();
var iPrev = -1;
var iNext = -1;
var slideshow_path = 'images/slideshow/';

aImages.push("Change2.jpg");
aImages.push("DBC1.jpg");
aImages.push("DBC2.jpg");
aImages.push("DBC3.jpg");
aImages.push("DBC4.jpg");
aImages.push("DBC5.jpg");
aImages.push("DBC6.jpg");
aImages.push("DBC7.jpg");
aImages.push("DBC8.jpg");
aImages.push("DBC9.jpg");
aImages.push("LocBox1.jpg");
aImages.push("LocBox2.jpg");
aImages.push("Pantheon1.jpg");
aImages.push("Pantheon2.jpg");
aImages.push("Pantheon3.jpg");


aClients.push("Change.org");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push("Dev Bootcamp");
aClients.push( "Dev Bootcamp");
aClients.push( "LocBox");
aClients.push( "LocBox");
aClients.push("Pantheon");
aClients.push("Pantheon");
aClients.push("Pantheon");


$(document).ready(function() {

  if (location.hash !== "") {
    showPage(location.hash.substring(1, location.hash.length));
  }
  /* Define the function that triggers to fade in the background as soon as the image has loaded */
  $("img#bg").load(function() {
    /* Fade in during 3 seconds */
    $("img#bg").fadeTo(2000, 1);

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
  setTimeout(LoadImages,50);

  $('a').click(function(){
    var page = this.dataset.for;
    showPage(page);
  });

});

function LoadImage(iNr) {

  /* Assign the new image to the background */
  $("img#bg").attr("src", slideshow_path+aImages[iNr]);

  /* Assign the artist name to the description */
  $("#image_artist").html(aClients[iNr]);

};

function LoadImages() {
  if (iNext == aImages.length -1) {
    iNext = 0;
    iPrev = 0;
  } else {
    iPrev = iNext;
    iNext = iPrev+1;
  }
  LoadImage(iNext);
};

function showPage(page) {
  $('.page').hide();
  $('.'+page).show();
}
