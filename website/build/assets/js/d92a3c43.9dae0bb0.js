"use strict";(self.webpackChunkprefs_docs=self.webpackChunkprefs_docs||[]).push([[798],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8016:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"resources",title:"PREFS resources",sidebar_position:0,hide_title:!0},s="PREFS resources",p={unversionedId:"resources",id:"resources",isDocsHomePage:!1,title:"PREFS resources",description:"*",source:"@site/docs/resources.md",sourceDirName:".",slug:"/resources",permalink:"/PREFS/docs/next/resources",editUrl:"https://github.com/Patitotective/PREFS/tree/main/website/docs/resources.md",tags:[],version:"current",lastUpdatedBy:"Patitotective",lastUpdatedAt:1634426265,formattedLastUpdatedAt:"10/16/2021",sidebarPosition:0,frontMatter:{id:"resources",title:"PREFS resources",sidebar_position:0,hide_title:!0},sidebar:"docs",previous:{title:"Getting started",permalink:"/PREFS/docs/next/start"}},c=[{value:"What are PREFS resources?",id:"what-are-prefs-resources",children:[],level:3},{value:"How to create a PREFS resource file?",id:"how-to-create-a-prefs-resource-file",children:[],level:3}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prefs-resources"},"PREFS resources"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"what-are-prefs-resources"},"What are PREFS resources?"),(0,a.kt)("p",null,"If you have ever build a ",(0,a.kt)("em",{parentName:"p"},"Qt")," application you may have heard of something called ",(0,a.kt)("inlineCode",{parentName:"p"},"QResource"),", which is a resource file for your application, the application resources are in the application itself so you don't need to have those files to make your app work.",(0,a.kt)("br",{parentName:"p"}),"\n","So if you have created a PREFS file manually and you want to build your app you will need to use PREFS resources."),(0,a.kt)("h3",{id:"how-to-create-a-prefs-resource-file"},"How to create a PREFS resource file?"),(0,a.kt)("p",null,"Lets see how you're reading your PREFS file in your Python module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import PREFS\n\ntheme = PREFS.read_prefs_file("theme.prefs")\nprint(theme)\n')),(0,a.kt)("p",null,"Here's how ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.prefs")," looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="theme.prefs"',title:'"theme.prefs"'},'#PREFS\nfont_family="UbuntuMono"\nlight=>\n    background_color="#dcdee0"\n    font_color="#000000"\n    link_color="#0000EE"\ndark=>\n    background_color="#25282d"\n    font_color="#ffffff"\n    link_color="#006FEE"\n')),(0,a.kt)("p",null,"To bundle this PREFS file open your terminal and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PREFS bundle path\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is the path to your PREFS file, in our case ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.prefs"),".",(0,a.kt)("br",{parentName:"p"}),"\n","After running that command you should be able to see a new Python module called ",(0,a.kt)("inlineCode",{parentName:"p"},"theme_resource.py"),". It should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="theme_resource.py"',title:'"theme_resource.py"'},"# PREFS resource file\n# Created using PREFS Python library\n# https://patitotective.github.io/PREFS/\n# Do not modify this file\n\nVERSION = 'v0.2.55'\nPREFS = {'font_family': 'UbuntuMono', 'light': {'background_color': '#dcdee0', 'font_color': '#000000', 'link_color': '#0000EE'}, 'dark': {'background_color': '#25282d', 'font_color': '#ffffff', 'link_color': '#006FEE'}}\nALIAS = 'theme.prefs'\n")),(0,a.kt)("p",null,"You need to import that module into your Python module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import PREFS\nimport theme_resource\n\ntheme = PREFS.read_prefs_file("theme.prefs")\nprint(theme)\n')),(0,a.kt)("p",null,"Then just add ",(0,a.kt)("inlineCode",{parentName:"p"},":/")," to the begining of your PREFS file path (",(0,a.kt)("inlineCode",{parentName:"p"},"prefs.prefs -> :/prefs.prefs"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="main.py"',title:'"main.py"'},'import PREFS\nimport theme_resource\n\ntheme = PREFS.read_prefs_file(":/theme.prefs")\nprint(theme)\n')),(0,a.kt)("p",null,"Noy you can build your app without any issue."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"See ",(0,a.kt)("a",{parentName:"p",href:"./api/cli"},(0,a.kt)("inlineCode",{parentName:"a"},"bundle"),"'s API Reference")," for more options. "))))}m.isMDXComponent=!0}}]);