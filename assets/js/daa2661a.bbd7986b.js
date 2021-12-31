"use strict";(self.webpackChunkPREFS=self.webpackChunkPREFS||[]).push([[741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2248:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"functions",title:"Functions",sidebar_position:3,hide_title:!0},p="Functions",s={unversionedId:"api/functions",id:"version-0.3.0/api/functions",title:"Functions",description:"bundle()",source:"@site/versioned_docs/version-0.3.0/api/functions.md",sourceDirName:"api",slug:"/api/functions",permalink:"/PREFS/docs/api/functions",editUrl:"https://github.com/Patitotective/PREFS/tree/main/website/versioned_docs/version-0.3.0/api/functions.md",tags:[],version:"0.3.0",sidebarPosition:3,frontMatter:{id:"functions",title:"Functions",sidebar_position:3,hide_title:!0},sidebar:"docs",previous:{title:"Prefs class",permalink:"/PREFS/docs/api/prefs"},next:{title:"Command Line Interface",permalink:"/PREFS/docs/api/cli"}},u=[{value:"<code>bundle()</code>",id:"bundle",children:[],level:3},{value:"<code>to_prefs()</code>",id:"to_prefs",children:[],level:3},{value:"<code>parse()</code>",id:"parse",children:[],level:3},{value:"<code>read()</code>",id:"read",children:[],level:3},{value:"<code>read_json()</code>",id:"read_json",children:[],level:3},{value:"<code>read_yaml()</code>",id:"read_yaml",children:[],level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"bundle"},(0,i.kt)("inlineCode",{parentName:"h3"},"bundle()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"bundle(path: str, output: str=None, alias: str=None) -> None\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path (str)"),": Prefs file's path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output (str=None)"),": Output path (by default same as ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," but appending ",(0,i.kt)("inlineCode",{parentName:"li"},"_resource")," to the filename)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alias (str=None)"),": An alias to reference it when reading (by default the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),").")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),(0,i.kt)("br",{parentName:"p"}),"\n","None. "),(0,i.kt)("p",null,"Creates a resource module (",(0,i.kt)("em",{parentName:"p"},"Python")," file) with the given prefs file that you can import in a ",(0,i.kt)("em",{parentName:"p"},"Python")," module to get those prefs without having the prefs file itself."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is explained at ",(0,i.kt)("a",{parentName:"p",href:"../resources#how-to-create-a-resource-module"},"Resources")," page."))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="prefs.prefs"',title:'"prefs.prefs"'},"#PREFS\nlang='en'\ntheme=>\n    background='#199396'\n    font='UbuntuMono'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\n\nprefs.bundle("prefs.prefs")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="prefs_resource.py"',title:'"prefs_resource.py"'},"# PREFS resource module\n# Created using PREFS Python library\n# https://patitotective.github.io/PREFS\n# Do not modify this file\n__version__ = '0.3.0'\nCONTENT = {'lang': 'en', 'theme': {'background': '#199396', 'font': 'UbuntuMono'}}\nALIAS = 'prefs.prefs'\n")),(0,i.kt)("h3",{id:"to_prefs"},(0,i.kt)("inlineCode",{parentName:"h3"},"to_prefs()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"to_prefs(content: dict, output: str=None) -> str\n")),(0,i.kt)("p",null,"Converts the given dictionary into PREFS format and returns it as string, if ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," given, writes the result in that path."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content (dict)"),": The dictionary to convert."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output (str)"),": An output path to write the result.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),(0,i.kt)("br",{parentName:"p"}),"\n","A string. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even if ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," is given, a string is still returned."))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\n\ncontent = { \n    "lang": "en", \n    "theme": {\n        "background": "#199396", \n        "font": "UbuntuMono"\n    }\n}\n\n\nstring = prefs.to_prefs(content)\n\nprint(string)\n>>> \n#PREFS\nlang=\'en\'\ntheme=>\n    background=\'#199396\'\n    font=\'UbuntuMono\'\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If some directory doesn't exist in the output path it will get created."))),(0,i.kt)("h3",{id:"parse"},(0,i.kt)("inlineCode",{parentName:"h3"},"parse()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"parse(string: str) -> dict\n")),(0,i.kt)("p",null,"Parses a string (representing a prefs file) and returns it's content."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string (str)"),": The string to parse.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),(0,i.kt)("br",{parentName:"p"}),"\n","A dictionary"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\n\nstring = """\n#PREFS\nlang=\'en\'\ntheme=>\n    background=\'#199396\'\n    font=\'UbuntuMono\'\n"""\n\nprint(prefs.parse(string))\n>>> {"lang": "en", "theme": {"background": "#199396", "font": "UbuntuMono"}}\n')),(0,i.kt)("h3",{id:"read"},(0,i.kt)("inlineCode",{parentName:"h3"},"read()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"read(path: str) -> dict\n")),(0,i.kt)("p",null,"Reads a prefs file and returns it's content."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path (str)"),": The path to the prefs file.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),(0,i.kt)("br",{parentName:"p"}),"\n","A dictionary."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="prefs.prefs"',title:'"prefs.prefs"'},"#PREFS\nlang='en'\ntheme=>\n    background='#199396'\n    font='UbuntuMono'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\n\nprint(prefs.read("prefs.prefs"))\n>>> {"lang": "en", "theme": {"background": "#199396", "font": "UbuntuMono"}}\n')),(0,i.kt)("h3",{id:"read_json"},(0,i.kt)("inlineCode",{parentName:"h3"},"read_json()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"read_json(path: str, **kwargs) -> dict\n")),(0,i.kt)("p",null,"Reads a JSON file and returns it's value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path (str)"),": The path to the YAML file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**kwargs"),": This keyword arguments will be passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"json.load")," function.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),(0,i.kt)("br",{parentName:"p"}),"\n","A dictionary."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\n\nmy_json = prefs.read_json("settings.json")\nmy_prefs = prefs.Prefs(my_json)\n')),(0,i.kt)("h3",{id:"read_yaml"},(0,i.kt)("inlineCode",{parentName:"h3"},"read_yaml()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"read_yaml(path: str, Loader=yaml.loader.SafeLoader, **kwargs) -> dict\n")),(0,i.kt)("p",null,"Reads a YAML file and returns it's value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path (str)"),": The path to the YAML file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Loader=yaml.loader.SafeLoader"),": YAML loader.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),(0,i.kt)("br",{parentName:"p"}),"\n","A dictionary."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import prefs\n\nmy_yaml = prefs.read_yaml("settings.yaml")\nmy_prefs = prefs.Prefs(my_yaml)\n')))}d.isMDXComponent=!0}}]);