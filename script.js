const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
})

var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
var popupContainer = document.querySelector(".overlay");
var popupStyles = window.getComputedStyle(popupContainer);

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if(popupStyles['visibility'] === 'visible') return;
  
  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos ){
      headerDiv.classList.remove("fixedToTop");
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{  
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}

