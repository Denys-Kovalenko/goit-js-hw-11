import{a as d,S as p,i as l}from"./assets/vendor-C24jorn_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="49078032-cb7d53c2015160b8e7ee9b72b",h="https://pixabay.com/api/";async function b(o){try{return(await d.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error",t),[]}}function L(o){const t=document.querySelector(".gallery"),a=o.map(({webformatURL:e,largeImageURL:r,tags:s,likes:u,views:m,comments:f,downloads:g})=>`
<li class="gallery-item">
    <a href="${r}">
        <img src="${e}" alt="${s}" loading="lazy" />
    </a>
    <div class="info">
        <p data-label="Likes">${u}</p>
        <p data-label="Views">${m}</p>
        <p data-label="Comments">${f}</p>
        <p data-label="Downloads">${g}</p>
    </div>
</li>
`).join("");t.innerHTML=a,new p(".gallery a").refresh()}const x=document.querySelector(".search-form"),i=document.querySelector(".gallery");let c;x.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){l.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",color:"#EF4040",position:"topRight",maxWidth:"432px"});return}i.innerHTML="<p>Loading images, please wait...</p>";try{const a=await b(t);a.length===0?(l.warning({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",color:"#EF4040",position:"topRight",maxWidth:"432px"}),i.innerHTML=""):(i.innerHTML="",L(a),c?c.refresh():c=new p(".gallery a",{captionsData:"alt",captionDelay:250}))}catch{l.error({message:"Error"}),i.innerHTML="<p>Error loading images.</p>"}});
//# sourceMappingURL=index.js.map
