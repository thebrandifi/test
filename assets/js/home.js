(()=>{const {rm,fine,$,$$}=window.BF;
const co=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);const el=x.target,n=+el.dataset.n,t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/1400);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));k<1&&requestAnimationFrame(f)};rm?el.textContent=n:requestAnimationFrame(f)}),{threshold:.6});$$(".st b").forEach(b=>co.observe(b));
const W=["AI-generated videos","Motion graphics","Animated explainers","Professional voiceovers","Product showcases","Social media ads"],rw=$("#rw");
if(rw){if(rm)rw.textContent=W[0];else{let wi=0,ci=0,del=false;(function tick(){const w=W[wi];ci+=del?-1:1;rw.textContent=w.slice(0,ci);let d=del?35:70;if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%W.length;d=300}setTimeout(tick,d)})()}}
const st=$(".stage");if(st&&fine)$("#top").addEventListener("pointermove",e=>{const r=st.getBoundingClientRect();st.style.setProperty("--px",((e.clientX-r.left)/r.width-.5).toFixed(2));st.style.setProperty("--py",((e.clientY-r.top)/r.height-.5).toFixed(2))});
const cue=$(".cue");if(cue)addEventListener("scroll",()=>cue.classList.toggle("hide",scrollY>120),{passive:true});
const ph=$(".ph2"),items=window.BF_PROJECTS||[];
if(ph&&items.length){const sl=ph.querySelector(".slides"),cap=ph.querySelector(".cap"),dt=ph.querySelector(".dots"),n=items.length;
const vs=items.map((o,i)=>{const v=document.createElement("video");v.className="sl";v.muted=true;v.loop=true;v.playsInline=true;v.preload="none";v.poster=o.po;v.setAttribute("aria-hidden","true");sl.appendChild(v);const b=document.createElement("button");b.setAttribute("aria-label","Show "+o.t);b.onclick=()=>{go(i);restart()};dt.appendChild(b);return v});
const dots=[...dt.children];let cur=-1,tm=null,vis=true,hov=false,snd=false;
const ens=(v,k)=>{if(!v.src)v.src=items[k].src};
function go(i){cur=(i+n)%n;vs.forEach((v,k)=>{const on=k===cur;v.classList.toggle("on",on);dots[k].classList.toggle("on",on);if(on){ens(v,k);v.muted=!snd;v.currentTime=0;if(!rm&&vis)v.play().catch(()=>{})}else v.pause()});cap.textContent=items[cur].t;ens(vs[(cur+1)%n],(cur+1)%n)}
function restart(){clearInterval(tm);if(!rm)tm=setInterval(()=>{if(vis&&!hov)go(cur+1)},5500)}
go(0);restart();
const sb=document.createElement("button");sb.className="snd";sb.type="button";sb.setAttribute("aria-pressed","false");sb.setAttribute("aria-label","Turn sound on");sb.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path class="w" d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/><path class="x" d="M16 9l5 6M21 9l-5 6"/></svg>';sb.onclick=()=>{snd=!snd;vs[cur].muted=!snd;sb.setAttribute("aria-pressed",snd);sb.setAttribute("aria-label",snd?"Turn sound off":"Turn sound on");if(snd)vs[cur].play().catch(()=>{})};ph.appendChild(sb);
new IntersectionObserver(e=>{vis=e[0].isIntersecting;const v=vs[cur];vis?(!rm&&v.play().catch(()=>{})):v.pause()},{threshold:.3}).observe(ph);
ph.addEventListener("pointerenter",()=>hov=true);ph.addEventListener("pointerleave",()=>hov=false);
let x0=null;ph.addEventListener("pointerdown",e=>x0=e.clientX);addEventListener("pointerup",e=>{if(x0===null)return;const d=e.clientX-x0;x0=null;if(Math.abs(d)>40){go(cur+(d<0?1:-1));restart()}});
ph.tabIndex=0;ph.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){go(cur+1);restart()}if(e.key==="ArrowLeft"){go(cur-1);restart()}})}
const eg=$("#engine");if(eg){const stp=[...eg.querySelectorAll(".stp div")],nn=$("#egn");let last=-1,tk=0;
const upd=()=>{tk=0;const r=eg.getBoundingClientRect(),tot=r.height-innerHeight,p=Math.max(0,Math.min(1,-r.top/tot));eg.style.setProperty("--p",p);const k=Math.min(3,Math.floor(p*4));stp.forEach((d,i)=>{d.classList.toggle("on",i<=k);d.classList.toggle("cur",i===k)});if(k!==last){last=k;nn.textContent="0"+(k+1);nn.classList.remove("pop");void nn.offsetWidth;nn.classList.add("pop")}};
addEventListener("scroll",()=>{if(!tk)tk=requestAnimationFrame(upd)},{passive:true});upd()}
})();
