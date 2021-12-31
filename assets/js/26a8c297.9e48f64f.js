"use strict";(self.webpackChunkPREFS=self.webpackChunkPREFS||[]).push([[597],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"cli",title:"Command Line Interface",sidebar_position:1,hide_title:!0},p="Command Line Interface",s={unversionedId:"api/cli",id:"api/cli",title:"Command Line Interface",description:"PREFS has a simple CLI tool that you can access from your terminal right after installing PREFS via Pypi.",source:"@site/docs/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/PREFS/docs/next/api/cli",editUrl:"https://github.com/Patitotective/PREFS/tree/main/website/docs/api/cli.md",tags:[],version:"current",lastUpdatedBy:"Patitotective",lastUpdatedAt:1640045239,formattedLastUpdatedAt:"12/20/2021",sidebarPosition:1,frontMatter:{id:"cli",title:"Command Line Interface",sidebar_position:1,hide_title:!0},sidebar:"docs",previous:{title:"Functions",permalink:"/PREFS/docs/next/api/functions"}},c=[{value:"Commands",id:"commands",children:[{value:"<code>bundle</code>",id:"bundle",children:[],level:3},{value:"<code>read</code>",id:"read",children:[],level:3},{value:"<code>about</code>",id:"about",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"PREFS")," has a simple CLI tool that you can access from your terminal right after installing ",(0,i.kt)("em",{parentName:"p"},"PREFS")," via ",(0,i.kt)("em",{parentName:"p"},"Pypi"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"bundle"},(0,i.kt)("inlineCode",{parentName:"h3"},"bundle")),(0,i.kt)("p",null,"Bundle PREFS file into a PREFs resource to use to build your app."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See an usage example ",(0,i.kt)("a",{parentName:"p",href:"../resources#how-to-create-a-resource-module"},"here"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: prefs bundle [OPTIONS] PATH\n\n  Bundle a PREFS file into a Python module\n\nOptions:\n  -o, --output TEXT  The output path\n  -a, --alias TEXT   The alias to be referenced as the path\n  --help             Show this message and exit.\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"prefs bundle theme.prefs --output resources/theme.py \n")),(0,i.kt)("p",null,"It will create a (",(0,i.kt)("em",{parentName:"p"},"PREFS"),") resource module file called ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.py")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\nfrom resources import theme\n\ntheme_data = PREFS.read(":/theme.prefs") # :/ and the alias\n')),(0,i.kt)("p",null,"(To better understand the above example read ",(0,i.kt)("a",{parentName:"p",href:"../resources#how-to-create-a-resource-module"},"this"),")."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If some directory doesn't exist in the output path it creates it."))),(0,i.kt)("h3",{id:"read"},(0,i.kt)("inlineCode",{parentName:"h3"},"read")),(0,i.kt)("p",null,"Given the path of a PREFS file, reads it's content and print it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: prefs read [OPTIONS] PATH\n\n  Reads a PREFS file and displays its content as a Python dictionary\n\nOptions:\n  --help  Show this message and exit.\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="settings.prefs"',title:'"settings.prefs"'},"#PREFS\nlang='en'\ntheme=>\n    background='#199396'\n    font='UbuntuMono'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'prefs read settings.prefs\n\n>>> {"lang": "en", "theme": {"background": "#199396", "font": "UbuntuMono"}}\n')),(0,i.kt)("h3",{id:"about"},(0,i.kt)("inlineCode",{parentName:"h3"},"about")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: prefs about [OPTIONS]                                                              \n\n  Shows information about PREFS                             \n\nOptions:                                         \n  --help  Show this message and exit.   \n")))}m.isMDXComponent=!0}}]);