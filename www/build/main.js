webpackJsonp([7],{140:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(2),n(58);var a=n(144),i=(n(45),function(){function t(t,e,n){this.settings=t,this.translate=e,this.http=n,this.CAT_LIST=a.a.CAT_LIST,this.label={}}return t.prototype.init=function(){var t=this,e=[];e.fr=[134,138,137,135,140,141,142,136,139,133],e.en=[21690,21694,21693,21691,21696,21697,21698,21692,21695,21689],e.es=[24793,24797,24796,24794,24799,24800,24801,24795,24798,24792],e.pt=[24803,24807,24806,24804,24809,24810,24811,24805,24808,24802],this.translate.get("GENERAL_OK").subscribe(function(e){t.label.GENERAL_OK=e}),this.translate.get("GENERAL_ANNULER").subscribe(function(e){t.label.GENERAL_ANNULER=e}),this.translate.get("GENERAL_ERREUR").subscribe(function(e){t.label.GENERAL_ERREUR=e}),this.translate.get("MAIN_SIGNALER").subscribe(function(e){t.label.MAIN_SIGNALER=e}),this.translate.get("MAIN_SIGNALER_1").subscribe(function(e){t.label.MAIN_SIGNALER_1=e}),this.translate.get("MAIN_SIGNALER_2").subscribe(function(e){t.label.MAIN_SIGNALER_2=e}),this.translate.get("MAIN_SIGNALER_3").subscribe(function(e){t.label.MAIN_SIGNALER_3=e}),this.translate.get("MODAL_ADD_HINT_LIST").subscribe(function(e){t.label.MODAL_ADD_HINT_LIST=e}),this.translate.get("MODAL_ADD_FORM_ERROR").subscribe(function(e){t.label.MODAL_ADD_FORM_ERROR=e}),this.translate.get("MODAL_ADD_FORM_SEND").subscribe(function(e){t.label.MODAL_ADD_FORM_SEND=e}),this.translate.get("MODAL_ADD_ANOTHER").subscribe(function(e){t.label.MODAL_ADD_ANOTHER=e}),this.translate.get("MODAL_ADD_NO_NETWORK").subscribe(function(e){t.label.MODAL_ADD_NO_NETWORK=e}),this.translate.get("MODAL_ADD_SEARCH_DOUBLE").subscribe(function(e){t.label.MODAL_ADD_SEARCH_DOUBLE=e}),this.translate.get("MAIN_HINT_LIST").subscribe(function(e){t.label.MAIN_HINT_LIST=e}),this.translate.get("MAIN_URL_SHARE").subscribe(function(e){t.label.MAIN_URL_SHARE=e}),this.translate.get("MAIN_SHARE_DEBUT").subscribe(function(e){t.label.MAIN_SHARE_DEBUT=e}),this.translate.get("MAIN_SHARE_FIN").subscribe(function(e){t.label.MAIN_SHARE_FIN=e}),this.translate.get("MAIN_ATTENTE").subscribe(function(e){t.label.MAIN_ATTENTE=e});for(var n=function(n){a.CAT_LIST[n].id=e[a.settings.allSettings.language][n],a.translate.get("CAT_"+n).subscribe(function(e){t.CAT_LIST[n].label=e})},a=this,i=0;i<this.CAT_LIST.length;i++)n(i)},t}())},142:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(2);var a=n(301),i=(n.n(a),n(94),n(45),n(144)),o=(n(97),n(95),n(302)),l=(n.n(o),n(207)),r=(n.n(l),function(){function t(t,e,n,a){this.ga=t,this.api=e,this.settings=n,this.pub=a,this.calc=function(t){return t.pc1=Math.round(100*t.a/(t.a+t.b)),t.pc2=100-t.pc1,t.l>10&&(t.pcl=Math.round(100*t.l/(t.l+t.u))),t},this.asynTaskRunning=!1,this.cpt=0}return t.prototype.loadDB=function(){var t=this;return new Promise(function(e,n){var a=new l;t.db=new o("JTP.db",{autosave:!0,autosaveInterval:4e3,adapter:a}),t.db.loadDatabase({},function(n){if(n)return console.log("error : "+n),!1;t.jtp=t.db.getCollection("JTP"),e()})})},t.prototype.initDB=function(t){var e=this;return new Promise(function(n,a){var i=[];i.lang=t,e.settings.setValue("id_max",0);e.api.get("initGame",i).share().subscribe(function(t){e.db.getCollection("JTP")&&e.db.removeCollection("JTP"),e.jtp=e.db.addCollection("JTP",{unique:"i"}),e.jtp.insert(t.items.map(e.calc)),n(!0)},function(t){console.error("ERROR",t)})})},t.prototype.startAsynTasks=function(t){void 0===t&&(t=!1),this.lang=this.settings.allSettings.language,this.id_max=this.settings.allSettings.id_max,this.asynTaskRunning&&!t||(this.getMoreQ(),this.getStat()),this.asynTaskRunning=!0},t.prototype.getMoreQ=function(){var t=this;setTimeout(function(){var e=[];e.lang=t.lang,e.id_max=t.id_max;t.api.get("moreQ",e).share().subscribe(function(e){if(""!==e.fi)t.id_max=e.fi,t.settings.setValue("id_max",e.fi);else if(e.items.length>0){for(var n=0;n<e.items.length;n++)t.jtp.by("i",e.items[n].i)||t.jtp.insert(t.calc(e.items[n]));t.id_max=e.items[e.items.length-1].i,t.settings.setValue("id_max",e.items[e.items.length-1].i)}},function(t){console.error("ERROR",t)}),t.getMoreQ()},25e3)},t.prototype.getStat=function(){var t=this;setTimeout(function(){var e=[];e.lang=t.lang;t.api.get("stat",e).share().subscribe(function(e){if(e.items.length>100){t.jtp.findAndUpdate({},function(t){t.e=2});for(var n=0;n<e.items.length;n++){var a=t.jtp.by("i",e.items[n].i);a&&(a.a=e.items[n].a,a.b=e.items[n].b,a.l=e.items[n].l,a.u=e.items[n].u,a.e=e.items[n].e,t.jtp.update(t.calc(a)))}t.jtp.findAndRemove({e:2})}},function(t){console.error("ERROR",t)})},35e3)},t.prototype.insert=function(t){this.jtp.insert(t)},t.prototype.getQ=function(t,e){return this.sessionQ.slice(t,e)},t.prototype.capitalizeFirstLetter=function(t){return t[0].toUpperCase()+t.slice(1)},t.prototype.createSession=function(t){var e=!0,n=i.a.CAT_LIST[2].id;if(t&&t.search)this.sessionQ=this.jtp.chain().find({$and:[{$or:[{r:{$containsAny:[t.search.toLowerCase(),t.search.toUpperCase(),this.capitalizeFirstLetter(t.search.toLowerCase())]}},{s:{$containsAny:[t.search.toLowerCase(),t.search.toUpperCase(),this.capitalizeFirstLetter(t.search.toLowerCase())]}}]},{c:{$ne:n}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data();else if(t&&t.typePage){if(this.ga.track(this.settings.allSettings.language+" typePage "+t.typePage),1===t.typePage)this.sessionQ=this.jtp.chain().find({$and:[{pcl:{$gt:70}},{c:{$ne:n}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data();else if(2===t.typePage)this.sessionQ=this.jtp.chain().find({$and:[{pc1:{$between:[40,60]}},{c:{$ne:n}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data();else if(3===t.typePage)this.sessionQ=this.jtp.chain().find({$and:[{y:{$eq:!0}},{c:{$ne:n}}]}).data();else if(4===t.typePage){e=!1,this.sessionQ=this.jtp.find({i:{$in:this.settings.allSettings.addArr||[]}}).reverse()}}else t&&t.catId?(this.ga.track(this.settings.allSettings.language+" catId "+t.catId),this.sessionQ=this.jtp.chain().find({$and:[{c:{$eq:t.catId}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data()):(this.ga.track(this.settings.allSettings.language+" random"),this.sessionQ=this.jtp.chain().find({$and:[{answered:{$ne:1}},{answered:{$ne:2}},{c:{$ne:n}}]}).data());e&&this.randomize(this.sessionQ)},t.prototype.randomize=function(t){var e,n,a;for(n=t.length;n;)e=Math.random()*n--|0,a=t[n],t[n]=t[e],t[e]=a},t.prototype.update=function(t,e){void 0===e&&(e=!1),e&&(this.cpt++,this.cpt%30==0&&this.pub.initPub()),this.jtp.update(t)},t}())},144:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={LANGUAGE_LIST:[{code:"fr",label:"Francais"},{code:"en",label:"English"},{code:"es",label:"Español"},{code:"pt",label:"Português"}],PRODUCTION:!1,LIMIT_Q:10,LANGUAGE_DEFAULT:"fr",CAT_LIST:[{id:134,color:"positive",bg:"positive-bg",label:"A vie",img:"target.png"},{id:138,color:"positive",bg:"positive-bg",label:"Actualité",img:"newspaper.png"},{id:137,color:"royal",bg:"royal-bg",label:"+18 (Trash)",img:"cancel.png"},{id:135,color:"balanced",bg:"balanced-bg",label:"Corps humain",img:"intestines.png"},{id:140,color:"calm",bg:"calm-bg",label:"Marque",img:"megaphone.png"},{id:141,color:"energized",bg:"dark energized-bg",label:"Personnage",img:"people.png"},{id:142,color:"positive",bg:"positive-bg",label:"Série / TV",img:"technology.png"},{id:136,color:"energized",bg:"dark energized-bg",label:"Situation",img:"competition.png"},{id:139,color:"calm",bg:"calm-bg",label:"Sport",img:"football.png"},{id:133,color:"royal",bg:"royal-bg",label:"Autre",img:"paper-plane.png"}]}},176:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=176},206:function(t,e,n){function a(t){var e=i[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"../pages/cat/cat.module.ngfactory":[308,6],"../pages/check/check.module.ngfactory":[309,5],"../pages/lang/lang.module.ngfactory":[310,2],"../pages/modal-add/modal-add.module.ngfactory":[311,1],"../pages/settings/settings.module.ngfactory":[312,0],"../pages/tutorial/tutorial.module.ngfactory":[313,4],"../pages/welcome/welcome.module.ngfactory":[314,3]};a.keys=function(){return Object.keys(i)},a.id=206,t.exports=a},237:function(t,e,n){"use strict";n(94);var a=n(45);n(142),n(140),n(97),n(95);n.d(e,"a",function(){return a.a})},239:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o});var a="CheckPage",i="WelcomePage",o="CatPage"},244:function(t,e,n){"use strict";function a(t){return new y.a(t,{nbLaunch:0,id_max:0})}function i(t){return r["ɵvid"](0,[(t()(),r["ɵeld"](0,0,null,null,11,"ion-item",[["class","item item-block"],["menuClose",""]],null,[[null,"tap"],[null,"click"]],function(t,e,n){var a=!0,i=t.component;if("click"===e){a=!1!==r["ɵnov"](t,6).close()&&a}if("tap"===e){a=!1!==i.openPage(t.context.$implicit)&&a}return a},k.b,k.a)),r["ɵdid"](1,1097728,null,3,F.a,[U.a,j.a,r.ElementRef,r.Renderer,[2,$.a]],{color:[0,"color"]},null),r["ɵqud"](335544320,4,{contentLabel:0}),r["ɵqud"](603979776,5,{_buttons:1}),r["ɵqud"](603979776,6,{_icons:1}),r["ɵdid"](5,16384,null,0,G.a,[],null,null),r["ɵdid"](6,16384,null,0,H.a,[x.a],{menuClose:[0,"menuClose"]},null),(t()(),r["ɵted"](-1,2,["\n        "])),(t()(),r["ɵeld"](8,0,null,0,1,"ion-icon",[["color","danger"],["item-start",""],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](9,147456,[[6,4]],0,Q.a,[j.a,r.ElementRef,r.Renderer],{color:[0,"color"],name:[1,"name"]},null),(t()(),r["ɵted"](10,2,["\n        ","\n      "])),r["ɵpid"](131072,K.a,[z.a,r.ChangeDetectorRef])],function(t,e){t(e,1,0,e.context.$implicit.color);t(e,6,0,"");t(e,9,0,"danger",e.context.$implicit.icon)},function(t,e){t(e,8,0,r["ɵnov"](e,9)._hidden);t(e,10,0,r["ɵunv"](e,10,0,r["ɵnov"](e,11).transform(e.context.$implicit.title)))})}function o(t){return r["ɵvid"](0,[r["ɵqud"](402653184,1,{nav:0}),(t()(),r["ɵeld"](1,0,null,null,29,"ion-menu",[["role","navigation"]],null,null,null,q.b,q.a)),r["ɵprd"](6144,null,B.a,null,[W.a]),r["ɵdid"](3,245760,null,2,W.a,[x.a,r.ElementRef,j.a,Z.a,r.Renderer,V.a,J.l,Y.a,X.a],{content:[0,"content"]},null),r["ɵqud"](335544320,2,{menuContent:0}),r["ɵqud"](335544320,3,{menuNav:0}),(t()(),r["ɵted"](-1,0,["\n    "])),(t()(),r["ɵeld"](7,0,null,0,11,"ion-header",[],null,null,null,null,null)),r["ɵdid"](8,16384,null,0,tt.a,[j.a,r.ElementRef,r.Renderer,[2,et.a]],null,null),(t()(),r["ɵted"](-1,null,["\n      "])),(t()(),r["ɵeld"](10,0,null,null,7,"ion-toolbar",[["class","toolbar"],["color","dark"]],[[2,"statusbar-padding",null]],null,null,nt.b,nt.a)),r["ɵdid"](11,49152,null,0,at.a,[j.a,r.ElementRef,r.Renderer],{color:[0,"color"]},null),(t()(),r["ɵted"](-1,3,["\n        "])),(t()(),r["ɵeld"](13,0,null,3,3,"ion-title",[],null,null,null,it.b,it.a)),r["ɵdid"](14,49152,null,0,ot.a,[j.a,r.ElementRef,r.Renderer,[2,at.a],[2,lt.a]],null,null),(t()(),r["ɵted"](15,0,["",""])),r["ɵpid"](131072,K.a,[z.a,r.ChangeDetectorRef]),(t()(),r["ɵted"](-1,3,["\n      "])),(t()(),r["ɵted"](-1,null,["\n    "])),(t()(),r["ɵted"](-1,0,["\n\n    "])),(t()(),r["ɵeld"](20,0,null,0,9,"ion-content",[["class","defaultBg"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,rt.b,rt.a)),r["ɵdid"](21,4374528,[[2,4]],0,st.a,[j.a,Z.a,Y.a,r.ElementRef,r.Renderer,X.a,V.a,r.NgZone,[2,et.a],[2,ut.a]],null,null),(t()(),r["ɵted"](-1,1,["\n      "])),(t()(),r["ɵeld"](23,0,null,1,5,"ion-list",[],null,null,null,null,null)),r["ɵdid"](24,16384,null,0,ct.a,[j.a,r.ElementRef,r.Renderer,Z.a,J.l,Y.a],null,null),(t()(),r["ɵted"](-1,null,["\n      "])),(t()(),r["ɵand"](16777216,null,null,1,null,i)),r["ɵdid"](27,802816,null,0,dt.NgForOf,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),r["ɵted"](-1,null,["\n      "])),(t()(),r["ɵted"](-1,1,["\n    "])),(t()(),r["ɵted"](-1,0,["\n  "])),(t()(),r["ɵted"](-1,null,["\n  "])),(t()(),r["ɵeld"](32,0,null,null,2,"ion-nav",[],null,null,null,pt.b,pt.a)),r["ɵprd"](6144,null,B.a,null,[gt.a]),r["ɵdid"](34,4374528,[[1,4],["content",4]],0,gt.a,[[2,et.a],[2,ut.a],X.a,j.a,Z.a,r.ElementRef,r.NgZone,r.Renderer,r.ComponentFactoryResolver,J.l,mt.a,[2,ft.a],Y.a,r.ErrorHandler],{root:[0,"root"]},null)],function(t,e){var n=e.component;t(e,3,0,r["ɵnov"](e,34));t(e,11,0,"dark");t(e,27,0,n.pages);t(e,34,0,n.rootPage)},function(t,e){t(e,10,0,r["ɵnov"](e,11)._sbPadding);t(e,15,0,r["ɵunv"](e,15,0,r["ɵnov"](e,16).transform("MENU_TITLE")));t(e,20,0,r["ɵnov"](e,21).statusbarPadding,r["ɵnov"](e,21)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var l=n(29),r=n(0),s=(n(2),n(51)),u=n(177),c=n(178),d=n(147),p=n(148),g=n(180),m=n(109),f=n(149),h=n(110),b=n(111),_=n(58),A=n(295),y=(n(85),n(241),n(237)),E=n(239),R=function(){function t(t,e){this.translate=t,this.rootPage=E.b,e.ready().then(function(){e.registerBackButtonAction(function(){})}),this.previous={},this.initTranslate(),this.pages=[{title:"MENU_ACCUEIL",component:"WelcomePage",icon:"home",color:"primary"},{title:"MENU_CAT",component:"CatPage",icon:"list",color:"secondary"},{title:"MENU_MY",component:"WelcomePage",param:{typePage:4},icon:"create",color:"secondary"},{title:"MENU_FAV",component:"WelcomePage",param:{typePage:3},icon:"ios-thumbs-up",color:"secondary"},{title:"MENU_LIKE",component:"WelcomePage",param:{typePage:1},icon:"ios-flash",color:"secondary"},{title:"MENU_TIGHT",component:"WelcomePage",param:{typePage:2},icon:"code",color:"secondary"},{title:"MENU_PARAM",component:"SettingsPage",icon:"settings",color:"secondary"}],this.previous=this.pages[0]}return t.prototype.initTranslate=function(){this.translate.setDefaultLang("fr"),this.translate.use("es"),this.translate.use("en"),this.translate.use("pt")},t.prototype.openPage=function(t){this.previous&&(this.previous.color="secondary"),t.color="primary",this.previous=t,this.nav.setRoot(t.component,t.param)},t}(),N=function(t){return new A.a(t,"./assets/i18n/",".json")},T=function(){return function(){}}(),v=n(52),I=n(227),L=n(228),M=n(229),P=n(230),C=n(231),D=n(232),S=n(233),O=n(234),w=n(235),k=n(146),F=n(16),U=n(14),j=n(1),$=n(42),G=n(64),H=n(119),x=n(23),Q=n(40),K=n(88),z=n(27),q=n(305),B=n(34),W=n(79),Z=n(4),V=n(25),J=n(7),Y=n(10),X=n(9),tt=n(87),et=n(5),nt=n(306),at=n(36),it=n(238),ot=n(63),lt=n(35),rt=n(236),st=n(22),ut=n(21),ct=n(47),dt=n(11),pt=n(307),gt=n(56),mt=n(32),ft=n(15),ht=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),bt=r["ɵccf"]("ng-component",R,function(t){return r["ɵvid"](0,[(t()(),r["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,ht)),r["ɵdid"](1,49152,null,0,R,[z.a,Z.a],null,null)],null,null)},{},{},[]),_t=n(122),At=n(18),yt=n(59),Et=n(60),Rt=n(62),Nt=n(61),Tt=n(86),vt=n(115),It=n(92),Lt=n(121),Mt=n(28),Pt=n(89),Ct=n(139),Dt=n(54),St=n(41),Ot=n(98),wt=n(74),kt=n(128),Ft=n(124),Ut=n(135),jt=n(181),$t=n(94),Gt=n(95),Ht=n(45),xt=n(97),Qt=n(142),Kt=n(140),zt=n(226),qt=n(123),Bt=n(120),Wt=n(125),Zt=n(243),Vt=r["ɵcmf"](T,[v.b],function(t){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[I.a,L.a,M.a,P.a,C.a,D.a,S.a,O.a,w.a,bt]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](5120,r.LOCALE_ID,r["ɵm"],[[3,r.LOCALE_ID]]),r["ɵmpd"](4608,dt.NgLocalization,dt.NgLocaleLocalization,[r.LOCALE_ID,[2,dt["ɵa"]]]),r["ɵmpd"](5120,r.APP_ID,r["ɵf"],[]),r["ɵmpd"](5120,r.IterableDiffers,r["ɵk"],[]),r["ɵmpd"](5120,r.KeyValueDiffers,r["ɵl"],[]),r["ɵmpd"](4608,l.c,l.q,[dt.DOCUMENT]),r["ɵmpd"](6144,r.Sanitizer,null,[l.c]),r["ɵmpd"](4608,l.f,_t.a,[]),r["ɵmpd"](5120,l.d,function(t,e,n,a,i){return[new l.k(t,e),new l.o(n),new l.n(a,i)]},[dt.DOCUMENT,r.NgZone,dt.DOCUMENT,dt.DOCUMENT,l.f]),r["ɵmpd"](4608,l.e,l.e,[l.d,r.NgZone]),r["ɵmpd"](135680,l.m,l.m,[dt.DOCUMENT]),r["ɵmpd"](4608,l.l,l.l,[l.e,l.m]),r["ɵmpd"](6144,r.RendererFactory2,null,[l.l]),r["ɵmpd"](6144,l.p,null,[l.m]),r["ɵmpd"](4608,r.Testability,r.Testability,[r.NgZone]),r["ɵmpd"](4608,l.h,l.h,[dt.DOCUMENT]),r["ɵmpd"](4608,l.i,l.i,[dt.DOCUMENT]),r["ɵmpd"](4608,s.i,s.n,[dt.DOCUMENT,r.PLATFORM_ID,s.l]),r["ɵmpd"](4608,s.o,s.o,[s.i,s.m]),r["ɵmpd"](5120,s.a,function(t){return[t]},[s.o]),r["ɵmpd"](4608,s.k,s.k,[]),r["ɵmpd"](6144,s.j,null,[s.k]),r["ɵmpd"](4608,s.h,s.h,[s.j]),r["ɵmpd"](6144,s.b,null,[s.h]),r["ɵmpd"](5120,s.f,s.p,[s.b,[2,s.a]]),r["ɵmpd"](4608,s.c,s.c,[s.f]),r["ɵmpd"](4608,At.k,At.k,[]),r["ɵmpd"](4608,At.c,At.c,[]),r["ɵmpd"](4608,u.c,u.c,[]),r["ɵmpd"](4608,u.g,u.b,[]),r["ɵmpd"](5120,u.i,u.j,[]),r["ɵmpd"](4608,u.h,u.h,[u.c,u.g,u.i]),r["ɵmpd"](4608,u.f,u.a,[]),r["ɵmpd"](5120,u.d,u.k,[u.h,u.f]),r["ɵmpd"](5120,yt.b,N,[s.c]),r["ɵmpd"](4608,Et.a,Et.b,[]),r["ɵmpd"](4608,Rt.b,Rt.a,[]),r["ɵmpd"](4608,Nt.b,Nt.a,[]),r["ɵmpd"](4608,Tt.a,Tt.a,[]),r["ɵmpd"](4608,z.a,z.a,[Tt.a,yt.b,Et.a,Rt.b,Nt.b,z.b,z.c]),r["ɵmpd"](4608,vt.a,vt.a,[X.a,j.a]),r["ɵmpd"](4608,It.a,It.a,[X.a,j.a]),r["ɵmpd"](4608,Lt.a,Lt.a,[]),r["ɵmpd"](4608,U.a,U.a,[]),r["ɵmpd"](4608,Mt.a,Mt.a,[Z.a]),r["ɵmpd"](4608,V.a,V.a,[j.a,Z.a,r.NgZone,Y.a]),r["ɵmpd"](4608,Pt.a,Pt.a,[X.a,j.a]),r["ɵmpd"](5120,dt.LocationStrategy,Ct.c,[dt.PlatformLocation,[2,dt.APP_BASE_HREF],j.a]),r["ɵmpd"](4608,dt.Location,dt.Location,[dt.LocationStrategy]),r["ɵmpd"](5120,Dt.b,Dt.d,[X.a,Dt.a]),r["ɵmpd"](5120,ft.a,ft.b,[X.a,Dt.b,dt.Location,St.b,r.ComponentFactoryResolver]),r["ɵmpd"](4608,Ot.a,Ot.a,[X.a,j.a,ft.a]),r["ɵmpd"](4608,wt.a,wt.a,[X.a,j.a]),r["ɵmpd"](4608,kt.a,kt.a,[X.a,j.a,ft.a]),r["ɵmpd"](4608,Ft.a,Ft.a,[j.a,Z.a,Y.a,X.a,J.l]),r["ɵmpd"](4608,Ut.a,Ut.a,[X.a,j.a]),r["ɵmpd"](4608,mt.a,mt.a,[Z.a,j.a]),r["ɵmpd"](5120,jt.a,jt.c,[jt.b]),r["ɵmpd"](4608,$t.a,$t.a,[s.c]),r["ɵmpd"](4608,h.a,h.a,[]),r["ɵmpd"](4608,Gt.a,Gt.a,[h.a]),r["ɵmpd"](5120,Ht.a,a,[jt.a]),r["ɵmpd"](4608,m.a,m.a,[]),r["ɵmpd"](4608,xt.a,xt.a,[Ht.a,s.c,Z.a,m.a]),r["ɵmpd"](4608,Qt.a,Qt.a,[Gt.a,$t.a,Ht.a,xt.a]),r["ɵmpd"](4608,c.a,c.a,[]),r["ɵmpd"](4608,d.a,d.a,[]),r["ɵmpd"](4608,p.a,p.a,[]),r["ɵmpd"](4608,g.a,g.a,[]),r["ɵmpd"](4608,f.a,f.a,[]),r["ɵmpd"](4608,Kt.a,Kt.a,[Ht.a,z.a,s.c]),r["ɵmpd"](512,dt.CommonModule,dt.CommonModule,[]),r["ɵmpd"](512,r.ErrorHandler,zt.a,[]),r["ɵmpd"](256,j.b,{},[]),r["ɵmpd"](1024,qt.a,qt.b,[]),r["ɵmpd"](1024,Z.a,Z.b,[l.b,qt.a,r.NgZone]),r["ɵmpd"](1024,j.a,j.c,[j.b,Z.a]),r["ɵmpd"](512,Y.a,Y.a,[Z.a]),r["ɵmpd"](512,x.a,x.a,[]),r["ɵmpd"](512,X.a,X.a,[j.a,Z.a,[2,x.a]]),r["ɵmpd"](512,J.l,J.l,[X.a]),r["ɵmpd"](256,Dt.a,{links:[{loadChildren:"../pages/cat/cat.module.ngfactory#CatPageModuleNgFactory",name:"CatPage",segment:"cat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/check/check.module.ngfactory#CheckPageModuleNgFactory",name:"CheckPage",segment:"check",priority:"low",defaultHistory:[]},{loadChildren:"../pages/lang/lang.module.ngfactory#LangPageModuleNgFactory",name:"LangPage",segment:"lang",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal-add/modal-add.module.ngfactory#ModalAddPageModuleNgFactory",name:"ModalAddPage",segment:"modal-add",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),r["ɵmpd"](512,r.Compiler,r.Compiler,[]),r["ɵmpd"](512,Bt.a,Bt.a,[r.Compiler]),r["ɵmpd"](1024,St.b,St.c,[Bt.a,r.Injector]),r["ɵmpd"](1024,r.APP_INITIALIZER,function(t,e,n,a,i,o,r,s,u,c,d,p,g){return[l.s(t),Wt.a(e),Lt.b(n,a),Ft.b(i,o,r,s,u),St.d(c,d,p,g)]},[[2,r.NgProbeToken],j.a,Z.a,Y.a,j.a,Z.a,Y.a,X.a,J.l,j.a,Dt.a,St.b,r.NgZone]),r["ɵmpd"](512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r["ɵmpd"](131584,r.ApplicationRef,r.ApplicationRef,[r.NgZone,r["ɵConsole"],r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r["ɵmpd"](512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r["ɵmpd"](512,l.a,l.a,[[3,l.a]]),r["ɵmpd"](512,s.e,s.e,[]),r["ɵmpd"](512,s.d,s.d,[]),r["ɵmpd"](512,_.a,_.a,[]),r["ɵmpd"](512,At.j,At.j,[]),r["ɵmpd"](512,At.d,At.d,[]),r["ɵmpd"](512,At.i,At.i,[]),r["ɵmpd"](512,Ct.a,Ct.a,[]),r["ɵmpd"](512,u.e,u.e,[]),r["ɵmpd"](512,b.a,b.a,[]),r["ɵmpd"](512,Zt.a,Zt.a,[]),r["ɵmpd"](512,T,T,[]),r["ɵmpd"](256,s.l,"XSRF-TOKEN",[]),r["ɵmpd"](256,s.m,"X-XSRF-TOKEN",[]),r["ɵmpd"](256,z.c,void 0,[]),r["ɵmpd"](256,z.b,void 0,[]),r["ɵmpd"](256,v.a,R,[]),r["ɵmpd"](256,dt.APP_BASE_HREF,"/",[]),r["ɵmpd"](256,jt.b,{name:"__jtpdb"},[])])});Object(r.enableProdMode)(),Object(l.j)().bootstrapModuleFactory(Vt)},45:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(2),n(111);var a=function(){function t(t,e){this.storage=t,this.SETTINGS_KEY="__settingsJTP",this._defaults=e}return t.prototype.load=function(){var t=this;return this.storage.get(this.SETTINGS_KEY).then(function(e){return e?(t.settings=e,t._mergeDefaults(t._defaults)):t.setAll(t._defaults).then(function(e){t.settings=e})})},t.prototype._mergeDefaults=function(t){for(var e in t)e in this.settings||(this.settings[e]=t[e]);return this.setAll(this.settings)},t.prototype.merge=function(t){for(var e in t)this.settings[e]=t[e];return this.save()},t.prototype.setValue=function(t,e){return this.settings[t]=e,this.storage.set(this.SETTINGS_KEY,this.settings)},t.prototype.setAll=function(t){return this.storage.set(this.SETTINGS_KEY,t)},t.prototype.getValue=function(t){return this.storage.get(this.SETTINGS_KEY).then(function(e){return e[t]})},t.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(t.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),t}()},94:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(2);var a=n(51),i=function(){function t(t){this.http=t,this.url="https://www.jeu-tu-preferes.fr/api"}return t.prototype.get=function(t,e,n){if(n||(n={params:new a.g}),e){n.params=new a.g;for(var i in e)n.params=n.params.set(i,e[i])}return this.http.get(this.url+"/"+t,n)},t.prototype.post=function(t,e,n){return this.http.post(this.url+"/"+t,e,n)},t.prototype.put=function(t,e,n){return this.http.put(this.url+"/"+t,e,n)},t.prototype.delete=function(t,e){return this.http.delete(this.url+"/"+t,e)},t.prototype.patch=function(t,e,n){return this.http.patch(this.url+"/"+t,e,n)},t}()},95:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(2),n(110);var a=function(){function t(t){this.ga=t}return t.prototype.init=function(){this.ga.startTrackerWithId("UA-82079763-1",15).then(function(){console.log("Google analytics is ready now")}).catch(function(t){return console.log("Error starting GoogleAnalytics",t)})},t.prototype.track=function(t){this.ga.trackView(t)},t}()},97:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(2),n(85),n(109),n(45);var a=function(){function t(t,e,n,a){this.settings=t,this.http=e,this.plt=n,this.admobFree=a,this.firstPubDisplayed=!1}return t.prototype.initPub=function(t){var e=this;void 0===t&&(t=!1),(!t||t&&!this.firstPubDisplayed)&&(this.firstPubDisplayed=!0,this.settings.allSettings.nbLaunch>1&&setTimeout(function(){var t={id:"ca-app-pub-3956495131739396/8376792863",isTesting:!1,autoShow:!0};e.plt.is("android")&&(t.id="ca-app-pub-3956495131739396/1272328460"),e.admobFree.interstitial.config(t),e.admobFree.interstitial.prepare().then(function(){}).catch(function(t){return console.log(t)})},5e3))},t}()}},[244]);