import './fonts.css'
import './style.css'
import './js/global.js'

import '@splidejs/splide/css';
import Splide, { FADE } from '@splidejs/splide';


new Splide( '.pricingsplide', {
    perPage: 1,
    gap: 0,
    pagination: true,
    arrows :true
  }).mount();


