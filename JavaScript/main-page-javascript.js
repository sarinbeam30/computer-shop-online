var slideIndex = 1;
var myIndex = 0;
carousel_promotion();
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides-promotion");
  var dots = document.getElementsByClassName("dot");

  // if (n !== 0) {
  //   slides[slideIndex - 1].style.display = "block";
  // }

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function carousel_promotion() {
  var i;
  var x = document.getElementsByClassName("slides-promotion");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  if(myIndex !== 0 ){
      
  }


  x[myIndex - 1].style.display = "block";  
  setTimeout(carousel_promotion, 3000);
}


var slideIndex_slideshow_container = [1, 1];
      var slideId = ["mySlides_slideshow_beam"];
      var myIndex = 0;
      carousel();
      showSlides_slideshow_beam(1, 0);
      showSlides_slideshow_beam(1, 1);
      function plusSlides_slideshow_container(n, no) {
        showSlides_slideshow_beam(
          (slideIndex_slideshow_container[no] += n),
          no
        );
      }
      function showSlides_slideshow_beam(n, no) {
        var i;
        var x = document.getElementsByClassName(slideId[no]);
        if (n > x.length) {
          slideIndex_slideshow_container[no] = 1;
        }
        if (n < 1) {
          slideIndex_slideshow_container[no] = x.length;
        }
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }

        if (no !== 1) {
          x[slideIndex_slideshow_container[no] - 1].style.display = "block";
        }
      }
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides_slideshow_beam");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
          myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 3000);
      }