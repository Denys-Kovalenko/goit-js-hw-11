import{a as f,S as g,i as l}from"./assets/vendor-C24jorn_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d="49078032-cb7d53c2015160b8e7ee9b72b",y="https://pixabay.com/api/";async function h(o){try{return(await f.get(y,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error",t),[]}}function b(o){const t=document.querySelector(".gallery"),a=o.map(({webformatURL:e,largeImageURL:r,tags:s,likes:c,views:p,comments:u,downloads:m})=>`
<li class="gallery-item">
    <a href="${r}">
        <img src="${e}" alt="${s}" loading="lazy" />
    </a>
    <div class="info">
        <p data-label="Likes">${c}</p>
        <p data-label="Views">${p}</p>
        <p data-label="Comments">${u}</p>
        <p data-label="Downloads">${m}</p>
    </div>
</li>
`).join("");t.innerHTML=a,new g(".gallery a").refresh()}const L=document.querySelector(".search-form"),i=document.querySelector(".gallery");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){l.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",color:"#EF4040",position:"topRight",maxWidth:"432px"});return}i.innerHTML="<p>Loading images, please wait...</p>";try{const a=await h(t);a.length===0?(l.warning({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",color:"#EF4040",position:"topRight",maxWidth:"432px"}),i.innerHTML=""):(i.innerHTML="",b(a))}catch{l.error({message:"Error"}),i.innerHTML="<p>Loading images, please wait...</p>"}});
//# sourceMappingURL=index.js.map
