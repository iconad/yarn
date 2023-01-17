import './fonts.css'
import './style.css'
import './js/global.js'

const closeReviewPopup = document.getElementById("closeReviewPopup");
const reviewPupupOverlay = document.getElementById("reviewPupupOverlay");
const reviewPupup = document.getElementById("reviewPupup");
const watchtherevew = document.querySelectorAll(".watchtherevew");
const reviewPupupIframe = document.getElementById("reviewPupupIframe");


// Default theme
new Splide( '.splide', {
    type: 'loop',
    perPage: 2,
    gap: 30,
    drag: 'free',
    breakpoints: {
		840: {
            perPage: 1,
            gap: 15,
        },
    }
}).mount();



watchtherevew.forEach(demo => {
    demo.addEventListener('click', function handleClick(event) {

        let iframe = demo.getAttribute("data-iframe");
        reviewPupupIframe.src=iframe;

        reviewPupupOverlay.classList.remove('video-popup-overlay')
        reviewPupupOverlay.classList.add('video-popup-overlay-active')


        reviewPupup.classList.remove('video-popup')
        reviewPupup.classList.add('video-popup-active')


    });
});


if(closeReviewPopup) {
    closeReviewPopup.addEventListener('click', function () {
        reviewPupup.classList.remove('video-popup-active')
        reviewPupup.classList.add('video-popup')

        reviewPupupOverlay.classList.remove('video-popup-overlay-active')
        reviewPupupOverlay.classList.add('video-popup-overlay')
    })
}

