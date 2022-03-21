"use strict";(self.webpackChunkdosasm=self.webpackChunkdosasm||[]).push([[8904],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={sidebar_position:2},s="\u5e38\u7528MASM/TASM\u547d\u4ee4",l={unversionedId:"references/x86_asm-commands",id:"references/x86_asm-commands",isDocsHomePage:!1,title:"\u5e38\u7528MASM/TASM\u547d\u4ee4",description:"TIP",source:"@site/docs/references/x86_asm-commands.md",sourceDirName:"references",slug:"/references/x86_asm-commands",permalink:"/docs/references/x86_asm-commands",editUrl:"https://github.com/dosasm/dosasm/edit/docusaurus/docs/references/x86_asm-commands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"x86\u6c47\u7f16\u8bed\u8a00",permalink:"/docs/references/x86-assembly"},next:{title:"DOS \u64cd\u4f5c\u7cfb\u7edf",permalink:"/docs/references/DOS-system"}},u=[{value:"TIP",id:"tip",children:[]},{value:"MASM\u64cd\u4f5c\u793a\u4f8b",id:"masm\u64cd\u4f5c\u793a\u4f8b",children:[]},{value:"TASM\u64cd\u4f5c\u793a\u4f8b",id:"tasm\u64cd\u4f5c\u793a\u4f8b",children:[{value:"MASM debug \u547d\u4ee4",id:"masm-debug-\u547d\u4ee4",children:[]}]}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e38\u7528masmtasm\u547d\u4ee4"},"\u5e38\u7528MASM/TASM\u547d\u4ee4"),(0,a.kt)("h2",{id:"tip"},"TIP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dosbox\u4e2d\u547d\u4ee4 \u6587\u4ef6\u540d\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u6240\u4ee5\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"dir"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"DIR"),"\u547d\u4ee4\u90fd\u662f\u7b49\u6548\u7684"),(0,a.kt)("li",{parentName:"ul"},"dosbox\u4e2d\u6587\u4ef6\u540d\u7684\u957f\u5ea6\u662f\u6709\u9650\u5236\u7684\uff0c\u597d\u50cf\u662f\u4e0d\u8d85\u8fc78\u4e2a\u5b57\u8282\uff0c\u5e76\u4e14\u4e0d\u652f\u6301\u4e2d\u6587")),(0,a.kt)("h2",{id:"masm\u64cd\u4f5c\u793a\u4f8b"},"MASM\u64cd\u4f5c\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-DOS"},"MASM T.ASM;\xb7    \u6c47\u7f16\u751f\u6210.obj\u6587\u4ef6\nLINK T.OBJ;     \u94fe\u63a5\u751f\u6210.exe\u6587\u4ef6\nT.EXE           \u8fd0\u884c\nDEBUG T.EXE     \u8c03\u8bd5\n")),(0,a.kt)("h2",{id:"tasm\u64cd\u4f5c\u793a\u4f8b"},"TASM\u64cd\u4f5c\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-DOS"},"TASM T.ASM      \u6c47\u7f16\u751f\u6210.obj\u6587\u4ef6\nTLINK T.OBJ     \u94fe\u63a5\u751f\u6210.exe\u6587\u4ef6\uff0c\u52a0\\t\u751f\u6210.com\u6587\u4ef6\nT.EXE           \u8fd0\u884c\n")),(0,a.kt)("p",null,"tasm\u8c03\u8bd5\u9700\u8981\u52a0\u4e0a\u4ee5\u4e0b\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-DOS"},"TASM/zi T.ASM   \u6c47\u7f16\u751f\u6210.obj\u6587\u4ef6\nTLINK/v/3 T.OBJ \u94fe\u63a5\u751f\u6210.exe\u6587\u4ef6\uff0c\u52a0\\t\u751f\u6210.com\u6587\u4ef6\nTD T.EXE        \u8c03\u8bd5\n")),(0,a.kt)("h3",{id:"masm-debug-\u547d\u4ee4"},"MASM debug \u547d\u4ee4"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/tiger2soft/p/5094917.html"},"Debug\u547d\u4ee4\u8be6\u89e3")))}p.isMDXComponent=!0}}]);