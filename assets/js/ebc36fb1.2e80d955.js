"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[4835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Overview/States",id:"Overview/States",title:"States",description:"states-sequence",source:"@site/docs/Overview/States.md",sourceDirName:"Overview",slug:"/Overview/States",permalink:"/allxonTest/Overview/States",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/docs/Overview/States.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"states-sequence",src:n(5240).Z,width:"442",height:"276"})),(0,r.kt)("p",null,"States Card is designed for realtime data and repesent current device states information, these data won't be reserve on Allxon Portal, only keeps latest data. Send ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize States Card, After that, Keep sending ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginState")," to continue update States Card information. Take a look at the example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-25}","{17-25}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginUpdate",\n    "params": {\n        "sdk": "${OCTO_SDK_VERSION}",\n        "appGUID": "${PLUGIN_APP_GUID}",\n        "appName": "${PLUGIN_NAME}",\n        "epoch": "",\n        "displayName": "Device Info",\n        "type": "ib",\n        "version": "${PLUGIN_VERSION}",\n        "modules": [\n            {\n                "moduleName": "device-info-plugin",\n                "displayName": "Device Info",\n                "properties": [],\n                "states": [\n                    {\n                        "name": "battery-percent",\n                        "displayCategory": "Power",\n                        "displayName": "Battery",\n                        "description": "remaining battery percentage",\n                        "displayType": "string"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"After Sending ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," JSON above, Allxon Portal will show States Card below. Value behind Battery is empty, because it's still in initialize state. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"states-card",src:n(2928).Z,width:"586",height:"315"})),(0,r.kt)("p",null,"Next, we try to send ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginState")," to assign and update Battery value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{11}","{11}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginState",\n    "params": {\n        "appGUID": "${PLUGIN_APP_GUID}",\n        "moduleName": "${PLUGIN_NAME}",\n        "epoch": "",\n        "states": [\n            {\n                "name": "battery-percent",\n                "value": "50"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"Then you can see Battery's value already update, and update time will show below the value."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"states-battery",src:n(8253).Z,width:"585",height:"316"})),(0,r.kt)("admonition",{title:"Limitation",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The update frequency of the States value is at least once a minute.")))}u.isMDXComponent=!0},8253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/states-battery-50-42f8309493a27ebd3e79cbbae292e489.png"},2928:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/states-card-cb8ff633c669d9ab781cbabb015e1e03.png"},5240:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/states-sequence-4bf3d4f5a5291840e2ebdc6349d16d8f.png"}}]);