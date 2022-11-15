"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[5486],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"Implement Features/Configs",id:"version-1.1.0/Implement Features/Configs",title:"Configs",description:"config-sequence",source:"@site/versioned_docs/version-1.1.0/Implement Features/Configs.md",sourceDirName:"Implement Features",slug:"/Implement Features/Configs",permalink:"/developer-zone/1.1.0/Implement Features/Configs",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/versioned_docs/version-1.1.0/Implement Features/Configs.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/developer-zone/1.1.0/Implement Features/Events"}},s={},p=[],c={toc:p};function f(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"config-sequence",src:t(3511).Z,width:"441",height:"253"})),(0,o.kt)("p",null,"Configs Card sequence flow similar with Alert Card. Send ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," to initialize Alert Card, if you have Config setting on Allxon Portal, you will get ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginConfigUpdate")," after sending ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifPluginUpdate"),"."),(0,o.kt)("p",null,"Let's take a look at the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-31}","{17-31}":!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "configs": [\n          {\n            "name": "config1",\n            "displayName": "config1 display name",\n            "description": "config1 description",\n            "displayCategory": "ConfigCategory1",\n            "params": [\n              {\n                "name": "config1Param1",\n                "required": true,\n                "displayType": "string"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"After sending ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate"),", Configs Card will look like the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"config-init",src:t(7977).Z,width:"592",height:"319"})),(0,o.kt)("p",null,'Let\'s setting Config Card on Allxon Portal to fill parameters. Click "Edit" -> Type "my display" in config1-> "Save".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"config-set-param",src:t(5920).Z,width:"593",height:"321"}),"\n",(0,o.kt)("img",{alt:"config-set-finished",src:t(8700).Z,width:"418",height:"188"})),(0,o.kt)("p",null,"After setting, Plugin should received new ",(0,o.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginConfigUpdate")," below to notify Plugin that config setting updated. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginConfigUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$KksxWlhPbjRULHA0Yj5WYA$abdF1Vo4573+Uz5I0Xz81A",\n    "params": {\n        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n        "version": "1.0.1",\n        "epoch": "1664866949",\n        "modules": [\n            {\n                "moduleName": "plugin-hello",\n                "epoch": "1664866940",\n                "configs": [\n                    {\n                        "name": "config1",\n                        "params": [\n                            {\n                                "name": "config1Param1",\n                                "value": "my display"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n')))}f.isMDXComponent=!0},7977:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/config-init-893bceaa863c17153404d995dad44a40.png"},3511:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/config-sequence-fbf250ae023763b46409dbf28ceee214.png"},8700:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/config-set-finished-d4f1de5329d77636792b72a041d8f5f0.png"},5920:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/config-set-param-7195873379cfe2c222d7c90f771faeb6.png"}}]);