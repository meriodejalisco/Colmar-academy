if (self.CavalryLogger) { CavalryLogger.start_js(["va9Nw"]); }

__d("CustomAudienceSharingCapabilities",[],(function a(b,c,d,e,f,g){f.exports={USE_FOR_ADS:"USE_FOR_ADS",USE_FOR_INSIGHTS:"USE_FOR_INSIGHTS"}}),null);
__d("FantaReducersGetMessages",["AsyncRequest","FantaGetMessageActions","FantaTabActions","FantaTypeJoinableThread","immutable","ImmutableObject","MercuryIDs","MercuryLogMessageType","MercuryMessageStore","MercuryThreadActions","MercuryThreads","TimeSlice","UserActivity","XMNCommercePageNullStateCTAController","getPageIDFromThreadID","gkx","setImmediate"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("MercuryThreadActions").get(),i=c("MercuryThreads").get(),j=c("FantaTabActions").Types,k=c("FantaGetMessageActions").Types,l={},m={};function n(I,J){switch(J.type){case j.OPEN_TAB:case k.CLEAR_PARTICIPANTS:I=y(I,J.tabID);break}return I}function o(I,J){switch(J.type){case j.OPEN_TAB_WITH_INTERSTITIAL_DATA:I=z(I,J.interstitialData);break}return I}function p(I,J){switch(J.type){case j.REPLACE_TAB:I=y(I,J.newTabID);break}return I}function q(I,J){__p&&__p();switch(J.type){case k.CLEAR_PREVIEW:var K=J.tabID,L=J.tokens,M=I.mercury.tabContents.get(K);if(!M)return I;var N=L.map(function(O){var P=O.info.uid;if(c("MercuryIDs").isValid(P))return P;return c("MercuryIDs").getParticipantIDFromUserID(P)});M.messageStore&&M.messageStore.destroy();I=I.mergeIn(["mercury","tabContents",K],{messages:c("immutable").List(),hasFetchedAll:false,messageStore:null,threadPreviewID:null,threadPreviewRecipients:c("immutable").List(N)});i.getThreadMeta(K,function(O){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadPreviewResponse(K,O)})});break}return I}function r(I,J){switch(J.type){case k.ADD_PARTICIPANTS:I=u(I,J.tabID,J.previewTabID);break}return I}function s(I,J){__p&&__p();switch(J.type){case j.LOAD_FROM_DATA:var K=I.tabGroup,L=J.tabData,M=L.interstitialData;if(K.updatedTime>=L.updatedTime||L.updatedTime===undefined){for(var N=I.tabGroup.tabs.keys(),O=Array.isArray(N),P=0,N=O?N:N[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var Q;if(O){if(P>=N.length)break;Q=N[P++]}else{P=N.next();if(P.done)break;Q=P.value}var R=Q,S=I.mercury.tabContents.get(R).messageStore;if(!S){var T=c("MercuryIDs").getThreadFBIDFromThreadID(R);if(M&&M[T]){M[T].threadID=R;I=z(I,M[T])}else I=y(I,R)}}return I}else for(var U=I.tabGroup.tabs.keys(),V=Array.isArray(U),W=0,U=V?U:U[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var X;if(V){if(W>=U.length)break;X=U[W++]}else{W=U.next();if(W.done)break;X=W.value}var Y=X,Z=c("MercuryIDs").getThreadFBIDFromThreadID(Y);if(M&&M[Z]){M[Z].threadID=Y;I=z(I,M[Z])}else I=y(I,Y)}break}return I}function t(I,J){switch(J.type){case k.FETCH_MORE_MESSAGES:var K=J.threadID,L=I.mercury.tabContents.get(K).messageStore;if(L&&!m[K]){m[K]=true;L.fetchMoreMessages()}break}return I}function u(I,J,K){i.getThreadMeta(K,function(L){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadPreviewResponse(J,L)})});return I}function v(I,J){switch(J.type){case k.ON_GET_THREAD_PREVIEW_RESPONSE:var K=J.tabID,L=J.thread;return w(I,K,L)}return I}function w(I,J,K){__p&&__p();var L=K.thread_id,M=new(c("MercuryMessageStore"))(L),N=I.mercury.tabContents.get(J);if(m[L]||!N)return I;m[L]=true;N&&N.messageStore&&N.messageStore.destroy();I=I.mergeIn(["mercury","tabContents",J],{thread:K,messageStore:M});var O=setTimeout(function(){m[L]=false;c("FantaGetMessageActions").onShowContextBannerTimer(J)},6e3);M.subscribe(function(P){m[L]=false;var Q=P.messages&&P.messages[0];if(Q&&Q.log_message_type&&Q.log_message_type===c("MercuryLogMessageType").SERVER_ERROR&&N.messages.size===0)M.fetchMoreMessages();else{clearTimeout(O);c("setImmediate")(function(){c("FantaGetMessageActions").onMessageStoreResponse(P.messages,J)})}});return I}function x(I,J){switch(J.type){case k.REFRESH_THREAD:return y(I,J.threadID)}return I}function y(I,J){__p&&__p();if(!l[J]){var K=c("getPageIDFromThreadID")(J);if(K){var L=c("XMNCommercePageNullStateCTAController").getURIBuilder();new(c("AsyncRequest"))().setURI(L.getURI()).setMethod("POST").setData({page_id:K}).setHandler(function(M){if(M&&M.payload)c("FantaGetMessageActions").onPageNullResponse(J,M.payload)}).send()}l[J]=true;i.getThreadMeta(J,function(M){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadResponse(M)})})}return I}function z(I,J){var K=new(c("FantaTypeJoinableThread"))(J),L=J.threadID,M=L&&I.mercury.tabContents.get(L);if(M)I=I.mergeIn(["mercury","tabContents",L],{joinableInterstitialData:K});return I}function A(I,J){switch(J.type){case k.ON_PAGE_NULL_RESPONSE:var K=J.threadID,L=J.nullStateCTA;if(I.mercury.tabContents.get(K))I=I.mergeIn(["mercury","tabContents",K],{nullStateCTA:new(c("ImmutableObject"))(L)});break}return I}function B(I,J){switch(J.type){case k.ON_GET_THREAD_RESPONSE:var K=J.thread;I=C(I,K);break}return I}function C(I,J){__p&&__p();var K=J.thread_id;l[K]=false;var L=I.mercury.tabContents.get(K);if(!L)return I;var M=L.messageStore;if(!M)I=w(I,K,J);else I=I.mergeIn(["mercury","tabContents",K],{thread:J});return I}function D(I,J){switch(J.type){case k.THREADS_UPDATED:J.threads.forEach(function(K){I=C(I,new(c("ImmutableObject"))(K))})}return I}function E(I,J){switch(J.type){case k.ON_MESSAGE_STORE_RESPONSE:var K=J.messages,L=J.tabID,M=I.mercury.tabContents.get(L),N=M&&M.messageStore;if(N){var O=N.hasFetchedAll();I=I.mergeIn(["mercury","tabContents",L],{hasFetchedAll:O,messages:c("immutable").List(K)})}break}return I}function F(I,J){switch(J.type){case k.ON_SHOW_CONTEXT_BANNER_TIMER:if(!I.mercury.tabContents.get(J.threadID))return I;I=I.mergeIn(["mercury","tabContents",J.threadID],{showContextBanner:true});break}return I}function G(I,J){__p&&__p();switch(J.type){case j.CLOSE_AND_TAB_NEXT:case j.FOCUS_NEXT_TAB:case j.FOCUS_PREVIOUS_TAB:case j.FOCUS_TAB:case j.SCROLL_BOTTOM_CHANGED:case j.UNMINIMIZE_TAB:case k.ON_GET_THREAD_RESPONSE:case k.ON_MESSAGE_STORE_RESPONSE:case k.REFRESH_THREAD:case k.THREADS_UPDATED:var K=I.tabGroup.focusedTabID;if(K){var L=I.tabGroup.tabs.get(K);if(L&&!L.isMinimized&&c("UserActivity").isOnTab()&&c("UserActivity").isActive()){var M=I.mercury.tabContents.get(K);if(M&&M.isScrolledToBottom)H(K)}}break}return I}function H(I){var J=function J(){h.markSeen(I);h.markRead(I)};if(c("gkx")("AT45Q0YAtTF77a1x8ZT9-rWfsF83gTI5tMuldZujY0KaNI6icTW09jBEE5BSuvPKdZtVIIdleK4appEhrvQPrVOyhvdXTeLDSdYEXUe9KmbS3Q"))c("TimeSlice").guard(J,"superfluous request to first open DD",{isContinuation:false})();else J()}f.exports={addParticipants:r,clearPreview:q,fetchMoreMessages:t,loadFromData:s,onFocusChange:G,onGetThreadPreviewResponse:v,onGetThreadResponse:B,onMessageStoreResponse:E,onPageNullResponse:A,onShowContextBannerTimer:F,openInterstitialTab:o,openTab:n,refreshThread:x,replaceTab:p,threadsUpdated:D}}),null);