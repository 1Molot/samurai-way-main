"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[168],{7951:function(e,s,a){a.r(s),a.d(s,{default:function(){return p},mapDispatchToProps:function(){return x}});var n=a(8281),i=a(2791),o={dialogs:"Dialogs_dialogs__+13Cb",dialogsItems:"Dialogs_dialogsItems__w8ndP",active:"Dialogs_active__FzRlu",messages:"Dialogs_messages__eSsCO",message:"Dialogs_message__nGwfn"},r=a(1523),t=a(184),d=function(e){var s="/dialogs/1"+e.id;return(0,t.jsx)("div",{className:o.dialog+" "+o.active,children:(0,t.jsxs)(r.OL,{to:s,children:[e.name," "]})})},l=function(e){return(0,t.jsx)("div",{className:o.dialog,children:e.message})},c=a(6139),u=a(704),g=a(1117),m=a(3079),f=(0,u.Z)({form:"dialogAddMessageForm"})((function(e){var s=(0,i.useMemo)((function(){return(0,m.D)(50)}),[]),a=function(s){e.handleSubmit(s),e.reset()};return(0,t.jsxs)("form",{onSubmit:a,children:[(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,{component:g.g,validate:[m.C,s],name:"newMessageBody",placeholder:"Enter your message",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a(e))}})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{type:"submit",children:"Send"})})]})})),_=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return(0,t.jsx)(d,{name:e.name,id:e.id},e.id)})),n=s.messages.map((function(e){return(0,t.jsx)(l,{message:e.message},e.id)}));return(0,t.jsxs)("div",{className:o.dialogs,children:[(0,t.jsx)("div",{className:o.dialogsItems,children:a}),(0,t.jsx)("div",{className:o.messages,children:(0,t.jsx)("div",{children:n})}),(0,t.jsx)(f,{onSubmit:function(s){e.sedMessage(s.newMessageBody)}})]})},h=a(364),v=a(7781),j=a(2163),x=function(e){return{sedMessage:function(s){e((0,n.z8)(s))}}},p=(0,v.qC)((0,h.$j)((function(e){return{dialogsPage:e.dialogsPage}}),x),j.e)(_)}}]);
//# sourceMappingURL=168.005bf189.chunk.js.map