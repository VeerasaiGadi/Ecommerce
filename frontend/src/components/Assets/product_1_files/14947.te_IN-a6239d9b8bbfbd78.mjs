"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[14947],{40045:(e,t,o)=>{o.d(t,{Z:()=>i});let i={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},78309:(e,t,o)=>{o.d(t,{$N:()=>A,Cu:()=>T,GY:()=>_,MZ:()=>n,NR:()=>d,Vn:()=>l,bC:()=>I,fm:()=>i,kM:()=>r,q6:()=>s,qp:()=>E,uV:()=>O,ug:()=>u,xL:()=>a});let i={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},s={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},r={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},n={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud"},a={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},E={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_EVENTS:"PINTEREST_TAG_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",PINTEREST_EVENT_HISTORY:"PINTEREST_EVENT_HISTORY"},_={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},l={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},d={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",CAMPAIGN_ID:"campaign_id"},O="604800",u="86400",A={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},I="click",T="view"},527386:(e,t,o)=>{let i;o.d(t,{CK:()=>A,N:()=>p,Qu:()=>I,UT:()=>u,YX:()=>c,d9:()=>T,fO:()=>l,kd:()=>S,pz:()=>d});var s=o(40660),r=o(690108),n=o(703688),a=o(256558),E=o(970588);let _=(e,t,o={})=>s.Z.increment(`${e}.${t}`,1,o),l=(e,t)=>o=>{let i=t?{extra_context:e,targeting:t}:{extra_context:e};return r.Z.create("UserExperiencePlatformResource",i).callGet().then(e=>e.resource_response?o((0,a.OD)(e.resource_response.data)):void 0)},d=(e,t,o,s)=>(E,_)=>{if(t)return Promise.resolve();if(s&&(i=s),1===e.length){let t=e[0],i=_().experiences,s=i[t],r=(null==s?void 0:s.extraContext)||null;if(JSON.stringify(r)===JSON.stringify(o)||(0,n.E3)(s)&&!(o&&Object.keys(o).length>0))return Promise.resolve()}return r.Z.create("UserExperienceResource",{placement_ids:e,extra_context:o||null,targeting:s}).callGet().then(e=>e.resource_response?E((0,a.cL)(e.resource_response.data)):void 0)},O=(e,t)=>(o,s,n,E=!1,_,d)=>(O,u)=>{let{experiences:A,experiencesMulti:I}=u(),T=null,S=!0;if(!E){var c;T=(S=A[o]&&A[o].experience_id===s)?A[o]:Array.isArray(I[o])&&(null===(c=I[o])||void 0===c?void 0:c.find(e=>e.experience_id===s))}if(T&&T.experience_id===s||E&&o&&s){let E=r.Z.create(e,{placed_experience_id:`${o}%3A${s}`,extra_context:null!=_?_:{},targeting:d}),u=S?a.Yb:a.xW;switch(t){case"dismissed":return E.callDelete().then(()=>{O(u(o,s,t)),O(l(void 0,i))});case"completed":return E.callUpdate().then(()=>{n||(O(u(o,s,t)),O(l(void 0,i)))});case"viewed":return O(u(o,s,t)),E.callUpdate().then(()=>{1000162===o&&O(l())});case"completedWithoutHomefeed":return E.callUpdate().then(()=>{n||O(u(o,s,t))})}}return Promise.resolve()},u=O("UserExperienceViewedResource","viewed"),A=O("UserExperienceCompletedResource","completed"),I=O("UserExperienceResource","dismissed"),T=O("UserExperienceCompletedResource","completedWithoutHomefeed"),S=(e,t)=>(o,i)=>{let{experiences:s}=i(),r=s[e];r&&r.triggerable_placed_exps&&r.triggerable_placed_exps.length&&r.triggerable_placed_exps.forEach(o=>{let[,i]=o.split(":"),s=t;r.metadata&&r.metadata[i]&&(s={...t,...r.metadata[i]}),(0,E.Z)({url:`/v3/experiences/${o.replace(":","%3A")}/trigger/`,method:"PUT",data:s?{extra_context:JSON.stringify(s,null,1)}:{}}).then(()=>{_("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:i})})})},c=e=>(t,o)=>{t(S(e));let{experiences:i}=o();return i[e]},p=(e,t,o)=>s=>{o&&(i=o),s(S(e,t)),t&&Object.keys(t).length>0&&s(d([e],!1,t,o))}},703688:(e,t,o)=>{function i(e){return!!e&&0!==e.type}o.d(t,{A0:()=>r,E3:()=>i,MQ:()=>s});let s=(e,t,o)=>{let s=e[o];return t[o]&&i(s)?s:null};function r(e){var t;return null===(t=e.display_data)||void 0===t?void 0:t.anchor}},488897:(e,t,o)=>{o.d(t,{$S:()=>i,V$:()=>s,_4:()=>n,iY:()=>a,mR:()=>r});let i="REFRESH_ALL_EXPERIENCES_MULTI",s="UPDATE_EXPERIENCE_MULTI",r="FETCH_EXPERIENCES",n="REFRESH_ALL_EXPERIENCES",a="UPDATE_EXPERIENCE"},256558:(e,t,o)=>{o.d(t,{NW:()=>a,OD:()=>_,Yb:()=>E,cL:()=>l,xW:()=>n});var i=o(690108),s=o(488897);let r=e=>({type:s.$S,payload:{experiencesMulti:e}}),n=(e,t,o)=>({type:s.V$,payload:{placementId:e,experienceId:t,status:o}}),a=e=>t=>i.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(r(e.resource_response.data)):void 0),E=(e,t,o)=>({type:s.iY,payload:{placementId:e,experienceId:t,status:o}}),_=e=>({type:s._4,payload:{experiences:e}}),l=e=>({type:s.mR,payload:{experiences:e}})},121633:(e,t,o)=>{function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,{Z3:()=>d,LU:()=>O,ZP:()=>u});let s=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,r={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},n={},a={background:"#FF8A8A",transform:"scale(.98)"},E={init:e=>({transform:`scale(${n[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[r.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[r.exit]:a,[r.stopped]:a,[r.paused]:a,[r.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class _{constructor(e){i(this,"setMutationObserver",e=>(this.mutationObserver=e,this)),i(this,"startMutationObserver",e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)}),i(this,"stopMutationObserver",()=>{this.mutationObserver&&this.mutationObserver.disconnect()}),i(this,"handleIntersectionChange",e=>{let t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){let e=Date.now();this.startTime=e,this._debug(r.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach(e=>e())}else!t&&this.inViewport&&(this._debug(r.exit,!0),this.exitCallbacks.forEach(e=>e(this.toJSON())));this.inViewport=t}),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,s&&Object.assign(this.node.style,E.init(e)),this}pause(){return this.inViewport&&(this._debug(r.paused,!0),this.exitCallbacks.forEach(e=>e(this.toJSON()))),this}resume(){if(this.inViewport){let e=Date.now();this._debug(r.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(r.stopped,!0),this.exitCallbacks.forEach(t=>t(this.toJSON(e)))),this}toJSON(e=""){return{startTime:1e6*this.startTime,endTime:1e6*Date.now(),forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:`${(Date.now()-this.startTime)/1e3} seconds`}}_debug(e,t){if(s)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),E[e]&&Object.assign(this.node.style,E[e]),e){case r.flushed:case r.paused:case r.exit:n[this.debugId]=!0}}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}let d=!0,O=!1;class u{constructor(){l(this,"_delegateChange",e=>{e.forEach(e=>{let t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)})}),l(this,"_handleMutations",(e,t)=>{let o=this.mutationObservers.get(t),i=o&&o.offsetHeight<1;i&&o&&this.stop(o,"removed")}),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=O,this.observer=new window.IntersectionObserver(this._delegateChange),window.Cypress&&!window.activeImpressions&&(window.activeImpressions=new Map),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){let o=this.activeImpressions.get(e);if(o){var i;o.stop(t),this.mutationObservers.delete(o.mutationObserver),o.stopMutationObserver(),this.activeImpressions.delete(e),null===(i=window.activeImpressions)||void 0===i||i.delete(e),this.observer.unobserve(e)}}start(e){let t=this.activeImpressions.get(e);if(!t){var o;t=new _(e),this.activeImpressions.set(e,t),null===(o=window.activeImpressions)||void 0===o||o.set(e,t),this.observer.observe(e),t.setMutationObserver(new window.MutationObserver((e,t)=>this._handleMutations(e,t))),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})}return t}pause(e=d){this.paused||(Array.from(this.activeImpressions.values()).forEach(e=>e.pause()),this.paused=!0,this.pausePriority!==O||(this.pausePriority=e))}resume(e=d){(e!==O||this.pausePriority!==d)&&this.paused&&(Array.from(this.activeImpressions.values()).forEach(e=>e.resume()),this.paused=!1,this.pausePriority=O)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){let e=Array.from(this.topObstructions).reduce((e,t)=>{let{bottom:o}=t.getBoundingClientRect();return o>e?o:e},0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce((e,t)=>{let{top:o}=t.getBoundingClientRect();return o<e?o:e},window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){let o={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,o),Array.from(this.activeImpressions.values()).forEach(e=>this.observer.observe(e.node)),this.topHeight=e,this.bottomHeight=t}}}},906215:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(121633);let s=new i.ZP},731048:(e,t,o)=>{o.d(t,{Z:()=>i});let i={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},868489:(e,t,o)=>{o.d(t,{o$:()=>s,ty:()=>r,vE:()=>n});var i=o(583592);let{Provider:s,MaybeConsumer:r,useMaybeHook:n}=(0,i.Z)("inviteContext")},455788:(e,t,o)=>{o.d(t,{U:()=>n,Z:()=>a});var i=o(731048),s=o(785893);let r=()=>{},n=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function a({allowClickAndDrag:e,allowEsc:t,allowMediaPlay:o,allowScroll:a,children:E}){let _=e=>{t&&e.keyCode===i.Z.ESCAPE||n(e)};return(0,s.jsx)("div",{onAbort:n,onAnimationEnd:n,onAnimationIteration:n,onAnimationStart:n,onBlur:r,onCanPlay:o?r:n,onCanPlayThrough:n,onChange:n,onClick:e?r:n,onCompositionEnd:n,onCompositionStart:n,onCompositionUpdate:n,onContextMenu:n,onCopy:n,onCut:n,onDoubleClick:n,onDurationChange:n,onEmptied:n,onEncrypted:n,onEnded:n,onError:n,onFocus:r,onInput:n,onInvalid:n,onKeyDown:_,onKeyPress:_,onKeyUp:_,onLoad:n,onLoadedData:n,onLoadedMetadata:n,onLoadStart:n,onMouseDown:n,onMouseEnter:n,onMouseLeave:n,onMouseMove:e?r:n,onMouseOut:n,onMouseOver:n,onMouseUp:e?r:n,onPaste:n,onPause:n,onPlay:n,onPlaying:n,onProgress:n,onRateChange:n,onScroll:a?r:n,onSeeked:n,onSeeking:n,onSelect:n,onStalled:n,onSubmit:n,onSuspend:n,onTimeUpdate:n,onTouchCancel:n,onTouchEnd:e?r:n,onTouchMove:e?r:n,onTouchStart:e?r:n,onTransitionEnd:n,onVolumeChange:n,onWaiting:n,onWheel:n,children:E})}},657482:(e,t,o)=>{o.d(t,{Z:()=>r});var i=o(890304);let s=(0,i.Z)({type:"session"}),r=s},618569:(e,t,o)=>{o.d(t,{S:()=>a,Z:()=>E});var i=o(667294),s=o(616550),r=o(988014),n=o(98736);let a=e=>(0,r.L6)(e)?"pin":(0,r.am)(e)?"board":(0,r.Xn)(e)?"login":(0,r.C$)(e)?"home":(0,r.cD)(e)?"profile":(0,r.dr)(e)?"ideas":(0,r.gT)(e)?"ideas-root":(0,r.tZ)(e)?"videos":(0,r.Q0)(e)?"videos-category":(0,r.$Y)(e)?"article":(0,r.E0)(e)?"shopping-spotlight":(0,r.Zz)(e)?"today":(0,r.j8)(e)?"unauth-profile":(0,r.f1)(e)?"shopping-root":(0,r.OX)(e)?"shopping-category":"other";function E(){let e=(0,s.useLocation)();return(0,i.useCallback)(({action:t,item:o,within:i})=>{let s=a(e);(0,n.My)(`logged_out_product.interaction.${s}.${t}`,{item:o||"none",within:i||"none"})},[e])}},107877:(e,t,o)=>{o.d(t,{bn:()=>a,fJ:()=>_,gC:()=>E});var i=o(702664),s=o(583592),r=o(785893);let{Provider:n,useHook:a}=(0,s.Z)("Boards");function E(){let e=a();return t=>e[t]}function _({children:e}){let t=(0,i.useSelector)(({boards:e})=>e,i.shallowEqual);return(0,r.jsx)(n,{value:t,children:e})}},393599:(e,t,o)=>{o.d(t,{H:()=>r,o:()=>s});var i=o(583592);let{Provider:s,useHook:r}=(0,i.Z)("LimitedLogin")},198060:(e,t,o)=>{o.d(t,{N4:()=>r,Wh:()=>i,hr:()=>s});let i=e=>e.bt("కొనసాగించడానికి లాగిన్ చేయండి", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),s=e=>e.bt("మీరు దాదాపు పూర్తి చేసారు! Pinterestలోని అన్నిటినీ యాక్సెస్ చేయడానికి లాగిన్ చేయండి", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),r=({i18n:e,toFollow:t})=>t?e.bt("ఫాలో అవ్వడానికి లాగిన్ చేయండి", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("ఫాలో చేయకుండా ఉండటానికి లాగిన్ చేయండి", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},789144:(e,t,o)=>{o.d(t,{Z:()=>i});let i=(e,t)=>`${e}:${t||""}`},260070:(e,t,o)=>{o.d(t,{Cp:()=>E,FK:()=>a,H5:()=>p,MI:()=>A,O0:()=>u,QZ:()=>n,W:()=>S,WF:()=>l,Wz:()=>P,a5:()=>d,dz:()=>T,e0:()=>O,e2:()=>r,iW:()=>c,n1:()=>s,rm:()=>_,xu:()=>I});var i=o(988014);let s=()=>({type:"DISMISS_UNAUTH_SAVE"}),r=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),n=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),a=()=>({type:"HIDE_NAV_FOOTER"}),E=()=>({type:"SHOW_NAV_FOOTER"}),_=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),l=()=>({type:"SHOW_REPIN_ANIMATION"}),d=()=>({type:"HIDE_REPIN_ANIMATION"}),O=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),u=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),A=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),I=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),T=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),S=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),c=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},p=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),P=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,i.bo)(e)?"today":(0,i.dr)(e)?"ideas":t&&(0,i.dZ)(e,t)?"own_section":t&&(0,i.J)(e,t)?"own_board":(0,i.OJ)(e)?"section":(0,i.am)(e)?"board":(0,i.L6)(e)?"closeup":(0,i.C$)(e)?"home":(0,i.cD)(e)?"profile":(0,i.En)(e)?"search":(0,i.$V)(e)?"topic":"":""})},274796:(e,t,o)=>{o.d(t,{Z:()=>i});let i={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",TRIED_IT_FEED:"trieditfeed"}},252315:(e,t,o)=>{o.d(t,{M:()=>a,Q:()=>E});var i=o(667294),s=o(583592),r=o(785893);let{Provider:n,useMaybeHook:a}=(0,s.Z)("RepinContext");function E({children:e}){let[t,o]=(0,i.useState)(Object.freeze({})),s=(0,i.useMemo)(()=>({getSavedPinId:e=>t[e],isSaved:e=>!!t[e],save:(e,t)=>o(o=>({...o,[e]:t})),unsave:e=>o(t=>({...t,[e]:null}))}),[t]);return(0,r.jsx)(n,{value:s,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/14947.te_IN-a6239d9b8bbfbd78.mjs.map