(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(115)),c={id:"install-luau",title:"Install for Luau"},i={unversionedId:"install-luau",id:"install-luau",isDocsHomePage:!1,title:"Install for Luau",description:"\x3c!-- ## Via Kayak",source:"@site/docs/install-lua.md",slug:"/install-luau",permalink:"/rbx-net/docs/2.0/install-luau",editUrl:"https://github.com/roblox-aurora/rbx-net/edit/main/docs/docs/install-lua.md",version:"current",sidebar:"docs",previous:{title:"Install for TypeScript",permalink:"/rbx-net/docs/2.0/install"},next:{title:"Basics",permalink:"/rbx-net/docs/2.0/basic-usage"}},l=[{value:"Via PowerShell",id:"via-powershell",children:[]},{value:"Via Git submodules",id:"via-git-submodules",children:[]},{value:"Via Releases",id:"via-releases",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"via-powershell"},"Via PowerShell"),Object(o.b)("p",null,"Enter into powershell: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"Invoke-WebRequest -UseBasicParsing vorlias.com/rbx-net.ps1 | Invoke-Expression\n")),Object(o.b)("p",null,"Source of the script is available ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vorlias.com/rbx-net.ps1"}),"here")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note: if you get an error you might need to change the execution policy (i.e. enable Powershell) with"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"Set-ExecutionPolicy RemoteSigned -scope CurrentUser\n")))),Object(o.b)("p",null,"This will install the Luau version of Net under a packages/Net folder in your project."),Object(o.b)("p",null,"Then you can include it in your ",Object(o.b)("inlineCode",{parentName:"p"},"*.project.json")," file like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// ...\n    "ReplicatedStorage": {\n        // ...\n        "Net": {\n            "$path": "packages/Net"\n        }\n        // ...\n    },\n// ...\n')),Object(o.b)("p",null,"And now you can use rbx-net like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'local Net = require(game:GetService("ReplicatedStorage").Net)\n')),Object(o.b)("h2",{id:"via-git-submodules"},"Via Git submodules"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This method, while works... isn't the nicest way to do it."))),Object(o.b)("p",null,"Execute in powershell or bash:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"git submodule add https://github.com/roblox-aurora/rbx-net -b luau submodules/Net\n")),Object(o.b)("p",null,"Then you can include it in your ",Object(o.b)("inlineCode",{parentName:"p"},"*.project.json")," file like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// ...\n    "ReplicatedStorage": {\n        // ...\n        "Net": {\n            "$path": "submodules/Net"\n        }\n        // ...\n    },\n// ...\n')),Object(o.b)("p",null,"And now you can use rbx-net like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'local Net = require(game:GetService("ReplicatedStorage").Net)\n')),Object(o.b)("h2",{id:"via-releases"},"Via Releases"),Object(o.b)("p",null,"Releases can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/roblox-aurora/rbx-net/releases"}),"here")),Object(o.b)("p",null,"Each release contains a ",Object(o.b)("inlineCode",{parentName:"p"},".rbxmx")," model file, which you can drag into roblox studio."))}b.isMDXComponent=!0}}]);