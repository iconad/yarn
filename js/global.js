
//this is the button
const videoPupupOverlay = document.getElementById("videoPupupOverlay");
const videoPupup = document.getElementById("videoPupup");
const closeVideoPopup = document.getElementById("closeVideoPopup");
const accArrowUp = document.querySelector(".acc-arrow-up");
const accArrowDown = document.querySelector(".acc-arrow-down");
const watchthedemo = document.querySelectorAll(".watchthedemo");

import offset from 'document-offset';

import '@splidejs/splide/css';
import Splide, { FADE } from '@splidejs/splide';

const homesplide = document.querySelector('.homesplide');

if(homesplide){
    new Splide( '.homesplide', {
        type: 'fade',
        perPage: 1,
        arrows: false,
        gap: 0,
        classes: {
            pagination: 'splide__pagination homesplide',
    },
    }).mount();


    const HomeSplideList = document.getElementById('HomeSplideList');
    const HomeSplidePagination = document.querySelector('.splide__pagination.homesplide');
    const offsetResult = offset(HomeSplideList)
    HomeSplidePagination.style.left = offsetResult.left - 10 +'px';
}


var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
    //when one of the buttons are clicked run this function
    acc[i].onclick = function() {
    //variables
    var panel = this.nextElementSibling;
    var coursePanel = document.getElementsByClassName("accordion-panel");
    var courseAccordion = document.getElementsByClassName("accordion-button");
    var courseAccordionActive = document.getElementsByClassName("accordion-button active");

    /*if pannel is already open - minimize*/
    if (panel.style.maxHeight){
        //minifies current pannel if already open
        panel.style.maxHeight = null;
        //removes the 'active' class as toggle didnt work on browsers minus chrome
        this.classList.remove("active");
        if(this.querySelector('.acc-arrow-up')){
            this.querySelector('.acc-arrow-up').classList.add('hidden')
            this.querySelector('.acc-arrow-down').classList.remove('hidden')
        }

    } else { //pannel isnt open...
        //goes through the buttons and removes the 'active' css (+ and -)

        const allarrows = document.querySelectorAll('.acc-arrow-up');

        allarrows.forEach(arrow => {
            // console.log(arrow)
            arrow.classList.add('hidden')
            this.querySelector('.acc-arrow-up').classList.remove('hidden')
            this.querySelector('.acc-arrow-down').classList.add('hidden')
        });



        // if(this.querySelector('.acc-arrow-up')){
        //     this.querySelector('.acc-arrow-up').classList.remove('hidden')
        //     this.querySelector('.acc-arrow-down').classList.add('hidden')
        // }

        for (var ii = 0; ii < courseAccordionActive.length; ii++) {
            courseAccordionActive[ii].classList.remove("active");
        }
        //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
        for (var iii = 0; iii < coursePanel.length; iii++) {
            this.classList.remove("active");
            coursePanel[iii].style.maxHeight = null;
        }
        //opens the specified pannel
        panel.style.maxHeight = panel.scrollHeight + "px";
        //adds the 'active' addition to the css.
        // this.classList.add("active");






    }


    }//closing to the acc onclick function
}

// Sticky Navbar on scroll


const nav = document.querySelector('#navigation');
const whiteLogo = document.querySelector('#whiteLogo');
const blackLogo = document.querySelector('#blackLogo');
const whitenav = document.querySelectorAll('.whitenav');
const pbutton = document.querySelectorAll('.pbutton');
const screenheight = screen.height;
let blackLogoOffset = offset(blackLogo).top;


function stickyNavigation() {

  if (window.scrollY > screenheight || blackLogoOffset > screenheight) {

    nav.classList.remove('bg-transparent')
    nav.classList.add('bg-theme-gray')

    whiteLogo.classList.add('hidden')
    blackLogo.classList.remove('hidden')

    whitenav.forEach(wn => {
        wn.classList.remove('text-white')
        wn.classList.add('text-black')
    });
    pbutton.forEach(wn => {
        wn.classList.remove('primary-button-on-hover-white')
        wn.classList.add('primary-button')
    });

    blackLogoOffset = 0

  } else {

    nav.classList.remove('bg-theme-gray')
    nav.classList.add('bg-transparent')

    blackLogo.classList.add('hidden')
    whiteLogo.classList.remove('hidden')

    whitenav.forEach(wn => {
        wn.classList.add('text-white')
        wn.classList.remove('text-black')
    });

    pbutton.forEach(wn => {
        wn.classList.add('primary-button-on-hover-white')
        wn.classList.remove('primary-button')
    });


  }
}

