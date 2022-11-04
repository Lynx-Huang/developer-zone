"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[6122],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,f=d["".concat(i,".").concat(u)]||d[u]||s[u]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:o,l[1]=m;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},l=void 0,m={unversionedId:"Implement Features/Commands",id:"version-1.1.0/Implement Features/Commands",title:"Commands",description:"command-sequence",source:"@site/versioned_docs/version-1.1.0/Implement Features/Commands.md",sourceDirName:"Implement Features",slug:"/Implement Features/Commands",permalink:"/developer-zone/1.1.0/Implement Features/Commands",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/versioned_docs/version-1.1.0/Implement Features/Commands.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"States",permalink:"/developer-zone/1.1.0/Implement Features/States"},next:{title:"Alerts",permalink:"/developer-zone/1.1.0/Implement Features/Alerts"}},i={},p=[],c={toc:p};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-sequence",src:t(9191).Z,width:"434",height:"309"})),(0,o.kt)("p",null,"Command Cards provide a custom GUI to send command through Allxon protal. Send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize. When you execute the Command from Allxon Portal, Plugin will receive ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommand"),", then send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," back to confirm the receive, finally, send  ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," to bring execution result back to Allxon Portal."),(0,o.kt)("p",null,"Here is a example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-35}","{17-35}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginUpdate",\n    "params": {\n        "sdk": "${OCTO_SDK_VERSION}",\n        "appGUID": "${PLUGIN_APP_GUID}",\n        "appName": "${PLUGIN_NAME}",\n        "epoch": "",\n        "displayName": "plugIN Hello",\n        "type": "ib",\n        "version": "${PLUGIN_VERSION}",\n        "modules": [\n            {\n                "moduleName": "${PLUGIN_NAME}",\n                "displayName": "plugIN Hello",\n                "properties": [],\n                "commands": [\n                    {\n                        "name": "say_hello",\n                        "type": "asynchronous",\n                        "displayCategory": "Action",\n                        "displayName": "Say Hello",\n                        "description": "Say hello to a person",\n                        "params": [\n                            {\n                                "name": "person",\n                                "displayName": "Person Name",\n                                "description": "Person who you wanna to say hello",\n                                "displayType": "string",\n                                "required": true,\n                                "defaultValue": "Buzz"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-card",src:t(955).Z,width:"587",height:"631"})),(0,o.kt)("p",null,'After click "Execute" button, Allxon Portal will send ',(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommand")," to Plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginCommand?authorization=$argon2id$v=19$m=64,t=16,p=8$YnFaWiIoX1ckSmE9Tkp5YQ$XLS6riVCcBj/EUr5lYnJ8Q",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "moduleName": "plugin-hello",\n        "commandSource": "remote",\n        "commands": [\n            {\n                "name": "say_hello",\n                "params": [\n                    {\n                        "name": "person",\n                        "value": "Buzz"\n                    }\n                ]\n            }\n        ],\n        "commandId": "d0a0af987c17da435b2bc44dfbee8ffe90104f4f",\n        "epoch": "1664185099"\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You may curious what's texts follow ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," at highlight line. Octo SDK will verify this JSON is safe through these texts When you call Octo SDK ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonValidator::Verify()"),". ")),(0,o.kt)("p",null,"Once we received ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommand"),", send back ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"commandState": "ACCEPTED"')," to comfirm received with Allxon Portal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{10}","{10}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginCommandAck",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664250407",\n        "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n        "commandSource": "remote",\n        "moduleName": "plugin-hello",\n        "commandState": "ACCEPTED",\n        "commandAcks": [\n            {\n                "name": "say_hello",\n                "result": {\n                    "response": "Hello Buzz"\n                }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"After finished your command task, send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginCommandAck")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"commandState": "ACKED"')," and contain execution result back to Allxon Portal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{10}","{10}":!0},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginCommandAck",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "epoch": "1664250407",\n        "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n        "commandSource": "remote",\n        "moduleName": "plugin-hello",\n        "commandState": "ACKED",\n        "commandAcks": [\n            {\n                "name": "say_hello",\n                "result": {\n                    "response": "Hello Buzz"\n                }\n            }\n        ]\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There're other ",(0,o.kt)("inlineCode",{parentName:"p"},'"commandState"')," can use: ",(0,o.kt)("inlineCode",{parentName:"p"},'"REJECTED"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"ERRORED"'))),(0,o.kt)("p",null,"If everything going well, command execute dialog on Allxon Portal will show up like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-result",src:t(4351).Z,width:"561",height:"665"})))}s.isMDXComponent=!0},955:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/command-card-3645fb5701aea1c328af9f9ce2f38630.png"},4351:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/command-result-588c45b65c5fd5000a802b899d867e0b.png"},9191:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/command-sequence-8084c4966e0b8778ec0f42297c41c821.png"}}]);