AUI.add("liferay-portlet-dynamic-data-lists",function(f){var e=f.Array;var g=f.Lang;var l=Liferay.Service.DDL;var a=l.DDLRecord;var i=l.DDLRecordSet;var h=Liferay.Service.DL.DLApp;var n=f.Object.keys;var m=f.JSON;var d=f.Lang.emptyFn;var c=",";var k="";var j=f.Component.create({NAME:"document-library-file-entry-cell-editor",EXTENDS:f.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input type="hidden" />',initializer:function(){var o=this;window[Liferay.Util.getPortletNamespace("15")+"selectDocumentLibrary"]=f.bind(o._selectFileEntry,o)},getElementsValue:function(){var o=this;return o.get("value")},_defInitToolbarFn:function(){var o=this;j.superclass._defInitToolbarFn.apply(o,arguments);o.toolbar.add({handler:f.bind(o._handleChooseEvent,o),label:'\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5'},1)},_handleChooseEvent:function(){var o=this;var p=Liferay.Util.addParams({groupId:themeDisplay.getScopeGroupId(),p_p_id:"15",p_p_state:"pop_up",struts_action:"/journal/select_document_library"},themeDisplay.getURLControlPanel());Liferay.Util.openWindow({title:'\u0388\u03b3\u03b3\u03c1\u03b1\u03c6\u03b1\u0020\u03ba\u03b1\u03b9\u0020\u006d\u0065\u0064\u0069\u0061',uri:p})},_selectFileEntry:function(q,r,s,p){var o=this;o.selectedTitle=s;o.selectedURL=q;o.set("value",m.stringify({groupId:themeDisplay.getScopeGroupId(),uuid:r,title:s,version:p}))},_syncFileLabel:function(s,r){var o=this;var q=o.get("contentBox");var p=q.one("a");if(!p){p=f.Node.create("<a></a>");q.prepend(p)}p.setAttribute("href",r);p.setContent(s)},_uiSetValue:function(r){var o=this;if(r){var q=o.selectedTitle;var p=o.selectedURL;if(q&&p){o._syncFileLabel(q,p)}else{b.Util.getFileEntry(r,function(t){var s=b.Util.getFileEntryURL(t);o._syncFileLabel(t.title,s)})}}else{o._syncFileLabel(k,k);r=k}o.elements.val(r)}}});var b=f.Component.create({ATTRS:{portletNamespace:{validator:g.isString,value:k},recordsetId:{validator:g.isNumber,value:0},structure:{validator:g.isArray,value:[]}},CSS_PREFIX:"",DATATYPE_VALIDATOR:{date:"date","double":"number",integer:"digits","long":"digits"},EXTENDS:f.DataTable.Base,NAME:f.DataTable.Base.NAME,TYPE_EDITOR:{checkbox:f.CheckboxCellEditor,"ddm-date":f.DateCellEditor,"ddm-decimal":f.TextCellEditor,"ddm-integer":f.TextCellEditor,"ddm-number":f.TextCellEditor,radio:f.RadioCellEditor,select:f.DropDownCellEditor,text:f.TextCellEditor,textarea:f.TextAreaCellEditor},prototype:{initializer:function(){var o=this;var p=o.get("recordset");p.on("update",o._onRecordUpdate,o)},addEmptyRows:function(p){var o=this;var s=o.get("columnset");var r=o.get("recordset");var q=b.buildEmptyRecords(p,n(s.keyHash));r.add(q);o._uiSetRecordset(r);o._fixPluginsUI()},updateMinDisplayRows:function(q,r){var o=this;r=(r&&f.bind(r,o))||d;var p=o.get("recordsetId");i.updateMinDisplayRows({recordsetId:p,minDisplayRows:q,serviceContext:m.stringify({scopeGroupId:themeDisplay.getScopeGroupId(),userId:themeDisplay.getUserId()})},r)},_editCell:function(u){var o=this;b.superclass._editCell.apply(o,arguments);var t=u.column;var q=u.record;var v=o.get("recordset");var s=o.get("recordsetId");var p=o.get("structure");var r=o.getCellEditor(q,t);if(r){r.set("record",q);r.set("recordset",v);r.set("recordsetId",s);r.set("structure",p)}},_normalizeRecordData:function(q){var o=this;var s=o.get("recordset");var p=o.get("structure");var r={};f.each(q,function(v,t,x){var w=b.findStructureFieldByAttribute(p,"name",t);if(w!==null){var u=w.type;if((u==="radio")||(u==="select")){if(!g.isArray(v)){v=e(v)}v=m.stringify(v)}}r[t]=o._normalizeValue(v)});delete r.classPK;delete r.displayIndex;delete r.recordId;return r},_normalizeValue:function(p){var o=this;return String(p)},_onRecordUpdate:function(r){var o=this;var q=o.get("recordsetId");var p=r.index;e.each(r.updated,function(t,s,v){var u=t.get("data");var w=o._normalizeRecordData(u);if(u.classPK>0){b.updateRecord(u.classPK,p,w,true)}else{b.addRecord(q,p,w,function(x){if(x.recordId>0){u.classPK=x.recordId}})}})}},addRecord:function(r,p,t,s){var o=this;s=(s&&f.bind(s,o))||d;var q=["long","long","int","java.util.Map<java.lang.String, java.io.Serializable>","com.liferay.portal.service.ServiceContext"];a.addRecord({groupId:themeDisplay.getScopeGroupId(),recordsetId:r,displayIndex:p,fieldsMap:m.stringify(t),serviceContext:m.stringify({scopeGroupId:themeDisplay.getScopeGroupId(),userId:themeDisplay.getUserId(),workflowAction:Liferay.Workflow.ACTION_PUBLISH}),serviceParameterTypes:m.stringify(q)},s)},buildDataTableColumnset:function(r,p,q){var o=this;e.each(r,function(D,x,w){var C=D.dataType;var B=D.label;var s=D.name;var z=D.type;D.key=s;var E=o.TYPE_EDITOR[z]||f.TextCellEditor;var t={elementName:s,validator:{rules:{}}};var y=D.required;var A;if(y){D.label+=" ("+'\u0391\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf\u03c2'+")"}if(z==="checkbox"){t.options={"true":'\u03a3\u03c9\u03c3\u03c4\u03cc'};t.inputFormatter=function(H){return String(H.length>0)};D.formatter=function(J){var I=J.record.get("data");var H=I[s];if(H==="true"){H='\u03a3\u03c9\u03c3\u03c4\u03cc'}else{if(H==="false"){H='\u039b\u03ac\u03b8\u03bf\u03c2'}}return H}}else{if(z==="ddm-date"){t.inputFormatter=function(J){var H=f.DataType.Date.parse(J);var I=k;if(H){I=H.getTime()}return I};D.formatter=function(J){var I=J.record.get("data");var H=I[s];if(H!==k){H=parseInt(H,10);H=f.DataType.Date.format(new Date(H))}return H}}else{if(z==="ddm-documentlibrary"){D.formatter=function(L){var K=L.record.get("data");var I=k;var J=K[s];if(J!==k){var H=b.Util.parseJSON(J);if(H.title){I=H.title}}return I}}else{if(z==="ddm-fileupload"){D.formatter=function(L){var K=L.record.get("data");var I=k;var J=K[s];if(J!==k){var H=b.Util.parseJSON(J);if(H.classPK){I=H.name}}return I};A=o.findStructureFieldByAttribute(p,"name",s);t.validator.rules[s]={acceptFiles:A.acceptFiles,requiredFields:true}}else{if((z==="radio")||(z==="select")){A=o.findStructureFieldByAttribute(p,"name",s);var G=f.DataType.Boolean.parse(A.multiple);var F=o.getCellEditorOptions(A.options);D.formatter=function(K){var J=K.record.get("data");var H=[];var I=J[s];e.each(I,function(L,N,M){H.push(F[L])});return H.join(", ")};t.inputFormatter=e;t.multiple=G;t.options=F}}}}}var v=o.DATATYPE_VALIDATOR[C];var u=t.validator.rules;u[s]=f.mix({required:y},u[s]);if(v){u[s][v]=true}if(q&&D.editable){D.editor=new E(t)}});return r},buildEmptyRecords:function(p,r){var o=this;var s=[];for(var q=0;q<p;q++){s.push(o.getRecordModel(r))}return s},findStructureFieldByAttribute:function(o,p,q){var r=null;e.some(o,function(t,s,u){r=t;return(r[p]===q)});return r},getCellEditorOptions:function(o){var p={};e.each(o,function(r,q,s){p[r.value]=r.label});return p},getRecordModel:function(q){var o=this;var p={};e.each(q,function(s,r,t){p[s]=k});return p},updateRecord:function(r,p,u,t,s){var o=this;s=(s&&f.bind(s,o))||d;var q=["long","int","java.util.Map<java.lang.String, java.io.Serializable>","boolean","com.liferay.portal.service.ServiceContext"];a.updateRecord({recordId:r,displayIndex:p,fieldsMap:m.stringify(u),merge:t,serviceContext:m.stringify({scopeGroupId:themeDisplay.getScopeGroupId(),userId:themeDisplay.getUserId(),workflowAction:Liferay.Workflow.ACTION_PUBLISH}),serviceParameterTypes:m.stringify(q)},s)}});b.Util={getFileEntry:function(p,q){var o=this;p=o.parseJSON(p);h.getFileEntryByUuidAndGroupId({uuid:p.uuid,groupId:p.groupId},q)},getFileEntryURL:function(q){var o=this;var p=[themeDisplay.getPathContext(),"documents",q.groupId,q.folderId,encodeURIComponent(q.title)];return p.join("/")},parseJSON:function(q){var o=this;var p={};try{p=m.parse(q)}catch(r){}return p}};b.TYPE_EDITOR["ddm-documentlibrary"]=j;Liferay.SpreadSheet=b},"",{requires:["aui-arraysort","aui-datatable","json","liferay-portlet-url"]});