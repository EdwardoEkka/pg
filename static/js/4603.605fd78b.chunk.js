"use strict";(self.webpackChunktp=self.webpackChunktp||[]).push([[4603],{4603:(t,i,e)=>{e.d(i,{Container:()=>T});var s=e(2496),n=e(8164),a=e(6480),o=e(753);function r(t,i,e){const s=i[e];var n;void 0!==s&&(t[e]=(null!==(n=t[e])&&void 0!==n?n:1)*s)}function h(t,i){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!i)return;if(!t)return;const s=t.style;if(s)for(const n in i){const t=i[n];t&&s.setProperty(n,t,e?"important":"")}}class c{constructor(t){this.container=t,this._applyPostDrawUpdaters=t=>{for(const e of this._postDrawUpdaters){var i;null===(i=e.afterDraw)||void 0===i||i.call(e,t)}},this._applyPreDrawUpdaters=(t,i,e,s,n,a)=>{for(const h of this._preDrawUpdaters){var o;if(h.getColorStyles){const{fill:a,stroke:o}=h.getColorStyles(i,t,e,s);a&&(n.fill=a),o&&(n.stroke=o)}if(h.getTransformValues){const t=h.getTransformValues(i);for(const i in t)r(a,t,i)}null===(o=h.beforeDraw)||void 0===o||o.call(h,i)}},this._applyResizePlugins=()=>{for(const i of this._resizePlugins){var t;null===(t=i.resize)||void 0===t||t.call(i)}},this._getPluginParticleColors=t=>{let i,e;for(const s of this._colorPlugins)if(!i&&s.particleFillColor&&(i=(0,o.R5)(s.particleFillColor(t))),!e&&s.particleStrokeColor&&(e=(0,o.R5)(s.particleStrokeColor(t))),i&&e)break;return[i,e]},this._initCover=async()=>{const t=this.container.actualOptions.backgroundMask.cover,i=t.color;if(i){const e=(0,o.BN)(i);if(e){const i={...e,a:t.opacity};this._coverColorStyle=(0,o.xx)(i,i.a)}}else await new Promise(((i,e)=>{if(!t.image)return;const s=document.createElement("img");s.addEventListener("load",(()=>{this._coverImage={image:s,opacity:t.opacity},i()})),s.addEventListener("error",(t=>{e(t.error)})),s.src=t.image}))},this._initStyle=()=>{const t=this.element,i=this.container.actualOptions;if(t){this._fullScreen?(this._originalStyle=(0,n.zw)({},t.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const e in i.style){if(!e||!i.style)continue;const s=i.style[e];s&&t.style.setProperty(e,s,"important")}}},this._initTrail=async()=>{const t=this.container.actualOptions.particles.move.trail,i=t.fill;if(!t.enable)return;const e=1/t.length;if(i.color){const t=(0,o.BN)(i.color);if(!t)return;this._trailFill={color:{...t},opacity:e}}else await new Promise(((t,s)=>{if(!i.image)return;const n=document.createElement("img");n.addEventListener("load",(()=>{this._trailFill={image:n,opacity:e},t()})),n.addEventListener("error",(t=>{s(t.error)})),n.src=i.image}))},this._paintBase=t=>{this.draw((i=>(0,a.Sn)(i,this.size,t)))},this._paintImage=(t,i)=>{this.draw((e=>(0,a.Md)(e,this.size,t,i)))},this._repairStyle=()=>{const t=this.element;t&&(this._safeMutationObserver((t=>t.disconnect())),this._initStyle(),this.initBackground(),this._safeMutationObserver((i=>i.observe(t,{attributes:!0}))))},this._resetOriginalStyle=()=>{const t=this.element,i=this._originalStyle;t&&i&&h(t,i)},this._safeMutationObserver=t=>{this._mutationObserver&&t(this._mutationObserver)},this._setFullScreenStyle=()=>{const t=this.element;if(!t)return;h(t,{position:"fixed",zIndex:this.container.actualOptions.fullScreen.zIndex.toString(10),top:"0",left:"0",width:"100%",height:"100%"},!0)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const t=this.container.actualOptions,i=t.particles.move.trail,e=this._trailFill;t.backgroundMask.enable?this.paint():i.enable&&i.length>0&&e?e.color?this._paintBase((0,o.xx)(e.color,e.opacity)):e.image&&this._paintImage(e.image,e.opacity):t.clear&&this.draw((t=>{(0,a.IU)(t,this.size)}))}destroy(){if(this.stop(),this._generated){const t=this.element;null===t||void 0===t||t.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){const i=this._context;if(i)return t(i)}drawAsync(t){const i=this._context;return i?t(i):Promise.resolve(void 0)}async drawParticle(t,i){var e;if(t.spawning||t.destroyed)return;const s=t.getRadius();if(s<=0)return;const n=t.getFillColor(),r=null!==(e=t.getStrokeColor())&&void 0!==e?e:n;let[h,c]=this._getPluginParticleColors(t);h||(h=n),c||(c=r),(h||c)&&await this.drawAsync((async e=>{var n,r,l,d;const u=this.container,p=u.actualOptions,_=t.options.zIndex,f=1-t.zIndexFactor,v=f**_.opacityRate,m=null!==(n=null!==(r=t.bubble.opacity)&&void 0!==r?r:null===(l=t.opacity)||void 0===l?void 0:l.value)&&void 0!==n?n:1,g=m*v,y=(null!==(d=t.strokeOpacity)&&void 0!==d?d:m)*v,w={},b={fill:h?(0,o.LC)(h,g):void 0};b.stroke=c?(0,o.LC)(c,y):b.fill,this._applyPreDrawUpdaters(e,t,s,g,b,w),await(0,a.p0)({container:u,context:e,particle:t,delta:i,colorStyles:b,backgroundMask:p.backgroundMask.enable,composite:p.backgroundMask.composite,radius:s*f**_.sizeRate,opacity:g,shadow:t.options.shadow,transform:w}),this._applyPostDrawUpdaters(t)}))}async drawParticlePlugin(t,i,e){await this.drawAsync((s=>(0,a.Wb)(s,t,i,e)))}async drawPlugin(t,i){await this.drawAsync((e=>(0,a.e_)(e,t,i)))}async init(){this._safeMutationObserver((t=>t.disconnect())),this._mutationObserver=(0,n.tG)((t=>{for(const i of t)"attributes"===i.type&&"style"===i.attributeName&&this._repairStyle()})),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(t){(0,n.tZ)().error(t)}this.initBackground(),this._safeMutationObserver((t=>{this.element&&t.observe(this.element,{attributes:!0})})),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const t=this.container.actualOptions.background,i=this.element;if(!i)return;const e=i.style;if(e){if(t.color){const i=(0,o.BN)(t.color);e.backgroundColor=i?(0,o.xx)(i,t.opacity):""}else e.backgroundColor="";e.backgroundImage=t.image||"",e.backgroundPosition=t.position||"",e.backgroundRepeat=t.repeat||"",e.backgroundSize=t.size||""}}initPlugins(){this._resizePlugins=[];for(const[,i]of this.container.plugins){var t;i.resize&&this._resizePlugins.push(i),(null!==(t=i.particleFillColor)&&void 0!==t?t:i.particleStrokeColor)&&this._colorPlugins.push(i)}}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters){var t,i;e.afterDraw&&this._postDrawUpdaters.push(e),(null!==(t=null!==(i=e.getColorStyles)&&void 0!==i?i:e.getTransformValues)&&void 0!==t?t:e.beforeDraw)&&this._preDrawUpdaters.push(e)}}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&s.eb in t.dataset?"true"===t.dataset[s.eb]:this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=(0,n.zw)({},this.element.style),this.size.height=t.offsetHeight,this.size.width=t.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver((t=>{this.element&&t.observe(this.element,{attributes:!0})})),this.container.retina.init(),this.initBackground()}paint(){const t=this.container.actualOptions;this.draw((i=>{t.backgroundMask.enable&&t.backgroundMask.cover?((0,a.IU)(i,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()}))}resize(){if(!this.element)return!1;const t=this.container,i=t.retina.pixelRatio,e=t.canvas.size,s=this.element.offsetWidth*i,n=this.element.offsetHeight*i;if(n===e.height&&s===e.width&&n===this.element.height&&s===this.element.width)return!1;const a={...e};return this.element.width=e.width=this.element.offsetWidth*i,this.element.height=e.height=this.element.offsetHeight*i,this.container.started&&t.particles.setResizeFactor({width:e.width/a.width,height:e.height/a.height}),!0}stop(){this._safeMutationObserver((t=>t.disconnect())),this._mutationObserver=void 0,this.draw((t=>(0,a.IU)(t,this.size)))}async windowResize(){if(!this.element||!this.resize())return;const t=this.container,i=t.updateActualOptions();await t.particles.setDensity(),this._applyResizePlugins(),i&&await t.refresh()}}var l=e(5268);function d(t,i,e,s,n){if(s){let s={passive:!0};(0,l.Lm)(n)?s.capture=n:void 0!==n&&(s=n),t.addEventListener(i,e,s)}else{const s=n;t.removeEventListener(i,e,s)}}class u{constructor(t){this.container=t,this._doMouseTouchClick=t=>{const i=this.container,e=i.actualOptions;if(this._canPush){const t=i.interactivity.mouse,s=t.position;if(!s)return;t.clickPosition={...s},t.clickTime=(new Date).getTime();const a=e.interactivity.events.onClick;(0,n.wJ)(a.mode,(t=>this.container.handleClickMode(t)))}if("touchend"===t.type){setTimeout((()=>this._mouseTouchFinish()),500)}},this._handleThemeChange=t=>{const i=t,e=this.container,s=e.options,n=s.defaultThemes,a=i.matches?n.dark:n.light,o=s.themes.find((t=>t.name===a));o&&o.default.auto&&e.loadTheme(a)},this._handleVisibilityChange=()=>{const t=this.container,i=t.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document&&document.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const t=async()=>{const t=this.container.canvas;await(null===t||void 0===t?void 0:t.windowResize())};this._resizeTimeout=setTimeout((()=>{t()}),this.container.actualOptions.interactivity.events.resize.delay*s.Xu)},this._manageInteractivityListeners=(t,i)=>{const e=this._handlers,n=this.container,a=n.actualOptions,o=n.interactivity.element;if(!o)return;const r=o,h=n.canvas.element;h&&(h.style.pointerEvents=r===h?"initial":"none"),(a.interactivity.events.onHover.enable||a.interactivity.events.onClick.enable)&&(d(o,s.Rb,e.mouseMove,i),d(o,s.s7,e.touchStart,i),d(o,s.DG,e.touchMove,i),a.interactivity.events.onClick.enable?(d(o,s.Bp,e.touchEndClick,i),d(o,s.vo,e.mouseUp,i),d(o,s.ms,e.mouseDown,i)):d(o,s.Bp,e.touchEnd,i),d(o,t,e.mouseLeave,i),d(o,s.G3,e.touchCancel,i))},this._manageListeners=t=>{const i=this._handlers,e=this.container,n=e.actualOptions.interactivity.detectsOn,a=e.canvas.element;let o=s.Z0;if("window"===n)e.interactivity.element=window,o=s.sf;else if("parent"===n&&a){var r;e.interactivity.element=null!==(r=a.parentElement)&&void 0!==r?r:a.parentNode}else e.interactivity.element=a;this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(o,t),document&&d(document,s.nK,i.visibilityChange,t,!1)},this._manageMediaMatch=t=>{const i=this._handlers,e=(0,n.lV)("(prefers-color-scheme: dark)");e&&(void 0===e.addEventListener?void 0!==e.addListener&&(t?e.addListener(i.oldThemeChange):e.removeListener(i.oldThemeChange)):d(e,"change",i.themeChange,t))},this._manageResize=t=>{const i=this._handlers,e=this.container;if(!e.actualOptions.interactivity.events.resize)return;if("undefined"===typeof ResizeObserver)return void d(window,s.NF,i.resize,t);const n=e.canvas.element;this._resizeObserver&&!t?(n&&this._resizeObserver.unobserve(n),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&n&&(this._resizeObserver=new ResizeObserver((t=>{t.find((t=>t.target===n))&&this._handleWindowResize()})),this._resizeObserver.observe(n))},this._mouseDown=()=>{const{interactivity:t}=this.container;if(!t)return;const{mouse:i}=t;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=t=>{const i=this.container,e=i.actualOptions,{mouse:s}=i.interactivity;s.inside=!0;let n=!1;const a=s.position;if(a&&e.interactivity.events.onClick.enable){for(const[,t]of i.plugins)if(t.clickPositionValid&&(n=t.clickPositionValid(a),n))break;n||this._doMouseTouchClick(t),s.clicking=!1}},this._mouseTouchFinish=()=>{const t=this.container.interactivity;if(!t)return;const i=t.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,t.status=s.Z0,i.inside=!1,i.clicking=!1},this._mouseTouchMove=t=>{const i=this.container,e=i.actualOptions,n=i.interactivity,a=i.canvas.element;if(null===n||void 0===n||!n.element)return;let o;if(n.mouse.inside=!0,t.type.startsWith("pointer")){this._canPush=!0;const i=t;if(n.element===window){if(a){const t=a.getBoundingClientRect();o={x:i.clientX-t.left,y:i.clientY-t.top}}}else if("parent"===e.interactivity.detectsOn){const t=i.target,e=i.currentTarget;if(t&&e&&a){const s=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r=a.getBoundingClientRect();o={x:i.offsetX+2*s.left-(n.left+r.left),y:i.offsetY+2*s.top-(n.top+r.top)}}else{var r,h;o={x:null!==(r=i.offsetX)&&void 0!==r?r:i.clientX,y:null!==(h=i.offsetY)&&void 0!==h?h:i.clientY}}}else if(i.target===a){var c,l;o={x:null!==(c=i.offsetX)&&void 0!==c?c:i.clientX,y:null!==(l=i.offsetY)&&void 0!==l?l:i.clientY}}}else if(this._canPush="touchmove"!==t.type,a){var d,u;const i=t,e=1,s=i.touches[i.touches.length-e],n=a.getBoundingClientRect(),r=0;o={x:s.clientX-(null!==(d=n.left)&&void 0!==d?d:r),y:s.clientY-(null!==(u=n.top)&&void 0!==u?u:r)}}const p=i.retina.pixelRatio;o&&(o.x*=p,o.y*=p),n.mouse.position=o,n.status=s.Rb},this._touchEnd=t=>{const i=t,e=Array.from(i.changedTouches);for(const s of e)this._touches.delete(s.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{const i=t,e=Array.from(i.changedTouches);for(const s of e)this._touches.delete(s.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{const i=t,e=Array.from(i.changedTouches);for(const s of e)this._touches.set(s.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var p=e(8888);class _{constructor(t,i){this.container=i,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}async externalInteract(t){for(const i of this._externalInteractors)i.isEnabled()&&await i.interact(t)}handleClickMode(t){for(const e of this._externalInteractors){var i;null===(i=e.handleClickMode)||void 0===i||i.call(e,t)}}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const t of this._interactors){switch(t.type){case"external":this._externalInteractors.push(t);break;case"particles":this._particleInteractors.push(t)}t.init()}}async particlesInteract(t,i){for(const e of this._externalInteractors)e.clear(t,i);for(const e of this._particleInteractors)e.isEnabled(t)&&await e.interact(t,i)}reset(t){for(const i of this._externalInteractors)i.isEnabled()&&i.reset(t);for(const i of this._particleInteractors)i.isEnabled(t)&&i.reset(t)}}class f{constructor(t,i){this.position=t,this.particle=i}}var v=e(4859),m=e(9135);const g=.5;class y{constructor(t,i){this.rectangle=t,this.capacity=i,this._subdivide=()=>{const{x:t,y:i}=this.rectangle.position,{width:e,height:s}=this.rectangle.size,{capacity:n}=this;for(let a=0;a<4;a++){const o=a%2;this._subs.push(new y(new v.M_(t+e*g*o,i+s*g*(Math.round(a*g)-o),e*g,s*g),n))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return!!this.rectangle.contains(t.position)&&(this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some((i=>i.insert(t)))))}query(t,i){const e=[];if(!t.intersects(this.rectangle))return[];for(const s of this._points)!t.contains(s.position)&&(0,m.Yf)(t.position,s.position)>s.particle.getRadius()&&(!i||i(s.particle))||e.push(s.particle);if(this._divided)for(const s of this._subs)e.push(...s.query(t,i));return e}queryCircle(t,i,e){return this.query(new v.jl(t.x,t.y,i),e)}queryRectangle(t,i,e){return this.query(new v.M_(t.x,t.y,i.width,i.height),e)}}const w=t=>{const{height:i,width:e}=t;return new v.M_(-.25*e,-.25*i,1.5*e,1.5*i)};class b{constructor(t,i){var a=this;this._addToPool=function(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];for(const s of i)a._pool.push(s)},this._applyDensity=async(t,i,e)=>{var s;const n=t.number;if(null===(s=t.number.density)||void 0===s||!s.enable)return void(void 0===e?this._limit=n.limit.value:n.limit&&this._groupLimits.set(e,n.limit.value));const a=this._initDensityFactor(n.density),o=n.value,r=n.limit.value>0?n.limit.value:o,h=Math.min(o,r)*a+i,c=Math.min(this.count,this.filter((t=>t.group===e)).length);void 0===e?this._limit=n.limit.value*a:this._groupLimits.set(e,n.limit.value*a),c<h?await this.push(Math.abs(h-c),void 0,t,e):c>h&&this.removeQuantity(c-h,e)},this._initDensityFactor=t=>{const i=this._container;if(!i.canvas.element||!t.enable)return 1;const e=i.canvas.element,s=i.retina.pixelRatio;return e.width*e.height/(t.height*t.width*s**2)},this._pushParticle=async(t,i,a,o)=>{try{let s=this._pool.pop();if(!s){const{Particle:t}=await e.e(1769).then(e.bind(e,1769));s=new t(this._engine,this._container)}await s.init(this._nextId,t,i,a);let n=!0;if(o&&(n=o(s)),!n)return;return this._array.push(s),this._zArray.push(s),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:s}}),s}catch(r){(0,n.tZ)().warning("".concat(s.dI," adding particle: ").concat(r))}},this._removeParticle=(t,i,e)=>{const s=this._array[t];if(!s||s.group!==i)return!1;const n=this._zArray.indexOf(s);return this._array.splice(t,1),this._zArray.splice(n,1),s.destroy(e),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:s}}),this._addToPool(s),!0},this._engine=t,this._container=i,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new _(t,i),this._pluginsInitialized=!1;const o=i.canvas.size;this.quadTree=new y(w(o),4),this.movers=[],this.updaters=[]}get count(){return this._array.length}async addManualParticles(){const t=this._container,i=t.actualOptions;for(const e of i.manualParticles)await this.addParticle(e.position?(0,n.E9)(e.position,t.canvas.size):void 0,e.options)}async addParticle(t,i,e,s){var n;const a=this._container.actualOptions.particles.number.limit,o=void 0===e?this._limit:null!==(n=this._groupLimits.get(e))&&void 0!==n?n:this._limit,r=this.count;if(o>0)if("delete"===a.mode){const t=r+1-o;t>0&&this.removeQuantity(t)}else if("wait"===a.mode&&r>=o)return;return await this._pushParticle(t,i,e,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}async draw(t){const i=this._container,e=i.canvas;e.clear(),await this.update(t);for(const[,s]of i.plugins)await e.drawPlugin(s,t);for(const s of this._zArray)await s.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}async init(){const t=this._container,i=t.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let e=!1;for(const[,n]of t.plugins)if(void 0!==n.particlesInitialization&&(e=n.particlesInitialization()),e)break;if(await this.addManualParticles(),!e){const t=i.particles,e=t.groups;for(const i in e){const n=e[i];for(let e=this.count,a=0;a<(null===(s=n.number)||void 0===s?void 0:s.value)&&e<t.number.value;e++,a++){var s;await this.addParticle(void 0,n,i)}}for(let i=this.count;i<t.number.value;i++)await this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const t=this._container;this.movers=await this._engine.getMovers(t,!0),this.updaters=await this._engine.getUpdaters(t,!0),await this._interactionManager.init();for(const[,i]of t.pathGenerators)await i.init(t)}async push(t,i,e,s){for(let n=0;n<t;n++)await this.addParticle(null===i||void 0===i?void 0:i.position,e,s)}async redraw(){this.clear(),await this.init(),await this.draw({value:0,factor:0})}remove(t,i,e){this.removeAt(this._array.indexOf(t),void 0,i,e)}removeAt(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;if(t<0||t>this.count)return;let n=0;for(let a=t;n<i&&a<this.count;a++)this._removeParticle(a--,e,s)&&n++}removeQuantity(t,i){this.removeAt(0,t,i)}async setDensity(){const t=this._container.actualOptions,i=t.particles.groups;for(const e in i)await this._applyDensity(i[e],0,e);await this._applyDensity(t.particles,t.manualParticles.length)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}async update(t){const i=this._container,e=new Set;this.quadTree=new y(w(i.canvas.size),4);for(const[,o]of i.pathGenerators)o.update();for(const[,o]of i.plugins){var s;await(null===(s=o.update)||void 0===s?void 0:s.call(o,t))}const n=this._resizeFactor;for(const o of this._array){n&&!o.ignoresResizeRatio&&(o.position.x*=n.width,o.position.y*=n.height,o.initialPosition.x*=n.width,o.initialPosition.y*=n.height),o.ignoresResizeRatio=!1,this._interactionManager.reset(o);for(const[,i]of this._container.plugins){var a;if(o.destroyed)break;null===(a=i.particleUpdate)||void 0===a||a.call(i,o,t)}for(const i of this.movers)i.isEnabled(o)&&await i.move(o,t);o.destroyed?e.add(o):this.quadTree.insert(new f(o.getPosition(),o))}if(e.size){const t=t=>!e.has(t);this._array=this.filter(t),this._zArray=this._zArray.filter(t);for(const i of e)this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:i}});this._addToPool(...e)}await this._interactionManager.externalInteract(t);for(const o of this._array){for(const i of this.updaters)await i.update(o,t);o.destroyed||o.spawning||await this._interactionManager.particlesInteract(o,t)}if(delete this._resizeFactor,this._needsSort){const t=this._zArray;t.sort(((t,i)=>i.position.z-t.position.z||t.id-i.id));const i=1;this._lastZIndex=t[t.length-i].position.z,this._needsSort=!1}}}class z{constructor(t){this.container=t,this.pixelRatio=1,this.reduceFactor=1}init(){const t=this.container,i=t.actualOptions;this.pixelRatio=!i.detectRetina||(0,n.B9)()?1:window.devicePixelRatio,this.reduceFactor=1;const e=this.pixelRatio,s=t.canvas;if(s.element){const t=s.element;s.size.width=t.offsetWidth*e,s.size.height=t.offsetHeight*e}const a=i.particles,o=a.move;this.maxSpeed=(0,m.VG)(o.gravity.maxSpeed)*e,this.sizeAnimationSpeed=(0,m.VG)(a.size.animation.speed)*e}initParticle(t){const i=t.options,e=this.pixelRatio,s=i.move,n=s.distance,a=t.retina;a.moveDrift=(0,m.VG)(s.drift)*e,a.moveSpeed=(0,m.VG)(s.speed)*e,a.sizeAnimationSpeed=(0,m.VG)(i.size.animation.speed)*e;const o=a.maxDistance;o.horizontal=void 0!==n.horizontal?n.horizontal*e:void 0,o.vertical=void 0!==n.vertical?n.vertical*e:void 0,a.maxSpeed=(0,m.VG)(s.gravity.maxSpeed)*e}}var O=e(8802);function k(t){return t&&!t.destroyed}function x(t,i){const e=new p.J(t,i);for(var s=arguments.length,n=new Array(s>2?s-2:0),a=2;a<s;a++)n[a-2]=arguments[a];return(0,O.Z)(e,...n),e}class T{constructor(t,i,e){this._intersectionManager=t=>{if(k(this)&&this.actualOptions.pauseOnOutsideViewport)for(const i of t)i.target===this.interactivity.element&&(i.isIntersecting?this.play():this.pause())},this._nextFrame=async t=>{try{var i;if(!this._smooth&&void 0!==this._lastFrameTime&&t<this._lastFrameTime+s.Xu/this.fpsLimit)return void this.draw(!1);null!==(i=this._lastFrameTime)&&void 0!==i||(this._lastFrameTime=t);const e=function(t){return{value:t,factor:arguments.length>2&&void 0!==arguments[2]&&arguments[2]?60/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:60):60*t/s.Xu}}(t-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(e.value),this._lastFrameTime=t,e.value>s.Xu)return void this.draw(!1);if(await this.particles.draw(e),!this.alive())return void this.destroy();this.animationStatus&&this.draw(!1)}catch(e){(0,n.tZ)().error("".concat(s.dI," in animation loop"),e)}},this._engine=t,this.id=Symbol(i),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=e,this._initialSourceOptions=e,this.retina=new z(this),this.canvas=new c(this),this.particles=new b(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=x(this._engine,this),this.actualOptions=x(this._engine,this),this._eventListeners=new u(this),this._intersectionObserver=(0,n.BR)((t=>this._intersectionManager(t))),this._engine.dispatchEvent("containerBuilt",{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&k(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!k(this))return;const i=this.interactivity.element;if(!i)return;const e=(i,e,s)=>{if(!k(this))return;const n=this.retina.pixelRatio,a={x:e.x*n,y:e.y*n},o=this.particles.quadTree.queryCircle(a,s*n);t(i,o)};let s=!1,n=!1;i.addEventListener("click",(t=>{if(!k(this))return;const i=t,s={x:i.offsetX||i.clientX,y:i.offsetY||i.clientY};e(t,s,1)})),i.addEventListener("touchstart",(()=>{k(this)&&(s=!0,n=!1)})),i.addEventListener("touchmove",(()=>{k(this)&&(n=!0)})),i.addEventListener("touchend",(t=>{if(k(this)){if(s&&!n){const i=t,s=1;let n=i.touches[i.touches.length-s];if(!n&&(n=i.changedTouches[i.changedTouches.length-s],!n))return;const a=this.canvas.element,o=a?a.getBoundingClientRect():void 0,r=0,h={x:n.clientX-(o?o.left:r),y:n.clientY-(o?o.top:r)};e(t,h,Math.max(n.radiusX,n.radiusY))}s=!1,n=!1}})),i.addEventListener("touchcancel",(()=>{k(this)&&(s=!1,n=!1)}))}addLifeTime(t){this._lifeTime+=t}addPath(t,i){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!k(this)||!e&&this.pathGenerators.has(t))&&(this.pathGenerators.set(t,i),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!k(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,n]of this.effectDrawers){var t;null===(t=n.destroy)||void 0===t||t.call(n,this)}for(const[,n]of this.shapeDrawers){var i;null===(i=n.destroy)||void 0===i||i.call(n,this)}for(const n of this.effectDrawers.keys())this.effectDrawers.delete(n);for(const n of this.shapeDrawers.keys())this.shapeDrawers.delete(n);this._engine.clearPlugins(this),this.destroyed=!0;const e=this._engine.dom(),s=e.findIndex((t=>t===this));if(s>=0){const t=1;e.splice(s,t)}this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(t){if(!k(this))return;let i=t;const e=async t=>{i&&(this._lastFrameTime=void 0,i=!1),await this._nextFrame(t)};this._drawAnimationFrame=requestAnimationFrame((t=>{e(t)}))}async export(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(const[,e]of this.plugins){if(!e.export)continue;const s=await e.export(t,i);if(s.supported)return s.blob}(0,n.tZ)().error("".concat(s.dI," - Export plugin with type ").concat(t," not found"))}handleClickMode(t){if(k(this)){this.particles.handleClickMode(t);for(const[,e]of this.plugins){var i;null===(i=e.handleClickMode)||void 0===i||i.call(e,t)}}}async init(){if(!k(this))return;const t=this._engine.getSupportedEffects();for(const s of t){const t=this._engine.getEffectDrawer(s);t&&this.effectDrawers.set(s,t)}const i=this._engine.getSupportedShapes();for(const s of i){const t=this._engine.getShapeDrawer(s);t&&this.shapeDrawers.set(s,t)}await this.particles.initPlugins(),this._options=x(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=x(this._engine,this,this._options);const e=await this._engine.getAvailablePlugins(this);for(const[s,h]of e)this.plugins.set(s,h);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=(0,m.VG)(this.actualOptions.duration)*s.Xu,this._delay=(0,m.VG)(this.actualOptions.delay)*s.Xu,this._lifeTime=0;this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this._smooth=this.actualOptions.smooth;for(const[,s]of this.effectDrawers){var n;await(null===(n=s.init)||void 0===n?void 0:n.call(s,this))}for(const[,s]of this.shapeDrawers){var a;await(null===(a=s.init)||void 0===a?void 0:a.call(s,this))}for(const[,s]of this.plugins){var o;await(null===(o=s.init)||void 0===o?void 0:o.call(s))}this._engine.dispatchEvent("containerInit",{container:this}),await this.particles.init(),await this.particles.setDensity();for(const[,s]of this.plugins){var r;null===(r=s.particlesSetup)||void 0===r||r.call(s)}this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(t){k(this)&&(this._currentTheme=t,await this.refresh())}pause(){if(k(this)&&(void 0!==this._drawAnimationFrame&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,i]of this.plugins){var t;null===(t=i.pause)||void 0===t||t.call(i)}this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(t){if(!k(this))return;const i=this._paused||t;if(!this._firstStart||this.actualOptions.autoPlay){if(this._paused&&(this._paused=!1),i)for(const[,t]of this.plugins)t.play&&t.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(null!==i&&void 0!==i&&i)}else this._firstStart=!1}async refresh(){if(k(this))return this.stop(),this.start()}async reset(){if(k(this))return this._initialSourceOptions=void 0,this._options=x(this._engine,this),this.actualOptions=x(this._engine,this,this._options),this.refresh()}async start(){k(this)&&!this.started&&(await this.init(),this.started=!0,await new Promise((t=>{const i=async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,t]of this.plugins){var i;await(null===(i=t.start)||void 0===i?void 0:i.call(t))}this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),t()};this._delayTimeout=setTimeout((()=>{i()}),this._delay)})))}stop(){if(k(this)&&this.started){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,i]of this.plugins){var t;null===(t=i.stop)||void 0===t||t.call(i)}for(const t of this.plugins.keys())this.plugins.delete(t);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth!==t&&(this._responsiveMaxWidth=t,!0)}}}}]);
//# sourceMappingURL=4603.605fd78b.chunk.js.map