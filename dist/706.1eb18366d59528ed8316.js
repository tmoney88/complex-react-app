"use strict";(self.webpackChunkcomplex_react_app=self.webpackChunkcomplex_react_app||[]).push([[706],{1749:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var s=t(7294),r=t(7564),c=t(3983),l=t(195),n=t(3727),m=t(4140);const u=function(){const e=(0,s.useRef)(null),a=(0,s.useContext)(r.Z),t=(0,s.useContext)(c.Z),u=(0,s.useRef)(null),i=(0,s.useRef)(null),[o,h]=(0,l.x)({fieldValue:"",chatMessages:[]});return(0,s.useEffect)((()=>{a.isChatOpen&&(i.current.focus(),t({type:"clearUnreadChatCount"}))}),[a.isChatOpen]),(0,s.useEffect)((()=>(e.current=(0,m.ZP)("http://localhost:8080"),e.current.on("chatFromServer",(e=>{h((a=>{a.chatMessages.push(e)}))})),()=>e.current.disconnect())),[]),(0,s.useEffect)((()=>{u.current.scrollTop=u.current.scrollHeight,o.chatMessages.length&&!a.isChatOpen&&t({type:"incrementUnreadChatCount"})}),[o.chatMessages]),s.createElement("div",{id:"chat-wrapper",className:"chat-wrapper shadow border-top border-left border-right "+(a.isChatOpen?"chat-wrapper--is-visible":"")},s.createElement("div",{className:"chat-title-bar bg-primary"},"Chat",s.createElement("span",{onClick:()=>t({type:"closeChat"}),className:"chat-title-bar-close"},s.createElement("i",{className:"fas fa-times-circle"}))),s.createElement("div",{ref:u,id:"chat",className:"chat-log"},o.chatMessages.map(((e,t)=>e.username==a.user.username?s.createElement("div",{key:t,className:"chat-self"},s.createElement("div",{className:"chat-message"},s.createElement("div",{className:"chat-message-inner"},e.message)),s.createElement("img",{className:"chat-avatar avatar-tiny",src:e.avatar})):s.createElement("div",{key:t,className:"chat-other"},s.createElement(n.rU,{to:`/profile/${e.username}`},s.createElement("img",{className:"avatar-tiny",src:e.avatar})),s.createElement("div",{className:"chat-message"},s.createElement("div",{className:"chat-message-inner"},s.createElement(n.rU,{to:`/profile/${e.username}`},s.createElement("strong",null,e.username,": ")),e.message)))))),s.createElement("form",{onSubmit:function(t){t.preventDefault(),e.current.emit("chatFromBrowser",{message:o.fieldValue,token:a.user.token}),h((e=>{e.chatMessages.push({message:e.fieldValue,username:a.user.username,avatar:a.user.avatar}),e.fieldValue=""}))},id:"chatForm",className:"chat-form border-top"},s.createElement("input",{value:o.fieldValue,onChange:function(e){const a=e.target.value;h((e=>{e.fieldValue=a}))},ref:i,type:"text",className:"chat-field",id:"chatField",placeholder:"Type a message…",autoComplete:"off"})))}}}]);