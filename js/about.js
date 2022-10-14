import './fonts.css'
import './style.css'
// Default theme
import '@splidejs/splide/css';


import Splide from '@splidejs/splide';

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

