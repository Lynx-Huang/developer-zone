"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"Implement Features/Alerts",id:"Implement Features/Alerts",title:"Alerts",description:"alert-sequence",source:"@site/docs/Implement Features/Alerts.md",sourceDirName:"Implement Features",slug:"/Implement Features/Alerts",permalink:"/developer-zone/Implement Features/Alerts",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/docs/Implement Features/Alerts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/developer-zone/Implement Features/Commands"},next:{title:"Metrics",permalink:"/developer-zone/Implement Features/Metrics"}},s={},p=[],c={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alert-sequence",src:n(8274).Z,width:"445",height:"282"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Alerts")," feature enables you to your configure alert thresholds for the plugin to trigger alert messages to Allxon Portal. Then the Portal can send the alert message to you via email, Webhook, LINE, etc., depending on the notification channel setting on the Portal. "),(0,r.kt)("p",null,"Similar to creating other cards, you need to send ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize the Alert Settings card. Once the initialization is completed, the plugin receives ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate"),". With such configuration, whenever the alert threshold is reached, the plugin triggers v2/notifyPluginAlert to the Portal."),(0,r.kt)("p",null,"Let's look at an example of creating Alerts:"),(0,r.kt)("p",null,"First, send ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize the ",(0,r.kt)("strong",{parentName:"p"},"Alert Settings")," card. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-25}","{17-25}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginUpdate",\n    "params": {\n        "sdk": "2.0.2",\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "appName": "plugin-hello",\n        "epoch": "1664259325",\n        "displayName": "plugIN Hello",\n        "type": "ib",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "displayName": "plugIN Hello",\n                "properties": [],\n                "alarms": [\n                    {\n                        "name": "hello_alarm",\n                        "displayCategory": "Message",\n                        "displayName": "Hello alarm",\n                        "description": "Trigger when someone say hello",\n                        "params": []\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"Upon completion, you can see the ",(0,r.kt)("strong",{parentName:"p"},"Alert Settings")," card, as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alert-card",src:n(24).Z,width:"586",height:"313"})),(0,r.kt)("p",null,"At this time, the Alert is not yet set up. The Portal sends the following ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpate")," to the plugin for the initialization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$Y1JmLkNDUjRkeFJ7UDBlOQ$qZPxG/iWuZTKQzbsvr86wg",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664259814"\n    }\n}\n')),(0,r.kt)("p",null,"Now you can set up the ",(0,r.kt)("strong",{parentName:"p"},"Alert Settings")," card on Allxon Portal. In this example, let\u2019s try setting up an alert and connecting it to Webhook, so the alert message is sent via Webhook. "),(0,r.kt)("p",null,"Follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit"),", then the ",(0,r.kt)("strong",{parentName:"li"},"Webhook")," icon"),(0,r.kt)("li",{parentName:"ol"},"Choose a Webhook preset."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next"),", then ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alert-edit",src:n(2149).Z,width:"583",height:"316"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alert-preset",src:n(8244).Z,width:"628",height:"443"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alert-finished",src:n(4859).Z,width:"587",height:"314"})),(0,r.kt)("p",null,"Once done, the plugin receives a new ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlarmUpdate")," (see below) to notify the plugin that the ",(0,r.kt)("strong",{parentName:"p"},"Alerts Settings")," has been updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{12-17}","{12-17}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$J2chRypQWmxLLGl4O04zXg$KUvzIkRhS8Ao+FYTysdSWA",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664268028",\n        "version": "1.0.1",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "epoch": "1664268022",\n                "alarms": [\n                    {\n                        "enabled": true,\n                        "name": "hello_alarm"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"Accordingly, the plugin enables the designated alert. "),(0,r.kt)("p",null,"To test the Alert, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginAlert"),", as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginAlert",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "moduleName": "plugin-hello",\n        "epoch": "1664268861",\n        "alarms": [\n            {\n                "name": "hello_alarm",\n                "action": "trigger",\n                "time": "1664268861",\n                "message": "Hello Buzz ~"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"You should receive a message on your connected Webhook service. At the same time, Allxon Portal adds a new record to the ",(0,r.kt)("strong",{parentName:"p"},"Alert")," page of the device; all alert records are aggregated on this page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alert-trigger",src:n(8242).Z,width:"1001",height:"944"})))}m.isMDXComponent=!0},24:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-card-95859e209dc0ba855284e6f1d28bf089.png"},2149:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-edit-b4302cfc45e808223fbbecf6948d9eea.png"},4859:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-finished-6e7660d9a0e239652599a6a4d8c984e6.png"},8244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-preset-7b34176cd67f95aa2ea4cea11fdb3f0e.png"},8274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-sequence-706070dca9d8414659188e8ef2bae51d.png"},8242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-trigger-0ae0430a04ec87f2404378fdf2ea7a3a.png"}}]);