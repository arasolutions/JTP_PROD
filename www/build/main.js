webpackJsonp([6],{139:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(2),n(58);var a=n(143),i=(n(45),function(){function t(t,e,n){this.settings=t,this.translate=e,this.http=n,this.CAT_LIST=a.a.CAT_LIST,this.label={}}return t.prototype.init=function(){var t=this,e=[];e.fr=[134,138,137,135,140,141,142,136,139,133],e.en=[21690,21694,21693,21691,21696,21697,21698,21692,21695,21689],e.es=[24793,24797,24796,24794,24799,24800,24801,24795,24798,24792],e.pt=[24803,24807,24806,24804,24809,24810,24811,24805,24808,24802],this.translate.get("GENERAL_OK").subscribe(function(e){t.label.GENERAL_OK=e}),this.translate.get("GENERAL_ANNULER").subscribe(function(e){t.label.GENERAL_ANNULER=e}),this.translate.get("GENERAL_ERREUR").subscribe(function(e){t.label.GENERAL_ERREUR=e}),this.translate.get("MAIN_SIGNALER").subscribe(function(e){t.label.MAIN_SIGNALER=e}),this.translate.get("MAIN_SIGNALER_1").subscribe(function(e){t.label.MAIN_SIGNALER_1=e}),this.translate.get("MAIN_SIGNALER_2").subscribe(function(e){t.label.MAIN_SIGNALER_2=e}),this.translate.get("MAIN_SIGNALER_3").subscribe(function(e){t.label.MAIN_SIGNALER_3=e}),this.translate.get("MODAL_ADD_HINT_LIST").subscribe(function(e){t.label.MODAL_ADD_HINT_LIST=e}),this.translate.get("MODAL_ADD_FORM_ERROR").subscribe(function(e){t.label.MODAL_ADD_FORM_ERROR=e}),this.translate.get("MODAL_ADD_FORM_SEND").subscribe(function(e){t.label.MODAL_ADD_FORM_SEND=e}),this.translate.get("MODAL_ADD_ANOTHER").subscribe(function(e){t.label.MODAL_ADD_ANOTHER=e}),this.translate.get("MODAL_ADD_NO_NETWORK").subscribe(function(e){t.label.MODAL_ADD_NO_NETWORK=e}),this.translate.get("MODAL_ADD_SEARCH_DOUBLE").subscribe(function(e){t.label.MODAL_ADD_SEARCH_DOUBLE=e}),this.translate.get("MAIN_HINT_LIST").subscribe(function(e){t.label.MAIN_HINT_LIST=e}),this.translate.get("MAIN_URL_SHARE").subscribe(function(e){t.label.MAIN_URL_SHARE=e}),this.translate.get("MAIN_SHARE_DEBUT").subscribe(function(e){t.label.MAIN_SHARE_DEBUT=e}),this.translate.get("MAIN_SHARE_FIN").subscribe(function(e){t.label.MAIN_SHARE_FIN=e}),this.translate.get("MAIN_ATTENTE").subscribe(function(e){t.label.MAIN_ATTENTE=e});for(var n=function(n){a.CAT_LIST[n].id=e[a.settings.allSettings.language][n],a.translate.get("CAT_"+n).subscribe(function(e){t.CAT_LIST[n].label=e})},a=this,i=0;i<this.CAT_LIST.length;i++)n(i)},t}())},142:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(2);var a=n(301),i=(n.n(a),n(93),n(45),n(143)),o=(n(96),n(94),n(302)),l=(n.n(o),n(206)),s=(n.n(l),function(){function t(t,e,n,a){this.ga=t,this.api=e,this.settings=n,this.pub=a,this.calc=function(t){return t.pc1=Math.round(100*t.a/(t.a+t.b)),t.pc2=100-t.pc1,t.l>10&&(t.pcl=Math.round(100*t.l/(t.l+t.u))),t},this.asynTaskRunning=!1,this.cpt=0}return t.prototype.loadDB=function(){var t=this;return new Promise(function(e,n){var a=new l;t.db=new o("JTP.db",{autosave:!0,autosaveInterval:4e3,adapter:a}),t.db.loadDatabase({},function(n){if(n)return console.log("error : "+n),!1;t.jtp=t.db.getCollection("JTP"),e()})})},t.prototype.initDB=function(t){var e=this;return new Promise(function(n,a){var i=[];i.lang=t,e.settings.setValue("id_max",0);e.api.get("initGame",i).share().subscribe(function(t){e.db.getCollection("JTP")&&e.db.removeCollection("JTP"),e.jtp=e.db.addCollection("JTP",{unique:"i"}),e.jtp.insert(t.items.map(e.calc)),n(!0)},function(t){console.error("ERROR",t)})})},t.prototype.startAsynTasks=function(t){void 0===t&&(t=!1),this.lang=this.settings.allSettings.language,this.id_max=this.settings.allSettings.id_max,this.asynTaskRunning&&!t||(this.getMoreQ(),this.getStat()),this.asynTaskRunning=!0},t.prototype.getMoreQ=function(){var t=this;setTimeout(function(){var e=[];e.lang=t.lang,e.id_max=t.id_max;t.api.get("moreQ",e).share().subscribe(function(e){if(""!==e.fi)t.id_max=e.fi,t.settings.setValue("id_max",e.fi);else if(e.items.length>0){for(var n=0;n<e.items.length;n++)t.jtp.by("i",e.items[n].i)||t.jtp.insert(t.calc(e.items[n]));t.id_max=e.items[e.items.length-1].i,t.settings.setValue("id_max",e.items[e.items.length-1].i)}},function(t){console.error("ERROR",t)}),t.getMoreQ()},25e3)},t.prototype.getStat=function(){var t=this;setTimeout(function(){var e=[];e.lang=t.lang;t.api.get("stat",e).share().subscribe(function(e){if(e.items.length>100){t.jtp.findAndUpdate({},function(t){t.e=2});for(var n=0;n<e.items.length;n++){var a=t.jtp.by("i",e.items[n].i);a&&(a.a=e.items[n].a,a.b=e.items[n].b,a.l=e.items[n].l,a.u=e.items[n].u,a.e=e.items[n].e,t.jtp.update(t.calc(a)))}t.jtp.findAndRemove({e:2})}},function(t){console.error("ERROR",t)})},35e3)},t.prototype.insert=function(t){this.jtp.insert(t)},t.prototype.getQ=function(t,e){return this.ga.track(this.settings.allSettings.language+" + "+e),this.sessionQ.slice(t,e)},t.prototype.capitalizeFirstLetter=function(t){return t[0].toUpperCase()+t.slice(1)},t.prototype.createSession=function(t){var e=!0,n=i.a.CAT_LIST[2].id;if(t&&t.search)this.sessionQ=this.jtp.chain().find({$and:[{$or:[{r:{$containsAny:[t.search.toLowerCase(),t.search.toUpperCase(),this.capitalizeFirstLetter(t.search.toLowerCase())]}},{s:{$containsAny:[t.search.toLowerCase(),t.search.toUpperCase(),this.capitalizeFirstLetter(t.search.toLowerCase())]}}]},{c:{$ne:n}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data();else if(t&&t.typePage)if(this.ga.track(this.settings.allSettings.language+" typePage "+t.typePage),1===t.typePage)this.sessionQ=this.jtp.chain().find({$and:[{pcl:{$gt:70}},{c:{$ne:n}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data();else if(2===t.typePage)this.sessionQ=this.jtp.chain().find({$and:[{pc1:{$between:[40,60]}},{c:{$ne:n}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data();else if(3===t.typePage)this.sessionQ=this.jtp.chain().find({$and:[{y:{$eq:!0}},{c:{$ne:n}}]}).data();else if(4===t.typePage){e=!1,this.sessionQ=this.jtp.find({i:{$in:this.settings.allSettings.addArr||[]}}).reverse()}else 5===t.typePage&&(e=!1,this.sessionQ=this.jtp.chain().find({$and:[{e:{$eq:1}},{c:{$ne:n}}]}).data());else t&&t.catId?(this.ga.track(this.settings.allSettings.language+" catId "+t.catId),this.sessionQ=this.jtp.chain().find({$and:[{c:{$eq:t.catId}},{answered:{$ne:1}},{answered:{$ne:2}}]}).data()):(this.ga.track(this.settings.allSettings.language+" random"),this.sessionQ=this.jtp.chain().find({$and:[{answered:{$ne:1}},{answered:{$ne:2}},{c:{$ne:n}}]}).data());e&&this.randomize(this.sessionQ)},t.prototype.randomize=function(t){var e,n,a;for(n=t.length;n;)e=Math.random()*n--|0,a=t[n],t[n]=t[e],t[e]=a},t.prototype.update=function(t,e){void 0===e&&(e=!1),e&&(this.cpt++,this.cpt%20==0&&this.pub.initPub(!1)),this.jtp.update(t)},t}())},143:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={LANGUAGE_LIST:[{code:"fr",label:"Francais"},{code:"en",label:"English"},{code:"es",label:"Español"},{code:"pt",label:"Português"}],PRODUCTION:!1,LIMIT_Q:10,LANGUAGE_DEFAULT:"fr",CAT_LIST:[{id:134,color:"positive",bg:"positive-bg",label:"A vie",img:"target.png"},{id:138,color:"positive",bg:"positive-bg",label:"Actualité",img:"newspaper.png"},{id:137,color:"royal",bg:"royal-bg",label:"+18 (Trash)",img:"cancel.png"},{id:135,color:"balanced",bg:"balanced-bg",label:"Corps humain",img:"intestines.png"},{id:140,color:"calm",bg:"calm-bg",label:"Marque",img:"megaphone.png"},{id:141,color:"energized",bg:"dark energized-bg",label:"Personnage",img:"people.png"},{id:142,color:"positive",bg:"positive-bg",label:"Série / TV",img:"technology.png"},{id:136,color:"energized",bg:"dark energized-bg",label:"Situation",img:"competition.png"},{id:139,color:"calm",bg:"calm-bg",label:"Sport",img:"football.png"},{id:133,color:"royal",bg:"royal-bg",label:"Autre",img:"paper-plane.png"}]}},175:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=175},205:function(t,e,n){function a(t){var e=i[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"../pages/cat/cat.module.ngfactory":[308,5],"../pages/check/check.module.ngfactory":[310,4],"../pages/lang/lang.module.ngfactory":[309,2],"../pages/modal-add/modal-add.module.ngfactory":[311,1],"../pages/settings/settings.module.ngfactory":[312,0],"../pages/welcome/welcome.module.ngfactory":[313,3]};a.keys=function(){return Object.keys(i)},a.id=205,t.exports=a},227:function(t,e,n){"use strict";n(93);var a=n(45);n(142),n(139),n(96),n(94);n.d(e,"a",function(){return a.a})},239:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o});var a="CheckPage",i="WelcomePage",o="CatPage"},244:function(t,e,n){"use strict";function a(t){return new y.a(t,{nbLaunch:0,id_max:0})}function i(t){return s["ɵvid"](0,[(t()(),s["ɵeld"](0,0,null,null,11,"ion-item",[["class","item item-block"],["menuClose",""]],null,[[null,"tap"],[null,"click"]],function(t,e,n){var a=!0,i=t.component;if("click"===e){a=!1!==s["ɵnov"](t,6).close()&&a}if("tap"===e){a=!1!==i.openPage(t.context.$implicit)&&a}return a},k.b,k.a)),s["ɵdid"](1,1097728,null,3,F.a,[U.a,j.a,s.ElementRef,s.Renderer,[2,$.a]],{color:[0,"color"]},null),s["ɵqud"](335544320,4,{contentLabel:0}),s["ɵqud"](603979776,5,{_buttons:1}),s["ɵqud"](603979776,6,{_icons:1}),s["ɵdid"](5,16384,null,0,G.a,[],null,null),s["ɵdid"](6,16384,null,0,H.a,[x.a],{menuClose:[0,"menuClose"]},null),(t()(),s["ɵted"](-1,2,["\n        "])),(t()(),s["ɵeld"](8,0,null,0,1,"ion-icon",[["color","danger"],["item-start",""],["role","img"]],[[2,"hide",null]],null,null,null,null)),s["ɵdid"](9,147456,[[6,4]],0,Q.a,[j.a,s.ElementRef,s.Renderer],{color:[0,"color"],name:[1,"name"]},null),(t()(),s["ɵted"](10,2,["\n        ","\n      "])),s["ɵpid"](131072,K.a,[q.a,s.ChangeDetectorRef])],function(t,e){t(e,1,0,e.context.$implicit.color);t(e,6,0,"");t(e,9,0,"danger",e.context.$implicit.icon)},function(t,e){t(e,8,0,s["ɵnov"](e,9)._hidden);t(e,10,0,s["ɵunv"](e,10,0,s["ɵnov"](e,11).transform(e.context.$implicit.title)))})}function o(t){return s["ɵvid"](0,[s["ɵqud"](402653184,1,{nav:0}),(t()(),s["ɵeld"](1,0,null,null,29,"ion-menu",[["role","navigation"]],null,null,null,z.b,z.a)),s["ɵprd"](6144,null,W.a,null,[B.a]),s["ɵdid"](3,245760,null,2,B.a,[x.a,s.ElementRef,j.a,Z.a,s.Renderer,V.a,J.l,Y.a,X.a],{content:[0,"content"]},null),s["ɵqud"](335544320,2,{menuContent:0}),s["ɵqud"](335544320,3,{menuNav:0}),(t()(),s["ɵted"](-1,0,["\n    "])),(t()(),s["ɵeld"](7,0,null,0,11,"ion-header",[],null,null,null,null,null)),s["ɵdid"](8,16384,null,0,tt.a,[j.a,s.ElementRef,s.Renderer,[2,et.a]],null,null),(t()(),s["ɵted"](-1,null,["\n      "])),(t()(),s["ɵeld"](10,0,null,null,7,"ion-toolbar",[["class","toolbar"],["color","dark"]],[[2,"statusbar-padding",null]],null,null,nt.b,nt.a)),s["ɵdid"](11,49152,null,0,at.a,[j.a,s.ElementRef,s.Renderer],{color:[0,"color"]},null),(t()(),s["ɵted"](-1,3,["\n        "])),(t()(),s["ɵeld"](13,0,null,3,3,"ion-title",[],null,null,null,it.b,it.a)),s["ɵdid"](14,49152,null,0,ot.a,[j.a,s.ElementRef,s.Renderer,[2,at.a],[2,lt.a]],null,null),(t()(),s["ɵted"](15,0,["",""])),s["ɵpid"](131072,K.a,[q.a,s.ChangeDetectorRef]),(t()(),s["ɵted"](-1,3,["\n      "])),(t()(),s["ɵted"](-1,null,["\n    "])),(t()(),s["ɵted"](-1,0,["\n\n    "])),(t()(),s["ɵeld"](20,0,null,0,9,"ion-content",[["class","defaultBg"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,st.b,st.a)),s["ɵdid"](21,4374528,[[2,4]],0,rt.a,[j.a,Z.a,Y.a,s.ElementRef,s.Renderer,X.a,V.a,s.NgZone,[2,et.a],[2,ut.a]],null,null),(t()(),s["ɵted"](-1,1,["\n      "])),(t()(),s["ɵeld"](23,0,null,1,5,"ion-list",[],null,null,null,null,null)),s["ɵdid"](24,16384,null,0,ct.a,[j.a,s.ElementRef,s.Renderer,Z.a,J.l,Y.a],null,null),(t()(),s["ɵted"](-1,null,["\n      "])),(t()(),s["ɵand"](16777216,null,null,1,null,i)),s["ɵdid"](27,802816,null,0,dt.NgForOf,[s.ViewContainerRef,s.TemplateRef,s.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),s["ɵted"](-1,null,["\n      "])),(t()(),s["ɵted"](-1,1,["\n    "])),(t()(),s["ɵted"](-1,0,["\n  "])),(t()(),s["ɵted"](-1,null,["\n  "])),(t()(),s["ɵeld"](32,0,null,null,2,"ion-nav",[],null,null,null,pt.b,pt.a)),s["ɵprd"](6144,null,W.a,null,[gt.a]),s["ɵdid"](34,4374528,[[1,4],["content",4]],0,gt.a,[[2,et.a],[2,ut.a],X.a,j.a,Z.a,s.ElementRef,s.NgZone,s.Renderer,s.ComponentFactoryResolver,J.l,mt.a,[2,ft.a],Y.a,s.ErrorHandler],{root:[0,"root"]},null)],function(t,e){var n=e.component;t(e,3,0,s["ɵnov"](e,34));t(e,11,0,"dark");t(e,27,0,n.pages);t(e,34,0,n.rootPage)},function(t,e){t(e,10,0,s["ɵnov"](e,11)._sbPadding);t(e,15,0,s["ɵunv"](e,15,0,s["ɵnov"](e,16).transform("MENU_TITLE")));t(e,20,0,s["ɵnov"](e,21).statusbarPadding,s["ɵnov"](e,21)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var l=n(29),s=n(0),r=(n(2),n(51)),u=n(176),c=n(177),d=n(147),p=n(148),g=n(179),m=n(108),f=n(149),h=n(109),b=n(110),_=n(58),A=n(295),y=(n(85),n(241),n(227)),E=n(239),R=function(){function t(t,e){this.translate=t,this.rootPage=E.b,e.ready().then(function(){e.registerBackButtonAction(function(){})}),this.previous={},this.initTranslate(),this.pages=[{title:"MENU_ACCUEIL",component:"WelcomePage",icon:"ios-home-outline",color:"primary"},{title:"MENU_CAT",component:"CatPage",icon:"ios-list-outline",color:"secondary"},{title:"MENU_MY",component:"WelcomePage",param:{typePage:4},icon:"ios-create-outline",color:"secondary"},{title:"MENU_FAV",component:"WelcomePage",param:{typePage:3},icon:"ios-thumbs-up-outline",color:"secondary"},{title:"MENU_LIKE",component:"WelcomePage",param:{typePage:1},icon:"ios-flash-outline",color:"secondary"},{title:"MENU_TIGHT",component:"WelcomePage",param:{typePage:2},icon:"ios-code-outline",color:"secondary"},{title:"MENU_MOD",component:"WelcomePage",param:{typePage:5},icon:"ios-flask-outline",color:"secondary"},{title:"MENU_PARAM",component:"SettingsPage",icon:"ios-settings-outline",color:"secondary"}],this.previous=this.pages[0]}return t.prototype.initTranslate=function(){this.translate.setDefaultLang("fr"),this.translate.use("es"),this.translate.use("en"),this.translate.use("pt")},t.prototype.openPage=function(t){this.previous&&(this.previous.color="secondary"),t.color="primary",this.previous=t,this.nav.setRoot(t.component,t.param)},t}(),N=function(t){return new A.a(t,"./assets/i18n/",".json")},T=function(){return function(){}}(),v=n(52),I=n(228),L=n(229),M=n(230),P=n(231),C=n(232),D=n(233),S=n(234),O=n(235),w=n(236),k=n(146),F=n(16),U=n(14),j=n(1),$=n(42),G=n(64),H=n(118),x=n(23),Q=n(40),K=n(88),q=n(27),z=n(305),W=n(34),B=n(79),Z=n(4),V=n(25),J=n(7),Y=n(10),X=n(9),tt=n(87),et=n(5),nt=n(306),at=n(36),it=n(237),ot=n(63),lt=n(35),st=n(238),rt=n(22),ut=n(21),ct=n(47),dt=n(11),pt=n(307),gt=n(56),mt=n(32),ft=n(15),ht=s["ɵcrt"]({encapsulation:2,styles:[],data:{}}),bt=s["ɵccf"]("ng-component",R,function(t){return s["ɵvid"](0,[(t()(),s["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,ht)),s["ɵdid"](1,49152,null,0,R,[q.a,Z.a],null,null)],null,null)},{},{},[]),_t=n(121),At=n(18),yt=n(59),Et=n(60),Rt=n(62),Nt=n(61),Tt=n(86),vt=n(114),It=n(91),Lt=n(120),Mt=n(28),Pt=n(89),Ct=n(140),Dt=n(54),St=n(41),Ot=n(97),wt=n(74),kt=n(127),Ft=n(123),Ut=n(135),jt=n(180),$t=n(93),Gt=n(94),Ht=n(45),xt=n(96),Qt=n(142),Kt=n(139),qt=n(226),zt=n(122),Wt=n(119),Bt=n(124),Zt=n(243),Vt=s["ɵcmf"](T,[v.b],function(t){return s["ɵmod"]([s["ɵmpd"](512,s.ComponentFactoryResolver,s["ɵCodegenComponentFactoryResolver"],[[8,[I.a,L.a,M.a,P.a,C.a,D.a,S.a,O.a,w.a,bt]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["ɵmpd"](5120,s.LOCALE_ID,s["ɵm"],[[3,s.LOCALE_ID]]),s["ɵmpd"](4608,dt.NgLocalization,dt.NgLocaleLocalization,[s.LOCALE_ID,[2,dt["ɵa"]]]),s["ɵmpd"](5120,s.APP_ID,s["ɵf"],[]),s["ɵmpd"](5120,s.IterableDiffers,s["ɵk"],[]),s["ɵmpd"](5120,s.KeyValueDiffers,s["ɵl"],[]),s["ɵmpd"](4608,l.c,l.q,[dt.DOCUMENT]),s["ɵmpd"](6144,s.Sanitizer,null,[l.c]),s["ɵmpd"](4608,l.f,_t.a,[]),s["ɵmpd"](5120,l.d,function(t,e,n,a,i){return[new l.k(t,e),new l.o(n),new l.n(a,i)]},[dt.DOCUMENT,s.NgZone,dt.DOCUMENT,dt.DOCUMENT,l.f]),s["ɵmpd"](4608,l.e,l.e,[l.d,s.NgZone]),s["ɵmpd"](135680,l.m,l.m,[dt.DOCUMENT]),s["ɵmpd"](4608,l.l,l.l,[l.e,l.m]),s["ɵmpd"](6144,s.RendererFactory2,null,[l.l]),s["ɵmpd"](6144,l.p,null,[l.m]),s["ɵmpd"](4608,s.Testability,s.Testability,[s.NgZone]),s["ɵmpd"](4608,l.h,l.h,[dt.DOCUMENT]),s["ɵmpd"](4608,l.i,l.i,[dt.DOCUMENT]),s["ɵmpd"](4608,r.i,r.n,[dt.DOCUMENT,s.PLATFORM_ID,r.l]),s["ɵmpd"](4608,r.o,r.o,[r.i,r.m]),s["ɵmpd"](5120,r.a,function(t){return[t]},[r.o]),s["ɵmpd"](4608,r.k,r.k,[]),s["ɵmpd"](6144,r.j,null,[r.k]),s["ɵmpd"](4608,r.h,r.h,[r.j]),s["ɵmpd"](6144,r.b,null,[r.h]),s["ɵmpd"](5120,r.f,r.p,[r.b,[2,r.a]]),s["ɵmpd"](4608,r.c,r.c,[r.f]),s["ɵmpd"](4608,At.k,At.k,[]),s["ɵmpd"](4608,At.c,At.c,[]),s["ɵmpd"](4608,u.c,u.c,[]),s["ɵmpd"](4608,u.g,u.b,[]),s["ɵmpd"](5120,u.i,u.j,[]),s["ɵmpd"](4608,u.h,u.h,[u.c,u.g,u.i]),s["ɵmpd"](4608,u.f,u.a,[]),s["ɵmpd"](5120,u.d,u.k,[u.h,u.f]),s["ɵmpd"](5120,yt.b,N,[r.c]),s["ɵmpd"](4608,Et.a,Et.b,[]),s["ɵmpd"](4608,Rt.b,Rt.a,[]),s["ɵmpd"](4608,Nt.b,Nt.a,[]),s["ɵmpd"](4608,Tt.a,Tt.a,[]),s["ɵmpd"](4608,q.a,q.a,[Tt.a,yt.b,Et.a,Rt.b,Nt.b,q.b,q.c]),s["ɵmpd"](4608,vt.a,vt.a,[X.a,j.a]),s["ɵmpd"](4608,It.a,It.a,[X.a,j.a]),s["ɵmpd"](4608,Lt.a,Lt.a,[]),s["ɵmpd"](4608,U.a,U.a,[]),s["ɵmpd"](4608,Mt.a,Mt.a,[Z.a]),s["ɵmpd"](4608,V.a,V.a,[j.a,Z.a,s.NgZone,Y.a]),s["ɵmpd"](4608,Pt.a,Pt.a,[X.a,j.a]),s["ɵmpd"](5120,dt.LocationStrategy,Ct.c,[dt.PlatformLocation,[2,dt.APP_BASE_HREF],j.a]),s["ɵmpd"](4608,dt.Location,dt.Location,[dt.LocationStrategy]),s["ɵmpd"](5120,Dt.b,Dt.d,[X.a,Dt.a]),s["ɵmpd"](5120,ft.a,ft.b,[X.a,Dt.b,dt.Location,St.b,s.ComponentFactoryResolver]),s["ɵmpd"](4608,Ot.a,Ot.a,[X.a,j.a,ft.a]),s["ɵmpd"](4608,wt.a,wt.a,[X.a,j.a]),s["ɵmpd"](4608,kt.a,kt.a,[X.a,j.a,ft.a]),s["ɵmpd"](4608,Ft.a,Ft.a,[j.a,Z.a,Y.a,X.a,J.l]),s["ɵmpd"](4608,Ut.a,Ut.a,[X.a,j.a]),s["ɵmpd"](4608,mt.a,mt.a,[Z.a,j.a]),s["ɵmpd"](5120,jt.a,jt.c,[jt.b]),s["ɵmpd"](4608,$t.a,$t.a,[r.c]),s["ɵmpd"](4608,h.a,h.a,[]),s["ɵmpd"](4608,Gt.a,Gt.a,[h.a]),s["ɵmpd"](5120,Ht.a,a,[jt.a]),s["ɵmpd"](4608,m.a,m.a,[]),s["ɵmpd"](4608,xt.a,xt.a,[Ht.a,r.c,Z.a,m.a]),s["ɵmpd"](4608,Qt.a,Qt.a,[Gt.a,$t.a,Ht.a,xt.a]),s["ɵmpd"](4608,c.a,c.a,[]),s["ɵmpd"](4608,d.a,d.a,[]),s["ɵmpd"](4608,p.a,p.a,[]),s["ɵmpd"](4608,g.a,g.a,[]),s["ɵmpd"](4608,f.a,f.a,[]),s["ɵmpd"](4608,Kt.a,Kt.a,[Ht.a,q.a,r.c]),s["ɵmpd"](512,dt.CommonModule,dt.CommonModule,[]),s["ɵmpd"](512,s.ErrorHandler,qt.a,[]),s["ɵmpd"](256,j.b,{},[]),s["ɵmpd"](1024,zt.a,zt.b,[]),s["ɵmpd"](1024,Z.a,Z.b,[l.b,zt.a,s.NgZone]),s["ɵmpd"](1024,j.a,j.c,[j.b,Z.a]),s["ɵmpd"](512,Y.a,Y.a,[Z.a]),s["ɵmpd"](512,x.a,x.a,[]),s["ɵmpd"](512,X.a,X.a,[j.a,Z.a,[2,x.a]]),s["ɵmpd"](512,J.l,J.l,[X.a]),s["ɵmpd"](256,Dt.a,{links:[{loadChildren:"../pages/cat/cat.module.ngfactory#CatPageModuleNgFactory",name:"CatPage",segment:"cat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/lang/lang.module.ngfactory#LangPageModuleNgFactory",name:"LangPage",segment:"lang",priority:"low",defaultHistory:[]},{loadChildren:"../pages/check/check.module.ngfactory#CheckPageModuleNgFactory",name:"CheckPage",segment:"check",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal-add/modal-add.module.ngfactory#ModalAddPageModuleNgFactory",name:"ModalAddPage",segment:"modal-add",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),s["ɵmpd"](512,s.Compiler,s.Compiler,[]),s["ɵmpd"](512,Wt.a,Wt.a,[s.Compiler]),s["ɵmpd"](1024,St.b,St.c,[Wt.a,s.Injector]),s["ɵmpd"](1024,s.APP_INITIALIZER,function(t,e,n,a,i,o,s,r,u,c,d,p,g){return[l.s(t),Bt.a(e),Lt.b(n,a),Ft.b(i,o,s,r,u),St.d(c,d,p,g)]},[[2,s.NgProbeToken],j.a,Z.a,Y.a,j.a,Z.a,Y.a,X.a,J.l,j.a,Dt.a,St.b,s.NgZone]),s["ɵmpd"](512,s.ApplicationInitStatus,s.ApplicationInitStatus,[[2,s.APP_INITIALIZER]]),s["ɵmpd"](131584,s.ApplicationRef,s.ApplicationRef,[s.NgZone,s["ɵConsole"],s.Injector,s.ErrorHandler,s.ComponentFactoryResolver,s.ApplicationInitStatus]),s["ɵmpd"](512,s.ApplicationModule,s.ApplicationModule,[s.ApplicationRef]),s["ɵmpd"](512,l.a,l.a,[[3,l.a]]),s["ɵmpd"](512,r.e,r.e,[]),s["ɵmpd"](512,r.d,r.d,[]),s["ɵmpd"](512,_.a,_.a,[]),s["ɵmpd"](512,At.j,At.j,[]),s["ɵmpd"](512,At.d,At.d,[]),s["ɵmpd"](512,At.i,At.i,[]),s["ɵmpd"](512,Ct.a,Ct.a,[]),s["ɵmpd"](512,u.e,u.e,[]),s["ɵmpd"](512,b.a,b.a,[]),s["ɵmpd"](512,Zt.a,Zt.a,[]),s["ɵmpd"](512,T,T,[]),s["ɵmpd"](256,r.l,"XSRF-TOKEN",[]),s["ɵmpd"](256,r.m,"X-XSRF-TOKEN",[]),s["ɵmpd"](256,q.c,void 0,[]),s["ɵmpd"](256,q.b,void 0,[]),s["ɵmpd"](256,v.a,R,[]),s["ɵmpd"](256,dt.APP_BASE_HREF,"/",[]),s["ɵmpd"](256,jt.b,{name:"__jtpdb"},[])])});Object(s.enableProdMode)(),Object(l.j)().bootstrapModuleFactory(Vt)},45:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(2),n(110);var a=function(){function t(t,e){this.storage=t,this.SETTINGS_KEY="__settingsJTP",this._defaults=e}return t.prototype.load=function(){var t=this;return this.storage.get(this.SETTINGS_KEY).then(function(e){return e?(t.settings=e,t._mergeDefaults(t._defaults)):t.setAll(t._defaults).then(function(e){t.settings=e})})},t.prototype._mergeDefaults=function(t){for(var e in t)e in this.settings||(this.settings[e]=t[e]);return this.setAll(this.settings)},t.prototype.merge=function(t){for(var e in t)this.settings[e]=t[e];return this.save()},t.prototype.setValue=function(t,e){return this.settings[t]=e,this.storage.set(this.SETTINGS_KEY,this.settings)},t.prototype.setAll=function(t){return this.storage.set(this.SETTINGS_KEY,t)},t.prototype.getValue=function(t){return this.storage.get(this.SETTINGS_KEY).then(function(e){return e[t]})},t.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(t.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),t}()},93:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(2);var a=n(51),i=function(){function t(t){this.http=t,this.url="https://www.jeu-tu-preferes.fr/api"}return t.prototype.get=function(t,e,n){if(n||(n={params:new a.g}),e){n.params=new a.g;for(var i in e)n.params=n.params.set(i,e[i])}return this.http.get(this.url+"/"+t,n)},t.prototype.post=function(t,e,n){return this.http.post(this.url+"/"+t,e,n)},t.prototype.put=function(t,e,n){return this.http.put(this.url+"/"+t,e,n)},t.prototype.delete=function(t,e){return this.http.delete(this.url+"/"+t,e)},t.prototype.patch=function(t,e,n){return this.http.patch(this.url+"/"+t,e,n)},t}()},94:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(2),n(109);var a=function(){function t(t){this.ga=t}return t.prototype.init=function(){this.ga.startTrackerWithId("UA-82079763-1",15).then(function(){console.log("Google analytics is ready now")}).catch(function(t){return console.log("Error starting GoogleAnalytics",t)})},t.prototype.track=function(t){this.ga.trackView(t)},t}()},96:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(2),n(85),n(108),n(45);var a=function(){function t(t,e,n,a){this.settings=t,this.http=e,this.plt=n,this.admobFree=a,this.firstPubDisplayed=!1}return t.prototype.initPub=function(t){var e=this;(!t||t&&!this.firstPubDisplayed)&&(this.firstPubDisplayed=!0,setTimeout(function(){var t={id:"ca-app-pub-3956495131739396/8376792863",isTesting:!1,autoShow:!0};e.plt.is("android")&&(t.id="ca-app-pub-3956495131739396/1272328460"),e.admobFree.interstitial.config(t),e.admobFree.interstitial.prepare().then(function(){}).catch(function(t){return console.log(t)})},4e3))},t}()}},[244]);