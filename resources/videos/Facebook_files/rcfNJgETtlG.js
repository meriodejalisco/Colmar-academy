if (self.CavalryLogger) { CavalryLogger.start_js(["7dL4F"]); }

__d("FantaReducersSendMessages",["AsyncRequest","Bootloader","ChatTabViewEvents","EmojiLikeUtils","EmojiState","FantaMessageActions","FantaTabActions","FantaTypeFileUploader","FantaTypeSharePreview","FantaTypeTabContents","MercuryAPIArgsSource","mercuryBlockedParticipantsRe","MercuryIDs","MercuryLogMessageType","MercuryMessageActions","MercuryMessageObject","MercuryParticipants","MercurySheetPolicy","MercurySourceType","MercuryThreadActions","MercuryThreadIDMap","MercuryThreadInfo","MercuryThreads","MessageRequestUtils","MessengerAdminGroupUtils","MessengerEmojiUsageUtils","messengerUploadFilesUtilRe","MultiChatController","SiteData","XMessagingSetThreadStateController","getPageIDFromThreadID","setImmediate"],(function a(aa,b,ba,ca,c,da){"use strict";__p&&__p();var d=b("mercuryBlockedParticipantsRe").get(),e=b("MercuryMessageActions").get(),f=b("MercuryMessageObject").get(),g=b("MercuryThreadActions").get(),h=b("MercuryThreadIDMap").get(),i=b("MercuryThreads").get(),j=b("FantaMessageActions").Types,k=/^\s*$/,l="/ajax/chat/multichat/name_conversation/dismiss.php";function m(u,v){__p&&__p();switch(v.type){case j.UPDATE_GROUP_NAME:var w=v.threadID,x=v.newName,y=u.mercury.tabContents.get(w);if(!y)return u;var z=y.thread;if(!z)return u;var A=z.name,B=b("MessengerAdminGroupUtils").isJoinableThread(z);if((x||A)&&x!==A)if(!B)e.send(f.constructLogMessageObject(b("MercurySourceType").CHAT_WEB,w,b("MercuryLogMessageType").THREAD_NAME,{name:x}),null,b("MercuryAPIArgsSource").CHAT);else h.getServerIDFromClientID(w,function(C){var D=b("XMessagingSetThreadStateController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(D).setData({thread_id:C,thread_name:x}).send()});h.getServerIDFromClientID(w,function(C){new(b("AsyncRequest"))(l).setData({thread_fbid:C}).send()});u=u.mergeIn(["mercury","tabContents",w],{openSheet:null})}return u}function n(u,v){__p&&__p();switch(v.type){case j.SEND_GROUP_MESSAGE:var w=v.threadID,x=u.mercury.tabContents.get(w),y=x.thread,z=x.typeahead;if(!z||!y)return u;var A=b("MercuryIDs").isLocalThread(w),B=z.getSelectedParticipantIDs();if(y.is_canonical_user||A){var C=y.participants;b("setImmediate")(function(){return b("MultiChatController").createThreadForTokens(C.concat(B))})}else{var D=b("MessengerAdminGroupUtils").shouldInvite(y);if(D)B.forEach(function(F){var G=b("MercuryIDs").getThreadIDFromParticipantID(F);if(G)e.send(f.constructUserGeneratedMessageObject(y.joinable_mode.link,b("MercurySourceType").CHAT_WEB,G))});else e.send(f.constructLogMessageObject(b("MercurySourceType").CHAT_WEB,w,b("MercuryLogMessageType").SUBSCRIBE,{added_participants:B}))}var E=v.tabID||v.threadID;u=u.mergeIn(["mercury","tabContents",E],{typeahead:null})}return u}function o(u,v){__p&&__p();var w,x;switch(v.type){case j.SEND_HOT_LIKE:case j.SEND_MESSAGE:case j.SEND_PHOTO:case j.SEND_STICKER:var y=v.message,z=v.threadID,A=y?y.mentions:null;if(y)y=y.message;var B=u.tabGroup.tabs.get(v.threadID),C=B&&B.entryPoint||null;if(Array.isArray(C))C=C[0];switch(C){case"compose_link":C="chat_sidebar_new_message";break;case"jewel_new_message":C="jewel_new_message";break;case"created_locally_from_tokens":C="one_to_one_plus";break}var D=v.emoji,E=v.onSendSuccess,F=v.photoData,G=v.size,H=v.source,I=v.stickerID,J=u.mercury.tabContents.get(z),K=J.fileUploader,L=J.sharePreview,M=J.signatureID,N=J.threadPreviewID,O=J.threadPreviewRecipients;z=N||z;var P=J.thread,Q=!!(!y&&D&&G),R=!!(!y&&I),S=i.isEmptyLocalThread(z);if(Q)y=D;else if(R||F)y="";var T=P&&P.is_canonical&&!b("MercuryThreadInfo").canReply(P),U=!!(L.params&&L.type);if(p(K,L))u=u.mergeIn(["mercury","tabContents",z],{openSheet:b("MercurySheetPolicy").sheets.ChatUploadWarningTabSheet});else if(T&&P)q(P);else if(!k.test(y)||K.uploadedFiles.size>0||U||R||F){var V=b("MessengerEmojiUsageUtils").findAllEmojis(y);if(V.length>0)b("EmojiState").updateRecentlyUsed(V);var W=K.getTypeIDs(b("FantaTypeFileUploader").fileTypes.GENERIC_ATTACHMENT),X=r(z,y,W,L,Q,K,G,H,R,I,F,O,A,M,C);if(X&&E){if(u.mercury.tabContents.get(z))u=u.mergeIn(["mercury","tabContents",z],{fileUploader:new(b("FantaTypeFileUploader"))(),sharePreview:new(b("FantaTypeSharePreview"))()});E(X);if(N)(function(){var Y=v.threadID;if(!u.mercury.tabContents.get(N))u=u.setIn(["mercury","tabContents",N],new(b("FantaTypeTabContents"))({id:N}));b("setImmediate")(function(){return b("FantaTabActions").replaceTab(Y,N)})})()}}if(!p(K,L))u=u.mergeIn(["mercury","tabContents",z],{openSheet:null});if(S&&O&&O.size>1)(function(){var Y=b("MercuryIDs").tokenize(z).value;b("Bootloader").loadModules(["MessengerWebChatEventsTypedLogger","MessengerWebChatEventType"],function(Z,$){new Z().setEvent($.CLICK_NEW_MESSAGE).setOfflineThreadingID(Y).setEntryPoint(C).log()},"FantaReducersSendMessages")})();return u}return u}function p(u,v){return!!(u.uploadingFiles.size>0)}function q(u){var v=u.thread_id,w=b("MercuryIDs").getParticipantIDFromFromThreadID(v);if(w&&u)b("MercuryParticipants").get(w,function(x){b("Bootloader").loadModules(["MessageBlockedDialog"],function(y){y.show(v,u.can_reply,d.isMessageBlocked(u),x.short_name)},"FantaReducersSendMessages")})}function r(u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){__p&&__p();if(!B)B=b("MercurySourceType").CHAT_WEB;var J=f.constructUserGeneratedMessageObject(v,b("MercurySourceType").CHAT_WEB,u);if(I){if(!J.tags)J.tags=[];J.tags.push("web:trigger:"+I)}if(w.length>0){J.has_attachment=true;J.raw_attachments=w}if(G&&G.length)J.profile_ranges=J.profile_xmd=G;if(C){J.has_attachment=true;J.sticker_id=D}if(!y&&x.params&&x.type){var K={share_params:x.params.get("data"),share_type:x.type};if(K){J.has_attachment=true;J.shareable_attachment=K}}J.signatureID=H;J.ui_push_phase=b("SiteData").push_phase;if(E){J.content_attachment=null;e.addAttachmentPlaceholder(J,E.upload_id,E)}else if(!y){if(v||J.has_attachment)s(J,u,F);t(z,u,F)}else if(A&&B){J.has_attachment=false;e.send(function(){b("EmojiLikeUtils").setEmojiSize(J,A||"");return b("EmojiLikeUtils").setEmojiSource(J,B||"")}())}g.markRead(u);g.markSeen(u);return J}function s(u,v,w){__p&&__p();if(i.isEmptyLocalThread(v)){if(w)g.addParticipants(v,w.toArray());u.offline_threading_id=b("MercuryIDs").tokenize(v).value;var x=i.getThreadMetaNow(v);if(x)u.specific_to_list=Array.from(x.participants)}e.send(u,function(v){var y=i.getThreadMetaNow(v);if(y&&b("MessageRequestUtils").isMessageRequest(y))g.movePendingToInbox(v);if(y&&y.thread_id&&y.other_user_fbid&&b("getPageIDFromThreadID")(y.thread_id))b("ChatTabViewEvents").inform("chat-send-to-page",{pageID:y.other_user_fbid})})}function t(u,v,w){__p&&__p();if(u.uploadedFiles.size===0)return;var x=b("messengerUploadFilesUtilRe").supportAttachments;for(var y in x){var z=b("messengerUploadFilesUtilRe").getAttachmentIDs(u,y);if(Array.isArray(z)){var A=f.constructAttachmentMessageObject(b("MercurySourceType").CHAT_WEB,v);A[x[y]]=z;s(A,v,w)}}}c.exports={sendGroupMessage:n,sendMessage:o,updateGroupName:m}}),null);
__d("XLogoutController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/logout.php",{h:{type:"String"},next:{type:"String"},button_name:{type:"String"},button_location:{type:"String"}})}),null);