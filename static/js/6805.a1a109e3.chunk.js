"use strict";(self.webpackChunktp=self.webpackChunktp||[]).push([[6805],{6805:(e,n,s)=>{s.d(n,{Collider:()=>i});var o=s(4409);async function t(e,n,o,t){switch(e.options.collisions.mode){case"absorb":{const{absorb:i}=await s.e(9824).then(s.bind(s,9824));i(e,n,o,t);break}case"bounce":{const{bounce:o}=await s.e(4845).then(s.bind(s,4845));o(e,n);break}case"destroy":{const{destroy:o}=await s.e(1059).then(s.bind(s,1059));o(e,n);break}}}class i extends o.U4{constructor(e){super(e)}clear(){}init(){}async interact(e,n){if(e.destroyed||e.spawning)return;const s=this.container,i=e.getPosition(),a=e.getRadius(),c=s.particles.quadTree.queryCircle(i,2*a);for(const r of c){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(i.z)-Math.round(c.z))>a+l)continue;(0,o.Yf)(i,c)>a+l||await t(e,r,n,s.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=6805.a1a109e3.chunk.js.map