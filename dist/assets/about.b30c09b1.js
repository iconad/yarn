import"./global.b1974140.js";import{S as a}from"./splide.esm.5363e842.js";const o=document.getElementById("closeReviewPopup"),e=document.getElementById("reviewPupupOverlay"),t=document.getElementById("reviewPupup"),r=document.querySelectorAll(".watchtherevew"),s=document.getElementById("reviewPupupIframe");new a(".splide",{type:"loop",perPage:2,gap:30,drag:"free",breakpoints:{840:{perPage:1,gap:15}}}).mount();r.forEach(p=>{p.addEventListener("click",function(v){let i=p.getAttribute("data-iframe");s.src=i,e.classList.remove("video-popup-overlay"),e.classList.add("video-popup-overlay-active"),t.classList.remove("video-popup"),t.classList.add("video-popup-active")})});o&&o.addEventListener("click",function(){t.classList.remove("video-popup-active"),t.classList.add("video-popup"),e.classList.remove("video-popup-overlay-active"),e.classList.add("video-popup-overlay")});