function scrollBanner() {
 window.addEventListener('scroll', function() {
  if (scrollY > innerHeight) {
    let navbar = document.getElementsByClassName('navbar-wagon');
    navbar[0].classList.remove("navbar-wagon-transparent");
    navbar[0].classList.add("navbar-wagon-filled")
  } else {
    let navbar = document.getElementsByClassName('navbar-wagon');
    navbar[0].classList.remove("navbar-wagon-filled");
    navbar[0].classList.add("navbar-wagon-transparent")
  }
  });
}



export { scrollBanner };
