(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{5193:function(e,n,t){"use strict";t.d(n,{hU:function(){return N},zx:function(){return S}});var r=t(7375),i=t(2846),a=t(5031),o=t(8554),c=t.n(o),s=t(7294),l=t(6450),u=t(9609);function d(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}var h=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],p=(0,l.kr)({strict:!1,name:"ButtonGroupContext"}),m=p[0],v=p[1],y=(0,i.Gp)((function(e,n){var t=e.size,r=e.colorScheme,o=e.variant,c=e.className,l=e.spacing,u=void 0===l?"0.5rem":l,p=e.isAttached,v=e.isDisabled,y=d(e,h),b=(0,a.cx)("chakra-button__group",c),g=s.useMemo((function(){return{size:t,colorScheme:r,variant:o,isDisabled:v}}),[t,r,o,v]),x={display:"inline-flex"};return x=f({},x,p?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),s.createElement(m,{value:g},s.createElement(i.m$.div,f({ref:n,role:"group",__css:x,className:b,"data-attached":p?"":void 0},y)))}));a.Ts&&(y.displayName="ButtonGroup");var b=["label","placement","spacing","children","className","__css"],g=function(e){var n=e.label,t=e.placement,r=e.spacing,o=void 0===r?"0.5rem":r,c=e.children,l=void 0===c?s.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):c,h=e.className,p=e.__css,m=d(e,b),v=(0,a.cx)("chakra-button__spinner",h),y="start"===t?"marginEnd":"marginStart",g=s.useMemo((function(){var e;return f(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[y]=n?o:0,e.fontSize="1em",e.lineHeight="normal",e),p)}),[p,n,y,o]);return s.createElement(i.m$.div,f({className:v},m,{__css:g}),l)};a.Ts&&(g.displayName="ButtonSpinner");var x=["children","className"],w=function(e){var n=e.children,t=e.className,r=d(e,x),o=s.isValidElement(n)?s.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,c=(0,a.cx)("chakra-button__icon",t);return s.createElement(i.m$.span,f({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:c}),o)};a.Ts&&(w.displayName="ButtonIcon");var _=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],S=(0,i.Gp)((function(e,n){var t=v(),o=(0,i.mq)("Button",f({},t,e)),l=(0,i.Lr)(e),u=l.isDisabled,h=void 0===u?null==t?void 0:t.isDisabled:u,p=l.isLoading,m=l.isActive,y=l.children,b=l.leftIcon,x=l.rightIcon,w=l.loadingText,S=l.iconSpacing,k=void 0===S?"0.5rem":S,N=l.type,j=l.spinner,T=l.spinnerPlacement,C=void 0===T?"start":T,I=l.className,z=l.as,B=d(l,_),A=s.useMemo((function(){var e,n=c()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return f({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o,!!t&&{_focus:n})}),[o,t]),Z=function(e){var n=s.useState(!e),t=n[0],r=n[1];return{ref:s.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(z),D=Z.ref,O=Z.type,P={rightIcon:x,leftIcon:b,iconSpacing:k,children:y};return s.createElement(i.m$.button,f({disabled:h||p,ref:(0,r.qq)(n,D),as:z,type:null!=N?N:O,"data-active":(0,a.PB)(m),"data-loading":(0,a.PB)(p),__css:A,className:(0,a.cx)("chakra-button",I)},B),p&&"start"===C&&s.createElement(g,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:k},j),p?w||s.createElement(i.m$.span,{opacity:0},s.createElement(E,P)):s.createElement(E,P),p&&"end"===C&&s.createElement(g,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:k},j))}));function E(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,i=e.iconSpacing;return s.createElement(s.Fragment,null,n&&s.createElement(w,{marginEnd:i},n),r,t&&s.createElement(w,{marginStart:i},t))}a.Ts&&(S.displayName="Button");var k=["icon","children","isRound","aria-label"],N=(0,i.Gp)((function(e,n){var t=e.icon,r=e.children,i=e.isRound,a=e["aria-label"],o=d(e,k),c=t||r,l=s.isValidElement(c)?s.cloneElement(c,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(S,f({padding:"0",borderRadius:i?"full":void 0,ref:n,"aria-label":a},o),l)}));a.Ts&&(N.displayName="IconButton")},7183:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t(6366)}])},8078:function(e,n,t){"use strict";var r=t(2846),i=t(7658),a=t(9630),o=(0,r.m$)(i.E.div,{shouldForwardProp:function(e){return(0,a.Z)(e)||"children"===e}});n.Z=o},6366:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),i=t(8527),a=t(5193),o=t(9844),c=t(8078),s=t(1020),l=t(7294),u={isObjectEmpty:function(e){return!e||0===Object.keys(e).length},isClientSide:function(){return!0},useHeight:function(){var e=(0,l.useState)("100vh"),n=e[0],t=e[1];return(0,l.useEffect)((function(){var e=function(){return t(window.innerHeight)};return t(window.innerHeight),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},useWidth:function(){var e=(0,l.useState)("100vw"),n=e[0],t=e[1];return(0,l.useEffect)((function(){var e=function(){return t(window.innerWidth)};return t(window.innerWidth),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}},d=function(){return(0,r.jsx)(i.xu,{height:u.useHeight(),width:"100%",children:(0,r.jsx)(c.Z,{height:"100%",initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.5},children:(0,r.jsx)(i.Kq,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",children:(0,r.jsx)(i.xu,{height:"100%",width:{base:"90%",md:"85%",lg:"80%",xl:"70%"},children:(0,r.jsxs)(i.gC,{height:"100%",justify:"center",alignItems:"flex-start",direction:"column",children:[(0,r.jsx)(i.xv,{mb:3,fontFamily:"Space Mono",fontSize:16,color:s.Z.primary,children:(0,r.jsx)(o.e,{cursor:!1,sequence:[1e3,"Hi, my name is"]})}),(0,r.jsx)(i.xv,{letterSpacing:2,fontWeight:"bold",fontSize:{base:"24px",md:"48px",lg:"60px",xl:"65px"},color:s.Z.lightText,children:(0,r.jsx)(o.e,{cursor:!1,sequence:[2e3,"Jeromy Kho."]})}),(0,r.jsx)(i.xv,{letterSpacing:2,fontWeight:"bold",fontSize:{base:"24px",md:"48px",lg:"60px",xl:"65px"},color:s.Z.darkText,children:(0,r.jsx)(o.e,{sequence:[3e3,"Software Engineer."]})}),(0,r.jsxs)(i.xv,{letterSpacing:1,mt:5,fontSize:{base:"13px",md:"15px",lg:"16px"},color:s.Z.darkText,children:["\n          I\u2019m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.\n          Currently, I'm focused on building my knowledge and experience on cloud infra to eventually be a devops at\n          ",(0,r.jsx)(i.rU,{target:"_blank",textDecoration:"none",_hover:{textDecoration:"underline"},color:s.Z.primary,letterSpacing:1,href:"https://www.naluri.life/",children:"Naluri"}),"."]}),(0,r.jsx)(i.xu,{paddingTop:"10",children:(0,r.jsx)(a.zx,{fontFamily:"Space Mono",colorScheme:"none",fontSize:{base:11,md:13,xl:15},p:7,alignSelf:"flex-start",fontWeight:500,color:s.Z.primary,borderColor:s.Z.primary,borderWidth:2,bg:s.Z.background,_hover:{bg:s.Z.hoverDark},children:(0,r.jsx)(i.rU,{target:"_blank",style:{textDecoration:"none"},href:"https://github.com/kasugasorata98/portfolio",children:"This Portfolio's Github Repository!"})})})]})})})})})}},1020:function(e,n){"use strict";n.Z={primary:"#48EAC2",darkPrimary:"#32BEBA",background:"#0A192F",darkBackground:"#020C1B",hoverDark:"#133040",lightText:"#CCD6F6",darkText:"#8892B0",divider:"#233554"}},9844:function(e,n,t){"use strict";t.d(n,{e:function(){return m}});var r=t(7294);function i(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}s((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e],r=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function o(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,i,a=t.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(i)throw i.error}}return o}function s(e,n,t){if(t||2===arguments.length)for(var r,i=0,a=n.length;i<a;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))}function l(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return i(this,void 0,void 0,(function(){var r,i,l,f,h,p;return a(this,(function(a){switch(a.label){case 0:a.trys.push([0,12,13,14]),r=o(t),i=r.next(),a.label=1;case 1:if(i.done)return[3,11];switch(typeof(l=i.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,u(e,l,n)];case 3:return a.sent(),[3,10];case 4:return[4,d(l)];case 5:return a.sent(),[3,10];case 6:return[4,l.apply(void 0,s([e,n],c(t),!1))];case 7:return a.sent(),[3,10];case 8:return[4,l];case 9:a.sent(),a.label=10;case 10:return i=r.next(),[3,1];case 11:return[3,14];case 12:return f=a.sent(),h={error:f},[3,14];case 13:try{i&&!i.done&&(p=r.return)&&p.call(r)}finally{if(h)throw h.error}return[7];case 14:return[2]}}))}))}function u(e,n,t){return i(this,void 0,void 0,(function(){var r;return a(this,(function(i){switch(i.label){case 0:return r=function(e,n){var t=c(n).slice(0);return s(s([],c(e),!1),[NaN],!1).findIndex((function(e,n){return t[n]!==e}))}(e.textContent,n),[4,f(e,s(s([],c(p(e.textContent,r)),!1),c(h(n,r)),!1),t)];case 1:return i.sent(),[2]}}))}))}function d(e){return i(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout(n,e)}))];case 1:return n.sent(),[2]}}))}))}function f(e,n,t){return i(this,void 0,void 0,(function(){var r,i,c,s,l;return a(this,(function(u){switch(u.label){case 0:u.trys.push([0,5,6,7]),r=o(function(e){var n,t,r,i,c,s,l;return a(this,(function(u){switch(u.label){case 0:n=function(e){return a(this,(function(n){switch(n.label){case 0:return[4,function(n){return requestAnimationFrame((function(){return n.textContent=e}))}];case 1:return n.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),t=o(e),r=t.next(),u.label=2;case 2:return r.done?[3,5]:(i=r.value,[5,n(i)]);case 3:u.sent(),u.label=4;case 4:return r=t.next(),[3,2];case 5:return[3,8];case 6:return c=u.sent(),s={error:c},[3,8];case 7:try{r&&!r.done&&(l=t.return)&&l.call(t)}finally{if(s)throw s.error}return[7];case 8:return[2]}}))}(n)),i=r.next(),u.label=1;case 1:return i.done?[3,4]:((0,i.value)(e),[4,d(t+t*(Math.random()-.5))]);case 2:u.sent(),u.label=3;case 3:return i=r.next(),[3,1];case 4:return[3,7];case 5:return c=u.sent(),s={error:c},[3,7];case 6:try{i&&!i.done&&(l=r.return)&&l.call(r)}finally{if(s)throw s.error}return[7];case 7:return[2]}}))}))}function h(e,n,t){var r=c(e).slice(0);return void 0===n&&(n=0),void 0===t&&(t=r.length),a(this,(function(e){switch(e.label){case 0:return n<t?[4,r.slice(0,++n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function p(e,n,t){var r=c(e).slice(0);return void 0===n&&(n=0),void 0===t&&(t=r.length),a(this,(function(e){switch(e.label){case 0:return t>n?[4,r.slice(0,--t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__1pV_J::after {\n  content: '|';\n  animation: index-module_cursor__1t4b- 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__1t4b- {\n  50% {\n    opacity: 0;\n  }\n}\n");var m=(0,r.memo)((function(e){var n=e.sequence,t=e.repeat,i=e.className,a=e.speed,o=void 0===a?40:a,u=e.wrapper,d=void 0===u?"div":u,f=e.cursor,h=void 0===f||f,p=e.style;o=Math.abs(o-100);var m,v,y,b,g,x,w=(0,r.useRef)(null),_="index-module_type__1pV_J";m=i&&i.length>0?h?"".concat(_," ").concat(i):i:h?_:"",v=(0,r.useRef)((function(){return t===1/0?l.apply(void 0,s(s([w.current,o],c(n),!1),[l],!1)):"number"==typeof t?l.apply(void 0,s([w.current,o],c(Array(1+t).fill(n).flat()),!1)):l.apply(void 0,s([w.current,o],c(n),!1)),function(){w.current}})),y=(0,r.useRef)(),b=(0,r.useRef)(!1),g=(0,r.useRef)(!1),x=c((0,r.useState)(0),2)[1],b.current&&(g.current=!0),(0,r.useEffect)((function(){return b.current||(y.current=v.current(),b.current=!0),x((function(e){return e+1})),function(){g.current&&y.current&&y.current()}}),[]);var S=d;return r.createElement(S,{style:p,className:m,ref:w})}),(function(e,n){return!0}))}},function(e){e.O(0,[527,774,888,179],(function(){return n=7183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);