if(nav) {
  
  stickyNavigation()
  window.addEventListener('scroll', stickyNavigation);
  
}


// navbar-burger

const navbarBurger = document.querySelector('#navbarBurger')
const mainNavbar = document.querySelector('#mainNavbar')
const closeNavbar = document.querySelector('#closeNavbar')

navbarBurger.addEventListener('click', function () {
    navbarBurger.classList.add('active')
    let check = navbarBurger.classList.contains('active')
    if(check) {
        mainNavbar.classList.remove('hidden')
    }
})

closeNavbar.addEventListener('click', function () {
    navbarBurger.classList.remove('active')
    mainNavbar.classList.add('hidden')
})


watchthedemo.forEach(demo => {
    demo.addEventListener('click', function handleClick(event) {

        videoPupupOverlay.classList.remove('video-popup-overlay')
        videoPupupOverlay.classList.add('video-popup-overlay-active')

        videoPupup.classList.remove('video-popup')
        videoPupup.classList.add('video-popup-active')

    });
});

if(closeVideoPopup) {
    closeVideoPopup.addEventListener('click', function () {

        videoPupup.classList.remove('video-popup-active')
        videoPupup.classList.add('video-popup')

        videoPupupOverlay.classList.remove('video-popup-overlay-active')
        videoPupupOverlay.classList.add('video-popup-overlay')
    })
}



// pricing button

const ButtonPlace = document.querySelector('.button-place');
const movingButton = document.querySelector('.moving-button');
const movingButtonText = document.querySelector('.moving-button-text');
const oneOption = document.querySelector('.one-option');
const twoOption = document.querySelector('.two-option');

if(ButtonPlace) {


    ButtonPlace.addEventListener('click', function () {

        if(movingButton.classList.contains('is-one')) {

            movingButton.classList.remove('is-one')
            movingButton.classList.add('is-two')

            oneOption.classList.remove('is-active')
            twoOption.classList.add('is-active')

        }else{

            movingButton.classList.add('is-one')
            movingButton.classList.remove('is-two')

            oneOption.classList.add('is-active')
            twoOption.classList.remove('is-active')

        }

    })


}



// Animated Counter on scroll


document.addEventListener("DOMContentLoaded", function() {
    // You can change this class to specify which elements are going to behave as counters.
    var elements = document.querySelectorAll(".scroll-counter")
  
    elements.forEach(function(item) {
      // Add new attributes to the elements with the '.scroll-counter' HTML class
      item.counterAlreadyFired = false
      item.counterSpeed = item.getAttribute("data-counter-time") / 45
      item.counterTarget = +item.innerHTML
      item.counterCount = 0
      item.counterStep = item.counterTarget / item.counterSpeed
  
      item.updateCounter = function() {
        item.counterCount = item.counterCount + item.counterStep
        item.innerHTML = Math.ceil(item.counterCount).toLocaleString()
        item.classList.add('animate')
  
        if (item.counterCount < item.counterTarget) {
          setTimeout(item.updateCounter, item.counterSpeed)
        } else {
          item.innerHTML = item.counterTarget.toLocaleString()
        }
      }
    })
  
    // Function to determine if an element is visible in the web page
    var isElementVisible = function isElementVisible(el) {
      var scroll = window.scrollY || window.pageYOffset
      var boundsTop = el.getBoundingClientRect().top + scroll
      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      }
      var bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      }
      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      )
    }
  
    // Funciton that will get fired uppon scrolling
    var handleScroll = function handleScroll() {
      elements.forEach(function(item, id) {
        if (true === item.counterAlreadyFired) return
        if (!isElementVisible(item)) return
        item.updateCounter()
        item.counterAlreadyFired = true
      })
    }
  
    // Fire the function on scroll
    window.addEventListener("scroll", handleScroll)
  })


