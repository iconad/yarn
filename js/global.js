
//this is the button
const videoPupupOverlay = document.getElementById("videoPupupOverlay");
const reviewPupupOverlay = document.getElementById("reviewPupupOverlay");
const videoPupup = document.getElementById("videoPupup");
const reviewPupup = document.getElementById("reviewPupup");
const closeVideoPopup = document.getElementById("closeVideoPopup");
const closeReviewPopup = document.getElementById("closeReviewPopup");
const accArrowUp = document.querySelector(".acc-arrow-up");
const accArrowDown = document.querySelector(".acc-arrow-down");
const watchthedemo = document.querySelectorAll(".watchthedemo");
const watchtherevew = document.querySelectorAll(".watchtherevew");



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
        this.classList.add("active");






    }


    }//closing to the acc onclick function
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
        mainNavbar.classList.add('flex')
    }
})

closeNavbar.addEventListener('click', function () {
    navbarBurger.classList.remove('active')
    mainNavbar.classList.add('hidden')
    mainNavbar.classList.remove('flex')
})


watchthedemo.forEach(demo => {
    demo.addEventListener('click', function handleClick(event) {

        videoPupupOverlay.classList.remove('video-popup-overlay')
        videoPupupOverlay.classList.add('video-popup-overlay-active')

        videoPupup.classList.remove('video-popup')
        videoPupup.classList.add('video-popup-active')

    });
  });


watchtherevew.forEach(demo => {
    demo.addEventListener('click', function handleClick(event) {

        reviewPupupOverlay.classList.remove('video-popup-overlay')
        reviewPupupOverlay.classList.add('video-popup-overlay-active')

        reviewPupup.classList.remove('video-popup')
        reviewPupup.classList.add('video-popup-active')

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

if(closeReviewPopup) {
    closeReviewPopup.addEventListener('click', function () {
        reviewPupup.classList.remove('video-popup-active')
        reviewPupup.classList.add('video-popup')

        reviewPupupOverlay.classList.remove('video-popup-overlay-active')
        reviewPupupOverlay.classList.add('video-popup-overlay')
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
