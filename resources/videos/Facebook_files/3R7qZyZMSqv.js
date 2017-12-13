if (self.CavalryLogger) { CavalryLogger.start_js(["S\/bIa"]); }

__d("AdsCommonLocalMapUtils",[],(function a(b,c,d,e,f,g){"use strict";var h="#4D6AA4",i="#3b5998",j="#dc3847",k=19,l=1,m={KILOMETERS_TO_METERS:1e3,MILES_TO_METERS:1609.34,ZOOM_MAX:k,ZOOM_MIN:l,LEAFLET_TARGET_CIRCLE_OPTIONS:{color:h,clickable:false,fillOpacity:30/255,opacity:95/255,weight:1},LEAFLET_TARGET_MARKER_OPTIONS:{color:"#fff",fillColor:h,fillOpacity:1,opacity:1,radius:4,weight:2},LEAFLET_TARGET_REGION_INCLUDE_OPTIONS:{color:i,clickable:false,opacity:.5,fillColor:i,fillOpacity:.11,weight:1,noClip:true},LEAFLET_TARGET_HIGHLIGHT_REGION_INCLUDE_OPTIONS:{color:i,clickable:false,opacity:.5,fillColor:i,fillOpacity:.22,weight:1,noClip:true},LEAFLET_TARGET_REGION_EXCLUDE_OPTIONS:{color:j,clickable:false,opacity:.5,fillColor:j,fillOpacity:.11,weight:1,noClip:true},LEAFLET_TARGET_HIGHLIGHT_REGION_EXCLUDE_OPTIONS:{color:j,clickable:false,opacity:.5,fillColor:j,fillOpacity:.22,weight:1,noClip:true},LEAFLET_TILES_OPTIONS:{maxZoom:k,minZoom:l},LEAFLET_MARKER_ICON_OPTIONS:{iconSize:[25,32],iconAnchor:[12,32]},LEAFLET_MARKER_LOCATION_PIN_ICON_SELECTED_OPTIONS:{iconSize:[22,27],iconAnchor:[11,27]},LEAFLET_MARKER_LOCATION_PIN_ICON_NOT_SELECTED_OPTIONS:{iconSize:[13,13],iconAnchor:[6,13]},getBestZoom:function n(o,p,q,r,s){var t=o/180*Math.PI,u=Math.min(q,r),v=6e4/800*u/s*Math.cos(t),w=function w(y){return Math.log(y)/Math.LN2},x=10+Math.floor(w(v));return x},getRadiusInMeters:function n(o,p){if(p==="kilometer")return o*m.KILOMETERS_TO_METERS;return o*m.MILES_TO_METERS}};f.exports=m}),null);
__d("AdsVerticalTabGroup.react",["cx","React","ShimButton.react","SUIBusinessTheme","SUIText.react","areEqual","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k,l;i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;function m(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.$AdsVerticalTabItem1=function(){if(!this.props.active&&this.props.onChange)this.props.onChange(this.props.value.value)}.bind(this),p}m.prototype.render=function(){return c("React").createElement(c("ShimButton.react"),{className:c("joinClasses")("_4lsh",this.props.active?"_4lsi":"",this.props.value.className),onClick:this.$AdsVerticalTabItem1},c("React").createElement(c("SUIText.react"),{display:"block",size:"large_DEPRECATED",theme:c("SUIBusinessTheme"),weight:"bold"},this.props.value.label),c("React").createElement(c("SUIText.react"),{display:"block",shade:this.props.active?"medium":"light",theme:c("SUIBusinessTheme")},this.props.value.text))};m.defaultProps={active:false};k=babelHelpers.inherits(n,c("React").Component);l=k&&k.prototype;n.prototype.render=function(){return c("React").createElement("div",{className:c("joinClasses")("_4lu3",this.props.className)},this.props.items.map(function(o){return c("React").createElement(m,{active:c("areEqual")(this.props.value,o.value),key:o.value,value:o,onChange:this.props.onChange})}.bind(this)))};function n(){k.apply(this,arguments)}f.exports=n}),null);
__d("SUIToggleButtonGroup.react",["React","SUIButtonGroup.react","SUIComponent","SUITheme"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes,k={use:"default",disabled:false};h=babelHelpers.inherits(l,c("SUIComponent"));i=h&&h.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.$SUIToggleButtonGroup2=function(r){if(this.props.onChange)this.props.onChange(r)}.bind(this),n}l.prototype.$SUIToggleButtonGroup1=function(m,n){__p&&__p();var o=void 0;if(n&&this.props.use!=="default"){var p=c("SUITheme").get(this).SUIButton;return p.use[this.props.use].normal}var q=void 0;if(n)q="selected";else if(m)q="disabled";else q="normal";var r=c("SUITheme").get(this).SUIToggleButtonGroup,s=r[q];if(s)o={backgroundColor:s.backgroundColor,borderColor:s.borderColor||s.backgroundColor,color:s.color};return o};l.prototype.render=function(){var m=c("React").Children.map(this.props.children,function(n,o){if(!n)return null;var p=this.props.disabled||n.props.disabled,q=this.props.value===n.props.value;return c("React").cloneElement(n,{disabled:p||q,isDepressed:q,onClick:function(){return this.$SUIToggleButtonGroup2(n.props.value)}.bind(this),style:this.$SUIToggleButtonGroup1(p,q),use:q?this.props.use:undefined})}.bind(this));return c("React").createElement(c("SUIButtonGroup.react"),{className:this.props.className,"data-testid":this.props["data-testid"]},m)};l.propTypes={"data-testid":j.string,onChange:j.func,disabled:j.bool,selectedDepressed:j.bool,theme:j.instanceOf(c("SUITheme")),use:j.oneOf(["confirm","default","special"]),value:j.any};l.defaultProps=k;f.exports=l}),null);
__d("AdsTargetingGenderSelector.react",["cx","fbt","AdsTargetingConstants","BoostedComponentClientEvent","BoostedComponentTestElement","BUIAdoptionUtils","React","ReactComponentWithPureRenderMixin","SUIBusinessTheme","SUIButton.react","SUIToggleButtonGroup.react"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("React").PropTypes,k=c("React").createClass({displayName:"AdsTargetingGenderSelector",mixins:[c("ReactComponentWithPureRenderMixin")],propTypes:{cfSection:j.string,dataTestIDForWomen:j.string,disabled:j.bool,initialGender:j.number,selectedUse:j.string,onDataUpdate:j.func.isRequired},getDefaultProps:function l(){return{disabled:false,initialGender:c("AdsTargetingConstants").GENDERS.All,selectedUse:"confirm"}},_onClick:function l(m){this.props.onDataUpdate(c("BoostedComponentClientEvent").UPDATE_GENDER,m)},render:function l(){var m="_5v_d",n=i._("All"),o=i._("Men"),p=i._("Women");return c("React").createElement("div",{className:m,"data-testid":c("BoostedComponentTestElement").GENDER_SELECTOR},c("React").createElement(c("SUIToggleButtonGroup.react"),{disabled:this.props.disabled,selectedDepressed:this.props.selectedDepressed,theme:c("SUIBusinessTheme"),use:this.props.selectedUse,value:this.props.initialGender,onChange:this._onClick},c("React").createElement(c("SUIButton.react"),{height:c("BUIAdoptionUtils").convertSizeToHeight(this.props.size),label:n,type:"button",value:c("AdsTargetingConstants").GENDERS.All}),c("React").createElement(c("SUIButton.react"),{height:c("BUIAdoptionUtils").convertSizeToHeight(this.props.size),label:o,type:"button",value:c("AdsTargetingConstants").GENDERS.Men}),c("React").createElement(c("SUIButton.react"),{"data-testid":this.props.dataTestIDForWomen,height:c("BUIAdoptionUtils").convertSizeToHeight(this.props.size),label:p,type:"button",value:c("AdsTargetingConstants").GENDERS.Women})))}});f.exports=k}),null);
__d("AdsTargetingNumberSelector.react",["cx","BUIAdoptionSelector.react","BUIAdoptionSelectorOption.react","BUIAdoptionUtils","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=[];for(var o=m.minimum;o<=m.maximum;++o){var p=o;if(m.customMaxLabel&&o===m.maximum)p=m.customMaxLabel;n.push(c("React").createElement(c("BUIAdoptionSelectorOption.react"),{key:o,value:o},p))}return c("React").createElement("div",{className:"_5tpo"},c("React").createElement(c("BUIAdoptionSelector.react"),{maxHeight:200,value:m.selectedValue,width:42,onChange:c("BUIAdoptionUtils").convertSelectorXUIOnChangeToSUIOnChange(m.onDataUpdate)},n))};function l(){i.apply(this,arguments)}l.propTypes={customMaxLabel:k.string,maximum:k.number.isRequired,minimum:k.number.isRequired,selectedValue:k.number.isRequired,size:k.string,onDataUpdate:k.func.isRequired};f.exports=l}),null);
__d("AdsTargetingTokenizer.react",["cx","AbstractTokenizer.react","React","TypeaheadMetricReporter","WebAsyncSearchSource","XUITokenizerToken.react","XUITypeaheadView.react","areEqual"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=c("React").PropTypes,j={ViewRenderer:c("XUITypeaheadView.react"),TokenRenderer:c("XUITokenizerToken.react"),useLayer:true},k=c("React").createClass({displayName:"AdsTargetingTokenizer",_searchSource:null,propTypes:{auxiliaryFields:i.object,disabled:i.bool,entries:i.array,isAutoHeight:i.bool,limit:function l(m,n,o){var l=m[n];if(typeof l!=="undefined"&&!(typeof l==="number"&&l>0))return new Error("Invalid entries limit provided, must be a positive number.")},maxKeywords:i.number,metricReporter:i.instanceOf(c("TypeaheadMetricReporter")),packageFn:i.func,placeholder:i.string,queryData:i.object,searchSource:i.object,smallInput:i.bool,uri:i.string.isRequired,onDataAdd:i.func,onDataRemove:i.func,onDataUpdate:i.func.isRequired},getDefaultProps:function l(){return{isAutoHeight:false,queryData:{}}},getInitialState:function l(){return{entries:this.props.entries||[],queryString:""}},componentWillMount:function l(){this._createSearchSource(this.props)},componentWillReceiveProps:function l(m){if(m.entries)this.setState({entries:m.entries});if(m.searchSource&&!this._areSearchSourcesEqual(m))this._createSearchSource(m)},_areSearchSourcesEqual:function l(m){var n=this.props;if(c("areEqual")(n.searchSource,m.searchSource)&&c("areEqual")(n.queryData,m.queryData)&&c("areEqual")(n.uri,m.uri)&&c("areEqual")(n.auxiliaryFields,m.auxiliaryFields)&&c("areEqual")(n.packageFn,m.packageFn))return true;return false},_createSearchSource:function l(m){if(m.searchSource)var n=m.searchSource;else n=new(c("WebAsyncSearchSource"))({queryRequests:[{uri:m.uri,data:m.queryData}],auxiliaryFields:m.auxiliaryFields,packageFn:m.packageFn});this._searchSource=n},_onAdd:function l(m){__p&&__p();if(!this._canAddMoreKeywords())return;var n=this.state.entries;n.push(m);this.setState({entries:n});this.props.onDataAdd&&this.props.onDataAdd(m);this.props.onDataUpdate(n,m);if(m){var o=this.props.metricReporter;if(o){o.reportSelect(m.id||m.getUniqueID(),m.type||m.getType(),m.order||m.getOrder(),true);o.sessionEnd();o.sessionStart()}}},_onRemove:function l(m){var n=this.state.entries,o=n.indexOf(m);n.splice(o,1);this.setState({entries:n});this.props.onDataRemove&&this.props.onDataRemove(m);this.props.onDataUpdate(n,m)},_onInputFocus:function l(){this.props.metricReporter&&this.props.metricReporter.sessionStart()},_onInputBlur:function l(){this.props.metricReporter&&this.props.metricReporter.sessionPause()},_onEntriesFound:function l(m){var n=this.props.metricReporter;if(n)n.reportResults(m.map(function(o){return o.getUniqueID()}),this.state.queryString)},_onInputChange:function l(event){var m=event.target.value;this.setState({queryString:m});this.props.metricReporter&&this.props.metricReporter.reportQueryBegin(m)},getEntries:function l(){return this.state.entries},render:function l(){var m="_59_m"+(!this.props.isAutoHeight?" _557c":"")+(this.props.smallInput?" _p63":"");return c("React").createElement("div",{className:m},c("React").createElement(c("AbstractTokenizer.react"),{className:"_59_n","data-testid":this.props["data-testid"],disabled:this.props.disabled||!this._canAddMoreKeywords(),entries:this.state.entries,limit:this.props.limit,placeholder:this.props.placeholder,presenter:j,searchSource:this._searchSource,onAddEntryAttempt:this._onAdd,onEntriesFound:this._onEntriesFound,onInputBlur:this._onInputBlur,onInputFocus:this._onInputFocus,onQueryStringChange:this._onInputChange,onRemoveEntryAttempt:this._onRemove}))},_canAddMoreKeywords:function l(){if(!this.props.maxKeywords)return true;if(this.state.entries.length>=this.props.maxKeywords)return false;return true}});f.exports=k}),null);
__d("BrandPixelStore.brands",["AdsDataAtom","AdsLoadState_LEGACY","AppConstants.brands","Bootloader","BrandPixelServerActionTypes.brands","FluxStore","ImmutableObject","adsBaseStoreMixin_DEPRECATED","dotAccess"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("AppConstants.brands").ACCESS_TYPE,k=c("AppConstants.brands").ASSET_TYPE,l=c("AppConstants.brands").OBJECT_STATUS,m=c("AppConstants.brands").REQUESTED_ASSET_STATUS;h=babelHelpers.inherits(n,c("FluxStore"));i=h&&h.prototype;function n(){i.constructor.call(this,c("AdsDataAtom"));c("adsBaseStoreMixin_DEPRECATED")(this);this.$BrandPixelStoreClass8()}n.prototype.getStoreName=function(){return"BrandPixelStore.brands"};n.prototype.__onDispatch=function(p){__p&&__p();var q=p.action;switch(q.actionType){case c("BrandPixelServerActionTypes.brands").RECEIVE_PIXELS:this.$BrandPixelStoreClass9(q.feedback);this.$BrandPixelStoreClass1=c("AdsLoadState_LEGACY").LOADED;this.__emitChange();break;case c("BrandPixelServerActionTypes.brands").BUSINESS_PIXEL_CREATED:this.$BrandPixelStoreClass9(q.feedback);this.$BrandPixelStoreClass1=c("AdsLoadState_LEGACY").LOADED;this.__emitChange();break;case c("BrandPixelServerActionTypes.brands").RECEIVE_PIXEL_SHARED_ACCOUNTS:this.$BrandPixelStoreClass10(q.feedback);this.__emitChange();break;case c("BrandPixelServerActionTypes.brands").RECEIVE_PIXEL_SHARED_AGENCIES:this.$BrandPixelStoreClass11(q.feedback);this.__emitChange();break;case c("BrandPixelServerActionTypes.brands").REMOVE_PIXEL_SHARED_ACCOUNT:this.$BrandPixelStoreClass12(q.feedback.pixelID,q.feedback.adAccountID);this.__emitChange();break;case c("BrandPixelServerActionTypes.brands").REMOVE_PIXEL_SHARED_AGENCY:this.$BrandPixelStoreClass13(q.feedback.pixelID,q.feedback.agencyID);this.__emitChange();break}};n.prototype.getPixelList=function(p){if(this.$BrandPixelStoreClass1===c("AdsLoadState_LEGACY").NOT_LOADED){this.$BrandPixelStoreClass1=c("AdsLoadState_LEGACY").LOADING;c("Bootloader").loadModules(["AdsPixelBrandsDataManager.brands"],function(q){q.loadPixels(p)},"BrandPixelStore.brands")}return this.$BrandPixelStoreClass3};n.prototype.getBrandPixelsByID=function(){return this.$BrandPixelStoreClass2};n.prototype.getPixelInfo=function(p){return p&&c("dotAccess")(this.$BrandPixelStoreClass2,p)||{}};n.prototype.getName=function(p){return p&&c("dotAccess")(this.$BrandPixelStoreClass2,p+".name")||""};n.prototype.getPixelLastFiringTime=function(p){return c("dotAccess")(this.$BrandPixelStoreClass2,p+".lastActive")||""};n.prototype.getSharedAdAccounts=function(p){if(!(p in this.$BrandPixelStoreClass4))return{};return this.$BrandPixelStoreClass4[p]};n.prototype.getSharedAgencies=function(p){if(!(p in this.$BrandPixelStoreClass6))return{};return this.$BrandPixelStoreClass6[p]};n.prototype.areSharedAdAccountsLoaded=function(p){return p in this.$BrandPixelStoreClass5&&this.$BrandPixelStoreClass5[p]};n.prototype.setSharedAgenciesLoaded=function(p){this.$BrandPixelStoreClass7[p]=true};n.prototype.areSharedAgenciesLoaded=function(p){return p in this.$BrandPixelStoreClass7&&this.$BrandPixelStoreClass7[p]};n.prototype.isSharedWithAdAccount=function(p,q){return q in this.$BrandPixelStoreClass4&&p in this.$BrandPixelStoreClass4[q]};n.prototype.isSharedWithAgency=function(p,q){return q in this.$BrandPixelStoreClass6&&p in this.$BrandPixelStoreClass6[q]};n.prototype.isPixelListInitialized=function(){return this.$BrandPixelStoreClass1===c("AdsLoadState_LEGACY").LOADED};n.prototype.getPixelListLoadState=function(){return this.$BrandPixelStoreClass1};n.prototype.$BrandPixelStoreClass12=function(p,q){if(!(p in this.$BrandPixelStoreClass4)||!(q in this.$BrandPixelStoreClass4[p]))return;delete this.$BrandPixelStoreClass4[p][q]};n.prototype.$BrandPixelStoreClass13=function(p,q){if(!(p in this.$BrandPixelStoreClass6)||!(q in this.$BrandPixelStoreClass6[p]))return;delete this.$BrandPixelStoreClass6[p][q]};n.prototype.$BrandPixelStoreClass9=function(p){p.pixelList.forEach(function(q){var r=j.OWNER,s=q.owner_business;if(!s||p.businessID!==s.id)r=j.AGENCY;var t=new(c("ImmutableObject"))({accessType:r,assetType:k.PIXEL,business:s,id:q.id,isCreatedByBusiness:q.is_created_by_business,lastActive:q.last_fired_time,name:q.name,objectStatus:l.CREATING,status:m.PENDING});if(!this.$BrandPixelStoreClass2[q.id])this.$BrandPixelStoreClass3.push(t);this.$BrandPixelStoreClass2[q.id]=t}.bind(this));this.$BrandPixelStoreClass1=c("AdsLoadState_LEGACY").LOADED};n.prototype.$BrandPixelStoreClass10=function(p){var q=this.$BrandPixelStoreClass4[p.pixelID]||{};p.sharedAdAccounts.forEach(function(r){var s=new(c("ImmutableObject"))({account_id:r.account_id,assetType:k.AD_ACCOUNT,business:r.owner_business,id:r.id,name:r.name});q[r.account_id]=s});this.$BrandPixelStoreClass14(p.pixelID);this.$BrandPixelStoreClass4[p.pixelID]=q};n.prototype.$BrandPixelStoreClass11=function(p){var q=this.$BrandPixelStoreClass6[p.pixelID]||{};p.sharedAgencies.forEach(function(r){var s=new(c("ImmutableObject"))({business:r,id:r.id,name:r.name,picture:r.picture});q[r.id]=s});this.$BrandPixelStoreClass6[p.pixelID]=q};n.prototype.$BrandPixelStoreClass14=function(p){this.$BrandPixelStoreClass5[p]=true};n.prototype.$BrandPixelStoreClass8=function(){this.$BrandPixelStoreClass1=c("AdsLoadState_LEGACY").NOT_LOADED;this.$BrandPixelStoreClass2={};this.$BrandPixelStoreClass3=[];this.$BrandPixelStoreClass4={};this.$BrandPixelStoreClass5={};this.$BrandPixelStoreClass6={};this.$BrandPixelStoreClass7={}};var o=new n();f.exports=o}),null);
__d("FBTilesAttributionLogo.react",["cx","React","TilesMapConfig","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){switch(this.props.mapProvider){case"HERE":return this.$FBTilesAttributionLogo1();case"OSM":return this.$FBTilesAttributionLogo2()}return null};l.prototype.$FBTilesAttributionLogo1=function(){return c("React").createElement("div",{className:c("joinClasses")(this.props.className,"_3d_k"),style:{backgroundImage:"url("+c("TilesMapConfig").LOGO.url+")",height:c("TilesMapConfig").LOGO.height+"px",width:c("TilesMapConfig").LOGO.width+"px"}})};l.prototype.$FBTilesAttributionLogo2=function(){return c("React").createElement("div",{className:c("joinClasses")(this.props.className,"_wuu")},"\xa9 OpenStreetMap")};function l(){i.apply(this,arguments)}l.propTypes={className:k.string,mapProvider:k.oneOf(["HERE","OSM"]).isRequired};f.exports=l}),null);
__d("FBTilesMapZoomOverlay.react",["cx","ix","fbt","Image.react","React","XUIButton.react"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes,n=c("React").createElement(c("Image.react"),{src:i("22148")}),o=c("React").createElement(c("Image.react"),{src:i("22147")});k=babelHelpers.inherits(p,c("React").PureComponent);l=k&&k.prototype;p.prototype.render=function(){var q=this.props,r=q.onZoomIn,s=q.onZoomOut,t=babelHelpers.objectWithoutProperties(q,["onZoomIn","onZoomOut"]);return c("React").createElement("div",t,c("React").createElement("div",null,c("React").createElement(c("XUIButton.react"),{disabled:r==null,image:n,label:j._("Zoom In"),labelIsHidden:true,onClick:r,type:"button"})),c("React").createElement("div",null,c("React").createElement(c("XUIButton.react"),{className:"_3d8x",disabled:s==null,image:o,label:j._("Zoom Out"),labelIsHidden:true,onClick:s,type:"button"})))};function p(){k.apply(this,arguments)}p.propTypes={onZoomIn:m.func,onZoomOut:m.func};f.exports=p}),null);
__d("TilesMapTheme",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({DEFAULT:"default",CROWDSOURCING_OSM:"crowdsourcing_osm",ROAD_MASK_OSM_EDITING:"road_mask_osm_editing",LIVE_MAPS:"live_maps",INDOOR_OSM:"indoor_osm",LIVE_MAPS_MIMIC:"live_maps_mimic",MAP_DIFF:"map_diff"})}),null);
__d("XMapsProviderByViewPortController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/maps/provider_by_viewport/",{swlat:{type:"Float",required:true},swlon:{type:"Float",required:true},nelat:{type:"Float",required:true},nelon:{type:"Float",required:true},zoom:{type:"Float",required:true}})}),null);
__d("TilesMapUtils",["CurrentLocale","GeoCoordinates","GeoRectangle","LeafletUtils","LeafletView","TilesMapConfig","TilesMapTheme","URI","XAsyncRequest","XMapsProviderByViewPortController","leaflet"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("TilesMapConfig").OSM_RECTS_RAW.map(function(j){return c("leaflet").latLngBounds([j[2],j[1]],[j[0],j[3]])}),i={DEFAULT_VIEW:new(c("LeafletView"))({center:new(c("GeoCoordinates"))(0,0),zoom:c("TilesMapConfig").ZOOM_RANGE.MIN}),getMapProviderForAttributionByViewPort:function j(k,l,m){var n=c("XMapsProviderByViewPortController").getURIBuilder().setFloat("swlat",k.getSouth()).setFloat("swlon",k.getWest()).setFloat("nelat",k.getNorth()).setFloat("nelon",k.getEast()).setFloat("zoom",l).getURI();new(c("XAsyncRequest"))(n).setHandler(function(o){return m(o.payload)}).send()},getTileURLTemplate:function j(k,l){if(!k)k=c("CurrentLocale").get();return c("TilesMapConfig").TILE_URL_TEMPLATE+"&language="+k+(l&&l!==c("TilesMapTheme").DEFAULT?"&theme="+l:"")+(l===c("TilesMapTheme").LIVE_MAPS?"&lmv="+c("TilesMapConfig").LIVE_MAP_VERSION:"")},getOSMRects:function j(){return i.getOSMRectsFromRaw(c("TilesMapConfig").OSM_RECTS_RAW)},getOSMRectsFromRaw:function j(k){return k.map(function(l){return new(c("GeoRectangle"))(l[0],l[1],l[2],l[3])})},getMapProviderForAttribution:function j(k,l,m,n){if(l.height<c("TilesMapConfig").MIN_SIZE_FOR_ATTRIBUTION||l.width<c("TilesMapConfig").MIN_SIZE_FOR_ATTRIBUTION)return null;if(n!==""&&n!==c("TilesMapTheme").DEFAULT&&n!==c("TilesMapTheme").ROAD_MASK_OSM_EDITING)return"OSM";if(k.zoom<c("TilesMapConfig").OSM_ZOOM_THRESHOLD)return"HERE";return c("LeafletUtils").isViewInBounds(k,l,h,m)?"OSM":"HERE"},getMapProviderForReportButton:function j(k,l){if(l!==""&&l!==c("TilesMapTheme").DEFAULT&&l!==c("TilesMapTheme").ROAD_MASK_OSM_EDITING)return"OSM";if(k.zoom<c("TilesMapConfig").OSM_ZOOM_THRESHOLD)return"HERE";var m=c("leaflet").latLng(k.center.latitude,k.center.longitude);return h.some(function(n){return n.contains(m)})?"OSM":"HERE"},getReporterToolUrl:function j(k,l){switch(k){case"OSM":var m=Math.max(Math.floor(l.zoom),c("TilesMapConfig").OSM_MAP_MIN_ZOOM_TO_REPORT_ISSUE);return new(c("URI"))(c("TilesMapConfig").OSM_MAP_REPORTER_URL).addQueryData("lat",l.center.latitude).addQueryData("lon",l.center.longitude).addQueryData("zoom",m).toString();default:case"HERE":return new(c("URI"))(c("TilesMapConfig").HERE_MAP_REPORTER_URL).addQueryData("features","road,border").addQueryData("zoomLevel",Math.floor(l.zoom)).addQueryData("lang",c("CurrentLocale").get()).addQueryData("coord",l.center.latitude+","+l.center.longitude).toString()}}};f.exports=i}),null);
__d("FBTilesMap.react",["cx","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","FBTilesAttributionLogo.react","FBTilesInfoButton.react","FBTilesMapZoomOverlay.react","LeafletUtils","LeafletView","LeafletMap.react","LeafletTileLayer.react","React","TilesMapConfig","TilesMapUtils","TilesMapTheme"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes,l={maxZoom:c("TilesMapConfig").ZOOM_RANGE.MAX,minZoom:c("TilesMapConfig").ZOOM_RANGE.MIN};function m(s,t){if(t!=null&&t.type===c("FBOverlayElement.react"))return s?t:undefined;return s?undefined:t}var n=function n(s){return c("React").Children.map(s,m.bind(undefined,false))},o=function o(s){return c("React").Children.map(s,m.bind(undefined,true))};function p(s){return{overlays:o(s),others:n(s)}}var q=k.shape({horizontal:k.oneOf(["left","right","fit"]),vertical:k.oneOf(["top","bottom","fit"])});i=babelHelpers.inherits(r,c("React").Component);j=i&&i.prototype;function r(){__p&&__p();var s,t;for(var u=arguments.length,v=Array(u),w=0;w<u;w++)v[w]=arguments[w];return t=(s=j.constructor).call.apply(s,[this].concat(v)),this.state={size:null,attributions:[]},this.$FBTilesMap6=function(x){this.setState({size:x});if(this.props.onSizeSettled!=null)this.props.onSizeSettled(x)}.bind(this),this.$FBTilesMap7=function(){var x=this.props.view;if(x==null||this.props.onViewChange==null)return;if(x.zoom<c("TilesMapConfig").ZOOM_RANGE.MAX)this.props.onViewChange(x.setZoom(x.zoom+1))}.bind(this),this.$FBTilesMap8=function(){var x=this.props.view;if(x==null||this.props.onViewChange==null)return;if(x.zoom>c("TilesMapConfig").ZOOM_RANGE.MIN)this.props.onViewChange(x.setZoom(x.zoom-1))}.bind(this),t}r.prototype.render=function(){var s=this.props,t=s.children,u=s.className,v=s.style,w=s.defaultView,x=babelHelpers.objectWithoutProperties(s,["children","className","style","defaultView"]),y=p(t),z=y.others,A=y.overlays;if(w)throw new Error("<FBTilesMap /> cannot be used with `defaultView` prop. Please provide `view` prop and treat as a controlled component.");return c("React").createElement(c("FBOverlayContainer.react"),{className:u,style:v},c("React").createElement(c("FBOverlayBase.react"),null,this.$FBTilesMap1(z,x)),A,this.$FBTilesMap2(),this.$FBTilesMap3(),this.$FBTilesMap4())};r.prototype.componentDidMount=function(){this.$FBTilesMap5()};r.prototype.componentDidUpdate=function(){this.$FBTilesMap5()};r.prototype.$FBTilesMap5=function(){if(this.state.size===null||this.state.size===undefined||this.props.view===undefined)return;var s=c("LeafletUtils").getViewBounds(this.props.view,{width:this.state.size.x,height:this.state.size.y});if(this.props.view===undefined)return;c("TilesMapUtils").getMapProviderForAttributionByViewPort(s,this.props.view.zoom,function(t){t.sort();if(JSON.stringify(this.state.attributions)!==JSON.stringify(t))this.setState({attributions:t})}.bind(this))};r.prototype.$FBTilesMap2=function(){if(this.state.size==null)return null;return this.state.attributions.every(function(s){return s!=="here"})?null:c("React").createElement(c("FBOverlayElement.react"),this.props.attributionLogoPosition,c("React").createElement(c("FBTilesAttributionLogo.react"),{mapProvider:"HERE"}))};r.prototype.$FBTilesMap3=function(){if(!this.props.showReportButton||this.state.size==null)return null;var s=function(){return{hereReportUrl:c("TilesMapUtils").getReporterToolUrl("HERE",this.props.view),mapSources:this.state.attributions,mapUrl:null}}.bind(this);return c("React").createElement(c("FBOverlayElement.react"),this.props.reportButtonPosition,c("React").createElement(c("FBTilesInfoButton.react"),{className:"_1mfw",mapInfoCallback:s}))};r.prototype.$FBTilesMap1=function(s,t){var u=babelHelpers["extends"]({},t.options,{zoomControl:false});return c("React").createElement(c("LeafletMap.react"),babelHelpers["extends"]({},t,{className:"_5db7",onSizeSettled:this.$FBTilesMap6,options:u}),c("React").createElement(c("LeafletTileLayer.react"),{options:Object.assign({},this.props.tileOptions,l),urlTemplate:c("TilesMapUtils").getTileURLTemplate(null,this.props.theme)}),s)};r.prototype.$FBTilesMap4=function(){if(this.props.view==null||this.props.onViewChange==null||!this.props.showZoomControls)return null;var s=this.props.view.zoom<l.maxZoom?this.$FBTilesMap7:undefined,t=this.props.view.zoom>l.minZoom?this.$FBTilesMap8:undefined;return c("React").createElement(c("FBOverlayElement.react"),this.props.setZoomPosition,c("React").createElement(c("FBTilesMapZoomOverlay.react"),{className:"_3-8j _1yx0",onZoomIn:s,onZoomOut:t}))};r.propTypes={className:k.string,showZoomControls:k.bool,setZoomPosition:q,showReportButton:k.bool,style:k.object,theme:k.string,view:k.instanceOf(c("LeafletView")),tileOptions:k.object,reportButtonPosition:q,attributionLogoPosition:q};r.defaultProps={showReportButton:true,theme:c("TilesMapTheme").DEFAULT,setZoomPosition:{vertical:"top",horizontal:"left"},reportButtonPosition:{vertical:"bottom",horizontal:"right"},attributionLogoPosition:{vertical:"bottom",horizontal:"left"}};f.exports=r}),null);
__d("LeafletPath",["Set","areEqual","partitionObjectByKey"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=function(){var j=new(c("Set"))(["color","dashArray","fill","fillColor","fillOpacity","lineCap","lineJoin","opacity","stroke","weight"]);return function(k){return c("partitionObjectByKey")(k,j)}}(),i={mutateOptions:function j(k,l,m){var n=h(l||{}),o=n[0],p=n[1],q=h(m||{}),r=q[0],s=q[1];if(!c("areEqual")(p,s))return false;if(!c("areEqual")(o,r))k.setStyle(o);return true}};f.exports=i}),null);
__d("LeafletPopup.react",["GeoCoordinates","LeafletUtils","React","ReactDOM","areEqual","leaflet"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.mutate=function(l,m,n){if(!c("areEqual")(m.options,n.options))return false;if(m.coordinates!==n.coordinates)l.setLatLng(c("LeafletUtils").toLatLng(m.coordinates));var o=l.getContent(),p=c("React").Children.only(m.children);c("ReactDOM").render(p,o,function(){return l.update()});return true};k.toLayer=function(l,m){var n=c("leaflet").popup(l.options,m);if(l.coordinates)n.setLatLng(c("LeafletUtils").toLatLng(l.coordinates));var o=c("React").Children.only(l.children),p=document.createElement("div");n.setContent(p);c("ReactDOM").render(o,p,function(){return n.update()});return n};k.prototype.render=function(){return null};function k(){h.apply(this,arguments)}k.propTypes={options:j.object,coordinates:j.instanceOf(c("GeoCoordinates"))};f.exports=k}),null);
__d("LeafletCircle.react",["GeoCoordinates","LeafletLayer.react","LeafletPath","LeafletPopup.react","LeafletUtils","React","leaflet"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.mutate=function(l,m,n){__p&&__p();if(!c("LeafletPath").mutateOptions(l,m.options,n.options))return false;c("LeafletLayer.react").mutateEventHandlers(l,m.eventHandlers,n.eventHandlers);if(m.center!==n.center)l.setLatLng(c("LeafletUtils").toLatLng(m.center));if(m.radius!==n.radius)l.setRadius(m.radius);if(m.popup){var o=m.popup.type.mutate(l.$LeafletCircle1,m.popup.props,n.popup.props);if(!o){l.unbindPopup();l.bindPopup(m.popup.type.toLayer(m.popup.props))}}else if(!m.popup&&n.popup)l.unbindPopup();return true};k.toLayer=function(l){var m=c("leaflet").circle(c("LeafletUtils").toLatLng(l.center),l.radius,l.options);c("LeafletLayer.react").addEventHandlers(m,l.eventHandlers);if(l.popup)m.bindPopup(l.popup.type.toLayer(l.popup.props));return m};k.prototype.render=function(){return null};function k(){h.apply(this,arguments)}k.propTypes={options:j.object,eventHandlers:j.object,center:j.instanceOf(c("GeoCoordinates")).isRequired,radius:j.number.isRequired,popup:j.instanceOf(c("LeafletPopup.react"))};f.exports=k}),null);
__d("LeafletCircleMarker.react",["GeoCoordinates","LeafletLayer.react","LeafletPath","LeafletUtils","React","leaflet"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.mutate=function(l,m,n){var o=m.options||{},p=o.radius,q=babelHelpers.objectWithoutProperties(o,["radius"]),r=n.options||{},s=r.prevRadius,t=babelHelpers.objectWithoutProperties(r,["prevRadius"]);if(!c("LeafletPath").mutateOptions(l,q,t))return false;c("LeafletLayer.react").mutateEventHandlers(l,m.eventHandlers,n.eventHandlers);if(m.center!==n.center)l.setLatLng(c("LeafletUtils").toLatLng(m.center));if(p!==s)l.setRadius(m.radius);return true};k.toLayer=function(l){var m=c("leaflet").circleMarker(c("LeafletUtils").toLatLng(l.center),l.options);c("LeafletLayer.react").addEventHandlers(m,l.eventHandlers);return m};k.prototype.render=function(){return null};function k(){h.apply(this,arguments)}k.propTypes={options:j.object,eventHandlers:j.object,center:j.instanceOf(c("GeoCoordinates")).isRequired};f.exports=k}),null);
__d("XBrowseQueryController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/search/{*bqf}/",{q:{type:"String"},bqf:{type:"String"},searchtype:{type:"Enum",enumType:1},urlslug:{type:"String"},page:{type:"Int"},ref:{type:"String"},topicID:{type:"Int"},query:{type:"String"},name:{type:"String"},cursor:{type:"String"},source:{type:"String"}})}),null);