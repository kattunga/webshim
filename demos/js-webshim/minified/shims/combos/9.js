jQuery.webshims.register("dom-extend",function(b,e,i,n,p){var t=e.modules,l=/\s*,\s*/,x={},o={},u={},z={},j={},g=b.fn.val,G=function(d,a,c,f,r){return r?g.call(b(d)):g.call(b(d),c)};b.fn.val=function(d){var a=this[0];arguments.length&&null==d&&(d="");if(!arguments.length)return!a||1!==a.nodeType?g.call(this):b.prop(a,"value",d,"val",!0);if(b.isArray(d))return g.apply(this,arguments);var c=b.isFunction(d);return this.each(function(f){a=this;1===a.nodeType&&(c?(f=d.call(a,f,b.prop(a,"value",p,"val",
!0)),null==f&&(f=""),b.prop(a,"value",f,"val")):b.prop(a,"value",d,"val"))})};var C="_webshimsLib"+Math.round(1E3*Math.random()),v=function(d,a,c){d=d.jquery?d[0]:d;if(!d)return c||{};var f=b.data(d,C);c!==p&&(f||(f=b.data(d,C,{})),a&&(f[a]=c));return a?f&&f[a]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(d){b.fn[d.name]=function(){return this.map(function(){var a=v(this,
"shadowData");return a&&a[d.prop]||this})}});["removeAttr","prop","attr"].forEach(function(d){x[d]=b[d];b[d]=function(a,c,f,r,y){var k="val"==r,s=!k?x[d]:G;if(!a||!o[c]||1!==a.nodeType||!k&&r&&"attr"==d&&b.attrFn[c])return s(a,c,f,r,y);var A=(a.nodeName||"").toLowerCase(),D=u[A],e="attr"==d&&(!1===f||null===f)?"removeAttr":d,h,g,i;D||(D=u["*"]);D&&(D=D[c]);D&&(h=D[e]);if(h){if("value"==c)g=h.isVal,h.isVal=k;if("removeAttr"===e)return h.value.call(a);if(f===p)return h.get?h.get.call(a):h.value;h.set&&
("attr"==d&&!0===f&&(f=c),i=h.set.call(a,f));if("value"==c)h.isVal=g}else i=s(a,c,f,r,y);if((f!==p||"removeAttr"===e)&&j[A]&&j[A][c]){var l;l="removeAttr"==e?!1:"prop"==e?!!f:!0;j[A][c].forEach(function(b){if(!b.only||(b.only="prop"==d)||"attr"==b.only&&"prop"!=d)b.call(a,f,l,k?"val":e,d)})}return i};z[d]=function(a,c,f){u[a]||(u[a]={});u[a][c]||(u[a][c]={});var r=u[a][c][d],y=function(a,b,A){return b&&b[a]?b[a]:A&&A[a]?A[a]:"prop"==d&&"value"==c?function(a){return f.isVal?G(this,c,a,!1,0===arguments.length):
x[d](this,c,a)}:"prop"==d&&"value"==a&&f.value.apply?function(a){var b=x[d](this,c);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return x[d](this,c,a)}};u[a][c][d]=f;if(f.value===p){if(!f.set)f.set=f.writeable?y("set",f,r):e.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:b.noop;if(!f.get)f.get=y("get",f,r)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=y(a,r))})}});var h=!b.browser.msie||8<parseInt(b.browser.version,10),m=function(){var b=e.getPrototypeOf(n.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,f,r){var y=n.createElement(c),k=e.getPrototypeOf(y);if(h&&k&&b!==k&&(!y[f]||!a.call(y,f))){var s=y[f];r._supvalue=function(){return s&&s.apply?s.apply(this,arguments):s};k[f]=r.value}else r._supvalue=function(){var a=v(this,"propValue");return a&&a[f]&&a[f].apply?a[f].apply(this,arguments):a&&a[f]},w.extendValue(c,f,r.value);r.value._supvalue=r._supvalue}}(),w=function(){var d={};e.addReady(function(a,c){var k={},f=function(d){k[d]||(k[d]=b(a.getElementsByTagName(d)),
c[0]&&b.nodeName(c[0],d)&&(k[d]=k[d].add(c)))};b.each(d,function(a,b){f(a);!b||!b.forEach?e.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){k[a].each(b)})});k=null});var a,c=b([]),f=function(c,f){d[c]?d[c].push(f):d[c]=[f];b.isDOMReady&&(a||b(n.getElementsByTagName(c))).each(f)};return{createTmpCache:function(d){b.isDOMReady&&(a=a||b(n.getElementsByTagName(d)));return a||c},flushTmpCache:function(){a=null},content:function(a,d){f(a,function(){var a=b.attr(this,d);null!=a&&b.attr(this,
d,a)})},createElement:function(a,b){f(a,b)},extendValue:function(a,d,c){f(a,function(){b(this).each(function(){v(this,"propValue",{})[d]=this[d];this[d]=c})})}}}(),E=function(b,a){if(b.defaultValue===p)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};b.extend(e,{getID:function(){var d=(new Date).getTime();return function(a){var a=b(a),c=a.attr("id");c||(d++,c="ID-"+d,a.attr("id",c));
return c}}(),extendUNDEFProp:function(d,a){b.each(a,function(a,b){a in d||(d[a]=b)})},createPropDefault:E,data:v,moveToFirstEvent:function(){var d=b._data?"_data":"data";return function(a,c,f){if((a=(b[d](a,"events")||{})[c])&&1<a.length)c=a.pop(),f||(f="bind"),"bind"==f&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(){var d,a,c;b(i).bind("emchange resize",function(f){clearTimeout(d);d=setTimeout(function(){if("resize"==f.type){var d=b(i).width(),e=b(i).width();
if(e==a&&d==c)return;a=e;c=d}b.event.trigger("updateshadowdom")},20)});b.event.customEvent.updateshadowdom=!0;return function(a,d,c){c=c||{};a.jquery&&(a=a[0]);d.jquery&&(d=d[0]);var k=b.data(a,C)||b.data(a,C,{}),s=b.data(d,C)||b.data(d,C,{}),A={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=c.shadowFocusElement[0];A=b.data(c.shadowFocusElement,C)||b.data(c.shadowFocusElement,C,A)}}else c.shadowFocusElement=d;k.hasShadow=d;A.nativeElement=s.nativeElement=
a;A.shadowData=s.shadowData=k.shadowData={nativeElement:a,shadowElement:d,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){v(this,"shadowData",s.shadowData)});if(c.data)A.shadowData.data=s.shadowData.data=k.shadowData.data=c.data;c=null}}(),propTypes:{standard:function(b){E(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){E(b);if(!b.prop)b.prop={set:function(a){a?
b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var d=n.createElement("a");d.style.display="none";return function(a,c){E(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(c),e;if(null==a)return"";d.setAttribute("href",a+"");if(!b.support.hrefNormalized){try{b(d).insertAfterTo(this),e=d.getAttribute("href",4)}catch(j){e=d.getAttribute("href",4)}b(d).detach()}return e||d.href}}}}(),
enumarated:function(b){E(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||"").toLowerCase();if(!a||-1==b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(d,a){"string"==typeof a&&(a=a.split(l));a.forEach(function(a){e.defineNodeNamesProperty(d,a,{prop:{set:function(d){b.attr(this,a,d)},get:function(){return b.attr(this,a)||""}}})})},defineNodeNameProperty:function(d,a,c){o[a]=!0;if(c.reflect)e.propTypes[c.propType||
"standard"](c,a);["prop","attr","removeAttr"].forEach(function(f){var j=c[f];j&&(j="prop"===f?b.extend({writeable:!0},j):b.extend({},j,{writeable:!0}),z[f](d,a,j),"*"!=d&&e.cfg.extendNative&&"prop"==f&&j.value&&b.isFunction(j.value)&&m(d,a,j),c[f]=j)});c.initAttr&&w.content(d,a);return c},defineNodeNameProperties:function(b,a,c,f){for(var j in a)!f&&a[j].initAttr&&w.createTmpCache(b),c&&(a[j][c]?e.log("override: "+b+"["+j+"] for "+c):(a[j][c]={},["value","set","get"].forEach(function(b){b in a[j]&&
(a[j][c][b]=a[j][b],delete a[j][b])}))),a[j]=e.defineNodeNameProperty(b,j,a[j]);f||w.flushTmpCache();return a},createElement:function(d,a,c){var f;b.isFunction(a)&&(a={after:a});w.createTmpCache(d);a.before&&w.createElement(d,a.before);c&&(f=e.defineNodeNameProperties(d,c,!1,!0));a.after&&w.createElement(d,a.after);w.flushTmpCache();return f},onNodeNamesPropertyModify:function(d,a,c,f){"string"==typeof d&&(d=d.split(l));b.isFunction(c)&&(c={set:c});d.forEach(function(b){j[b]||(j[b]={});"string"==
typeof a&&(a=a.split(l));c.initAttr&&w.createTmpCache(b);a.forEach(function(a){j[b][a]||(j[b][a]=[],o[a]=!0);if(c.set){if(f)c.set.only=f;j[b][a].push(c.set)}c.initAttr&&w.content(b,a)});w.flushTmpCache()})},defineNodeNamesBooleanProperty:function(d,a,c){c||(c={});if(b.isFunction(c))c.set=c;e.defineNodeNamesProperty(d,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?p:a}},removeAttr:{value:function(){this.removeAttribute(a);
c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===p)return b=b.attributes[a]||{},c=b.specified?b.value:null,null==c?p:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var d=[],a={},c,f,j=/:\/\/|^\.*\//,h=function(a,c,d){return c&&d&&-1!==b.inArray(c,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,j.test(d)||(d=e.cfg.basePath+d),e.loader.loadScript(d+c+".js",
function(){a.langObj[c]?(a.loading=!1,s(a,!0)):b(function(){a.langObj[c]&&s(a,!0);a.loading=!1})}),!0):!1},k=function(b){a[b]&&a[b].forEach(function(b){b.callback()})},s=function(b,a){if(b.activeLang!=c&&b.activeLang!==f){var d=t[b.module].options;if(b.langObj[c]||f&&b.langObj[f])b.activeLang=c,b.callback(b.langObj[c]||b.langObj[f],c),k(b.module);else if(!a&&!h(b,c,d)&&!h(b,f,d)&&b.langObj[""]&&""!==b.activeLang)b.activeLang="",b.callback(b.langObj[""],c),k(b.module)}};return function(k){if("string"==
typeof k&&k!==c)c=k,f=c.split("-")[0],c==f&&(f=!1),b.each(d,function(b,a){s(a)});else if("object"==typeof k)if(k.register)a[k.register]||(a[k.register]=[]),a[k.register].push(k),k.callback();else{if(!k.activeLang)k.activeLang="";d.push(k);s(k)}return c}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){e[b]=function(b,d,j,h){"string"==typeof b&&(b=b.split(l));var k={};b.forEach(function(b){k[b]=
e[a](b,d,j,h)});return k}});e.isReady("webshimLocalization",!0)});
(function(b,e){var i=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<i)&&(!b.browser.msie||12>i&&7<i)){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(b,e){b.getAttribute("role")||b.setAttribute("role",e)};b.webshims.addReady(function(i,l){b.each(n,function(e,j){for(var g=b(e,i).add(l.filter(e)),n=0,o=g.length;n<o;n++)p(g[n],j)});if(i===e){var x=e.getElementsByTagName("header")[0],o=e.getElementsByTagName("footer"),u=o.length;
x&&!b(x).closest("section, article")[0]&&p(x,"banner");u&&(x=o[u-1],b(x).closest("section, article")[0]||p(x,"contentinfo"))}})}})(jQuery,document);
(function(b,e,i){var n=e.audio&&e.video,p=!1,t=i.cfg.mediaelement,l=i.bugs,x=function(){i.ready("mediaelement-swf",function(){if(!i.mediaelement.createSWF)i.modules["mediaelement-swf"].test=b.noop,i.reTest(["mediaelement-swf"],n)})},o;if(n){var u=document.createElement("video");e.videoBuffered="buffered"in u;p="loop"in u;i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));e.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:e.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(n&&!t.preferFlash){var z=function(e){var g=e.target.parentNode;!t.preferFlash&&(b(e.target).is("audio, video")||g&&b("source:last",g)[0]==e.target)&&i.ready("DOM mediaelement",function(){o&&x();i.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){o&&!t.preferFlash&&i.mediaelement.createSWF&&!b(e.target).closest("audio, video").is(".nonnative-api-active")?(t.preferFlash=!0,document.removeEventListener("error",
z,!0),b("audio, video").mediaLoad(),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src)):o||document.removeEventListener("error",z,!0)},20)})})};document.addEventListener("error",z,!0);b("audio, video").each(function(){this.error&&z({target:this})})}l.track=!1;e.track&&function(){if(!l.track)l.track="number"!=typeof b("<track />")[0].readyState;if(!l.track)try{new TextTrackCue(2,3,"")}catch(e){try{new TextTrackCue("",2,3,"","",!1);var g=TextTrackCue;
window.TextTrackCue=function(b,e,d,a,c,f){3!=arguments.length&&i.warn("TextTrackCue has 3 arguments: startTime, endTime and text. everything else is deprecated");return 4<arguments.length?new g(b,e,d,a,c||"",f||!1):new g("",b,e,d,"",!1)}}catch(n){l.track=!0}}var o=i.cfg.track,p=function(e){b(e.target).filter("track").each(h)},h=function(){if(l.track||!o.override&&3==b.prop(this,"readyState"))o.override=!0,i.reTest("track"),document.removeEventListener("error",p,!0),this&&b.nodeName(this,"track")?
i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support")},m=function(){document.addEventListener("error",p,!0);l.track?h():b("track").each(h)};o.override||(i.isReady("track")?m():b(m))}();i.register("mediaelement-core",function(b,g,i,u,v){o=swfobject.hasFlashPlayerVersion("9.0.115");var h=g.mediaelement,m=function(a,c){var a=b(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;
var e=a.attr("type");if(e)d.type=e,d.container=b.trim(e.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=h.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=a.attr("media"))d.media=e;return d},w=!o&&"postMessage"in i&&n,z=function(){var a;return function(){!a&&w&&(a=!0,g.loader.loadScript("https://www.youtube.com/player_api"),b(function(){g.polyfill("mediaelement-yt")}))}}(),d=function(){o?x():z()};
g.addPolyfill("mediaelement-yt",{test:!w,d:["dom-support"]});h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov",
"qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=b.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;b.each(h.mimeTypes[c],function(b,c){if(-1!==c.indexOf(a))return d=
b,!1});return d};h.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(b){var c=u.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var c=[],d=a[0].nodeName.toLowerCase(),e=m(a,d);e.src?c.push(e):b("source",a).each(function(){e=m(this,d);e.src&&c.push(e)});return c}};b.fn.loadMediaSrc=
function(a,c){return this.each(function(){c!==v&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));h.srces(this,a);b(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");h.canThirdPlaySrces=function(a,c){var d="";if(o||w)a=b(a),c=c||h.srces(a),b.each(c,function(b,a){if(a.container&&
a.src&&(o&&-1!=h.swfMimeTypes.indexOf(a.container)||w&&"video/youtube"==a.container))return d=a,!1});return d};var a={};h.canNativePlaySrces=function(c,d){var e="";if(n){var c=b(c),f=(c[0].nodeName||"").toLowerCase();if(!a[f])return e;d=d||h.srces(c);b.each(d,function(b,d){if(d.type&&a[f].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};h.setError=function(a,c){c||(c="can't play sources");b(a).pause().data("mediaerror",c);g.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&
b(a).trigger("mediaerror")},1)};var c=function(){var b;return function(a,e,f){g.ready(o?"mediaelement-swf":"mediaelement-yt",function(){h.createSWF?h.createSWF(a,e,f):b||(b=!0,d(),c(a,e,f))});!b&&w&&!h.createSWF&&z()}}(),f=function(b,a,d,e,i){d||!1!==d&&a&&"third"==a.isActive?(d=h.canThirdPlaySrces(b,e))?c(b,d,a):i?h.setError(b,!1):f(b,a,!1,e,!0):(d=h.canNativePlaySrces(b,e))?a&&"third"==a.isActive&&h.setActive(b,"html5",a):i?(h.setError(b,!1),a&&"third"==a.isActive&&h.setActive(b,"html5",a)):f(b,
a,!0,e,!0)},r=/^(?:embed|object|datalist)$/i,y=function(a,c){var d=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{}),e=h.srces(a),i=a.parentNode;clearTimeout(d.loadTimer);b.data(a,"mediaerror",!1);if(e.length&&i&&!(1!=i.nodeType||r.test(i.nodeName||"")))c=c||g.data(a,"mediaelement"),f(a,c,t.preferFlash||v,e)};b(u).bind("ended",function(a){var c=g.data(a.target,"mediaelement");(!p||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,
"loop")&&b(a.target).prop("currentTime",0).play()},1)});p||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=g.defineNodeNameProperty(c,"load",{prop:{value:function(){var b=g.data(this,"mediaelement");y(this,b);n&&(!b||"html5"==b.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});a[c]=g.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var e="";n&&a[c].prop._supvalue&&(e=a[c].prop._supvalue.call(this,d),"no"==
e&&(e=""));!e&&o&&(d=b.trim((d||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=g.data(b,"mediaelementBase")||g.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){y(b);b=null},9)}});i=function(){g.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&8<g.browserVersion&&b.prop(this,"paused")&&
!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():y(this);if(n){var a,c,d=this,e=function(){var a=b.prop(d,"buffered");if(a){for(var c="",e=0,f=a.length;e<f;e++)c+=a.end(e);return c}},f=function(){var a=e();a!=c&&(c=a,b(d).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=e());clearTimeout(a);a=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",
function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})})};e.track&&!l.track&&g.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});n?(g.isReady("mediaelement-core",!0),i(),g.ready("WINDOWLOAD mediaelement",d)):g.ready("mediaelement-swf",i);b(function(){g.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(b,e,i,n,p,t){var l=e.mediaelement,x=i.swfobject,o=Modernizr.audio&&Modernizr.video,u=x.hasFlashPlayerVersion("9.0.115"),z=0,i={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(b){if(b)e.error("buffered index size error");else return 0},end:function(b){if(b)e.error("buffered index size error");else return 0},length:0}},j=Object.keys(i),g={currentTime:0,volume:1,
muted:!1};Object.keys(g);var G=b.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:p},i,g),C=/^jwplayer-/,v=function(b){if(b=n.getElementById(b.replace(C,"")))return b=e.data(b,"mediaelement"),"third"==b.isActive?b:null},h=function(b){return(b=e.data(b,"mediaelement"))&&"third"==b.isActive?b:null},m=function(a,q){q=b.Event(q);q.preventDefault();b.event.trigger(q,p,a)},w=t.playerPath||e.cfg.basePath+
"jwplayer/"+(t.playerName||"player.swf"),E=t.pluginPath||e.cfg.basePath+"swf/jwwebshims.swf";e.extendUNDEFProp(t.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});e.extendUNDEFProp(t.jwVars,{screencolor:"ffffffff"});e.extendUNDEFProp(t.jwAttrs,{bgcolor:"#000000"});var d=function(a,q){var c=a.duration;if(!(c&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=c}catch(d){}a.duration&&
a.duration!=a._lastDuration?(m(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&l.jwEvents.Model.META(b.extend({duration:a.duration},q),a),a._durationCalcs--):a._durationCalcs++}},a=function(b,c){3>b&&clearTimeout(c._canplaythroughTimer);if(3<=b&&3>c.readyState)c.readyState=b,m(c._elem,"canplay"),clearTimeout(c._canplaythroughTimer),c._canplaythroughTimer=setTimeout(function(){a(4,c)},4E3);if(4<=b&&4>c.readyState)c.readyState=b,m(c._elem,"canplaythrough");c.readyState=b};b.extend(b.event.customEvent,
{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0});l.jwEvents={View:{PLAY:function(b){var a=v(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;m(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(c){var q=v(c.id);if(q&&"percentage"in c&&q._bufferedEnd!=c.percentage){q.networkState=100==c.percentage?1:2;(isNaN(q.duration)||5<c.percentage&&25>c.percentage||100===c.percentage)&&d(q,c);if(q.ended)q.ended=
!1;if(q.duration){2<c.percentage&&20>c.percentage?a(3,q):20<c.percentage&&a(4,q);if(q._bufferedEnd&&q._bufferedEnd>c.percentage)q._bufferedStart=q.currentTime||0;q._bufferedEnd=c.percentage;q.buffered.length=1;if(100==c.percentage)q.networkState=1,a(4,q);b.event.trigger("progress",p,q._elem,!0)}}},META:function(b,c){if(c=c&&c.networkState?c:v(b.id))if("duration"in b){if(!c._metadata||!((!b.height||c.videoHeight==b.height)&&b.duration===c.duration)){c._metadata=!0;var d=c.duration;if(b.duration)c.duration=
b.duration;c._lastDuration=c.duration;if(b.height||b.width)c.videoHeight=b.height||0,c.videoWidth=b.width||0;if(!c.networkState)c.networkState=2;1>c.readyState&&a(1,c);c.duration&&d!==c.duration&&m(c._elem,"durationchange");m(c._elem,"loadedmetadata")}}else c._callMeta=!0},TIME:function(b){var c=v(b.id);if(c&&c.currentTime!==b.position){c.currentTime=b.position;c.duration&&c.duration<c.currentTime&&d(c,b);2>c.readyState&&a(2,c);if(c.ended)c.ended=!1;m(c._elem,"timeupdate")}},STATE:function(b){var c=
v(b.id);if(c)switch(b.newstate){case "BUFFERING":if(c.ended)c.ended=!1;a(1,c);m(c._elem,"waiting");break;case "PLAYING":c.paused=!1;c._ppFlag=!0;c.duration||d(c,b);3>c.readyState&&a(3,c);if(c.ended)c.ended=!1;m(c._elem,"playing");break;case "PAUSED":if(!c.paused&&!c.stopPlayPause)c.paused=!0,c._ppFlag=!0,m(c._elem,"pause");break;case "COMPLETED":4>c.readyState&&a(4,c),c.ended=!0,m(c._elem,"ended")}}},Controller:{ERROR:function(b){var a=v(b.id);a&&l.setError(a._elem,b.message)},SEEK:function(b){var a=
v(b.id);if(a){if(a.ended)a.ended=!1;if(a.paused)try{a.jwapi.sendEvent("play","false")}catch(c){}if(a.currentTime!=b.position)a.currentTime=b.position,m(a._elem,"timeupdate")}},VOLUME:function(b){var a=v(b.id);if(a&&(b=b.percentage/100,a.volume!=b))a.volume=b,m(a._elem,"volumechange")},MUTE:function(b){if(!b.state){var a=v(b.id);if(a&&a.muted!=b.state)a.muted=b.state,m(a._elem,"volumechange")}}}};var c=function(a){var c=!0;b.each(l.jwEvents,function(d,e){b.each(e,function(b){try{a.jwapi["add"+d+"Listener"](b,
"jQuery.webshims.mediaelement.jwEvents."+d+"."+b)}catch(e){return c=!1}})});return c},f=function(b){var a=b.actionQueue.length,c=0,d;if(a&&"third"==b.isActive)for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[]},r=function(a){a&&(a._ppFlag===p&&b.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===p||!a.paused))try{b(a._elem).play()}catch(c){}},1)},y=function(a){if(a&&
"video"==a._elemNodeName){var c,d,e,f,h,B,i,k,g=function(g,j){if(j&&g&&!(1>j||1>g||"third"!=a.isActive))if(c&&(c.remove(),c=!1),f=g,h=j,clearTimeout(i),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){B=B||b(a._elem).getShadowElement();var l;d&&!e?(l=B.height(),g*=l/j,j=l):!d&&e&&(l=B.width(),j*=l/g,g=l);k=!0;setTimeout(function(){k=!1},9);B.css({width:g,height:j})}},j=function(){if(!("third"!=a.isActive||b.prop(a._elem,"readyState")&&b.prop(this,"videoWidth"))){var f=b.prop(a._elem,
"poster");if(f&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))c&&(c.remove(),c=!1),c=b('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(i);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||a.offsetHeight;e&&d?(g(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;
g(d,e);c&&(c.remove(),c=!1);a=null},9);b(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||this.error?b(this).triggerHandler("alreadycomplete"):(clearTimeout(i),i=setTimeout(function(){b(a._elem).triggerHandler("error")},9999))})}};b(a._elem).bind("loadedmetadata",function(){g(b.prop(this,"videoWidth"),b.prop(this,"videoHeight"))}).bind("emptied",j).bind("swfstageresize updatemediaelementdimensions",function(){k||g(f,h)}).bind("emptied",function(){f=void 0;h=void 0}).triggerHandler("swfstageresize");
j();b.prop(a._elem,"readyState")&&g(b.prop(a._elem,"videoWidth"),b.prop(a._elem,"videoHeight"))}};l.playerResize=function(a){a&&(a=n.getElementById(a.replace(C,"")))&&b(a).triggerHandler("swfstageresize")};b(n).bind("emptied",function(b){b=h(b.target);r(b)});var k;l.jwPlayerReady=function(a){var d=v(a.id),H=0,h=function(){if(!(9<H))if(H++,c(d)){if(d.wasSwfReady)b(d._elem).mediaLoad();else{var g=parseFloat(a.version,10);(5.6>g||6<=g)&&e.warn("mediaelement-swf is only testet with jwplayer 5.6+")}d.wasSwfReady=
!0;d.tryedReframeing=0;f(d);r(d)}else clearTimeout(d.reframeTimer),d.reframeTimer=setTimeout(h,9*H),2<H&&9>d.tryedReframeing&&(d.tryedReframeing++,d.shadowElem.css({overflow:"visible"}),setTimeout(function(){d.shadowElem.css({overflow:"hidden"})},16))};if(d&&d.jwapi){if(!d.tryedReframeing)d.tryedReframeing=0;clearTimeout(k);d.jwData=a;d.shadowElem.removeClass("flashblocker-assumed");b.prop(d._elem,"volume",d.volume);b.prop(d._elem,"muted",d.muted);h()}};var s=b.noop;if(o){var A={play:1,playing:1},
D="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),J=D.map(function(b){return b+".webshimspolyfill"}).join(" "),K=function(a){var c=e.data(a.target,"mediaelement");c&&(a.originalEvent&&a.originalEvent.type===a.type)==("third"==c.activating)&&(a.stopImmediatePropagation(),A[a.type]&&c.isActive!=c.activating&&b(a.target).pause())},s=function(a){b(a).unbind(J).bind(J,K);D.forEach(function(b){e.moveToFirstEvent(a,b)})};s(n)}l.setActive=function(a,c,
d){d||(d=e.data(a,"mediaelement"));if(d&&d.isActive!=c){"html5"!=c&&"third"!=c&&e.warn("wrong type for mediaelement activating: "+c);var f=e.data(a,"shadowData");d.activating=c;b(a).pause();d.isActive=c;"third"==c?(f.shadowElement=f.shadowFocusElement=d.shadowElem[0],b(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(b(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1);b(a).trigger("mediaelementapichange")}};
var L=function(){var b="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),c=b.length;return function(d){if(d){var e=c,f=d.networkState;for(a(0,d);--e;)delete d[b[e]];d.actionQueue=[];d.buffered.length=0;f&&m(d._elem,"emptied")}}}(),I=function(a,c){var d=a._elem,e=a.shadowElem;b(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||
b(d).width(),height:d.style.height||b(d).height()})};l.createSWF=function(a,c,d){if(u){1>z?z=1:z++;var f=b.extend({},t.jwVars,{image:b.prop(a,"poster")||"",file:c.srcProp}),h=b(a).data("jwvars")||{};d||(d=e.data(a,"mediaelement"));if(d&&d.swfCreated)l.setActive(a,"third",d),L(d),d.currentSrc=c.srcProp,b.extend(f,h),t.changeJW(f,a,c,d,"load"),F(a,"sendEvent",["LOAD",f]);else{var g=b.prop(a,"controls"),B="jwplayer-"+e.getID(a),i=b.extend({},t.jwParams,b(a).data("jwparams")),j=a.nodeName.toLowerCase(),
n=b.extend({},t.jwAttrs,{name:B,id:B},b(a).data("jwattrs")),m=b('<div class="polyfill-'+j+' polyfill-mediaelement" id="wrapper-'+B+'"><div id="'+B+'"></div>').css({position:"relative",overflow:"hidden"}),d=e.data(a,"mediaelement",e.objectCreate(G,{actionQueue:{value:[]},shadowElem:{value:m},_elemNodeName:{value:j},_elem:{value:a},currentSrc:{value:c.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=d.buffered.length)e.error("buffered index size error");else return 0},end:function(a){if(a>=
d.buffered.length)e.error("buffered index size error");else return(d.duration-d._bufferedStart)*d._bufferedEnd/100+d._bufferedStart},length:0}}}));I(d,g);m.insertBefore(a);o&&b.extend(d,{volume:b.prop(a,"volume"),muted:b.prop(a,"muted")});b.extend(f,{id:B,controlbar:g?t.jwVars.controlbar||("video"==j?"over":"bottom"):"video"==j?"none":"bottom",icons:""+(g&&"video"==j)},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});f.plugins=f.plugins?f.plugins+(","+E):E;e.addShadowDom(a,m);s(a);l.setActive(a,
"third",d);t.changeJW(f,a,c,d,"embed");b(a).bind("updatemediaelementdimensions updateshadowdom",function(){I(d,b.prop(a,"controls"))});y(d);x.embedSWF(w,B,"100%","100%","9.0.0",!1,f,i,n,function(c){if(c.success)d.jwapi=c.ref,g||b(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&m[0].parentNode||"none"==c.ref.style.display)m.addClass("flashblocker-assumed"),b(a).trigger("flashblocker"),e.warn("flashblocker assumed");b(c.ref).css({minHeight:"2px",minWidth:"2px",
display:"block"})},9),k||(clearTimeout(k),k=setTimeout(function(){var a=b(c.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&0===location.protocol.indexOf("file:")?e.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>a[0].offsetWidth||2>a[0].offsetHeight)&&e.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){b(a).mediaLoad()},
1)};var F=function(a,b,c,d){return(d=d||h(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var c={},d,f=function(b){"audio"==a&&("videoHeight"==b||"videoWidth"==b)||(c[b]={get:function(){var a=h(this);return a?a[b]:o&&d[b].prop._supget?d[b].prop._supget.apply(this):G[b]},writeable:!1})},g=function(a,b){f(a);delete c[a].writeable;
c[a].set=b};g("volume",function(a){var b=h(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(0>a||100<a)&&e.error("volume greater or less than allowed "+a/100);F(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(f){}a/=100;if(!(b.volume==a||"third"!=b.isActive))b.volume=a,m(b._elem,"volumechange")}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});g("muted",function(a){var b=h(this);if(b){if(a=!!a,F(this,"sendEvent",["mute",""+a],b),!(b.muted==
a||"third"!=b.isActive))b.muted=a,m(b._elem,"volumechange")}else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});g("currentTime",function(a){var b=h(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);F(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,m(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,
arguments)});["play","pause"].forEach(function(a){c[a]={value:function(){var b=h(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),F(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=!0,b.paused!=("play"!=a)))b.paused="play"!=a,m(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});j.forEach(f);e.onNodeNamesPropertyModify(a,"controls",function(c,d){var f=h(this);b(this)[d?"addClass":"removeClass"]("webshims-controls");
if(f){try{F(this,d?"showControls":"hideControls",[a],f)}catch(g){e.warn("you need to generate a crossdomain.xml")}"audio"==a&&I(f,d);b(f.jwapi).attr("tabindex",d?"0":"-1")}});d=e.defineNodeNameProperties(a,c,"prop")});if(u){var M=b.cleanData,N=b.browser.msie&&9>e.browserVersion,O={object:1,OBJECT:1};b.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&z)for(b=0;b<c;b++)if(O[a[b].nodeName]){if("sendEvent"in a[b]){z--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])"function"==typeof a[b][d]&&
(a[b][d]=null)}catch(f){}}return M.apply(this,arguments)}}o||(["poster","src"].forEach(function(a){e.defineNodeNameProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(a){e.defineNodeNamesBooleanProperty(["audio","video"],a)}),e.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},
NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});
