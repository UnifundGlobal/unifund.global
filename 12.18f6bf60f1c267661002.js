(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"mx+R":function(e,t,n){"use strict";n.r(t),n.d(t,"LandingModule",(function(){return P}));var l=n("sYmb"),a=n("ofXK"),r=n("o5C3"),s=n("AytR"),i=n("fXoL"),c=n("1kSV"),o=n("z6cu"),d=n("uhci"),b=n("kECv"),u=n("9YO0");let h=(()=>{class e{constructor(e,t,n){this.leaderboardsService=e,this.decimalPipe=t,this.tableService=n,this.leaderboards=[],this.leaderboardsTableEntries=[[]],this.tableHeader=[{key:"idx",value:"#",classes:"col d-none d-lg-flex small flex-shrink-1"},{key:"title",value:"Smallname",classes:"col d-lg-flex"},{key:"totalContributions",value:"total contribution",classes:"col d-none d-lg-flex"},{key:"currentEth",value:"current eth",classes:"col d-none d-md-flex"},{key:"pnlETH",value:"pnl",classes:"col d-xl-flex"},{key:"dailyPnlETH",value:"dailypnlEth",classes:"col d-xl-flex"},{key:"weeklyPnlETH",value:"weeklypnlEth",classes:"col d-none d-xl-flex"}],this.sortOrder="ASC",this.sortedByKey={key:"",direction:""},this.handleSuccess=e=>{this.leaderboards=e.sort((e,t)=>e.pnl.eth.allTime<t.pnl.eth.allTime?1:-1);let t=1;this.leaderboards.forEach(e=>{e.indexNumber=t,t++}),this.leaderboardsTableEntries=this.mapToTableCols(e).slice(0,4)}}ngOnInit(){this.leaderboardsService.getLeaderboardsData().pipe().subscribe({next:this.handleSuccess,error:this.handleError})}handleError(e){return Object(o.a)(e)}mapToTableCols(e){return e.map((e,t)=>[{key:"idx",value:e.indexNumber,classes:"col d-none d-lg-flex small flex-shrink-1"},{key:"title",value:e.title,classes:"col d-lg-flex"},{key:"totalContributions",value:""+e.totalContributions,classes:"col d-none d-lg-flex t-right"},{key:"currentEth",value:this.getCurrentEth(e),classes:"col d-none d-md-flex t-right"},{key:"pnlETH",value:this.getPnlValue(e),classes:"col d-xl-flex t-right"},{key:"dailyPnlETH",value:this.getPnlValueDaily(e),classes:"col d-xl-flex t-right"},{key:"weeklyPnlETH",value:this.getPnlValueWeekly(e),classes:"col d-none d-xl-flex"}])}getPnlValue(e){return this.roundToTwo(100*(e.pnl.eth.allTime-1))}getPnlValueDaily(e){return this.roundToTwo(100*(e.pnl.eth.daily-1))}getPnlValueWeekly(e){return this.roundToTwo(100*(e.pnl.eth.weekly-1))}roundToTwo(e){return Math.round(100*e+Number.EPSILON)/100}getCurrentEth(e){return this.roundToTwo(e.pnl.eth.allTime*e.totalContributions)}getCurrentDollarPnl(e){return this.roundToTwo(100*(e[5].value-1))}transformToTwoDecimalPlaces(e){return this.decimalPipe.transform(e,"1.2-2")}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(d.a),i.Kb(a.d),i.Kb(b.a))},e.\u0275cmp=i.Eb({type:e,selectors:[["small-leaderboard"]],decls:2,vars:3,consts:[[1,"size"],[3,"header","entries","static"]],template:function(e,t){1&e&&(i.Pb(0,"div",0),i.Lb(1,"app-table",1),i.Ob()),2&e&&(i.xb(1),i.ic("header",t.tableHeader)("entries",t.leaderboardsTableEntries)("static",!0))},directives:[u.a],styles:["@media (min-width:800px){.size[_ngcontent-%COMP%]{min-width:500px}}"]}),e})(),m=(()=>{class e{constructor(e){this.modalService=e,this.actions=s.a.quickActions}ngOnInit(){}openAnnouncement(){const e=this.modalService.open(r.a);e.componentInstance.img="assets/images/trading-comp-1.png",e.componentInstance.title="ANNOUNCEMENT.TITLE",e.componentInstance.content="ANNOUNCEMENT.CONTENT"}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(c.g))},e.\u0275cmp=i.Eb({type:e,selectors:[["app-landing"]],decls:31,vars:21,consts:[[1,"container-fluid","container-lg","p-4","h-100","fade-in"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-sm-8","col-lg-6","d-flex","justify-content-center","align-items-center","flex-column"],[1,"text-center"],[1,"text-center","sub"],[1,"d-flex","flex-column","justify-content-center","align-items-center","flex-wrap","my-4"],[1,"d-flex","justify-content-center","flex-wrap"],["target","_blank","type","button",1,"btn","btn-outline-primary","btn-lg","d-flex","align-items-center","m-1",3,"href"],[1,"d-flex","flex-column","justify-content-center","align-items-center","flex-wrap","my-6"],[1,"mt-2"],["href","/#/leaderboards","alt","View all fund performances",1,"rainbow-button","mt-3"]],template:function(e,t){1&e&&(i.Pb(0,"section",0),i.Pb(1,"div",1),i.Pb(2,"div",2),i.Pb(3,"h1",3),i.Bc(4),i.dc(5,"translate"),i.Ob(),i.Pb(6,"h3",4),i.Bc(7),i.dc(8,"translate"),i.Ob(),i.Pb(9,"div",5),i.Pb(10,"div",6),i.Pb(11,"a",7),i.Pb(12,"span"),i.Bc(13),i.dc(14,"translate"),i.Ob(),i.Ob(),i.Pb(15,"a",7),i.Pb(16,"span"),i.Bc(17),i.dc(18,"translate"),i.Ob(),i.Ob(),i.Pb(19,"a",7),i.Pb(20,"span"),i.Bc(21),i.dc(22,"translate"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(23,"div",8),i.Pb(24,"h2",4),i.Bc(25),i.dc(26,"translate"),i.Ob(),i.Pb(27,"div",9),i.Lb(28,"small-leaderboard"),i.Ob(),i.Ob(),i.Pb(29,"div",8),i.Lb(30,"a",10),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.xb(4),i.Cc(i.ec(5,9,"WELCOME")),i.xb(3),i.Cc(i.ec(8,11,"WELCOME_SUB")),i.xb(4),i.ic("href",t.actions.join,i.uc),i.xb(2),i.Dc(" ",i.ec(14,13,"JOIN_GROUP")," "),i.xb(2),i.ic("href",t.actions.create,i.uc),i.xb(2),i.Dc(" ",i.ec(18,15,"CREATE_GROUP")," "),i.xb(2),i.ic("href",t.actions.stake,i.uc),i.xb(2),i.Dc(" ",i.ec(22,17,"STAKE")," "),i.xb(4),i.Cc(i.ec(26,19,"Best performing Unifunds")))},directives:[h],pipes:[l.c],styles:[".landing-main[_ngcontent-%COMP%]{padding:32px 0;background:hsla(0,0%,100%,.9098039215686274);border-radius:5px}"],data:{animation:[]}}),e})();var p=n("tyNb");const f=[{path:"",component:m,data:{state:"landing"}}];let x=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[p.e.forChild(f)],p.e]}),e})();var y=n("4V29"),g=n("LrK5"),T=n("6NWb");let v=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},providers:[a.d],imports:[[a.b,l.b,T.c,y.a,l.b,g.a]]}),e})(),P=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[a.b,x,l.b,y.a,l.b,g.a,v]]}),e})()}}]);