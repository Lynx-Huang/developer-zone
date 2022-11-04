"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[106],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?l.createElement(g,r(r({ref:n},p),{},{components:t})):l.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var l=t(7294),a=t(6010);const i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var l=t(7462),a=t(7294),i=t(6010),r=t(2389),o=t(8),s=t(9235),u=t(7736);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t;const{lazy:r,block:d,defaultValue:m,values:g,groupId:k,className:h}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=g?g:N.map((e=>{let{props:{value:n,label:t,attributes:l}}=e;return{value:n,label:t,attributes:l}})),I=(0,o.l)(_,((e,n)=>e.value===n.value));if(I.length>0)throw new Error('Docusaurus error: Duplicate values "'+I.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const P=null===m?m:null!=(n=null!=m?m:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?n:N[0].props.value;if(null!==P&&!_.some((e=>e.value===P)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+P+'" but none of its children has the corresponding value. Available values are: '+_.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:f}=(0,s.U)(),[v,y]=(0,a.useState)(P),E=[],{blockElementScrollPositionUntilNextRender:L}=(0,u.o5)();if(null!=k){const e=b[k];null!=e&&e!==v&&_.some((n=>n.value===e))&&y(e)}const O=e=>{const n=e.currentTarget,t=E.indexOf(n),l=_[t].value;l!==v&&(L(n),y(l),null!=k&&f(k,String(l)))},R=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var l;const n=E.indexOf(e.currentTarget)+1;t=null!=(l=E[n])?l:E[0];break}case"ArrowLeft":{var a;const n=E.indexOf(e.currentTarget)-1;t=null!=(a=E[n])?a:E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},_.map((e=>{let{value:n,label:t,attributes:r}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>E.push(e),onKeyDown:R,onFocus:O,onClick:O},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":v===n})}),null!=t?t:n)}))),r?(0,a.cloneElement)(N.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,r.Z)();return a.createElement(d,(0,l.Z)({key:String(n)},e))}},2359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var l=t(7462),a=(t(7294),t(3905)),i=t(5488),r=t(5162);const o={},s=void 0,u={unversionedId:"Build a Plugin Package",id:"version-1.1.0/Build a Plugin Package",title:"Build a Plugin Package",description:"Plugin Package is a uniform format to archive your Plugin, and you can distribute your Plugin on Plugin Center by Plugin Package.",source:"@site/versioned_docs/version-1.1.0/Build a Plugin Package.md",sourceDirName:".",slug:"/Build a Plugin Package",permalink:"/developer-zone/1.1.0/Build a Plugin Package",draft:!1,editUrl:"https://github.com/Lynx-Huang/allxonTest/versioned_docs/version-1.1.0/Build a Plugin Package.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Plugin",permalink:"/developer-zone/1.1.0/Create a Plugin"},next:{title:"Properties",permalink:"/developer-zone/1.1.0/Implement Features/Properties"}},p={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Deploy from Local",id:"deploy-from-local",level:3},{value:"Deploy from Docker",id:"deploy-from-docker",level:3},{value:"How it works",id:"how-it-works",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Test your Plugin Package",id:"test-your-plugin-package",level:2},{value:"Install Plugin Package",id:"install-plugin-package",level:3},{value:"Uninstall Plugin Package",id:"uninstall-plugin-package",level:3}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Plugin Package is a uniform format to archive your Plugin, and you can distribute your Plugin on Plugin Center by Plugin Package. "),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Following step will teach you how to pack your Plugin Package from source."),(0,a.kt)("h3",{id:"deploy-from-local"},"Deploy from Local"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --build build --target package\n")),(0,a.kt)("p",null,"Then you should get Plugin Package ",(0,a.kt)("inlineCode",{parentName:"p"},"plugIN-hello-0.0.0-linux-x86_64.tar.gz"),"  under ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," directory.")),(0,a.kt)(r.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"cmake --build build --config <release|debug> --target package\n")),(0,a.kt)("p",null,"Then you should get Plugin Package ",(0,a.kt)("inlineCode",{parentName:"p"},"plugIN-hello-0.0.0-windows-x86_64.zip"),"  under ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," directory."))),(0,a.kt)("h3",{id:"deploy-from-docker"},"Deploy from Docker"),(0,a.kt)("p",null,"Choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile.x86_64")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile.jetson")," depend on your target plarform, and output Plugin Package will output under ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_DIRECTORY"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -f <Dockerfile.x86_64|Dockerfile.jetson> --output [OUTPUT_DIRECTROY] .\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -f Dockerfile.x86_64 --output build .\n")),(0,a.kt)("p",null,"Then you should get Plugin Package ",(0,a.kt)("inlineCode",{parentName:"p"},"plugIN-hello-0.0.0-linux-x86_64.tar.gz"),"  under ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_DIRECTORY")," directory."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Let's take a look at Plugin Package inside to understand how it composed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="plugin-hello-0.0.0-linux-x86_64.tar.gz"',title:'"plugin-hello-0.0.0-linux-x86_64.tar.gz"'},".\n\u251c\u2500\u2500 8102220f-083f-4f11-a433-6ccb2e786fed\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin-hello\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.sh\n\u2514\u2500\u2500 install_plugIN.sh\n\n1 directory, 7 files\n")),(0,a.kt)("p",null,"What Plugin Installer Script install a Plugin just extract the Plugin Package and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.sh"),", On the other side, run ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.sh")," when uninstall."),(0,a.kt)("p",null,"Next, Let's find out how to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.sh")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.sh"),". Check out the hello Plugin working directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="plugin-hello"',title:'"plugin-hello"'},"...\n\u251c\u2500\u2500 dep\n\u2502   \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 resource_dir_linux\n\u2502\xa0\xa0 \u251c\u2500\u2500 install_plugIN.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.sh\n\u251c\u2500\u2500 resource_dir_windows\n\u2502\xa0\xa0 \u251c\u2500\u2500 install_plugIN.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.bat\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ...\n")),(0,a.kt)("p",null,"This project separate installed files by platform, all files under ",(0,a.kt)("inlineCode",{parentName:"p"},"resource_dir_[PLATFORM]")," will be installed under target device."),(0,a.kt)("p",null,"You have to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"install_plugIN.sh"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.sh")," yourself. We will set installation path to environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ALLXON_PLUGIN_DIR")," when the script be called. So that you can install all you need under ",(0,a.kt)("inlineCode",{parentName:"p"},"ALLXON_PLUGIN_DIR"),", same as windows."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you want, you don't necessary to follow installation path ",(0,a.kt)("inlineCode",{parentName:"p"},"ALLXON_PLUGIN_DIR"),". At least, you must place ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall_plugIN.sh")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"ALLXON_PLUGIN_DIR"),".")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="resource_dir_linux/install_plugIN.sh"',title:'"resource_dir_linux/install_plugIN.sh"'},'#!/bin/bash\nCURRENT_SH_DIRECTORY=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)\nexec &> "${CURRENT_SH_DIRECTORY}/$(basename "${BASH_SOURCE[0]%.*}").output"\n\nPLUGIN_NAME=plugin-hello\nPLUGIN_SERVICE=${PLUGIN_NAME}.service\nPLUGIN_APP_GUID=${ALLXON_PLUGIN_DIR##*/}\n\nif [ -d $ALLXON_PLUGIN_DIR ]; then\n    echo "ERROR: plugin $PLUGIN_APP_GUID already installed"\n    exit 1\nelse\n    mkdir -p $ALLXON_PLUGIN_DIR || exit 1\nfi\n\ncheck_for_install() {\n    echo "check for install..."\n    # If users try to install this plugIN on non-Ubuntu x86 devices, then it will be returned\n    EXECUTABLE_DESCRIPTION=$(file $CURRENT_SH_DIRECTORY/$PLUGIN_APP_GUID/$PLUGIN_NAME)\n    ARCH=$(uname -i)\n\n    if [[ "$ARCH" == "x86_64" ]]; then\n        ARCH="x86-64"\n    fi\n\n    if [[ "$EXECUTABLE_DESCRIPTION" != *"$ARCH"* ]]; then\n        >&2 echo "Not Supported Architecture"\n        exit 1\n    fi\n}\n\ninstall_plugin_files() {\n    echo "install plugin files..."\n    cp -r ./$PLUGIN_APP_GUID/* $ALLXON_PLUGIN_DIR || exit 1\n    echo "\\\n[Unit]\nDescription=Allxon Hello plugIN\nDocumentation=https://dms.allxon.com/\n\n[Service]\nType=simple\nExecStart=${ALLXON_PLUGIN_DIR}/${PLUGIN_NAME} ${ALLXON_PLUGIN_DIR}\nEnvironment="HOME=/root"\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n" > ${PLUGIN_SERVICE} || exit 1\n\n    cp ./$PLUGIN_SERVICE /etc/systemd/system/ || exit 1\n    echo "plugIN is installed to $ALLXON_PLUGIN_DIR"\n}\n\ninitial_plugin_service_in_system() {\n    echo "start service..."\n    systemctl daemon-reload || exit 1\n    chmod 644 /etc/systemd/system/$PLUGIN_SERVICE || exit 1\n    systemctl enable --now $PLUGIN_SERVICE || exit 1\n}\n\ninstall_plugIN() {\n    check_for_install\n    install_plugin_files\n    initial_plugin_service_in_system > /dev/null 2>&1\n    sleep 1\n    exit 0\n}\n\ninstall_plugIN\n'))),(0,a.kt)(r.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="resource_dir_windows/install_plugIN.bat"',title:'"resource_dir_windows/install_plugIN.bat"'},'@echo off\n\n@REM @whoami /groups | find "S-1-16-12288" > nul && goto :admin\n@REM @REM Create vbs to invoke UAC\n@REM SET "ELEVATE_CMDLINE=cd /d "%~dp0" & call "%~f0" %*"\n@REM ECHO Set objShell = CreateObject("Shell.Application") 1>temp.vbs\n@REM ECHO Set objWshShell = WScript.CreateObject("WScript.Shell") 1>>temp.vbs\n@REM ECHO Set objWshProcessEnv = objWshShell.Environment("PROCESS") 1>>temp.vbs\n@REM ECHO strCommandLine = Trim(objWshProcessEnv("ELEVATE_CMDLINE")) 1>>temp.vbs\n@REM ECHO objShell.ShellExecute "cmd", "/c " ^& strCommandLine, "", "runas" 1>>temp.vbs\n@REM cscript //nologo temp.vbs & del temp.vbs & exit /b\n@REM :admin\n\nSET APP_NAME=plugin-hello\nSET APP_GUID=%ALLXON_PLUGIN_DIR:C:\\ProgramData\\allxon\\plugIN\\=%\nSET CURRENT_DIR=%~dp0\n\n@REM Main\n:main\nIF EXIST "%ALLXON_PLUGIN_DIR%" echo plugIN %ALLXON_PLUGIN_DIR% already installed & exit /b 0\n\nxcopy "%CURRENT_DIR%\\%APP_GUID%" "%ALLXON_PLUGIN_DIR%" /E /F /Y /I\n\necho ^<?xml version="1.0" encoding="UTF-16"?^>^\n ^<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task"^>^\n ^<RegistrationInfo^>^\n ^<URI^>\\%APP_NAME%-service^</URI^>^\n ^</RegistrationInfo^>^\n ^<Triggers^>^\n ^<LogonTrigger^>^\n ^<Enabled^>true^</Enabled^>^\n ^</LogonTrigger^>^\n ^</Triggers^>^\n ^<Principals^>^\n ^<Principal^>^\n ^<UserId^>S-1-5-18^</UserId^>^\n ^<RunLevel^>LeastPrivilege^</RunLevel^>^\n ^</Principal^>^\n ^</Principals^>^\n ^<Settings^>^\n ^<MultipleInstancesPolicy^>IgnoreNew^</MultipleInstancesPolicy^>^\n ^<DisallowStartIfOnBatteries^>false^</DisallowStartIfOnBatteries^>^\n ^<StopIfGoingOnBatteries^>false^</StopIfGoingOnBatteries^>^\n ^<AllowHardTerminate^>true^</AllowHardTerminate^>^\n ^<StartWhenAvailable^>false^</StartWhenAvailable^>^\n ^<RunOnlyIfNetworkAvailable^>false^</RunOnlyIfNetworkAvailable^>^\n ^<IdleSettings^>^\n ^<StopOnIdleEnd^>true^</StopOnIdleEnd^>^\n ^<RestartOnIdle^>false^</RestartOnIdle^>^\n ^</IdleSettings^>^\n ^<AllowStartOnDemand^>true^</AllowStartOnDemand^>^\n ^<Enabled^>true^</Enabled^>^\n ^<Hidden^>false^</Hidden^>^\n ^<RunOnlyIfIdle^>false^</RunOnlyIfIdle^>^\n ^<WakeToRun^>false^</WakeToRun^>^\n ^<ExecutionTimeLimit^>PT0S^</ExecutionTimeLimit^>^\n ^<Priority^>7^</Priority^>^\n ^</Settings^>^\n ^<Actions^>^\n ^<Exec^>^\n ^<Command^>"%ALLXON_PLUGIN_DIR%\\%APP_NAME%"^</Command^>^\n ^<Arguments^>"%ALLXON_PLUGIN_DIR%"^</Arguments^>^\n ^</Exec^>^\n ^</Actions^>^\n ^</Task^> > "%ALLXON_PLUGIN_DIR%\\service.xml"\nschtasks /Create /XML "%ALLXON_PLUGIN_DIR%\\service.xml" /TN "%APP_NAME%-service"\nschtasks /run /tn %APP_NAME%-service%\n')))),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"You can update Verison number under ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt"),", following ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," format. Remember to rebuild it after update version."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you update ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," content, you must release a new Plugin version. It will affect Allxon Portal Plugin Verification.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake",metastring:'{2} title="CMakeLists.txt" showLineNumbers',"{2}":!0,title:'"CMakeLists.txt"',showLineNumbers:!0},"cmake_minimum_required(VERSION 3.23)\nproject(plugin-hello VERSION 1.0.1)\nset(OCTO_SDK_VERSION 3.0.0)\n# ...\n")),(0,a.kt)("p",null,"Or your can use ",(0,a.kt)("inlineCode",{parentName:"p"},"release.sh")," to update version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./release.sh 1.0.1\n")),(0,a.kt)("h2",{id:"test-your-plugin-package"},"Test your Plugin Package"),(0,a.kt)("p",null,"Before you upload your Plugin Package to Allxon Plugin Center, You should test your package on local. You install your Plugin Package on local through Plugin Online installer."),(0,a.kt)("h3",{id:"install-plugin-package"},"Install Plugin Package"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo  bash -s -- --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n"))),(0,a.kt)(r.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n')))),(0,a.kt)("p",null,"After that, you can check if your installation is ok."),(0,a.kt)("h3",{id:"uninstall-plugin-package"},"Uninstall Plugin Package"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"bash",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo  bash -s -- --app-guid [APP_GUID] --remove\n"))),(0,a.kt)(r.Z,{value:"cmd",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --remove\n')))))}m.isMDXComponent=!0}}]);