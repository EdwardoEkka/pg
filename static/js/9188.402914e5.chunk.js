"use strict";(self.webpackChunktp=self.webpackChunktp||[]).push([[9188],{9188:(i,n,t)=>{t.d(n,{Linker:()=>a});var s=t(4409),o=t(1744);const e=0,l=0;function r(i,n,t,o,e){const{dx:l,dy:r,distance:a}=(0,s.vr)(i,n);if(!e||a<=t)return a;const c={x:Math.abs(l),y:Math.abs(r)},d=Math.min(c.x,o.width-c.x),k=Math.min(c.y,o.height-c.y);return Math.sqrt(d**2+k**2)}class a extends s.U4{constructor(i){super(i),this._setColor=i=>{if(!i.options.links)return;const n=this.linkContainer,t=i.options.links;let o=void 0===t.id?n.particles.linksColor:n.particles.linksColors.get(t.id);if(o)return;const e=t.color;o=(0,s.PG)(e,t.blink,t.consent),void 0===t.id?n.particles.linksColor=o:n.particles.linksColors.set(t.id,o)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}async interact(i){var n;if(!i.options.links)return;i.links=[];const o=i.getPosition(),a=this.container,c=a.canvas.size;if(o.x<e||o.y<l||o.x>c.width||o.y>c.height)return;const d=i.options.links,k=d.opacity,p=null!==(n=i.retina.linksDistance)&&void 0!==n?n:0,h=d.warp;let u;if(h){const{CircleWarp:i}=await t.e(7149).then(t.bind(t,7149));u=new i(o.x,o.y,p,c)}else u=new s.jl(o.x,o.y,p);const f=a.particles.quadTree.query(u);for(const t of f){const n=t.options.links;if(i===t||null===n||void 0===n||!n.enable||d.id!==n.id||t.spawning||t.destroyed||!t.links||i.links.some((i=>i.destination===t))||t.links.some((n=>n.destination===i)))continue;const s=t.getPosition();if(s.x<e||s.y<l||s.x>c.width||s.y>c.height)continue;const a=r(o,s,p,c,h&&n.warp);if(a>p)continue;const u=(1-a/p)*k;this._setColor(i),i.links.push({destination:t,opacity:u})}}isEnabled(i){var n;return!(null===(n=i.options.links)||void 0===n||!n.enable)}loadParticlesOptions(i){i.links||(i.links=new o.q);for(var n=arguments.length,t=new Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];for(const o of t)i.links.load(null===o||void 0===o?void 0:o.links)}reset(){}}}}]);
//# sourceMappingURL=9188.402914e5.chunk.js.map