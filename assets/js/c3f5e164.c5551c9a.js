"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[7324],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={},a="Architecture",l={unversionedId:"Main Concept/Architecture",id:"version-1.1.0/Main Concept/Architecture",title:"Architecture",description:"Allxon Octo SDK establishes an extensible architecture on edge devices with Allxon Agent and device plugins. The SDK includes a set of unified and integrated interfaces, which accelerates plugin development, enhances security, and facilitates and simplifies the communication between device applications and the cloud.",source:"@site/versioned_docs/version-1.1.0/Main Concept/Architecture.md",sourceDirName:"Main Concept",slug:"/Main Concept/Architecture",permalink:"/developer-zone/1.1.0/Main Concept/Architecture",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/versioned_docs/version-1.1.0/Main Concept/Architecture.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Try out Hello Plugin",permalink:"/developer-zone/1.1.0/Getting Started/Try out Hello Plugin"},next:{title:"Features",permalink:"/developer-zone/1.1.0/Main Concept/Features"}},c={},s=[{value:"Securing Your Data\u200b",id:"securing-your-data",level:2}],u={toc:s};function p(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allxon Octo SDK")," establishes an extensible architecture on edge devices with Allxon Agent and device plugins. The SDK includes a set of unified and integrated interfaces, which accelerates plugin development, enhances security, and facilitates and simplifies the communication between device applications and the cloud."),(0,r.kt)("p",null,"This picture below is an overview of the Allxon Octo architecture. The plugin communicates with Allxon Agent through JSON-RPC Websocket, and the Allxon Agent connects to MQTT server hosted by Allxon Cloud. With such a design, Allxon Octo API seamlessly transmits JSON between the cloud and the plugin."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"allxon_infrasturcture",src:t(7061).Z,width:"2576",height:"1721"})),(0,r.kt)("p",null,"Not quite clear? Refer to the descriptions below to learn more about each element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allxon Cloud"),": The backend server(s) of Allxon service; both Allxon Portal and Allxon Agent are connected to Allxon Cloud.\n",(0,r.kt)("strong",{parentName:"p"},"Allxon Portal"),": The frontend server(s) of Allxon service.\n",(0,r.kt)("strong",{parentName:"p"},"Allxon Agent"),": An agent application that communicates between edge devices and Allxon Cloud.\n",(0,r.kt)("strong",{parentName:"p"},"Plugin"),": A software application that extends the functionalities of Allxon service. A plugin sends collected data from modules to Allxon Cloud via the Allxon Agent. It also sends commands from Allxon Portal to modules via the Allxon Agent.\n",(0,r.kt)("strong",{parentName:"p"},"Module"),": A hardware component (e.g. GPU, SSD, fan) or a software application (e.g. remote console utilities). A plugin collects data from a module or sends commands to a module.\n",(0,r.kt)("strong",{parentName:"p"},"MQTT Broker"),": Allxon Agent connects to a MQTT broker hosted by Allxon Cloud. All the data exchange between Allxon Agents and Allxon Cloud go through this channel.\n",(0,r.kt)("strong",{parentName:"p"},"WebSocket Server"),": A plugin connects to a WebSocket server hosted within an Allxon Agent. The plugin sends and receives data to/from Allxon Cloud with Allxon Octo APIs through this channel.\n",(0,r.kt)("strong",{parentName:"p"},"Allxon Octo API"),": The Application Programming Interface used to communicate between Allxon Agent and plugins.\n",(0,r.kt)("strong",{parentName:"p"},"Allxon Octo SDK"),": The Software Development Kit provided by Allxon, which helps developers to build plugins and verify Allxon Octo APIs."),(0,r.kt)("h2",{id:"securing-your-data"},"Securing Your Data\u200b"),(0,r.kt)("p",null,"Allxon Octo SDK uses ",(0,r.kt)("em",{parentName:"p"},"Plugin Credential")," to verify the JSON sent from Allxon Agent and to sign the JSON to be sent to Allxon Agent."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"security",src:t(2742).Z,width:"602",height:"559"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <string>\n#include "json_validator.h"\n\nint main(int argc, char **argv)\n{\n    // notifyPluginUpdate json template\n    std::string json_content = "{\\"jsonrpc\\": \\"2.0\\", \\"method\\": \\"v2/notifyPluginUpdate\\"...}"; \n    std::string PLUGIN_NAME = "my_plugin_name";\n    std::string PLUGIN_APP_GUID = "my_plugin_app_guid";\n    std::string PLUGIN_ACCESS_KEY = "my_plugin_access_key";\n    std::string PLUGIN_VERSION = "my_plugin_version";\n    \n    auto json_validator = JsonValidator(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                        PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                        json_content); \n    \n    std::string other_plugin_api_json_content;\n    if (json_validator.Sign(other_plugin_api_json_content))\n    {\n        // if sign-in is successful, you can send it through websocket\n        // e.g. \n        // enpoint.send(other_plugin_api_json_content);\n    }\n\n    if (json_validator.Verify(other_plugin_api_json_content))\n    {\n        // if verification is successful, it means json content is safe, you can read it\n    }\n    return 0;\n}\n')))}p.isMDXComponent=!0},2742:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Security.drawio-70123cf2e48a67349d5f06c78cf5889b.svg"},7061:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/allxon_infrastructure-b451deb987784b8efd50945b34002224.png"}}]);