(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(120),s=a(116),o=a(56),c=a.n(o),i=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,m=e.values,p=e.groupId,d=e.className,y=Object(l.a)(),g=y.tabGroupChoices,f=y.setTabGroupChoices,h=Object(n.useState)(o),v=h[0],b=h[1],k=n.Children.toArray(e.children);if(null!=p){var E=g[p];null!=E&&E!==v&&m.some((function(e){return e.value===E}))&&b(E)}var j=function(e){b(e),null!=p&&f(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},a)}))),t?Object(n.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},126:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},127:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(125),s=a(126);t.a=function(e){var t=e.children,a=t[0],n=t[1];return console.log(a,n),r.a.createElement(l.a,{defaultValue:"ts",groupId:"code",values:[{label:"roblox-ts",value:"ts"},{label:"luau",value:"lua"}]},r.a.createElement(s.a,{value:"ts"},a),r.a.createElement(s.a,{value:"lua"},n))}},128:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(o){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),s};e.exports=n,e.exports.default=n},129:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},130:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),s=a(116),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(22).a,theme:o};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function g(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(o))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,s=u({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),s=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,s=0,o=[],c=[o];s>-1;){for(;(l=n[s]++)<r[s];){var i=void 0,u=t[s],y=a[s][l];if("string"==typeof y?(u=s>0?u:["plain"],i=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),i=y.content),"string"==typeof i){var g=i.split(m),f=g.length;o.push({types:u,content:g[0]});for(var h=1;h<f;h++)p(o),c.push(o=[]),o.push({types:u,content:g[h]})}else s++,t.push(u),a.push(i),n.push(0),r.push(i.length)}s--,t.pop(),a.pop(),n.pop(),r.pop()}return p(o),c}(void 0!==s?t.tokenize(n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),h=a(128),v=a.n(h),b=a(129),k=a.n(b),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(124),N=a(117),O=function(){var e=Object(N.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(57),w=a.n(x),C=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},S=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,o=e.metastring,i=Object(N.useThemeConfig)().prism,u=Object(r.useState)(!1),m=u[0],p=u[1],d=Object(r.useState)(!1),y=d[0],g=d[1];Object(r.useEffect)((function(){g(!0)}),[]);var h=Object(r.useRef)(null),b=[],E="",j=O(),x=Array.isArray(t)?t.join(""):t;if(o&&C.test(o)){var P=o.match(C)[1];b=k()(P).filter((function(e){return e>0}))}o&&S.test(o)&&(E=o.match(S)[1]);var R=a&&a.replace(/language-/,"");!R&&i.defaultLanguage&&(R=i.defaultLanguage);var D=x.replace(/\n$/,"");if(0===b.length&&void 0!==R){for(var M,I="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(R),B=x.replace(/\n$/,"").split("\n"),H=0;H<B.length;){var L=H+1,_=B[H].match(A);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=L+",";break;case"highlight-start":M=L;break;case"highlight-end":I+=M+"-"+(L-1)+","}B.splice(H,1)}else H+=1}b=k()(I),D=B.join("\n")}var F=function(){v()(D),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(f,Object(n.a)({},c,{key:String(y),theme:j,code:D,language:R}),(function(e){var t,a=e.className,r=e.style,o=e.tokens,c=e.getLineProps,i=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,E&&l.a.createElement("div",{style:r,className:w.a.codeBlockTitle},E),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(s.a)(a,w.a.codeBlock,"thin-scrollbar",(t={},t[w.a.codeBlockWithTitle]=E,t))},l.a.createElement("div",{className:w.a.codeBlockLines,style:r},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return b.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))})))})))),l.a.createElement("button",{ref:h,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(w.a.copyButton),onClick:F},m?"Copied":"Copy")))}))}},99:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),l=a.n(r),s=a(116),o=a(121),c=a(118),i=a(21),u=a(119),m=a(100),p=a.n(m),d=a(130),y=a(125),g=a(126),f=(a(127),[{title:"Contextual Networking API",description:l.a.createElement(l.a.Fragment,null,"Remotes are managed entirely by RbxNet. All you need are identifiers for the remotes.",l.a.createElement("br",null),l.a.createElement("br",null),"The code is segregated, to make the APIs more clean and clear.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"Net.Server")," is for server code, ",l.a.createElement("code",null,"Net.Client")," is for client code. Simple as that.")},{title:"Networking Middleware",description:l.a.createElement(l.a.Fragment,null,"RbxNet comes with built-in useful middleware such as"," ",l.a.createElement(c.a,{to:"/docs/2.0/middleware/types"},"RuntimeTypeCheck")," and"," ",l.a.createElement(c.a,{to:"/docs/2.0/middleware/rate-limit"},"RateLimit"),", but you can also roll your"," ",l.a.createElement(c.a,{to:"/docs/2.0/middleware/custom"},"own custom middleware"),".")},{title:"Definitions API",description:l.a.createElement(l.a.Fragment,null,"Take advantage of the declarative"," ",l.a.createElement(c.a,{to:"/docs/2.0/definitions"},"Definitions API"),", which allows you to define your remote instances in one place, and use anywhere else. Types generated for you.")}]);function h(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(u.a)(t);return l.a.createElement("div",{className:Object(s.a)("col col--4",p.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:p.a.featureImage,src:r,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}t.default=function(){var e=Object(i.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:Object(s.a)("hero",p.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:Object(u.a)("img/net2.svg")}),l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:p.a.buttons},l.a.createElement(c.a,{className:Object(s.a)("button button--outline button--primary button--lg",p.a.getStarted),to:Object(u.a)("docs/2.0")},"Get Started")))),l.a.createElement("main",null,l.a.createElement("section",{className:p.a.codeExample},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row--no-gutters"},l.a.createElement("div",{className:"col col--2"}),l.a.createElement("div",{className:"col col--16"},l.a.createElement(y.a,{defaultValue:"defs",groupId:"code",values:[{label:"Definitions",value:"defs"},{label:"Client",value:"client"},{label:"Server",value:"server"}]},l.a.createElement(g.a,{value:"defs"},l.a.createElement(d.a,{metastring:'title="shared/remotes.ts"',className:"ts"},'import Net from "@rbxts/net";\nconst Remotes = Net.Definitions.Create({\n    PrintMessage: Net.Definitions.Event<[message: string]>(),\n    MakeHello: Net.Definitions.AsyncFunction<(message: string) => string>()\n});\nexport default Remotes;')),l.a.createElement(g.a,{value:"client"},l.a.createElement(d.a,{metastring:'title="client/main.client.ts"',className:"ts"},'import Remotes from "shared/remotes.ts";\nconst PrintMessage = Remotes.GetClient("PrintMessage")\nconst MakeHello = Remotes.GetClient("MakeHello")\n\n// should print "Hello there!" on the server\nPrintMessage.SendToServer("Hello there!");\nMakeHello.CallServerAsync("Roblox").then(result => {\n    print(result); // Should print Hello, Roblox! on the client\n});')),l.a.createElement(g.a,{value:"server"},l.a.createElement(d.a,{metastring:'title="server/main.server.ts"',className:"ts"},'import Remotes from "shared/remotes.ts";\nconst PrintMessage = Remotes.CreateServer("PrintMessage")\nconst MakeHello = Remotes.CreateServer("MakeHello")\n\nPrintMessage.Connect((message) => {\n    // Will print the message given to it\n    print(message);\n});\n// This will take the input string\n// e.g. \'Roblox\' and turn it into \'Hello, Roblox!\', and send it back to the client\nMakeHello.SetCallback((message) => `Hello, ${message}!`);')))),l.a.createElement("div",{className:"col col--2"})))),f&&f.length>0&&l.a.createElement("section",{className:p.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((function(e,t){return l.a.createElement(h,Object(n.a)({key:t},e))})))))))}}}]);