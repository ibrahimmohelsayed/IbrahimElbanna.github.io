(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var o=n(0),r=n.n(o),i=n(248),a=n(253),u=n(252);function s(e){e.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Contact"}),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:20}},r.a.createElement("div",{style:{gridColumn:"1/3"}},r.a.createElement("h1",null,"Hi! It's my pleasure to hear from you."),r.a.createElement("p",null,"I like code and anything related, I guess you too! so if you have something to share with me, contact me:",r.a.createElement("p",{style:{textAlign:"center",fontSize:"1.5em",fontWeight:700,background:"linear-gradient(to right, #ffbf00, #ff6a00)",lineHeight:"84px",color:"#000",borderRadius:"50px"}},"zeyadetman@gmail.com"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Wanna be friends?"),r.a.createElement(a.a,{screenName:"zeyadetman",options:{size:"large"}}))),r.a.createElement(u.a,null))}},247:function(e,t,n){var o,r,i;n(24),n(47),n(30),i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r=!1,i="push",a="readyState",u="onreadystatechange",s={},c={},l={},p={};function d(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return r;return 1}function m(e,t){d(e,function(e){return t(e),1})}function f(t,n,o){t=t[i]?t:[t];var r=n&&n.call,a=r?n:o,u=r?t.join(""):n,h=t.length;function y(e){return e.call?e():s[e]}function g(){if(!--h)for(var e in s[u]=1,a&&a(),l)d(e.split("|"),y)&&!m(l[e],y)&&(l[e]=[])}return setTimeout(function(){m(t,function t(n,o){return null===n?g():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),p[n]?(u&&(c[u]=1),2==p[n]?g():setTimeout(function(){t(n,!0)},0)):(p[n]=1,u&&(c[u]=1),void w(n,g)))})},0),f}function w(e,r){var i,s=n.createElement("script");s.onload=s.onerror=s[u]=function(){s[a]&&!/^c|loade/.test(s[a])||i||(s.onload=s[u]=null,i=1,p[e]=2,r())},s.async=1,s.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(s,o.lastChild)}return f.get=w,f.order=function(e,t,n){!function o(r){r=e.shift(),e.length?f(r,o):f(r,t,n)}()},f.path=function(t){e=t},f.urlArgs=function(e){t=e},f.ready=function(e,t,n){e=e[i]?e:[e];var o,r=[];return!m(e,function(e){s[e]||r[i](e)})&&d(e,function(e){return s[e]})?t():(o=e.join("|"),l[o]=l[o]||[],l[o][i](t),n&&n(r)),f},f.done=function(e){f([null],e)},f},e.exports?e.exports=i():void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)},248:function(e,t,n){"use strict";var o=n(249),r=n(0),i=n.n(r),a=n(250),u=n.n(a),s=n(36);function c(e){var t=e.description,n=e.lang,r=e.meta,a=e.keywords,c=e.title;return i.a.createElement(s.b,{query:l,render:function(e){var o=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(r)})},data:o})}c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var l="1025518380"},249:function(e){e.exports={data:{site:{siteMetadata:{title:"Zeyad Etman",description:"Zeyad Etman's Space on the internet.",author:"@zeyadetman"}}}}},251:function(e,t,n){"use strict";n(9),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(o,r,i){for(var a=arguments.length,u=Array(3<a?a-3:0),s=3;s<a;s++)u[s-3]=arguments[s];return function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(1!=!!e||!e)}(t,o,r,i)?function(e,t){return Object.hasOwnProperty.call(e,t)}(o,r)?e.apply(void 0,[o,r,i].concat(u)):function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")}(o,r,i,n):e.apply(void 0,[o,r,i].concat(u))}}},252:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(0),r=n.n(o),i=n(36),a=function(e){var t=e.page,n=e.info;return r.a.createElement("div",{className:"card",style:{padding:"15px 1.5em"}},r.a.createElement("h3",{style:{textAlign:"center",marginTop:0}},t.path?r.a.createElement(i.a,{to:t.path},t.title):r.a.createElement("a",{href:t.url},t.title)),n)},u=[{page:{url:"https://github.com/zeyadetman",title:"Side Projects & Tools"},info:"I'm building some cool stuff to learn new things, and make the internet a better place."},{page:{path:"/blog",title:"Writing"},info:r.a.createElement("p",null,"I'm Writing from time to time, mainly programming and a little of mathematics. You also can follow me on"," ",r.a.createElement("a",{href:"https://dev.to/zeyadetman"},"dev.to"))},{page:{title:"Follow Me"},info:r.a.createElement("p",null,"You can follow me on ",r.a.createElement("a",{href:"https://github.com/zeyadetman"},"GitHub"),", ",r.a.createElement("a",{href:"https://twitter.com/zeyadetman"},"Twitter"),", ",r.a.createElement("a",{href:"https://www.facebook.com/zeyadetman"},"Facebook"),", ",r.a.createElement("a",{href:"https://www.linkedin.com/in/zeyadetman"},"LinkedIn"),", ",r.a.createElement("a",{href:"https://stackoverflow.com/users/5721245/zeyad-etman"},"Stack Overflow"),", ",r.a.createElement("a",{href:"https://www.quora.com/profile/Zeyad-Etman"},"Quora"),", ",r.a.createElement("a",{href:"mailto:zeyadetman@gmail.com"},"Email"),".")}];function s(){return r.a.createElement("div",{style:{marginTop:"15px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:"15px"}},u.map(function(e){var t=e.page,n=e.info;return r.a.createElement(a,{page:t,key:t.title,info:n})}))}},253:function(e,t,n){"use strict";n(18);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var s=n(115);function c(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?Object(s.a)(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(0),w=n.n(f),h=n(5),y=n.n(h),g=n(251),b=n.n(g),v=n(254),C=n.n(v);n.d(t,"b",function(){return E}),n.d(t,"a",function(){return M});var k="https://platform.twitter.com/widgets.js";m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e)}},{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{sourceType:y.a.oneOf(["profile","likes","list","collection","URL","widget"]).isRequired,screenName:b()(y.a.string,function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)}),userId:b()(y.a.number,function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)}),ownerScreenName:b()(y.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),slug:b()(y.a.string,function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")}),id:b()(y.a.oneOfType([y.a.number,y.a.string]),function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType}),url:b()(y.a.string,function(e){return"url"===e.sourceType}),widgetId:b()(y.a.string,function(e){return"widget"===e.sourceType}),options:y.a.object,autoHeight:y.a.bool,theme:y.a.oneOf(["dark","light"]),linkColor:y.a.string,borderColor:y.a.string,noHeader:y.a.bool,noFooter:y.a.bool,noBorders:y.a.bool,noScrollbar:y.a.bool,transparent:y.a.bool,lang:y.a.string});var E=function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}();m(E,"propTypes",{url:y.a.string.isRequired,options:y.a.object});var M=function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}();m(M,"propTypes",{screenName:y.a.string.isRequired,options:y.a.object}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tag:y.a.string.isRequired,options:y.a.object}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{screenName:y.a.string.isRequired,options:y.a.object}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"renderWidget",value:function(){var e=this;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then(function(t){e.props.onLoaded&&e.props.onLoaded(t)}):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){e.renderWidget()})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{tweetId:y.a.string.isRequired,options:y.a.object,onLoaded:y.a.func}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"shareMoment"})}}]),t}(),"propTypes",{momentId:y.a.string.isRequired,options:y.a.object}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:y.a.number.isRequired,options:y.a.object}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{id:y.a.string.isRequired}),m(function(e){function t(){return o(this,t),c(this,l(t).apply(this,arguments))}return d(t,f["Component"]),i(t,[{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(247)(k,"twitter-embed",function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")})}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){return w.a.createElement("div",{ref:"embedContainer"})}}]),t}(),"propTypes",{username:y.a.string.isRequired,options:y.a.object})}}]);
//# sourceMappingURL=component---src-pages-contact-js-3511dfc712fd90960195.js.map