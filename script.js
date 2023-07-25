
//Scroll class Change/Add in Navbar
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


//Gallery and Thumnail Functions for SplideJs

var gallery = new Splide("#gallery", {
  rewind: true,
  pagination: false
});

var thumb = new Splide("#thumb", {
  gap: 10,
  rewind: true,
  pagination: false,
  arrows: false,
  isNavigation: true
});

gallery.sync(thumb);
gallery.mount();
thumb.mount();
