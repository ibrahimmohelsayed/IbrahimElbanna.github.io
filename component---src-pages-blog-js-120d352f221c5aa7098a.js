(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,a){"use strict";a.r(t);a(82),a(83);var n=a(284),o=a(0),r=a.n(o),i=a(168),l=a(166),s=a(161);function d(e){var t=e.excerpt,a=e.title,n=e.date,o=(e.id,e.timeToRead),i=e.slug;return r.a.createElement("article",{style:{marginBottom:55,width:"70%",marginLeft:"auto",marginRight:"auto",minWidth:320,borderBottom:"2px solid #0095ff"},className:"article-summary article"},r.a.createElement("header",null,r.a.createElement("h3",{style:{fontSize:"1.6em",margin:"10px 0"}},r.a.createElement(s.a,{to:"/"+i},a)," "),r.a.createElement("small",{className:"article-meta"},r.a.createElement("span",null,n),"   •   ",r.a.createElement("span",null,o+" "+(o>1?"mins":"min")+" read"))),r.a.createElement("p",null,t))}var c=a(193);a(212);function m(e){var t=e.location.pathname;return r.a.createElement(i.a,{currentPath:t},r.a.createElement(l.a,{title:"Blog",keywords:["zeyadetman","blog","technical"]}),r.a.createElement(s.b,{query:"432827260",render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},"Writings & Thoughts",r.a.createElement(c.a,{screenName:"zeyadetman"})),t.map(function(e){var t=e.node;return!t.fields.slug.includes("/ar/")&&r.a.createElement(d,{title:t.frontmatter.title,date:t.frontmatter.date,id:t.id,timeToRead:t.timeToRead,excerpt:t.excerpt,key:t.id,slug:t.fields.slug})}))},data:n}))}a.d(t,"default",function(){return m})},161:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),o=a.n(n),r=a(1),i=a.n(r),l=a(35),s=a.n(l);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return l.withPrefix});a(162);var d=o.a.createContext({}),c=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},162:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},163:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),o=a.n(n),r=a(1),i=a.n(r),l=a(59),s=a(3),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman"}}}}},165:function(e,t,a){e.exports=a.p+"static/favicon-536c95ef75715eb3b2253c240b66eaf4.ico"},166:function(e,t,a){"use strict";var n=a(167),o=a(0),r=a.n(o),i=a(1),l=a.n(i),s=a(180),d=a.n(s),c=a(161);function m(e){var t=e.description,a=e.lang,o=e.meta,i=e.keywords,l=e.title;return r.a.createElement(c.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var u="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},168:function(e,t,a){"use strict";a(25),a(81);var n=a(164),o=a(0),r=a.n(o),i=a(1),l=a.n(i),s=a(161),d={style:{color:"rgb(36, 41, 46)"},className:"day-mode"},c={style:{color:"#fff"},className:"night-mode"},m=a(171),u=(a(172),a(173),a(165)),f=a.n(u),p=(a(174),function(e){var t=e.toggleMode,a=e.mode,n=(e.currentPath,"day"===a?d:c),i=Object(m.useMedia)({maxWidth:"1111px"},!0),l=Object(m.useMedia)({maxWidth:"512px"},!0),u=Object(o.useReducer)(function(e,t){if("TOGGLE_SHOW_MENU"===t)return Object.assign({},e,{isShowMenuActive:!e.isShowMenuActive})},{isShowMenuActive:!1,hideMenu:i,hideMyName:l}),p=u[0],g=u[1],h=function(e){t(e);try{localStorage.setItem("mode",e)}catch(a){console.log(a)}};return r.a.createElement("header",Object.assign({},n,{className:n.className+" main-header"}),r.a.createElement("div",{className:"main-logo"},r.a.createElement("img",{src:f.a,style:Object.assign({marginRight:"1em",width:35,height:35},"night"===a?{filter:"invert(100%)"}:{},l?{}:{marginBottom:10}),alt:"logo"}),!p.isShowMenuActive&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"1.2em"},className:"name-logo"},!l&&"Zeyad Etman"))),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},(p.isShowMenuActive||!i)&&r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/",activeClassName:"active-page-link"},"home")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/projects",activeClassName:"active-page-link"},"projects")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/work",activeClassName:"active-page-link"},"work")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/blog",activeClassName:"active-page-link",partiallyActive:!0},"blog")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/contact",activeClassName:"active-page-link"},"contact"))),i&&r.a.createElement("a",{href:"javascript:void(0)",style:{fontSize:"1.5em",alignSelf:"flex-end",marginRight:"3px"},onClick:function(){g("TOGGLE_SHOW_MENU")}},"☰"),"day"===a?r.a.createElement("i",{key:a,onClick:function(){return h("night")},className:"twa twa-sunny",style:{fontSize:"2em"}}):r.a.createElement("i",{key:a,onClick:function(){return h("day")},className:"twa twa-new-moon",style:{fontSize:"2em"}})))}),g=a(58),h=(a(175),a(176),a(177),a(178),a(181));h.a.initialize("UA-50784035-2"),"undefined"!=typeof window&&h.a.pageview(window.location.pathname+window.location.search);var b=function(e){var t=e.children,a=e.mode,i=e.toggleMode,l=e.currentPath,m="day"===a?d:c;return Object(o.useEffect)(function(){"night"===a?(m=c,document.body.style.backgroundColor="#0e0e0e"):(m=d,document.body.style.backgroundColor="#fff")},[a]),r.a.createElement(s.b,{query:"2994927498",render:function(e){return r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(p,{siteTitle:e.site.siteMetadata.title,mode:a,currentPath:l,toggleMode:i}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",Object.assign({},m,{style:Object.assign({},m.style),mode:a}),t)))},data:n})};b.propTypes={children:l.a.node.isRequired};t.a=Object(g.b)(function(e){return{mode:e.mode}},function(e){return{toggleMode:function(){return e({type:"TOGGLE_MODE"})}}})(b)},284:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"f0d529f9-1afb-548b-b6d9-7aa6154d5adb",excerpt:"Hello everyone, In this post (Two parts) I'll convert a reactjs code from a class component to a functional component. Focusing on   and…",frontmatter:{title:"From ReactJS Class Component to Functional Component - useState (Part 1)",date:"March 09, 2019"},timeToRead:3,fields:{slug:"blog/posts/from-reactjs-class-component-to-functional-component-usestate-part-1/"},wordCount:{words:300}}},{node:{id:"d052b1d3-f838-59fa-aa0f-d9c355ad0a51",excerpt:"قمت بتجديد مدونتي على Gatsbyjs بدلاً من Jekyll…",frontmatter:{title:"طوّرت مدونتى من jekyll الى GatsbyJS, عليك تجربتها",date:"March 02, 2019"},timeToRead:1,fields:{slug:"blog/posts/revamp-my-blog-from-jekyll-to-gatsby-and-you-have-to-try/ar/"},wordCount:{words:263}}},{node:{id:"497db959-6e4a-5d0b-b9e8-c11a2509573e",excerpt:"I revamped my blog to be built on Gatsbyjs instead of Jekyll, Everything become cleaner, and faster. In this post I'll explain what are the…",frontmatter:{title:"Revamp my blog from Jekyll to Gatsby, and You have to try",date:"March 02, 2019"},timeToRead:1,fields:{slug:"blog/posts/revamp-my-blog-from-jekyll-to-gatsby-and-you-have-to-try/"},wordCount:{words:312}}},{node:{id:"3d703f15-9942-57eb-94c5-3d77455b1d43",excerpt:"Pure Functions Vs Impure Functions Hello, in this post I'll explain the difference between pure and impure functions in JavaScript, and How…",frontmatter:{title:"Refactoring Functions",date:"February 14, 2019"},timeToRead:3,fields:{slug:"blog/posts/refactoring-functions/"},wordCount:{words:421}}},{node:{id:"b5eea32d-6fc1-5355-b808-794f2418ffb2",excerpt:"HashTables Before we make a hashtable, let's talk about its components  ,  , and  . read them even if you know! Components Arrays? if we…",frontmatter:{title:"Hashtables for newbies",date:"September 26, 2018"},timeToRead:3,fields:{slug:"blog/posts/hashtables-for-newbies/"},wordCount:{words:373}}},{node:{id:"86aa4555-5bb8-5c40-badf-6713827030f2",excerpt:"In this post, i'll explain how to pass a state between components in Reactjs.\nWe'll build a small 'How many books did you read?' app, in…",frontmatter:{title:"How to pass state between components in reactjs (Full Code)",date:"July 25, 2018"},timeToRead:4,fields:{slug:"blog/posts/How-to-pass-state-between-components-in-reactjs/"},wordCount:{words:401}}},{node:{id:"a57834db-9e55-5304-99c4-c895db5c43a8",excerpt:"السﻻم عليكم، فى البوست ده (متقسم على جزئين) هحول reactjs code من الـ class component للـ functional component…",frontmatter:{title:"ReactJS من Class Component الى Functional Component - useState (الجزء الاول بالعربى)",date:"March 09, 2018"},timeToRead:3,fields:{slug:"blog/posts/from-reactjs-class-component-to-functional-component-usestate-part-1/ar/"},wordCount:{words:250}}},{node:{id:"f2a2fe76-1d87-59dc-9e5e-049c0627ece9",excerpt:"The problem i want to talk about in this post that we consider our minds should have one direction or thought, and this direction must be…",frontmatter:{title:"Developers should have two minds, technical mind and business mind.",date:"December 03, 2017"},timeToRead:4,fields:{slug:"blog/posts/Developers-should-have-two-minds/"},wordCount:{words:743}}},{node:{id:"39f32496-eb47-5cff-b3c0-e11334aa703f",excerpt:"Assalamu Alaikum everyone :D\nI just finished my fourth and last project on  Intermediate Front End Development Projects  on  freecodecamp…",frontmatter:{title:"Intermediate Front End Development Projects on freecodecamp in two days",date:"September 13, 2017"},timeToRead:3,fields:{slug:"blog/posts/intermediate-front-end-development-projects-on-freecodecamp-in-two-days/"},wordCount:{words:390}}},{node:{id:"62fffeb6-cc54-53e6-adde-fa95a030b917",excerpt:"",frontmatter:{title:"What's the number of Triangles in irregular hexagon ?",date:"July 21, 2017"},timeToRead:1,fields:{slug:"blog/posts/whats-the-number-of-triangles-in-irregular-hexagon/"},wordCount:{words:null}}},{node:{id:"86480d71-53f0-5a60-91ff-8f37fb888de6",excerpt:"‘A’ is a criminal, he wants to rob a bank so he asked his friends ‘B’ and ‘C’ for help. They robbed the bank successfully but unfortunately…",frontmatter:{title:"How Dropbox Knows When You’re Sharing Copyrighted Stuff?",date:"June 30, 2017"},timeToRead:1,fields:{slug:"blog/posts/how-dropbox-knows-when-youre-sharing-copyrighted-stuff/"},wordCount:{words:156}}},{node:{id:"7941df5b-f08d-5342-94ba-1674be87ea6a",excerpt:"the program takes the file path from user, then calculates its sha-256 hash, then takes the folder path from user to search in and start…",frontmatter:{title:"Remove Duplicate Files in python",date:"June 21, 2017"},timeToRead:1,fields:{slug:"blog/posts/remove-duplicate-files-in-python/"},wordCount:{words:50}}},{node:{id:"f1b7d77d-6d54-52c8-9a85-0043f7cdb15e",excerpt:'The Puzzle "ABCD  *  D = DCBA", Replace every character with a number to make the equation mathematically right. The Solution using brute…',frontmatter:{title:"ABCD * D = DCBA (Puzzle+Solution)",date:"April 07, 2017"},timeToRead:1,fields:{slug:"blog/posts/abcd-d-dcba-puzzlesolution/"},wordCount:{words:27}}},{node:{id:"2dd6cad1-04c2-547a-bc83-a64e199f0e0e",excerpt:"Here's the problem from  Mr.Honner Blog : I was recently reminded of an excellent math problem involving mixtures. Imagine yourself sitting…",frontmatter:{title:"Coffee and Cream problem, My solution",date:"June 21, 2016"},timeToRead:2,fields:{slug:"blog/posts/coffee-and-cream-problem-my-solution/"},wordCount:{words:229}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-120d352f221c5aa7098a.js.map