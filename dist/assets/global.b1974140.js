(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.getElementById("videoPupupOverlay"),u=document.getElementById("videoPupup"),m=document.getElementById("closeVideoPopup");document.querySelector(".acc-arrow-up");document.querySelector(".acc-arrow-down");const h=document.querySelectorAll(".watchthedemo");var p=document.getElementsByClassName("accordion-button"),n;for(n=0;n<p.length;n++)p[n].onclick=function(){var o=this.nextElementSibling,s=document.getElementsByClassName("accordion-panel");document.getElementsByClassName("accordion-button");var i=document.getElementsByClassName("accordion-button active");if(o.style.maxHeight)o.style.maxHeight=null,this.classList.remove("active"),this.querySelector(".acc-arrow-up")&&(this.querySelector(".acc-arrow-up").classList.add("hidden"),this.querySelector(".acc-arrow-down").classList.remove("hidden"));else{document.querySelectorAll(".acc-arrow-up").forEach(r=>{r.classList.add("hidden"),this.querySelector(".acc-arrow-up").classList.remove("hidden"),this.querySelector(".acc-arrow-down").classList.add("hidden")});for(var c=0;c<i.length;c++)i[c].classList.remove("active");for(var e=0;e<s.length;e++)this.classList.remove("active"),s[e].style.maxHeight=null;o.style.maxHeight=o.scrollHeight+"px",this.classList.add("active")}};const l=document.querySelector("#navbarBurger"),v=document.querySelector("#mainNavbar"),g=document.querySelector("#closeNavbar");l.addEventListener("click",function(){l.classList.add("active"),l.classList.contains("active")&&(v.classList.remove("hidden"),v.classList.add("flex"))});g.addEventListener("click",function(){l.classList.remove("active"),v.classList.add("hidden"),v.classList.remove("flex")});h.forEach(o=>{o.addEventListener("click",function(i){d.classList.remove("video-popup-overlay"),d.classList.add("video-popup-overlay-active"),u.classList.remove("video-popup"),u.classList.add("video-popup-active")})});m&&m.addEventListener("click",function(){u.classList.remove("video-popup-active"),u.classList.add("video-popup"),d.classList.remove("video-popup-overlay-active"),d.classList.add("video-popup-overlay")});const f=document.querySelector(".button-place"),a=document.querySelector(".moving-button");document.querySelector(".moving-button-text");const y=document.querySelector(".one-option"),L=document.querySelector(".two-option");f&&f.addEventListener("click",function(){a.classList.contains("is-one")?(a.classList.remove("is-one"),a.classList.add("is-two"),y.classList.remove("is-active"),L.classList.add("is-active")):(a.classList.add("is-one"),a.classList.remove("is-two"),y.classList.add("is-active"),L.classList.remove("is-active"))});