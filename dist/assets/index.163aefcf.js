!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const e=document.querySelector(".header");document.querySelector(".main");const t=document.querySelector(".main__nav-links"),s=document.querySelector(".projects-section"),c=document.querySelector(".slides-btn"),r=document.querySelector(".box-btn"),o=document.querySelectorAll(".day-night-btn"),i=document.querySelectorAll(".msg-open-btn"),a=document.querySelector(".msg-close-btn"),l=document.querySelector(".msg-section"),n=document.querySelector(".projects"),d=document.querySelectorAll(".project"),u=document.querySelectorAll(".msg-star-btn");i.forEach((c=>{c.addEventListener("click",(()=>{l.classList.add("msg-section-display"),e.classList.add("opacity"),t.classList.add("opacity"),s.classList.add("opacity")}))})),a.addEventListener("click",(()=>{l.classList.remove("msg-section-display"),e.classList.remove("opacity"),t.classList.remove("opacity"),s.classList.remove("opacity")})),u.forEach((e=>{e.addEventListener("click",(()=>{const t=e.firstElementChild;"r"===t.getAttribute("class").charAt(2)?(t.classList.remove("far"),t.classList.remove("fa-star"),t.classList.add("fa"),t.classList.add("fa-star")):(t.classList.remove("fa"),t.classList.remove("fa-star"),t.classList.add("far"),t.classList.add("fa-star"))}))})),o.forEach((e=>{e.addEventListener("click",(()=>{document.body.classList.toggle("night")}))})),c.addEventListener("click",(()=>{c.classList.add("nav-link-active"),r.classList.remove("nav-link-active"),n.classList.add("projects-slides"),d.forEach((e=>{e.classList.add("project-grid")}))})),r.addEventListener("click",(()=>{c.classList.remove("nav-link-active"),r.classList.add("nav-link-active"),n.classList.remove("projects-slides"),d.forEach((e=>{e.classList.remove("project-grid")}))}));