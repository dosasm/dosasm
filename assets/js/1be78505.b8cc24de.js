"use strict";(self.webpackChunkdosasm=self.webpackChunkdosasm||[]).push([[9514,4608],{38704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(67294),r=n(3905),o=n(46291),c=n(56698),l=n(86010),i=n(941),s=n(93783),d=n(77898),u=n(55537),m=n(87462),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(24973),b=n(63366),f=n(36742),v=n(13919),E=n(18617),g="menuLinkText_1J2g",k=["items"],C=["item"],Z=["item","onItemClick","activePath"],_=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},y=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,m.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,b.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(T,(0,m.Z)({item:t},n));case"link":default:return a.createElement(B,(0,m.Z)({item:t},n))}}function T(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,c=(0,b.Z)(e,Z),s=n.items,d=n.label,u=n.collapsible,p=N(n,o),h=(0,i.uR)({initialState:function(){return!!u&&(!p&&n.collapsed)}}),f=h.collapsed,v=h.setCollapsed,E=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:f,setCollapsed:v}),a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,m.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&p},t[g]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},c),d),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(y,{items:s,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function B(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,b.Z)(e,_),c=t.href,s=t.label,d=N(t,r);return a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(f.Z,(0,m.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:c},(0,v.Z)(c)&&{onClick:n},o),(0,v.Z)(c)?s:a.createElement("span",null,s,a.createElement(E.Z,null))))}var I="sidebar_15mo",x="sidebarWithHideableNavbar_267A",M="sidebarHidden_2kNb",w="sidebarLogo_3h0W",A="menu_Bmed",P="menuWithAnnouncementBar_2WvA",j="collapseSidebarButton_1CGd",L="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",j),onClick:t},a.createElement(p,{className:L}))}function F(e){var t,n,r=e.path,o=e.sidebar,c=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,i.LU)(),h=p.navbar.hideOnScroll,b=p.hideableSidebar,f=(0,i.nT)().isClosed;return a.createElement("div",{className:(0,l.Z)(I,(t={},t[x]=h,t[M]=s,t))},h&&a.createElement(u.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",A,(n={},n[P]=!f&&m,n))},a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:o,activePath:r}))),b&&a.createElement(R,{onClick:c}))}var H=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:function(){return t()}}))};function W(e){return a.createElement(i.Cv,{component:H,props:e})}var D=a.memo(F),z=a.memo(W);function U(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(D,e),r&&a.createElement(z,e))}var Y=n(82238),J=n(24608),K=n(5977),$="backToTopButton_35hR",G="backToTopButtonShow_18ls";function q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var O=function(){var e,t=(0,K.TH)(),n=q(),r=n.smoothScrollTop,o=n.cancelScrollToTop,c=(0,a.useState)(!1),i=c[0],s=c[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,l.Z)("clean-btn",$,(e={},e[G]=i,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},V=n(99105);function X(e){var t,n,o,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,b=d.version,f=s.sidebar,v=f?d.docsSidebars[f]:void 0,E=(0,a.useState)(!1),g=E[0],k=E[1],C=(0,a.useState)(!1),Z=C[0],_=C[1],N=(0,a.useCallback)((function(){Z&&_(!1),k(!g)}),[Z]);return a.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,i.os)(m,b)}},a.createElement("div",{className:Q.docPage},a.createElement(O,null),v&&a.createElement("aside",{className:(0,l.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&_(!0)}},a.createElement(U,{key:f,sidebar:v,path:s.path,onCollapse:N,isHidden:Z}),Z&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(p,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,l.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:Y.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,c=t.find((function(e){return(0,K.LX)(r.pathname,e)}));return c?a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(X,{currentDocRoute:c,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(J.default,e)}},24608:function(e,t,n){n.r(t);var a=n(67294),r=n(56698),o=n(24973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},73148:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(87462),r=n(67294),o=n(86010),c=n(24544),l=n(10195),i=n(87594),s=n.n(i),d=n(83583),u=n(24973),m="codeBlockContainer_2gih",p="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",b="codeBlock_6upA",f="copyButton_2e3i",v="runButton_2gRE",E="codeBlockLines_xlV7",g=n(941),k=n(52263),C=/{([\d,-]+)}/,Z=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function _(e){var t=e.children,n=e.className,i=e.metastring,_=e.title,N=(0,g.LU)().prism,y=(0,r.useState)(!1),S=y[0],T=y[1],B=(0,r.useState)(!1),I=B[0],x=B[1];(0,r.useEffect)((function(){x(!0)}),[]);var M=(0,g.bc)(i)||_,w=(0,r.useRef)(null),A=[],P=(0,d.Z)(),j=Array.isArray(t)?t.join(""):t;if(i&&C.test(i)){var L=i.match(C)[1];A=s()(L).filter((function(e){return e>0}))}var R=n&&n.replace(/language-/,"");!R&&N.defaultLanguage&&(R=N.defaultLanguage);var F=j.replace(/\n$/,"");if(0===A.length&&void 0!==R){for(var H,W="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Z(["js","jsBlock"]);case"jsx":case"tsx":return Z(["js","jsBlock","jsx"]);case"html":return Z(["js","jsBlock","html"]);case"python":case"py":return Z(["python"]);default:return Z()}}(R),z=j.replace(/\n$/,"").split("\n"),U=0;U<z.length;){var Y=U+1,J=z[U].match(D);if(null!==J){switch(J.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":W+=Y+",";break;case"highlight-start":H=Y;break;case"highlight-end":W+=H+"-"+(Y-1)+","}z.splice(U,1)}else U+=1}A=s()(W),F=z.join("\n")}var K=function(){(0,l.Z)(F),T(!0),setTimeout((function(){return T(!1)}),2e3)},$=r.createElement(r.Fragment,null);if(i&&i.includes("runable")){var G=(0,k.Z)(),q=G.siteConfig,O=(G.siteMetadata,new URL(q.url));O.pathname="dosrun/",O.searchParams.set("env","MASM_6.11"),O.searchParams.set("exec","run"),O.searchParams.set("code",F),$=r.createElement("a",{type:"button","aria-label":"Run in new tab",href:O,target:"_blank",className:(0,o.Z)(v,"clean-btn")},"Run")}return r.createElement(c.ZP,(0,a.Z)({},c.lG,{key:String(I),theme:P,code:F,language:R}),(function(e){var t=e.className,n=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:m},M&&r.createElement("div",{style:n,className:h},M),r.createElement("div",{className:(0,o.Z)(p,R)},r.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,b,"thin-scrollbar"),style:n},r.createElement("code",{className:E},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return A.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},i({token:e,key:t})))})))})))),$,r.createElement("button",{ref:w,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(f,"clean-btn"),onClick:K},S?r.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);