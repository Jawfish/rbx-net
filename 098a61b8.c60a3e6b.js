(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},118:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},120:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(122),o=r(118),i=r(56),u=r.n(i),l=37,s=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(c.a)(),f=m.tabGroupChoices,y=m.setTabGroupChoices,v=Object(n.useState)(i),h=v[0],g=v[1],O=n.Children.toArray(e.children);if(null!=d){var j=f[d];null!=j&&j!==h&&p.some((function(e){return e.value===j}))&&g(j)}var w=function(e){g(e),null!=d&&y(d,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},b)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case s:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},121:function(e,t,r){"use strict";var n=r(3),a=r(0),c=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}},122:function(e,t,r){"use strict";var n=r(0),a=r(123);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return l}));var n=r(0),a=r.n(n),c=r(120),o=r(121),i="ts",u="code",l=[{label:"roblox-ts",value:"ts"},{label:"luau",value:"luau"}];t.d=function(e){var t=e.children,r=t[0],n=t[1];return console.log(r,n),a.a.createElement(c.a,{defaultValue:i,groupId:u,values:l},a.a.createElement(o.a,{value:"ts"},r),a.a.createElement(o.a,{value:"luau"},n))}},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(117)),o=r(124),i=r(120),u=r(121),l={id:"typecheck",title:"Runtime Type Checking",sidebar_label:"Enforcing types at runtime",slug:"/middleware/types"},s={unversionedId:"middleware/typecheck",id:"middleware/typecheck",isDocsHomePage:!1,title:"Runtime Type Checking",description:"It's important when you recieve events or calls from the server that you ensure the types are correct, otherwise unwanted errors may pop up.",source:"@site/docs/middleware/typecheck.md",slug:"/middleware/types",permalink:"/rbx-net/docs/2.0/middleware/types",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/docs/middleware/typecheck.md",version:"current",sidebar_label:"Enforcing types at runtime",sidebar:"docs",previous:{title:"Rate limiting your remotes",permalink:"/rbx-net/docs/2.0/middleware/rate-limit"},next:{title:"Logging",permalink:"/rbx-net/docs/2.0/middleware/logging"}},p=[{value:"Using a library like <code>t</code>",id:"using-a-library-like-t",children:[]}],d={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"It's important when you recieve events or calls from the server that you ensure the types are correct, otherwise unwanted errors may pop up."),Object(c.b)("p",null,"If you want to ensure the types you're recieving from the client ",Object(c.b)("em",{parentName:"p"},"are")," the types you're expecting, you can use the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../api/middleware#typechecking"}),Object(c.b)("inlineCode",{parentName:"a"},"Net.Middleware.TypeChecking"))," middleware."),Object(c.b)("p",null,"This middleware just takes type checking functions."),Object(c.b)("h2",{id:"using-a-library-like-t"},"Using a library like ",Object(c.b)("inlineCode",{parentName:"h2"},"t")),Object(c.b)("p",null,"The rate limiter middleware is created as such:"),Object(c.b)(i.a,{defaultValue:o.a,groupId:o.b,values:o.c,mdxType:"Tabs"},Object(c.b)(u.a,{value:"ts",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"Net.Middleware.TypeCheck(t.string)\n"))),Object(c.b)(u.a,{value:"luau",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"Net.Middleware.TypeCheck(t.string)\n")))))}b.isMDXComponent=!0}}]);