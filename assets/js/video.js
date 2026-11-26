(()=>{const {rm,$,$$}=window.BF;
const vs=$$("video[data-src]");
if(vs.length){const vo=new IntersectionObserver(es=>es.forEach(x=>{const v=x.target;if(!v.src)v.src=v.dataset.src;if(rm){v.controls=true;return}x.isIntersecting?v.play().catch(()=>{}):v.pause()}),{threshold:.4});vs.forEach(v=>vo.observe(v))}
$$(".chip").forEach(b=>b.onclick=()=>{$$(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));$$(".work").forEach(w=>w.classList.toggle("hide",b.dataset.f!=="all"&&!w.dataset.c.split(" ").includes(b.dataset.f)))});
const lb=$("#lb");if(!lb)return;const lv=lb.querySelector("video"),cl=lb.querySelector(".lbc");let last=null;
const open=w=>{const v=w.querySelector("video");if(!v)return;const src=v.src||v.dataset.src;if(!src)return;last=w;lv.src=src;lv.poster=v.poster;const t=w.querySelector("h3").textContent;lb.querySelector("h3").textContent=t;lb.querySelector("p").textContent=w.querySelector("small").textContent;lb.querySelector(".btn").href="https://wa.me/233552195010?text="+encodeURIComponent(`Hi BrandiFi team, I saw the "${t}" project on your website and I would like to see the full video.`);lb.classList.add("open");document.body.style.overflow="hidden";lv.muted=false;lv.volume=1;lv.play().catch(()=>{lv.muted=true;lv.play().catch(()=>{})});cl.focus()};
const close=()=>{lb.classList.remove("open");document.body.style.overflow="";lv.pause();last&&last.focus()};
$$(".work").forEach(w=>{w.tabIndex=0;w.setAttribute("role","button");w.setAttribute("aria-label","Open preview: "+w.querySelector("h3").textContent);w.addEventListener("click",()=>open(w));w.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open(w)}})});
cl.onclick=close;lb.addEventListener("click",e=>{if(e.target===lb)close()});
addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")close();if(e.key==="Tab"){const f=[...lb.querySelectorAll("button,a[href],video[controls]")].filter(x=>x.offsetParent!==null);if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
})();
