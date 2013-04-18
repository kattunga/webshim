jQuery.webshims.register("mediaelement-swf",function(e,t,i,n,a,r){"use strict";var o="sendEvent",s=t.mediaelement,u=i.swfmini,l=Modernizr.audio&&Modernizr.video,p=u.hasFlashPlayerVersion("9.0.115"),d=0,c={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},h=Object.keys(c),m={currentTime:0,volume:1,muted:!1};Object.keys(m);var f=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:a},c,m),v=/^jwplayer-/,g=function(e){var i=n.getElementById(e.replace(v,""));if(i){var a=t.data(i,"mediaelement");return"third"==a.isActive?a:null}},y=function(e){try{e.nodeName}catch(i){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},b=function(t,i){i=e.Event(i),i.preventDefault(),e.event.trigger(i,a,t)},w=r.playerPath||t.cfg.basePath+"jwplayer/"+(r.playerName||"player.swf"),x=r.pluginPath||t.cfg.basePath+"swf/jwwebshims.swf";t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"}),t.extendUNDEFProp(r.vars,{screencolor:"ffffffff"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var T=function(t,i){var n=t.duration;if(!(n&&t._durationCalcs>0)){try{t.duration=t.jwapi.getPlaylist()[0].duration,(!t.duration||0>=t.duration||t.duration===t._lastDuration)&&(t.duration=n)}catch(a){}t.duration&&t.duration!=t._lastDuration?(b(t._elem,"durationchange"),("audio"==t._elemNodeName||t._callMeta)&&s.jwEvents.Model.META(e.extend({duration:t.duration},i),t),t._durationCalcs--):t._durationCalcs++}},N=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,b(t._elem,"canplay"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){N(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,b(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),s.jwEvents={View:{PLAY:function(e){var t=g(e.id);t&&!t.stopPlayPause&&(t._ppFlag=!0,t.paused==e.state&&(t.paused=!e.state,t.ended&&(t.ended=!1),b(t._elem,e.state?"play":"pause")))}},Model:{BUFFER:function(t){var i=g(t.id);i&&"percentage"in t&&i._bufferedEnd!=t.percentage&&(i.networkState=100==t.percentage?1:2,(isNaN(i.duration)||t.percentage>5&&25>t.percentage||100===t.percentage)&&T(i,t),i.ended&&(i.ended=!1),i.duration&&(t.percentage>2&&20>t.percentage?N(3,i):t.percentage>20&&N(4,i),i._bufferedEnd&&i._bufferedEnd>t.percentage&&(i._bufferedStart=i.currentTime||0),i._bufferedEnd=t.percentage,i.buffered.length=1,100==t.percentage&&(i.networkState=1,N(4,i)),e.event.trigger("progress",a,i._elem,!0)))},META:function(e,t){if(t=t&&t.networkState?t:g(e.id)){if(!("duration"in e))return t._callMeta=!0,a;if(!t._metadata||e.height&&t.videoHeight!=e.height||e.duration!==t.duration){t._metadata=!0;var i=t.duration;e.duration&&(t.duration=e.duration),t._lastDuration=t.duration,(e.height||e.width)&&(t.videoHeight=e.height||0,t.videoWidth=e.width||0),t.networkState||(t.networkState=2),1>t.readyState&&N(1,t),t.duration&&i!==t.duration&&b(t._elem,"durationchange"),b(t._elem,"loadedmetadata")}}},TIME:function(e){var t=g(e.id);t&&t.currentTime!==e.position&&(t.currentTime=e.position,t.duration&&t.duration<t.currentTime&&T(t,e),2>t.readyState&&N(2,t),t.ended&&(t.ended=!1),b(t._elem,"timeupdate"))},STATE:function(e){var t=g(e.id);if(t)switch(e.newstate){case"BUFFERING":t.ended&&(t.ended=!1),N(1,t),b(t._elem,"waiting");break;case"PLAYING":t.paused=!1,t._ppFlag=!0,t.duration||T(t,e),3>t.readyState&&N(3,t),t.ended&&(t.ended=!1),b(t._elem,"playing");break;case"PAUSED":t.paused||t.stopPlayPause||(t.paused=!0,t._ppFlag=!0,b(t._elem,"pause"));break;case"COMPLETED":4>t.readyState&&N(4,t),t.ended=!0,b(t._elem,"ended")}}},Controller:{ERROR:function(e){var t=g(e.id);t&&s.setError(t._elem,e.message)},SEEK:function(e){var t=g(e.id);if(t){if(t.ended&&(t.ended=!1),t.paused)try{t.jwapi[o]("play","false")}catch(i){}t.currentTime!=e.position&&(t.currentTime=e.position,b(t._elem,"timeupdate"))}},VOLUME:function(e){var t=g(e.id);if(t){var i=e.percentage/100;t.volume!=i&&(t.volume=i,b(t._elem,"volumechange"))}},MUTE:function(e){if(!e.state){var t=g(e.id);t&&t.muted!=e.state&&(t.muted=e.state,b(t._elem,"volumechange"))}}}};var E=function(t){var i=!0;return e.each(s.jwEvents,function(n,a){e.each(a,function(e){try{t.jwapi["add"+n+"Listener"](e,"jQuery.webshims.mediaelement.jwEvents."+n+"."+e)}catch(a){return i=!1,!1}})}),i},k=function(e){var t,i=e.actionQueue.length,n=0;if(i&&"third"==e.isActive)for(;e.actionQueue.length&&i>n;)n++,t=e.actionQueue.shift(),e.jwapi[t.fn].apply(e.jwapi,t.args);e.actionQueue.length&&(e.actionQueue=[])},A=function(t){t&&(t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play()}catch(i){}},1)};s.playerResize=function(t){if(t){var i=n.getElementById(t.replace(v,""));i&&e(i).triggerHandler("swfstageresize"),i=null}},e(n).on("emptied",function(e){var t=y(e.target);A(t)});var S;s.jwPlayerReady=function(i){var n=g(i.id),a=0,r=function(){if(!(a>9))if(a++,E(n)){if(n.wasSwfReady)e(n._elem).mediaLoad();else{var o=parseFloat(i.version,10);(5.1>o||o>=6)&&t.warn("mediaelement-swf is only testet with jwplayer 5.6+")}n.wasSwfReady=!0,n.tryedReframeing=0,k(n),A(n)}else clearTimeout(n.reframeTimer),n.reframeTimer=setTimeout(r,9*a),a>2&&9>n.tryedReframeing&&(n.tryedReframeing++,n.shadowElem.css({overflow:"visible"}),setTimeout(function(){n.shadowElem.css({overflow:"hidden"})},16))};n&&n.jwapi&&(n.tryedReframeing||(n.tryedReframeing=0),clearTimeout(S),n.jwData=i,n.shadowElem.removeClass("flashblocker-assumed"),e.prop(n._elem,"volume",n.volume),e.prop(n._elem,"muted",n.muted),r())};var C=e.noop;if(l){var D={play:1,playing:1},M=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],F=M.map(function(e){return e+".webshimspolyfill"}).join(" "),I=function(i){var n=t.data(i.target,"mediaelement");if(n){var a=i.originalEvent&&i.originalEvent.type===i.type;a==("third"==n.activating)&&(i.stopImmediatePropagation(),D[i.type]&&n.isActive!=n.activating&&e(i.target).pause())}};C=function(i){e(i).off(F).on(F,I),M.forEach(function(e){t.moveToFirstEvent(i,e)})},C(n)}s.setActive=function(i,n,a){if(a||(a=t.data(i,"mediaelement")),a&&a.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var r=t.data(i,"shadowData");a.activating=n,e(i).pause(),a.isActive=n,"third"==n?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(i).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(i).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(i).trigger("mediaelementapichange")}};var _=function(){var e=["_bufferedEnd","_bufferedStart","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta","_durationCalcs"],t=e.length;return function(i){if(i){var n=t,a=i.networkState;for(N(0,i);--n;)delete i[e[n]];i.actionQueue=[],i.buffered.length=0,a&&b(i._elem,"emptied")}}}(),P=function(t,i){var n=t._elem,a=t.shadowElem;e(n)[i?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||i?a.css({width:n.style.width||e(n).width(),height:n.style.height||e(n).height()}):a.css({width:0,height:0})};s.createSWF=function(i,c,h){if(!p)return setTimeout(function(){e(i).mediaLoad()},1),a;1>d?d=1:d++;var m=e.extend({},r.vars,{image:encodeURIComponent(e.attr(i,"poster")&&e.prop(i,"poster")||""),file:encodeURIComponent(c.streamId||c.srcProp)}),v=e(i).data("vars")||{};if(c.server&&(m.streamer=encodeURIComponent(c.server)),h||(h=t.data(i,"mediaelement")),h&&h.swfCreated)return s.setActive(i,"third",h),_(h),h.currentSrc=c.srcProp,e.extend(m,v),r.changeSWF(m,i,c,h,"load"),O(i,o,["LOAD",m]),a;var g=e.prop(i,"controls"),y="jwplayer-"+t.getID(i),b=e.extend({},r.params,e(i).data("params")),T=i.nodeName.toLowerCase(),N=e.extend({},r.attrs,{name:y,id:y},e(i).data("attrs")),E=e('<div class="polyfill-'+T+' polyfill-mediaelement" id="wrapper-'+y+'"><div id="'+y+'"></div>').css({position:"relative",overflow:"hidden"}),k=function(){P(h,e.prop(i,"controls"))};h=t.data(i,"mediaelement",t.objectCreate(f,{actionQueue:{value:[]},shadowElem:{value:E},_elemNodeName:{value:T},_elem:{value:i},currentSrc:{value:c.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(e){return e>=h.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=h.buffered.length?(t.error("buffered index size error"),a):(h.duration-h._bufferedStart)*h._bufferedEnd/100+h._bufferedStart},length:0}}})),P(h,g),E.insertBefore(i),l&&e.extend(h,{volume:e.prop(i,"volume"),muted:e.prop(i,"muted")}),e.extend(m,{id:y,controlbar:g?r.vars.controlbar||("video"==T?"over":"bottom"):"video"==T?"none":"bottom",icons:""+(g&&"video"==T)},v,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"}),m.plugins?m.plugins+=","+x:m.plugins=x,t.addShadowDom(i,E),C(i),s.setActive(i,"third",h),r.changeSWF(m,i,c,h,"embed"),e(i).on("updatemediaelementdimensions",k),e(n).on("updateshadowdom",k),u.embedSWF(w,y,"100%","100%","9.0.0",!1,m,b,N,function(n){n.success&&(h.jwapi=n.ref,g||e(n.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){(!n.ref.parentNode&&E[0].parentNode||"none"==n.ref.style.display)&&(E.addClass("flashblocker-assumed"),e(i).trigger("flashblocker"),t.warn("flashblocker assumed")),e(n.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),S||(clearTimeout(S),S=setTimeout(function(){var i=e(n.ref);i[0].offsetWidth>1&&i[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>i[0].offsetWidth||2>i[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),i=null},8e3)))})};var O=function(e,t,i,n){return n=n||y(e),n?(n.jwapi&&n.jwapi[t]?n.jwapi[t].apply(n.jwapi,i||[]):(n.actionQueue.push({fn:t,args:i}),n.actionQueue.length>10&&setTimeout(function(){n.actionQueue.length>5&&n.actionQueue.shift()},99)),n):!1};if(["audio","video"].forEach(function(i){var n,a={},r=function(e){("audio"!=i||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=y(this);return t?t[e]:l&&n[e].prop._supget?n[e].prop._supget.apply(this):f[e]},writeable:!1})},s=function(e,t){r(e),delete a[e].writeable,a[e].set=t};s("volume",function(e){var i=y(this);if(i){if(e*=100,!isNaN(e)){var a=i.muted;if((0>e||e>100)&&t.error("volume greater or less than allowed "+e/100),O(this,o,["VOLUME",e],i),a)try{i.jwapi.sendEvent("mute","true")}catch(r){}if(e/=100,i.volume==e||"third"!=i.isActive)return;i.volume=e,b(i._elem,"volumechange"),i=null}}else if(n.volume.prop._supset)return n.volume.prop._supset.apply(this,arguments)}),s("muted",function(e){var t=y(this);if(t){if(e=!!e,O(this,o,["mute",""+e],t),t.muted==e||"third"!=t.isActive)return;t.muted=e,b(t._elem,"volumechange"),t=null}else if(n.muted.prop._supset)return n.muted.prop._supset.apply(this,arguments)}),s("currentTime",function(e){var t=y(this);if(t){if(e*=1,!isNaN(e)&&(t.paused&&(clearTimeout(t.stopPlayPause),t.stopPlayPause=setTimeout(function(){t.paused=!0,t.stopPlayPause=!1},50)),O(this,o,["SEEK",""+e],t),t.paused)){t.readyState>0&&(t.currentTime=e,b(t._elem,"timeupdate"));try{t.jwapi[o]("play","false")}catch(i){}}}else if(n.currentTime.prop._supset)return n.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=y(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),O(this,o,["play","play"==e],t),setTimeout(function(){"third"==t.isActive&&(t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,b(t._elem,e)))},1);else if(n[e].prop._supvalue)return n[e].prop._supvalue.apply(this,arguments)}}}),h.forEach(r),t.onNodeNamesPropertyModify(i,"controls",function(n,a){var r=y(this);if(e(this)[a?"addClass":"removeClass"]("webshims-controls"),r){try{O(this,a?"showControls":"hideControls",[i],r)}catch(o){t.warn("you need to generate a crossdomain.xml")}"audio"==i&&P(r,a),e(r.jwapi).attr("tabindex",a?"0":"-1")}}),n=t.defineNodeNameProperties(i,a,"prop")}),p&&e.cleanData){var L=e.cleanData,j={object:1,OBJECT:1};e.cleanData=function(e){var t,i;if(e&&(i=e.length)&&d)for(t=0;i>t;t++)if(j[e[t].nodeName]&&o in e[t]){d--;try{e[t][o]("play",!1)}catch(n){}}return L.apply(this,arguments)}}l||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});