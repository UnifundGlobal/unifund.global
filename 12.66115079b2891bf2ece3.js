(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"mx+R":function(n,e,t){"use strict";t.r(e),t.d(e,"LandingModule",(function(){return k}));var i=t("sYmb"),c=t("ofXK"),a=t("o5C3"),o=t("AytR"),r=t("fXoL"),s=t("1kSV"),l=t("z6cu"),b=t("uhci"),d=t("kECv"),u=t("6NWb");function p(n,e){1&n&&r.Lb(0,"fa-icon",17),2&n&&r.ic("icon","medal")}function f(n,e){1&n&&r.Lb(0,"fa-icon",18),2&n&&r.ic("icon","medal")}function g(n,e){1&n&&r.Lb(0,"fa-icon",19),2&n&&r.ic("icon","medal")}function m(n,e){1&n&&(r.Pb(0,"span"),r.Bc(1,"+"),r.Ob())}function h(n,e){1&n&&r.Lb(0,"span")}function P(n,e){1&n&&(r.Pb(0,"span"),r.Bc(1,"+"),r.Ob())}function O(n,e){1&n&&r.Lb(0,"span")}const x=function(){return["fab","ethereum"]},y=function(n,e){return{up:n,down:e}};function C(n,e){if(1&n&&(r.Pb(0,"tr"),r.Pb(1,"th",7),r.zc(2,p,1,1,"fa-icon",8),r.zc(3,f,1,1,"fa-icon",9),r.zc(4,g,1,1,"fa-icon",10),r.Ob(),r.Pb(5,"td"),r.Bc(6),r.Ob(),r.Pb(7,"td",11),r.Bc(8),r.dc(9,"number"),r.Lb(10,"fa-icon",12),r.Ob(),r.Pb(11,"td",13),r.Bc(12),r.dc(13,"number"),r.Lb(14,"fa-icon",12),r.Ob(),r.Pb(15,"td"),r.Pb(16,"span",14),r.zc(17,m,2,0,"span",15),r.zc(18,h,1,0,"span",15),r.Pb(19,"span",16),r.Bc(20),r.dc(21,"number"),r.Ob(),r.Ob(),r.Ob(),r.Pb(22,"td",11),r.Pb(23,"span",14),r.zc(24,P,2,0,"span",15),r.zc(25,O,1,0,"span",15),r.Pb(26,"span",16),r.Bc(27),r.dc(28,"number"),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&n){const n=e.$implicit,t=r.cc();r.xb(2),r.ic("ngIf",1==n.indexNumber),r.xb(1),r.ic("ngIf",2==n.indexNumber),r.xb(1),r.ic("ngIf",3==n.indexNumber),r.xb(2),r.Cc(n.title),r.xb(2),r.Dc("",r.ec(9,16,n.totalContributions)," "),r.xb(2),r.ic("icon",r.lc(24,x)),r.xb(2),r.Dc("",r.ec(13,18,t.getCurrentEth(n))," "),r.xb(2),r.ic("icon",r.lc(25,x)),r.xb(2),r.ic("ngClass",r.nc(26,y,t.isUp(t.getPnlValue(n)),!t.isUp(t.getPnlValue(n)))),r.xb(1),r.ic("ngIf",t.isUp(t.getPnlValue(n))),r.xb(1),r.ic("ngIf",!t.isUp(t.getPnlValue(n))),r.xb(2),r.Dc("",r.ec(21,20,t.getPnlValue(n)),"%"),r.xb(3),r.ic("ngClass",r.nc(29,y,t.isUp(t.getPnlValueDaily(n)),!t.isUp(t.getPnlValueDaily(n)))),r.xb(1),r.ic("ngIf",t.isUp(t.getPnlValueDaily(n))),r.xb(1),r.ic("ngIf",!t.isUp(t.getPnlValueDaily(n))),r.xb(2),r.Dc("",r.ec(28,22,t.getPnlValueDaily(n)),"%")}}function w(n,e){1&n&&(r.Pb(0,"div",20),r.Lb(1,"img",21),r.Ob())}let M=(()=>{class n{constructor(n,e,t){this.leaderboardsService=n,this.decimalPipe=e,this.tableService=t,this.leaderboards=[],this.sortOrder="ASC",this.sortedByKey={key:"",direction:""},this.handleSuccess=n=>{this.leaderboards=n.sort((n,e)=>n.pnl.eth.allTime<e.pnl.eth.allTime?1:-1);let e=1;this.leaderboards.forEach(n=>{n.indexNumber=e,e++}),this.leaderboards=this.leaderboards.slice(0,4)}}ngOnInit(){this.leaderboardsService.getLeaderboardsData().pipe().subscribe({next:this.handleSuccess,error:this.handleError})}handleError(n){return Object(l.a)(n)}getPnlValue(n){return this.roundToTwo(100*(n.pnl.eth.allTime-1))}getPnlValueDaily(n){return this.roundToTwo(100*(n.pnl.eth.daily-1))}getPnlValueWeekly(n){return this.roundToTwo(100*(n.pnl.eth.weekly-1))}roundToTwo(n){return Math.round(100*n+Number.EPSILON)/100}getCurrentEth(n){return this.roundToTwo(n.pnl.eth.allTime*n.totalContributions)}getCurrentDollarPnl(n){return this.roundToTwo(100*(n[5].value-1))}transformToTwoDecimalPlaces(n){return this.decimalPipe.transform(n,"1.2-2")}isUp(n){return!!(n&&n>=1)}}return n.\u0275fac=function(e){return new(e||n)(r.Kb(b.a),r.Kb(c.d),r.Kb(d.a))},n.\u0275cmp=r.Eb({type:n,selectors:[["small-leaderboard"]],decls:24,vars:17,consts:[[1,"size"],[1,"table","table-fade"],["scope","col"],["scope","col",1,"hide"],["scope","col",1,"hide2"],[4,"ngFor","ngForOf"],["class","spinner",4,"ngIf"],["scope","row"],["class","ml-2 firstMedal",3,"icon",4,"ngIf"],["class","ml-2 secondMedal",3,"icon",4,"ngIf"],["class","ml-2 thirdMedal",3,"icon",4,"ngIf"],[1,"hide"],[1,"p-1","eth-logo","mr-2",3,"icon"],[1,"hide2"],[1,"totalPnl","text-right",3,"ngClass"],[4,"ngIf"],[1,"pnlValue"],[1,"ml-2","firstMedal",3,"icon"],[1,"ml-2","secondMedal",3,"icon"],[1,"ml-2","thirdMedal",3,"icon"],[1,"spinner"],["src","assets/images/unifund.svg","width","64","alt","unifund-spinner","loading","lazy",1,"spinning"]],template:function(n,e){1&n&&(r.Pb(0,"div",0),r.Pb(1,"table",1),r.Pb(2,"thead"),r.Pb(3,"tr"),r.Pb(4,"th",2),r.Bc(5,"#"),r.Ob(),r.Pb(6,"th",2),r.Bc(7),r.dc(8,"translate"),r.Ob(),r.Pb(9,"th",3),r.Bc(10),r.dc(11,"translate"),r.Ob(),r.Pb(12,"th",4),r.Bc(13),r.dc(14,"translate"),r.Ob(),r.Pb(15,"th",2),r.Bc(16),r.dc(17,"translate"),r.Ob(),r.Pb(18,"th",3),r.Bc(19),r.dc(20,"translate"),r.Ob(),r.Ob(),r.Ob(),r.Pb(21,"tbody"),r.zc(22,C,29,32,"tr",5),r.Ob(),r.Ob(),r.zc(23,w,2,0,"div",6),r.Ob()),2&n&&(r.xb(7),r.Cc(r.ec(8,7,"Smallname")),r.xb(3),r.Cc(r.ec(11,9,"total contribution")),r.xb(3),r.Cc(r.ec(14,11,"current eth")),r.xb(3),r.Cc(r.ec(17,13,"pnl")),r.xb(3),r.Cc(r.ec(20,15,"dailypnlEth")),r.xb(3),r.ic("ngForOf",e.leaderboards),r.xb(1),r.ic("ngIf",!e.leaderboards||e.leaderboards.length<=1))},directives:[c.k,c.l,u.a,c.j],pipes:[i.c,c.d],styles:['@media (min-width:800px){.size[_ngcontent-%COMP%]{min-width:500px}}@media (max-width:750px){.hide[_ngcontent-%COMP%]{display:none}}@media (max-width:450px){.hide2[_ngcontent-%COMP%]{display:none}}.size[_ngcontent-%COMP%]{font-size:.75rem;background-color:hsla(0,0%,100%,.2);opacity:.9}.spinner[_ngcontent-%COMP%]{width:100%;padding:50px 25px 25px;background-color:#fff;opacity:.75}.spinner[_ngcontent-%COMP%]   .spinning[_ngcontent-%COMP%]{margin:auto;display:block}.table-fade[_ngcontent-%COMP%]{width:100%;padding:0;position:relative}.table-fade[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;bottom:0;right:0;height:70%;width:100%;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.7))}.down[_ngcontent-%COMP%]{color:#ff3b69}.up[_ngcontent-%COMP%]{color:#02c77a}.eth-logo[_ngcontent-%COMP%]{opacity:.5}.firstMedal[_ngcontent-%COMP%]{color:#ffc107;font-size:1.25rem}.secondMedal[_ngcontent-%COMP%]{color:silver;font-size:1.25rem}.thirdMedal[_ngcontent-%COMP%]{color:#b08d57;font-size:1.25rem}.spinning[_ngcontent-%COMP%]{animation-name:spin;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),n})(),v=(()=>{class n{constructor(n){this.modalService=n,this.actions=o.a.quickActions}ngOnInit(){}openAnnouncement(){const n=this.modalService.open(a.a);n.componentInstance.img="assets/images/trading-comp-1.png",n.componentInstance.title="ANNOUNCEMENT.TITLE",n.componentInstance.content="ANNOUNCEMENT.CONTENT"}}return n.\u0275fac=function(e){return new(e||n)(r.Kb(s.g))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-landing"]],decls:31,vars:21,consts:[[1,"container-fluid","container-lg","p-4","h-100","fade-in"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-sm-8","col-lg-6","d-flex","justify-content-center","align-items-center","flex-column"],[1,"text-center"],[1,"text-center","sub"],[1,"d-flex","flex-column","justify-content-center","align-items-center","flex-wrap","my-4"],[1,"d-flex","justify-content-center","flex-wrap"],["target","_blank","type","button",1,"btn","btn-outline-primary","btn-lg","d-flex","align-items-center","m-1",3,"href"],[1,"d-flex","flex-column","justify-content-center","align-items-center","flex-wrap","my-6"],[1,"mt-2"],["href","/#/leaderboards","alt","View all fund performances",1,"rainbow-button","mt-3"]],template:function(n,e){1&n&&(r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"h1",3),r.Bc(4),r.dc(5,"translate"),r.Ob(),r.Pb(6,"h3",4),r.Bc(7),r.dc(8,"translate"),r.Ob(),r.Pb(9,"div",5),r.Pb(10,"div",6),r.Pb(11,"a",7),r.Pb(12,"span"),r.Bc(13),r.dc(14,"translate"),r.Ob(),r.Ob(),r.Pb(15,"a",7),r.Pb(16,"span"),r.Bc(17),r.dc(18,"translate"),r.Ob(),r.Ob(),r.Pb(19,"a",7),r.Pb(20,"span"),r.Bc(21),r.dc(22,"translate"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(23,"div",8),r.Pb(24,"h2",4),r.Bc(25),r.dc(26,"translate"),r.Ob(),r.Pb(27,"div",9),r.Lb(28,"small-leaderboard"),r.Ob(),r.Ob(),r.Pb(29,"div",8),r.Lb(30,"a",10),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&n&&(r.xb(4),r.Cc(r.ec(5,9,"WELCOME")),r.xb(3),r.Cc(r.ec(8,11,"WELCOME_SUB")),r.xb(4),r.ic("href",e.actions.join,r.uc),r.xb(2),r.Dc(" ",r.ec(14,13,"JOIN_GROUP")," "),r.xb(2),r.ic("href",e.actions.create,r.uc),r.xb(2),r.Dc(" ",r.ec(18,15,"CREATE_GROUP")," "),r.xb(2),r.ic("href",e.actions.stake,r.uc),r.xb(2),r.Dc(" ",r.ec(22,17,"STAKE")," "),r.xb(4),r.Cc(r.ec(26,19,"Best performing Unifunds")))},directives:[M],pipes:[i.c],styles:[".landing-main[_ngcontent-%COMP%]{padding:32px 0;background:hsla(0,0%,100%,.9098039215686274);border-radius:5px}"],data:{animation:[]}}),n})();var T=t("tyNb");const I=[{path:"",component:v,data:{state:"landing"}}];let E=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(e){return new(e||n)},imports:[[T.e.forChild(I)],T.e]}),n})();var B=t("4V29"),_=t("LrK5");let N=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(e){return new(e||n)},providers:[c.d],imports:[[c.b,i.b,u.c,B.a,i.b,_.a]]}),n})(),k=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(e){return new(e||n)},imports:[[c.b,E,i.b,B.a,i.b,_.a,N]]}),n})()}}]);