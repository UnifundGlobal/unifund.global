(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5iCN":function(t,e,i){"use strict";i.r(e),i.d(e,"TokenModule",(function(){return st}));var n=i("6NWb"),o=i("sYmb"),r=i("ofXK"),s=i("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[r.b,n.c,o.b]]}),t})();var c=i("NOTu"),l=i("SXf5"),h=i("1G5W"),d=i("r11z"),b=i("AytR"),u=i("XNiG"),p=i("yKTf"),f=i("3eCP"),g=i("lJxs"),v=i("tk/3");let m=(()=>{class t{constructor(t){this.http=t,this.BASE_URL="https://api.coingecko.com/api/v3/coins"}getUnifundData(){return this.http.get(this.BASE_URL+"/unifund").pipe(Object(g.a)(t=>({price:t.market_data.current_price.usd,totalSupply:t.market_data.total_supply,volume:t.market_data.total_volume.usd})))}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(v.a))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=i("6OSH");function O(t){return Array.isArray(t)?t:[t]}i("hSFZ");var x=i("itXk"),w=i("GyhO"),P=i("HDdC"),I=i("IzEk"),T=i("7o/Q");class _{constructor(t){this.total=t}call(t,e){return e.subscribe(new S(t,this.total))}}class S extends T.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var C=i("D0XW");class E{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new A(t,this.dueTime,this.scheduler))}}class A extends T.a{constructor(t,e,i){super(t),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(L,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function L(t){t.debouncedNext()}var j=i("JX91");let B;try{B="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(at){B=!1}let D=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(r.z)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!B)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(s.B))},t.\u0275prov=Object(s.Gb)({factory:function(){return new t(Object(s.Xb)(s.B))},token:t,providedIn:"root"}),t})();const k=new Set;let N,R=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):M}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!k.has(t))try{N||(N=document.createElement("style"),N.setAttribute("type","text/css"),document.head.appendChild(N)),N.sheet&&(N.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),k.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(D))},t.\u0275prov=Object(s.Gb)({factory:function(){return new t(Object(s.Xb)(D))},token:t,providedIn:"root"}),t})();function M(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let z=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new u.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return F(O(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=F(O(t)).map(t=>this._registerQuery(t).observable);let i=Object(x.a)(e);return i=Object(w.a)(i.pipe(Object(I.a)(1)),i.pipe(t=>t.lift(new _(1)),function(t,e=C.a){return i=>i.lift(new E(t,e))}(0))),i.pipe(Object(g.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(({matches:t,query:i})=>{e.matches=e.matches||t,e.breakpoints[i]=t}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),i={observable:new P.a(t=>{const i=e=>this._zone.run(()=>t.next(e));return e.addListener(i),()=>{e.removeListener(i)}}).pipe(Object(j.a)(e),Object(g.a)(({matches:e})=>({query:t,matches:e})),Object(h.a)(this._destroySubject)),mql:e};return this._queries.set(t,i),i}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(R),s.Xb(s.z))},t.\u0275prov=Object(s.Gb)({factory:function(){return new t(Object(s.Xb)(R),Object(s.Xb)(s.z))},token:t,providedIn:"root"}),t})();function F(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}const K=["myChart"];let U=(()=>{class t{constructor(t){this.observer=t,this.colors=[{backgroundColor:["rgba(229, 99, 153, 1)","rgba(127, 150, 255, 1)","rgba(166, 207, 213, 1)","rgba(219, 252, 255, 1)","rgba(144, 122, 214, 1)","rgba(227, 158, 193, 1)"]}],this.pieChartType="doughnut",this.pieChartPlugins=[],this.pieChartOptions={responsive:!0,elements:{arc:{borderWidth:0}},legend:{position:"left",labels:{fontColor:"black",fontSize:16,fontFamily:"Fira Code"}},tooltips:{enabled:!0,mode:"single",callbacks:{label:(t,e)=>e.labels[t.index]+": "+Number(e.datasets[t.datasetIndex].data[t.index]).toFixed(2)+"%"}},plugins:{datalabels:{formatter:(t,e)=>e.chart.data.labels[e.dataIndex]},labels:{render:"percentage",precision:2,showZero:!0,fontSize:12,fontColor:"#000",fontStyle:"normal",fontFamily:"'Poppins', 'Helvetica', 'Arial', sans-serif"}}},Object(y.d)(),Object(y.c)()}ngOnInit(){this.observer.observe("(max-width: 476px)").subscribe(t=>{this.legend=!t.matches})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(z))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-pie-chart"]],viewQuery:function(t,e){var i;1&t&&s.xc(K,!0),2&t&&s.pc(i=s.bc())&&(e.myChart=i.first)},inputs:{labels:"labels",data:"data"},decls:3,vars:7,consts:[[1,"chart-container"],["baseChart","",3,"colors","data","labels","chartType","options","legend","plugins"],["myChart","base-chart"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Lb(1,"canvas",1,2),s.Ob()),2&t&&(s.xb(1),s.ic("colors",e.colors)("data",e.data)("labels",e.labels)("chartType",e.pieChartType)("options",e.pieChartOptions)("legend",e.legend)("plugins",e.pieChartPlugins))},directives:[y.a],styles:[""]}),t})();var X=i("u6j4");const H=function(){return["fab","telegram"]};let G=(()=>{class t{constructor(){this.humanUrl=b.a.chatWithHuman}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-still-questions"]],decls:9,vars:9,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"mb-4"],["target","_blank","type","button",1,"btn","btn-primary","d-flex","align-items-center","justify-content-center","py-2","human-btn",3,"href"],["size","2x",1,"p-1","text-white","mr-2",3,"icon"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"h2",1),s.Bc(2),s.dc(3,"translate"),s.Ob(),s.Pb(4,"a",2),s.Lb(5,"fa-icon",3),s.Pb(6,"span"),s.Bc(7),s.dc(8,"translate"),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.xb(2),s.Cc(s.ec(3,4,"TALK_TO_A_HUMAN")),s.xb(2),s.ic("href",e.humanUrl,s.uc),s.xb(1),s.ic("icon",s.lc(8,H)),s.xb(2),s.Cc(s.ec(8,6,"MSG_US")))},directives:[n.a],pipes:[o.c],styles:[".human-btn[_ngcontent-%COMP%]{width:210px}"]}),t})();const V=function(){return["fas","spinner"]};function q(t,e){1&t&&(s.Pb(0,"div",29),s.Lb(1,"fa-icon",30),s.Ob()),2&t&&(s.xb(1),s.ic("icon",s.lc(2,V))("spin",!0))}function W(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"h5",31),s.Bc(2),s.dc(3,"number"),s.Ob(),s.Pb(4,"h6",32),s.Bc(5),s.dc(6,"translate"),s.Ob(),s.Mb()),2&t){const t=s.cc();s.xb(2),s.Cc(s.fc(3,2,t.geckoData.totalSupply,"2.0-0")),s.xb(3),s.Cc(s.ec(6,5,"TOTAL_SUPPLY"))}}function $(t,e){1&t&&(s.Pb(0,"div",29),s.Lb(1,"fa-icon",30),s.Ob()),2&t&&(s.xb(1),s.ic("icon",s.lc(2,V))("spin",!0))}function Q(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"h5",31),s.Bc(2),s.dc(3,"number"),s.Ob(),s.Pb(4,"h6",32),s.Bc(5),s.dc(6,"translate"),s.Ob(),s.Mb()),2&t){const t=s.cc();s.xb(2),s.Dc("$",s.fc(3,2,t.geckoData.volume,"2.0-0"),""),s.xb(3),s.Cc(s.ec(6,5,"VOLUME"))}}function Y(t,e){1&t&&(s.Pb(0,"div",29),s.Lb(1,"fa-icon",30),s.Ob()),2&t&&(s.xb(1),s.ic("icon",s.lc(2,V))("spin",!0))}function J(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"h5",33),s.Bc(2),s.dc(3,"number"),s.Ob(),s.Pb(4,"h6",34),s.Bc(5),s.dc(6,"translate"),s.Ob(),s.Mb()),2&t){const t=s.cc();s.xb(2),s.Dc("$",s.fc(3,2,t.geckoData.totalSupply*t.geckoData.price,"2.0-0"),""),s.xb(3),s.Cc(s.ec(6,5,"TOTAL_CAP"))}}function Z(t,e){1&t&&(s.Pb(0,"div",29),s.Lb(1,"fa-icon",30),s.Ob()),2&t&&(s.xb(1),s.ic("icon",s.lc(2,V))("spin",!0))}function tt(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"h5",31),s.Bc(2),s.dc(3,"number"),s.Ob(),s.Pb(4,"h6",32),s.Bc(5),s.dc(6,"translate"),s.Ob(),s.Mb()),2&t){const t=s.cc();s.xb(2),s.Dc("$",s.fc(3,2,t.geckoData.price,"1.0-4"),""),s.xb(3),s.Cc(s.ec(6,5,"PRICE"))}}const et=function(t){return{value:t}};let it=(()=>{class t{constructor(t,e,i,n,o){this.visibilityService=t,this.translate=e,this.location=i,this.navigationService=n,this.gecko=o,this.labels=b.a.tokenDistribution.map(t=>this.translate.instant(t.category)),this.data=b.a.tokenDistribution.map(t=>t.value),this.uniswapUrl=b.a.tokenAddress,this.unsubscribe$=new u.a,this.geckoData=null,this.loading=!1}ngOnInit(){this.loading=!0,this.gecko.getUnifundData().pipe(Object(h.a)(this.unsubscribe$)).subscribe(t=>{this.geckoData=t,this.loading=!1})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}onVisibilityChanged(t,e){t&&(this.location.replaceState("#"+e),this.navigationService.setCurrentNavPath(e)),this.visibilityService.setVisibility(e,t)}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(p.a),s.Kb(o.d),s.Kb(r.h),s.Kb(f.a),s.Kb(m))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-token"]],decls:74,vars:44,consts:[["id","token",1,"h-100"],[1,"container-lg"],[1,"container-fluid","d-flex","justify-content-center","align-items-center","h-100"],[1,"row"],[1,"col-12","col-md-8","d-flex","flex-column","justify-content-end"],["target","_blank","type","button",1,"btn","btn-primary","get-ifund-btn","d-flex","align-items-center","justify-content-center",3,"href"],[1,"sub","body-lg"],[1,"d-none","d-md-block","col-md-4"],["width","300px","src","assets/images/uniswap.svg","alt",""],[1,"section-spacing"],[1,"container-fluid"],[1,"col-12","p-4"],[1,"text-center"],[1,"row","fade-in"],[1,"col-12","col-md-3","p-3"],[1,"card"],[1,"card-body"],["class","d-flex justify-content-center align-items-center h-100",4,"ngIf"],[4,"ngIf"],[1,"col-sm-12","col-lg-6","order-2","order-xl-1","py-4"],[2,"margin-top","20%"],[3,"labels","data"],[1,"col","d-flex","justify-content-start","align-items-center","flex-column","py-4","order-1","order-xl-2"],[3,"innerHTML"],[3,"paragraphs"],[1,"row","d-flex","justify-content-center"],[1,"col-12","d-flex","justify-content-center","align-items-start","flex-column","py-4"],[1,"container-lg","footer-margin"],[1,"col","d-flex","justify-content-center","align-items-center"],[1,"d-flex","justify-content-center","align-items-center","h-100"],["size","2x",1,"accent-color",3,"icon","spin"],[1,"token-card-title"],[1,"card-subtitle","mb-2"],[1,"token-card-title","accent-color"],[1,"card-subtitle","text-body","mb-2"]],template:function(t,e){1&t&&(s.Pb(0,"section",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"div",4),s.Pb(5,"a",5),s.Pb(6,"span"),s.Bc(7),s.dc(8,"translate"),s.Ob(),s.Ob(),s.Pb(9,"h1"),s.Bc(10),s.dc(11,"translate"),s.Ob(),s.Pb(12,"p",6),s.Bc(13),s.dc(14,"translate"),s.Ob(),s.Ob(),s.Pb(15,"div",7),s.Lb(16,"img",8),s.Ob(),s.Ob(),s.Ob(),s.Lb(17,"div",9),s.Pb(18,"div",10),s.Pb(19,"div",3),s.Pb(20,"div",11),s.Pb(21,"h2",12),s.Bc(22),s.dc(23,"translate"),s.Ob(),s.Ob(),s.Ob(),s.Pb(24,"div",13),s.Pb(25,"div",14),s.Pb(26,"div",15),s.Pb(27,"div",16),s.zc(28,q,2,3,"div",17),s.zc(29,W,7,7,"ng-container",18),s.Ob(),s.Ob(),s.Ob(),s.Pb(30,"div",14),s.Pb(31,"div",15),s.Pb(32,"div",16),s.zc(33,$,2,3,"div",17),s.zc(34,Q,7,7,"ng-container",18),s.Ob(),s.Ob(),s.Ob(),s.Pb(35,"div",14),s.Pb(36,"div",15),s.Pb(37,"div",16),s.zc(38,Y,2,3,"div",17),s.zc(39,J,7,7,"ng-container",18),s.Ob(),s.Ob(),s.Ob(),s.Pb(40,"div",14),s.Pb(41,"div",15),s.Pb(42,"div",16),s.zc(43,Z,2,3,"div",17),s.zc(44,tt,7,7,"ng-container",18),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Lb(45,"div",9),s.Pb(46,"div",1),s.Pb(47,"div",3),s.Pb(48,"div",19),s.Pb(49,"div",20),s.Lb(50,"app-pie-chart",21),s.Ob(),s.Ob(),s.Pb(51,"div",22),s.Pb(52,"div"),s.Lb(53,"div",23),s.dc(54,"translate"),s.Lb(55,"p",23),s.dc(56,"translate"),s.dc(57,"number"),s.Lb(58,"app-uni-list",24),s.dc(59,"translate"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Lb(60,"div",9),s.Pb(61,"div",1),s.Pb(62,"div",25),s.Pb(63,"div",26),s.Pb(64,"div"),s.Lb(65,"div",23),s.dc(66,"translate"),s.Lb(67,"p",23),s.dc(68,"translate"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Lb(69,"div",9),s.Pb(70,"div",27),s.Pb(71,"div",3),s.Pb(72,"div",28),s.Lb(73,"app-still-questions"),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.xb(5),s.ic("href",e.uniswapUrl,s.uc),s.xb(2),s.Dc(" ",s.ec(8,21,"GET_TOKEN")," "),s.xb(3),s.Cc(s.ec(11,23,"IFUND_LISTED_ON_UNISWAP")),s.xb(3),s.Dc(" ",s.ec(14,25,"IFUND_TOKEN_HOLDERS")," "),s.xb(9),s.Dc(" ",s.ec(23,27,"TOKENOMICS")," "),s.xb(6),s.ic("ngIf",e.loading),s.xb(1),s.ic("ngIf",!e.loading),s.xb(4),s.ic("ngIf",e.loading),s.xb(1),s.ic("ngIf",!e.loading),s.xb(4),s.ic("ngIf",e.loading),s.xb(1),s.ic("ngIf",!e.loading),s.xb(4),s.ic("ngIf",e.loading),s.xb(1),s.ic("ngIf",!e.loading),s.xb(6),s.ic("labels",e.labels)("data",e.data),s.xb(2),s.ic("@scaleInOut",e.visibilityService.isVisible("token")),s.xb(1),s.ic("innerHTML",s.ec(54,29,"SECTION_TOKEN.HEADER"),s.tc),s.xb(2),s.ic("innerHTML",s.fc(56,31,"SECTION_TOKEN.INTRO",s.mc(42,et,s.ec(57,34,37e6))),s.tc),s.xb(3),s.ic("paragraphs",s.ec(59,36,"SECTION_TOKEN.BULLETS")),s.xb(7),s.ic("innerHTML",s.ec(66,38,"SECTION_TOKEN.TOKEN_USAGE"),s.tc),s.xb(2),s.ic("innerHTML",s.ec(68,40,"SECTION_TOKEN.TOKEN_USAGE_DESCRIPTION"),s.tc))},directives:[r.l,U,X.a,G,n.a],pipes:[o.c,r.d],styles:[".get-ifund-btn[_ngcontent-%COMP%]{font-size:32px!important;margin-bottom:32px}.token-card-title[_ngcontent-%COMP%]{font-weight:700;font-size:2rem}.card[_ngcontent-%COMP%]{border:1px solid #000;height:110px}.card-subtitle[_ngcontent-%COMP%]{color:#ed1987}"],data:{animation:[d.c,d.b]}}),t})();var nt=i("tyNb");const ot=[{path:"",component:it}];let rt=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[nt.e.forChild(ot)],nt.e]}),t})(),st=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[r.b,rt,o.b,l.a,c.a,a,n.c]]}),t})()},hSFZ:function(t,e){!function(){"use strict";if("undefined"!=typeof Chart){"function"!=typeof Object.assign&&(Object.assign=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])}return i});var t={};["pie","doughnut","polarArea","bar"].forEach((function(e){t[e]=!0})),e.prototype.setup=function(t,e){this.chart=t,this.ctx=t.ctx,this.args={},this.barTotal={};var i=t.config.options;this.options=Object.assign({position:"default",precision:0,fontSize:i.defaultFontSize,fontColor:i.defaultFontColor,fontStyle:i.defaultFontStyle,fontFamily:i.defaultFontFamily,shadowOffsetX:3,shadowOffsetY:3,shadowColor:"rgba(0,0,0,0.3)",shadowBlur:6,images:[],outsidePadding:2,textMargin:2,overlap:!0},e),"bar"===t.config.type&&(this.options.position="default",this.options.arc=!1,this.options.overlap=!0)},e.prototype.render=function(){this.labelBounds=[],this.chart.data.datasets.forEach(this.renderToDataset)},e.prototype.renderToDataset=function(t,e){this.totalPercentage=0,this.total=null;var i=this.args[e];i.meta.data.forEach((function(e,n){this.renderToElement(t,i,e,n)}).bind(this))},e.prototype.renderToElement=function(t,e,i,n){if(this.shouldRenderToElement(e.meta,i)){this.percentage=null;var o=this.getLabel(t,i,n);if(o){var r=this.ctx;r.save(),r.font=Chart.helpers.fontString(this.options.fontSize,this.options.fontStyle,this.options.fontFamily);var s=this.getRenderInfo(i,o);this.drawable(i,o,s)?(r.beginPath(),r.fillStyle=this.getFontColor(t,i,n),this.renderLabel(o,s),r.restore()):r.restore()}}},e.prototype.renderLabel=function(t,e){return this.options.arc?this.renderArcLabel(t,e):this.renderBaseLabel(t,e)},e.prototype.renderBaseLabel=function(t,e){var i=this.ctx;if("object"==typeof t)i.drawImage(t,e.x-t.width/2,e.y-t.height/2,t.width,t.height);else{i.save(),i.textBaseline="top",i.textAlign="center",this.options.textShadow&&(i.shadowOffsetX=this.options.shadowOffsetX,i.shadowOffsetY=this.options.shadowOffsetY,i.shadowColor=this.options.shadowColor,i.shadowBlur=this.options.shadowBlur);for(var n=t.split("\n"),o=0;o<n.length;o++)i.fillText(n[o],e.x,e.y-this.options.fontSize/2*n.length+this.options.fontSize*o);i.restore()}},e.prototype.renderArcLabel=function(t,e){var i=this.ctx,n=e.radius,o=e.view;if(i.save(),i.translate(o.x,o.y),"string"==typeof t){i.rotate(e.startAngle),i.textBaseline="middle",i.textAlign="left";var r=t.split("\n"),s=0,a=[],c=0;"border"===this.options.position&&(c=(r.length-1)*this.options.fontSize/2);for(var l=0;l<r.length;++l){var h=i.measureText(r[l]);h.width>s&&(s=h.width),a.push(h.width)}for(l=0;l<r.length;++l){var d=r[l],b=(r.length-1-l)*-this.options.fontSize+c;i.save(),i.rotate((s-a[l])/2/n);for(var u=0;u<d.length;u++){var p=d.charAt(u);h=i.measureText(p),i.save(),i.translate(0,-1*n),i.fillText(p,0,b),i.restore(),i.rotate(h.width/n)}i.restore()}}else i.rotate((o.startAngle+Math.PI/2+e.endAngle)/2),i.translate(0,-1*n),this.renderLabel(t,{x:0,y:0});i.restore()},e.prototype.shouldRenderToElement=function(t,e){return!t.hidden&&!e.hidden&&(this.options.showZero||"polarArea"===this.chart.config.type?0!==e._view.outerRadius:0!==e._view.circumference)},e.prototype.getLabel=function(t,e,i){var n;if("function"==typeof this.options.render)n=this.options.render({label:this.chart.config.data.labels[i],value:t.data[i],percentage:this.getPercentage(t,e,i),dataset:t,index:i});else switch(this.options.render){case"value":n=t.data[i];break;case"label":n=this.chart.config.data.labels[i];break;case"image":n=this.options.images[i]?this.loadImage(this.options.images[i]):"";break;case"percentage":default:n=this.getPercentage(t,e,i)+"%"}return"object"==typeof n?n=this.loadImage(n):null!=n&&(n=n.toString()),n},e.prototype.getFontColor=function(t,e,i){var n=this.options.fontColor;return"function"==typeof n?n=n({label:this.chart.config.data.labels[i],value:t.data[i],percentage:this.getPercentage(t,e,i),backgroundColor:t.backgroundColor[i],dataset:t,index:i}):"string"!=typeof n&&(n=n[i]||this.chart.config.options.defaultFontColor),n},e.prototype.getPercentage=function(t,e,i){if(null!==this.percentage)return this.percentage;var n;if("polarArea"===this.chart.config.type){if(null===this.total){this.total=0;for(var o=0;o<t.data.length;++o)this.total+=t.data[o]}n=t.data[i]/this.total*100}else if("bar"===this.chart.config.type){if(void 0===this.barTotal[i])for(this.barTotal[i]=0,o=0;o<this.chart.data.datasets.length;++o)this.barTotal[i]+=this.chart.data.datasets[o].data[i];n=t.data[i]/this.barTotal[i]*100}else n=e._view.circumference/this.chart.config.options.circumference*100;return n=parseFloat(n.toFixed(this.options.precision)),this.options.showActualPercentages||("bar"===this.chart.config.type&&(this.totalPercentage=this.barTotalPercentage[i]||0),this.totalPercentage+=n,this.totalPercentage>100&&(n-=this.totalPercentage-100,n=parseFloat(n.toFixed(this.options.precision))),"bar"===this.chart.config.type&&(this.barTotalPercentage[i]=this.totalPercentage)),this.percentage=n,n},e.prototype.getRenderInfo=function(t,e){return"bar"===this.chart.config.type?this.getBarRenderInfo(t,e):this.options.arc?this.getArcRenderInfo(t,e):this.getBaseRenderInfo(t,e)},e.prototype.getBaseRenderInfo=function(t,e){if("outside"===this.options.position||"border"===this.options.position){var i,n,o=t._view,r=o.startAngle+(o.endAngle-o.startAngle)/2,s=o.outerRadius/2;if("border"===this.options.position?n=(o.outerRadius-s)/2+s:"outside"===this.options.position&&(n=o.outerRadius-s+s+this.options.textMargin),i={x:o.x+Math.cos(r)*n,y:o.y+Math.sin(r)*n},"outside"===this.options.position){var a=this.options.textMargin+this.measureLabel(e).width/2;i.x+=i.x<o.x?-a:a}return i}return t.tooltipPosition()},e.prototype.getArcRenderInfo=function(t,e){var i,n=t._view;i="outside"===this.options.position?n.outerRadius+this.options.fontSize+this.options.textMargin:"border"===this.options.position?(n.outerRadius/2+n.outerRadius)/2:(n.innerRadius+n.outerRadius)/2;var o=n.startAngle,r=n.endAngle,s=r-o;return o+=Math.PI/2,{radius:i,startAngle:o+=((r+=Math.PI/2)-(this.measureLabel(e).width/i+o))/2,endAngle:r,totalAngle:s,view:n}},e.prototype.getBarRenderInfo=function(t,e){var i=t.tooltipPosition();return i.y-=this.measureLabel(e).height/2+this.options.textMargin,i},e.prototype.drawable=function(t,e,i){if(this.options.overlap)return!0;if(this.options.arc)return i.endAngle-i.startAngle<=i.totalAngle;var n=this.measureLabel(e),o=i.x-n.width/2,r=i.x+n.width/2,s=i.y-n.height/2,a=i.y+n.height/2;return"outside"===this.options.renderInfo?this.outsideInRange(o,r,s,a):t.inRange(o,s)&&t.inRange(o,a)&&t.inRange(r,s)&&t.inRange(r,a)},e.prototype.outsideInRange=function(t,e,i,n){for(var o=this.labelBounds,r=0;r<o.length;++r){for(var s=o[r],a=[[t,i],[t,n],[e,i],[e,n]],c=0;c<a.length;++c){var l=a[c][1];if((h=a[c][0])>=s.left&&h<=s.right&&l>=s.top&&l<=s.bottom)return!1}for(a=[[s.left,s.top],[s.left,s.bottom],[s.right,s.top],[s.right,s.bottom]],c=0;c<a.length;++c){var h;if(l=a[c][1],(h=a[c][0])>=t&&h<=e&&l>=i&&l<=n)return!1}}return o.push({left:t,right:e,top:i,bottom:n}),!0},e.prototype.measureLabel=function(t){if("object"==typeof t)return{width:t.width,height:t.height};for(var e=0,i=t.split("\n"),n=0;n<i.length;++n){var o=this.ctx.measureText(i[n]);o.width>e&&(e=o.width)}return{width:e,height:this.options.fontSize*i.length}},e.prototype.loadImage=function(t){var e=new Image;return e.src=t.src,e.width=t.width,e.height=t.height,e},Chart.plugins.register({id:"labels",beforeDatasetsUpdate:function(i,n){if(t[i.config.type]){Array.isArray(n)||(n=[n]);var o=n.length;i._labels&&o===i._labels.length||(i._labels=n.map((function(){return new e})));for(var r=!1,s=0,a=0;a<o;++a){var c=i._labels[a];if(c.setup(i,n[a]),"outside"===c.options.position){r=!0;var l=1.5*c.options.fontSize+c.options.outsidePadding;l>s&&(s=l)}}r&&(i.chartArea.top+=s,i.chartArea.bottom-=s)}},afterDatasetUpdate:function(e,i,n){t[e.config.type]&&e._labels.forEach((function(t){t.args[i.index]=i}))},beforeDraw:function(e){t[e.config.type]&&e._labels.forEach((function(t){t.barTotalPercentage={}}))},afterDatasetsDraw:function(e){t[e.config.type]&&e._labels.forEach((function(t){t.render()}))}})}else console.error("Can not find Chart object.");function e(){this.renderToDataset=this.renderToDataset.bind(this)}}()}}]);