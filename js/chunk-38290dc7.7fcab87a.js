(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38290dc7"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),c=r("9112");for(var a in i){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==o)try{c(s,"forEach",o)}catch(f){s.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),c=i("forEach"),a=o("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),c=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),c=r("ae40"),a=o("filter"),u=c("filter");n({target:"Array",proto:!0,forced:!a||!u},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?i.f(t,c,o(0,r)):t[c]=r}},"991a":function(t,e,r){"use strict";var n=r("aed8"),i=r.n(n);i.a},"9ccc":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{id:"education"}},[r("b-container",{attrs:{fluid:"xl"}},[r("Title",{staticClass:"wow animate__animated animate__slideInUp",attrs:{partTitle:t.partTitle,haveSubTitle:t.haveSubTitle,subTitle:t.subTitle,textAlign:t.textAlign}}),r("b-row",{attrs:{fluid:"md"}},[r("b-col",{staticClass:"wow animate__animated animate__slideInLeft",attrs:{cols:"6"}},[r("h3",[t._v("求学经历")]),r("div",{staticClass:"experience-wrapper"},t._l(t.education,(function(e,n){return r("div",{key:n,staticClass:"experience"},[r("div",{staticClass:"year"},[t._v(t._s(e.year))]),r("div",{staticClass:"content"},[r("div",{staticClass:"circle"}),r("h5",[t._v(t._s(e.major))]),r("span",[t._v(t._s(e.college))]),r("p",[t._v(t._s(e.course))])])])})),0)]),r("b-col",{staticClass:"wow animate__animated animate__slideInRight",attrs:{cols:"6"}},[r("h3",[t._v("工作经历")]),r("div",{staticClass:"experience-wrapper"},t._l(t.works,(function(e,n){return r("div",{key:n,staticClass:"experience"},[r("div",{staticClass:"year"},[t._v(t._s(e.year))]),r("div",{staticClass:"content"},[r("div",{staticClass:"circle"}),r("h5",[t._v(t._s(e.company))]),r("span",[t._v(t._s(e.job))]),r("ol",[t._v(" 公司职责： "),t._l(e.duties,(function(e,n){return r("li",{key:n},[t._v(t._s(n+1)+". "+t._s(e))])}))],2)])])})),0)])],1)],1)],1)},i=[],o=r("5530"),c=r("2f62"),a=r("bc1b"),u={computed:Object(o["a"])({},Object(c["c"])({partTitle:function(t){return t.partTitle="求学和工作经历"},haveSubTitle:function(t){return t.haveSubTitle},subTitle:function(t){return t.subTitle="education and work experience"},textAlign:function(t){return t.textAlign},education:function(t){return t.information.education},works:function(t){return t.information.works}})),mounted:function(){(new a["WOW"]).init()}},s=u,f=(r("991a"),r("2877")),l=Object(f["a"])(s,n,i,!1,null,"0bebc5ab",null);e["default"]=l.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),v=r("7b0b"),y=r("fc6a"),h=r("c04e"),g=r("5c6c"),m=r("7c73"),w=r("df75"),O=r("241c"),S=r("057f"),_=r("7418"),j=r("06cf"),L=r("9bf2"),T=r("d1e7"),C=r("9112"),P=r("6eeb"),x=r("5692"),E=r("f772"),k=r("d012"),A=r("90e3"),D=r("b622"),M=r("e538"),N=r("746f"),R=r("d44e"),V=r("69f3"),G=r("b727").forEach,I=E("hidden"),F="Symbol",H="prototype",J=D("toPrimitive"),W=V.set,B=V.getterFor(F),q=Object[H],Q=i.Symbol,U=o("JSON","stringify"),$=j.f,z=L.f,K=S.f,X=T.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[H]||!nt[H].findChild,ot=a&&f((function(){return 7!=m(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=$(q,e);n&&delete q[e],z(t,e,r),n&&t!==q&&z(q,e,n)}:z,ct=function(t,e){var r=Y[t]=m(Q[H]);return W(r,{type:F,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ut=function(t,e,r){t===q&&ut(Z,e,r),p(t);var n=h(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,I)&&t[I][n]&&(t[I][n]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,I)||z(t,I,g(1,{})),t[I][n]=!0),ot(t,n,r)):z(t,n,r)},st=function(t,e){p(t);var r=y(e),n=w(r).concat(pt(r));return G(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,I)&&this[I][e])||r)},bt=function(t,e){var r=y(t),n=h(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var i=$(r,n);return!i||!l(Y,n)||l(r,I)&&r[I][n]||(i.enumerable=!0),i}},dt=function(t){var e=K(y(t)),r=[];return G(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=K(e?Z:y(t)),n=[];return G(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(u||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===q&&r.call(Z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),ot(this,e,g(1,t))};return a&&it&&ot(q,e,{configurable:!0,set:r}),ct(e,t)},P(Q[H],"toString",(function(){return B(this).tag})),P(Q,"withoutSetter",(function(t){return ct(A(t),t)})),T.f=lt,L.f=ut,j.f=bt,O.f=S.f=dt,_.f=pt,M.f=function(t){return ct(D(t),t)},a&&(z(Q[H],"description",{configurable:!0,get:function(){return B(this).description}}),c||P(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Q}),G(w(rt),(function(t){N(t)})),n({target:F,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),U){var vt=!u||f((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),i[1]=e,U.apply(null,i)}})}Q[H][J]||C(Q[H],J,Q[H].valueOf),R(Q,F),k[I]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var r=[][t],s=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:u,l=o(e,1)?e[1]:void 0;return a[t]=!!r&&!i((function(){if(s&&!n)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,f,l)}))}},aed8:function(t,e,r){},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),c=r("d039"),a=c((function(){o(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),a=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,b=5==t||l;return function(d,p,v,y){for(var h,g,m=o(d),w=i(m),O=n(p,v,3),S=c(w.length),_=0,j=y||a,L=e?j(d,S):r?j(d,0):void 0;S>_;_++)if((b||_ in w)&&(h=w[_],g=O(h,_,m),t))if(e)L[_]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return _;case 2:u.call(L,h)}else if(f)return!1;return l?-1:s||f?f:L}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),c=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),i=a.f,s=o(n),f={},l=0;while(s.length>l)r=i(n,e=s[l++]),void 0!==r&&u(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),c=r("06cf").f,a=r("83ab"),u=i((function(){c(1)})),s=!a||u;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-38290dc7.7fcab87a.js.map