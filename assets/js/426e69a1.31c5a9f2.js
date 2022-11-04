"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={slug:"/",sidebar_position:1},i="Overview",l={unversionedId:"Getting Started/Overview",id:"version-1.1.0/Getting Started/Overview",title:"Overview",description:"Allxon Octo SDK establishes an extensible architecture on edge devices with Allxon Agent and device plugins. The Agent handles the communication between device plugins and Allxon Cloud. The device management application is programmed as one such device plugin that connects and controls the hardware or software modules of edge devices. By working with the Agent, information or configuration of device plugins can be managed on Allxon Portal.",source:"@site/versioned_docs/version-1.1.0/Getting Started/Overview.md",sourceDirName:"Getting Started",slug:"/",permalink:"/developer-zone/1.1.0/",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/versioned_docs/version-1.1.0/Getting Started/Overview.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Try out Hello Plugin",permalink:"/developer-zone/1.1.0/Getting Started/Try out Hello Plugin"}},c={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allxon Octo SDK")," establishes an extensible architecture on edge devices with Allxon Agent and device plugins. The Agent handles the communication between device plugins and Allxon Cloud. The device management application is programmed as one such device plugin that connects and controls the hardware or software modules of edge devices. By working with the Agent, information or configuration of device plugins can be managed on Allxon Portal. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Allxon_Octo_intro",src:n(8616).Z,width:"15875",height:"7465"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allxon Octo SDK")," is implemented in C++ and available for 3^rd^ party developers to build device plugins to facilitate device management."),(0,r.kt)("p",null,":::Info\nAllxon Octo SDK supported platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows 10"),(0,r.kt)("li",{parentName:"ul"},"Linux x86-64"),(0,r.kt)("li",{parentName:"ul"},"Linux AArch64\n:::")),(0,r.kt)("p",null,"In this document, we\u2019ve got you covered from initial setup through advanced tutorials."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ready to get started? Great!"),"\nHere are the shortcuts of what you need to do:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.allxon.com/contact-allxon-octo"},"Contact us")," to apply one ",(0,r.kt)("em",{parentName:"li"},"Plugin Credential")," which represents your plugin identity."),(0,r.kt)("li",{parentName:"ol"},"Add your device on ",(0,r.kt)("a",{parentName:"li",href:"https://dms.allxon.com/next/signin"},"Allxon Portal")),(0,r.kt)("li",{parentName:"ol"},"Try out our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/allxon/plugIN-hello"},"Hello Plugin")," built by Allxon Octo SDK"),(0,r.kt)("li",{parentName:"ol"},"Check out our tutorials")),(0,r.kt)("p",null,"If anything is missing or confusing in the documentation, please ",(0,r.kt)("a",{parentName:"p",href:"https://www.allxon.com/contact-allxon-octo"},"file an issue")," with any suggestions for improvement. We love to hear from you!"))}u.isMDXComponent=!0},8616:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Allxon_Octo_intro-b30712be66419fa233da9f0188fda96a.png"}}]);