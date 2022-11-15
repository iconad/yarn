import './fonts.css'
import './style.css'
import './js/global.js'
// Default theme
import '@splidejs/splide/css';


import Splide from '@splidejs/splide';

new Splide( '.splide', {
    perPage: 1,
    gap: 30,
    pagination: false,
  }).mount();


