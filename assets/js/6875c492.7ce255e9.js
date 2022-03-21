"use strict";(self.webpackChunkdosasm=self.webpackChunkdosasm||[]).push([[8610],{46165:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(63366),r=a(67294),l=a(86010),s=a(56698),c=a(36742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(24973);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var f=a(571),v=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,n.Z)(e,v),o=t&&t.items.length>0;return r.createElement(s.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},r.createElement(f.Z,{toc:a})))))}},94884:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(86010),l=a(3905),s=a(24973),c=a(36742),i=a(44996),o=a(941),m=a(82238),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx",p=a(87682),f="image_1yU8";var v=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,s=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},s&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:f,src:s,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(c.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",b),key:t},n.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var k=function(e){var t,a,f,v,b=(f=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),k=(0,i.C)().withBaseUrl,N=e.children,_=e.frontMatter,Z=e.assets,y=e.metadata,P=e.truncated,T=e.isBlogPostPage,C=void 0!==T&&T,L=y.date,w=y.formattedDate,B=y.permalink,x=y.tags,j=y.readingTime,R=y.title,A=y.editUrl,M=y.authors,U=null!=(t=Z.image)?t:_.image;return n.createElement("article",{className:C?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=C?"h1":"h2",n.createElement("header",null,n.createElement(v,{className:d,itemProp:"headline"},C?R:n.createElement(c.Z,{itemProp:"url",to:B},R)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},w),void 0!==j&&n.createElement(n.Fragment,null," \xb7 ",b(j))),n.createElement(E,{authors:M,assets:Z}))),U&&n.createElement("meta",{itemProp:"image",content:k(U,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(x.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[h]=C,a))},x.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!C})},n.createElement(p.Z,{tags:x})),C&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:A})),!C&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(c.Z,{to:y.permalink,"aria-label":"Read more about "+R},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(67294),r=a(36742),l=a(46165),s=a(94884),c=a(24973),i=a(941);function o(e){var t,a=e.metadata,o=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,c.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return n.createElement(l.Z,{title:p,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,p),n.createElement(r.Z,{href:u},n.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return n.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))}},86146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(24973),l=a(87462),s=a(63366),c=a(86010),i="iconEdit_2_ui",o=["className"],m=function(e){var t=e.className,a=(0,s.Z)(e,o);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(941);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return h}});var n=a(67294),r=a(86010),l=a(941);function s(e){var t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return s(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function i(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var o=function(e){var t=(0,n.useRef)(void 0),a=i();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=c({anchorTopOffset:a.current}),s=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return o(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},37211:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l=a(36742),s="tag_1Okp",c="tagRegular_3MiF",i="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(s,(t={},t[c]=!m,t[i]=m,t))},o,m&&n.createElement("span",null,m))}},87682:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l=a(24973),s=a(37211),c="tags_2ga9",i="tag_11ep";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:i},n.createElement(s.Z,{name:t,permalink:a}))}))))}},73148:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(87462),r=a(67294),l=a(86010),s=a(24544),c=a(10195),i=a(87594),o=a.n(i),m=a(83583),u=a(24973),d="codeBlockContainer_2gih",g="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",p="codeBlock_6upA",f="copyButton_2e3i",v="runButton_2gRE",b="codeBlockLines_xlV7",E=a(941),k=a(52263),N=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function Z(e){var t=e.children,a=e.className,i=e.metastring,Z=e.title,y=(0,E.LU)().prism,P=(0,r.useState)(!1),T=P[0],C=P[1],L=(0,r.useState)(!1),w=L[0],B=L[1];(0,r.useEffect)((function(){B(!0)}),[]);var x=(0,E.bc)(i)||Z,j=(0,r.useRef)(null),R=[],A=(0,m.Z)(),M=Array.isArray(t)?t.join(""):t;if(i&&N.test(i)){var U=i.match(N)[1];R=o()(U).filter((function(e){return e>0}))}var I=a&&a.replace(/language-/,"");!I&&y.defaultLanguage&&(I=y.defaultLanguage);var S=M.replace(/\n$/,"");if(0===R.length&&void 0!==I){for(var O,z="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(I),H=M.replace(/\n$/,"").split("\n"),q=0;q<H.length;){var D=q+1,V=H[q].match(F);if(null!==V){switch(V.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":z+=D+",";break;case"highlight-start":O=D;break;case"highlight-end":z+=O+"-"+(D-1)+","}H.splice(q,1)}else q+=1}R=o()(z),S=H.join("\n")}var $=function(){(0,c.Z)(S),C(!0),setTimeout((function(){return C(!1)}),2e3)},G=r.createElement(r.Fragment,null);if(i&&i.includes("runable")){var W=(0,k.Z)(),K=W.siteConfig,J=(W.siteMetadata,new URL(K.url));J.pathname="dosrun/",J.searchParams.set("env","MASM_6.11"),J.searchParams.set("exec","run"),J.searchParams.set("code",S),G=r.createElement("a",{type:"button","aria-label":"Run in new tab",href:J,target:"_blank",className:(0,l.Z)(v,"clean-btn")},"Run")}return r.createElement(s.ZP,(0,n.Z)({},s.lG,{key:String(w),theme:A,code:S,language:I}),(function(e){var t=e.className,a=e.style,s=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:d},x&&r.createElement("div",{style:a,className:h},x),r.createElement("div",{className:(0,l.Z)(g,I)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,p,"thin-scrollbar"),style:a},r.createElement("code",{className:b},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return R.includes(t+1)&&(a.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t})))})))})))),G,r.createElement("button",{ref:j,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(f,"clean-btn"),onClick:$},T?r.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);