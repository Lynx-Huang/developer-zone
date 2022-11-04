"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[3489],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(v,l(l({ref:n},c),{},{components:t})):r.createElement(v,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"Implement Features/Events",id:"Implement Features/Events",title:"Events",description:"event-sequence",source:"@site/docs/Implement Features/Events.md",sourceDirName:"Implement Features",slug:"/Implement Features/Events",permalink:"/developer-zone/Implement Features/Events",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/docs/Implement Features/Events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/developer-zone/Implement Features/Metrics"},next:{title:"Configs",permalink:"/developer-zone/Implement Features/Configs"}},p={},s=[],c={toc:s};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"event-sequence",src:t(800).Z,width:"436",height:"246"})),(0,a.kt)("p",null,"Event Card sequence flow as same as State Card. Sending ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginEvent")," to upload event after initialize with ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate"),"."),(0,a.kt)("p",null,"Take a look at the example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-24}","{17-24}":!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "events": [\n          {\n            "description": "Event trigger when box opened",\n            "displayCategory": "category1",\n            "displayName": "Box Open Event",\n            "name": "box-open-event"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"After Sending ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," JSON above, Allxon Portal will show Events Card below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"event-init",src:t(2297).Z,width:"581",height:"313"})),(0,a.kt)("p",null,"Let's try send ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginEvent")," to upload data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "jsonrpc": "2.0",\n   "method": "v2/notifyPluginEvent",\n   "params": {\n      "appGUID": "${PLUGIN_APP_GUID}",\n      "moduleName": "${PLUGIN_NAME}",\n      "epoch": "",\n      "events": [\n         {\n            "name": "box-open-event",\n            "value": "open"\n         }\n      ]\n   }\n}\n')),(0,a.kt)("p",null,"Event Card will display like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"event-init",src:t(8557).Z,width:"585",height:"310"})))}u.isMDXComponent=!0},8557:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/event-first-shot-b9f5978bd859e62400ac29923e502959.png"},2297:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/event-init-17263c0531b247affe2196acc8e3ef13.png"},800:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/event-sequence-d6ae88b5cfb2c5b17e4041310ca2e8fc.png"}}]);