webpackJsonp([5],{309:function(n,l,e){"use strict";function a(n){return t["ɵvid"](0,[(n()(),t["ɵted"](-1,null,["\n"])),(n()(),t["ɵeld"](1,0,null,null,10,"ion-header",[],null,null,null,null,null)),t["ɵdid"](2,16384,null,0,R.a,[C.a,t.ElementRef,t.Renderer,[2,L.a]],null,null),(n()(),t["ɵted"](-1,null,["\n\n  "])),(n()(),t["ɵeld"](4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,_.b,_.a)),t["ɵdid"](5,49152,null,0,E.a,[y.a,[2,L.a],[2,D.a],C.a,t.ElementRef,t.Renderer],null,null),(n()(),t["ɵted"](-1,3,["\n    "])),(n()(),t["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,N.b,N.a)),t["ɵdid"](8,49152,null,0,A.a,[C.a,t.ElementRef,t.Renderer,[2,I.a],[2,E.a]],null,null),(n()(),t["ɵted"](-1,0,["check"])),(n()(),t["ɵted"](-1,3,["\n  "])),(n()(),t["ɵted"](-1,null,["\n\n"])),(n()(),t["ɵted"](-1,null,["\n\n\n"])),(n()(),t["ɵeld"](13,0,null,null,2,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,P.b,P.a)),t["ɵdid"](14,4374528,null,0,V.a,[C.a,G.a,S.a,t.ElementRef,t.Renderer,y.a,F.a,t.NgZone,[2,L.a],[2,D.a]],null,null),(n()(),t["ɵted"](-1,1,["\n\n"])),(n()(),t["ɵted"](-1,null,["\n"]))],null,function(n,l){n(l,4,0,t["ɵnov"](l,5)._hidden,t["ɵnov"](l,5)._sbPadding);n(l,13,0,t["ɵnov"](l,14).statusbarPadding,t["ɵnov"](l,14)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var t=e(0),u=(e(2),e(58)),s=(e(85),e(237),e(147)),o=e(144),d=e(148),i=function(){function n(n,l,e,a,t,u,s,o,d){this.ga=n,this.database=l,this.splashScreen=e,this.globalization=a,this.trad=t,this.translate=u,this.navCtrl=s,this.navParams=o,this.settings=d,this.ga.init()}return n.prototype.ionViewDidLoad=function(){var n=this;this.settings.load().then(function(){n.database.loadDB().then(function(){n.settings.allSettings.nbLaunch<2?window.cordova?n.globalization.getPreferredLanguage().then(function(l){var e=l.value.split("-");n.checkLanguage(e[0]),n.redirection("LangPage")}):(n.checkLanguage(o.a.LANGUAGE_DEFAULT),n.redirection("LangPage")):n.redirection("WelcomePage")}),n.settings.setValue("nbLaunch",n.settings.allSettings.nbLaunch+1)})},n.prototype.checkLanguage=function(n){for(var l=!1,e=0;e<o.a.LANGUAGE_LIST.length;e++)if(o.a.LANGUAGE_LIST[e].code===n){this.settings.setValue("language",n),l=!0;break}l||this.settings.setValue("language",o.a.LANGUAGE_DEFAULT)},n.prototype.redirection=function(n){this.translate.use(this.settings.allSettings.language),this.trad.init(),this.splashScreen.hide(),this.navCtrl.setRoot(n,{},{animate:!0,direction:"forward"})},n}(),r=function(){return function(){}}(),c=e(227),b=e(228),g=e(229),f=e(230),m=e(231),h=e(232),p=e(233),k=e(234),v=e(235),R=e(87),C=e(1),L=e(5),_=e(315),E=e(35),y=e(9),D=e(21),N=e(238),A=e(63),I=e(36),P=e(236),V=e(22),G=e(4),S=e(10),F=e(25),U=e(95),w=e(142),K=e(140),M=e(27),T=e(12),x=e(45),z=t["ɵcrt"]({encapsulation:2,styles:[],data:{}}),j=t["ɵccf"]("page-check",i,function(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"page-check",[],null,null,null,a,z)),t["ɵdid"](1,49152,null,0,i,[U.a,w.a,d.a,s.a,K.a,M.a,D.a,T.a,x.a],null,null)],null,null)},{},{},[]),B=e(11),O=e(18),J=e(59),W=e(60),Z=e(62),q=e(61),H=e(86),Q=e(139),X=e(41);e.d(l,"CheckPageModuleNgFactory",function(){return Y});var Y=t["ɵcmf"](r,[],function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[c.a,b.a,g.a,f.a,m.a,h.a,p.a,k.a,v.a,j]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,B.NgLocalization,B.NgLocaleLocalization,[t.LOCALE_ID,[2,B["ɵa"]]]),t["ɵmpd"](4608,O.k,O.k,[]),t["ɵmpd"](4608,O.c,O.c,[]),t["ɵmpd"](4608,J.b,J.a,[]),t["ɵmpd"](4608,W.a,W.b,[]),t["ɵmpd"](4608,Z.b,Z.a,[]),t["ɵmpd"](4608,q.b,q.a,[]),t["ɵmpd"](4608,M.a,M.a,[H.a,J.b,W.a,Z.b,q.b,M.b,M.c]),t["ɵmpd"](512,B.CommonModule,B.CommonModule,[]),t["ɵmpd"](512,O.j,O.j,[]),t["ɵmpd"](512,O.d,O.d,[]),t["ɵmpd"](512,O.i,O.i,[]),t["ɵmpd"](512,Q.a,Q.a,[]),t["ɵmpd"](512,Q.b,Q.b,[]),t["ɵmpd"](512,u.a,u.a,[]),t["ɵmpd"](512,r,r,[]),t["ɵmpd"](256,X.a,i,[]),t["ɵmpd"](256,M.c,void 0,[]),t["ɵmpd"](256,M.b,void 0,[])])})},315:function(n,l,e){"use strict";function a(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t["ɵeld"](2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,e){var a=!0;if("click"===l){a=!1!==n.component.backButtonClick(e)&&a}return a},s.b,s.a)),t["ɵdid"](3,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵdid"](4,1097728,null,0,o.a,[[8,"bar-button"],d.a,t.ElementRef,t.Renderer],null,null),(n()(),t["ɵeld"](5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](6,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵdid"](7,147456,null,0,i.a,[d.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(n()(),t["ɵeld"](8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t["ɵdid"](9,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t["ɵted"](10,null,["",""])),t["ɵncd"](null,0),t["ɵncd"](null,1),t["ɵncd"](null,2),(n()(),t["ɵeld"](14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t["ɵdid"](15,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,3)],function(n,l){var e=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+e._mode);n(l,3,0,"back-button","back-button-"+e._mode);n(l,6,0,"back-button-icon","back-button-icon-"+e._mode);n(l,7,0,e._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+e._mode);n(l,15,0,"toolbar-content","toolbar-content-"+e._mode)},function(n,l){var e=l.component;n(l,2,0,e._hideBb);n(l,5,0,t["ɵnov"](l,7)._hidden);n(l,10,0,e._backText)})}e.d(l,"a",function(){return r}),l.b=a;var t=e(0),u=e(11),s=e(44),o=e(20),d=e(1),i=e(40),r=(e(5),e(21),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});