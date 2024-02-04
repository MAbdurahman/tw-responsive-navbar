/* ============================================
          tw-responsive-navbar preloader
===============================================*/
$(window).on('load', function () {
   // makes sure that whole site is loaded
   $('#preloader-gif, #preloader').fadeOut(5800, function () {
   });
});

/*=============================================
          tw-responsive-navbar scripts
================================================*/
$(function () {
   const navbar_navigation = document.querySelector('.navbar__nav');
   const hamburger = document.querySelector('.hamburger');

   const sections = document.querySelectorAll('section');
   const listLinks = document.querySelectorAll('.navbar__list_link');

   hamburger.addEventListener('click', () => {
      navbar_navigation.classList.toggle('navbar__nav--open');
      hamburger.classList.toggle('hamburger--open');
   });

   navbar_navigation.addEventListener('click', () => {
      navbar_navigation.classList.remove('navbar__nav--open');
      hamburger.classList.remove('hamburger--open');
   });

   window.addEventListener('scroll', () => {
      sections.forEach(section => {
         let top = window.scrollY;
         let offset = section.offsetTop - 200;
         let height = section.offsetHeight;
         let id = section.getAttribute('id');

         if ((top >= offset) && (top < (offset + height))) {
            listLinks.forEach(listLink => {
               listLink.classList.remove('active');
               document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
         }
      });
   });
});