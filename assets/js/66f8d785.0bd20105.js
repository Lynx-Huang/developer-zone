"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[5530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={},r="API Overview",o={unversionedId:"Main Concept/API Overview",id:"Main Concept/API Overview",title:"API Overview",description:"Allxon Octo API adopts JSON-RPC 2.0 specification over WebSocket. To communicate with Allxon Agent, you need to create a WebSocket connection wss55688 from the plugin. Then send/receive requests in the JSON format via the API.",source:"@site/docs/Main Concept/API Overview.md",sourceDirName:"Main Concept",slug:"/Main Concept/API Overview",permalink:"/developer-zone/Main Concept/API Overview",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/docs/Main Concept/API Overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/developer-zone/Main Concept/Features"},next:{title:"Create a Plugin",permalink:"/developer-zone/Create a Plugin"}},p={},d=[{value:"About <code>v2/notifyPluginUpdate</code> API",id:"about-v2notifypluginupdate-api",level:2},{value:"Allxon Octo JSON RPC API",id:"allxon-octo-json-rpc-api",level:2},{value:"<code>v2/notifyPluginUpdate</code>",id:"v2notifypluginupdate",level:3},{value:"<code>v2/notifyPluginCommand</code>",id:"v2notifyplugincommand",level:3},{value:"<code>v2/notifyPluginCommandAck</code>",id:"v2notifyplugincommandack",level:3},{value:"<code>v2/notifyPluginState</code>",id:"v2notifypluginstate",level:3},{value:"<code>v2/notifyPluginEvent</code>",id:"v2notifypluginevent",level:3},{value:"<code>v2/notifyPluginMetric</code>",id:"v2notifypluginmetric",level:3},{value:"<code>v2/notifyPluginAlert</code>",id:"v2notifypluginalert",level:3},{value:"<code>v2/notifyPluginAlarmUpdate</code>",id:"v2notifypluginalarmupdate",level:3},{value:"<code>v2/notifyPluginConfigUpdate</code>",id:"v2notifypluginconfigupdate",level:3},{value:"API Sequence Flow",id:"api-sequence-flow",level:2}],u={toc:d};function s(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-overview"},"API Overview"),(0,i.kt)("p",null,"Allxon Octo API adopts ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC 2.0")," specification over WebSocket. To communicate with Allxon Agent, you need to create a WebSocket connection ",(0,i.kt)("strong",{parentName:"p"},"wss://localhost:55688")," from the plugin. Then send/receive requests in the JSON format via the API."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each API maximum payload size is ",(0,i.kt)("em",{parentName:"p"},"128 KB"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Not support ",(0,i.kt)("em",{parentName:"p"},"JSON-RPC batch"),".")),(0,i.kt)("h2",{id:"about-v2notifypluginupdate-api"},"About ",(0,i.kt)("inlineCode",{parentName:"h2"},"v2/notifyPluginUpdate")," API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"method"')," indicates the API's type and  ",(0,i.kt)("inlineCode",{parentName:"p"},'"params"')," \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},'"sdk"'),"  indicates the  Allxon Octo SDK version. Each JSON object under ",(0,i.kt)("inlineCode",{parentName:"p"},'"params"')," \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},'"modules"')," corresponds to a different card on Allxon Portal."),(0,i.kt)("p",null,"Here is an example of JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'{16-24} title="resource_dir_linux/plugin_update_template.json" showLineNumbers',"{16-24}":!0,title:'"resource_dir_linux/plugin_update_template.json"',showLineNumbers:!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [\n          {\n            "name": "current_dir",\n            "displayName": "Current Working Directory",\n            "description": "Print the current working directory",\n            "displayType": "string",\n            "value": ""\n          }\n        ],\n        "states": [\n          {\n            "name": "receive_hello",\n            "displayName": "Last Received Message",\n            "description": "Last received message from a stranger",\n            "displayType": "string"\n          }\n        ],\n        "commands": [\n          {\n            "name": "say_hello",\n            "type": "asynchronous",\n            "displayCategory": "Action",\n            "displayName": "Say Hello",\n            "description": "Say hello to a person",\n            "params": [\n              {\n                "name": "person",\n                "displayName": "Person Name",\n                "description": "Person who you wanna to say hello",\n                "displayType": "string",\n                "required": true,\n                "defaultValue": "Buzz"\n              }\n            ]\n          }\n        ],\n        "metrics": [],\n        "events": [],\n        "alarms": [\n          {\n            "name": "hello_alarm",\n            "displayCategory": "Message",\n            "displayName": "Hello alarm",\n            "description": "Trigger when someone say hello",\n            "params": []\n          }\n        ],\n        "configs": []\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The above highlighted section corresponds to the Properties card on Allxon Portal:\n",(0,i.kt)("img",{alt:"property",src:n(980).Z,width:"585",height:"314"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use the built-in macro syntax  ",(0,i.kt)("inlineCode",{parentName:"p"},"${}")," to obtain project level information. The current available syntax is as follows: ",(0,i.kt)("inlineCode",{parentName:"p"},"PLUGIN_NAME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PLUGIN_APP_GUID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PLUGIN_VERSION")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OCTO_SDK_VERSION"),".")),(0,i.kt)("h2",{id:"allxon-octo-json-rpc-api"},"Allxon Octo JSON RPC API"),(0,i.kt)("p",null,"After getting online to Allxon Portal, your edge device is ready to be managed on the cloud.\nHere is a brief introduction to the API functionalities:"),(0,i.kt)("h3",{id:"v2notifypluginupdate"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginUpdate")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin initializes every card on Allxon Portal. You must call  ",(0,i.kt)("inlineCode",{parentName:"td"},"v2/notifyPluginUpdate")," API after the WebSocket connection is established.")))),(0,i.kt)("h3",{id:"v2notifyplugincommand"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginCommand")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Allxon Agent \u2192 Plugin"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin gets notified once the user triggers the command on Allxon Portal.")))),(0,i.kt)("h3",{id:"v2notifyplugincommandack"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginCommandAck")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,i.kt)("td",{parentName:"tr",align:null},"After receiving ",(0,i.kt)("inlineCode",{parentName:"td"},"v2/notifyPluginCommand"),", the plugin sends acknowledgement of the command back to Allxon Portal.")))),(0,i.kt)("h3",{id:"v2notifypluginstate"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginState")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin updates the data the ",(0,i.kt)("strong",{parentName:"td"},"States")," card on the Allxon Portal States card. This functionality is typically designed for updating the current device states, e.g. network condition and power status. Allxon Portal only shows the latest data it receives and doesn\u2019t reserve such data.")))),(0,i.kt)("h3",{id:"v2notifypluginevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginEvent")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin updates the data on the ",(0,i.kt)("strong",{parentName:"td"},"Event")," card on Allxon Portal. The event types and triggers are predefined by the plugin. This functionality is typically used for device event updates, e.g. IO trigger event and user login event. Such data is reserved on Allxon Cloud for 90 days.")))),(0,i.kt)("h3",{id:"v2notifypluginmetric"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginMetric")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin updates data on the ",(0,i.kt)("strong",{parentName:"td"},"Charts")," card on the Portal. This functionality is typically designed for time-series data presented in a trend chart, e.g. device temperature. Such data is reserved on Allxon Cloud for 90 days.")))),(0,i.kt)("h3",{id:"v2notifypluginalert"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginAlert")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin \u2192 Allxon Agent"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Alerts")," are predefined by the plugin. This functionality is typically designed for triggering Alerts configured on Allxon Portal and for pushing notifications to users by email, Webhook, LINE, etc.")))),(0,i.kt)("h3",{id:"v2notifypluginalarmupdate"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginAlarmUpdate")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Allxon Agent \u2192 Plugin"),(0,i.kt)("td",{parentName:"tr",align:null},"When Alerts are set up on Allxon Portal, the plugin receives ",(0,i.kt)("inlineCode",{parentName:"td"},"v2/notifyPluginAlarmUpdate")," to synchronize with the alert related settings.")))),(0,i.kt)("h3",{id:"v2notifypluginconfigupdate"},(0,i.kt)("inlineCode",{parentName:"h3"},"v2/notifyPluginConfigUpdate")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Direction"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Allxon Agent \u2192 Plugin"),(0,i.kt)("td",{parentName:"tr",align:null},"If Configs is set up on Allxon Portal, the plugin gets notified once it comes online.  This functionality is typically designed for setting rules to automate device operations.")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more details, please refer to the API Reference.")),(0,i.kt)("h2",{id:"api-sequence-flow"},"API Sequence Flow"),(0,i.kt)("p",null,"Here is an example of the API sequence flow:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sequence-diagram",src:n(6860).Z,width:"449",height:"305"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect to Allxon Agent by Websocket."),(0,i.kt)("li",{parentName:"ol"},"Send ",(0,i.kt)("inlineCode",{parentName:"li"},"v2/notifyPluginUpdate")," to initialize cards on Allxon Portal."),(0,i.kt)("li",{parentName:"ol"},"Once the ",(0,i.kt)("strong",{parentName:"li"},"Alert Settings")," are updated, the plugin receives ",(0,i.kt)("inlineCode",{parentName:"li"},"v2/notifyPluginAlarmUpdate")," to apply the settings."),(0,i.kt)("li",{parentName:"ol"},"Once ",(0,i.kt)("strong",{parentName:"li"},"Configs")," are set up on Allxon Portal, the plugin receives ",(0,i.kt)("inlineCode",{parentName:"li"},"v2/notifyPluginConfigUpdate")," to apply the settings.")))}s.isMDXComponent=!0},6860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequence-diagram-ecdbcb33b3075547e38922e43c6fb79b.png"},980:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot_property-08f4d45aa5ecf04f4e53581b059a3815.png"}}]);