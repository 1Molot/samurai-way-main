"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[526],{6526:function(s,t,e){e.r(t),e.d(t,{default:function(){return F}});var r=e(5671),i=e(3144),n=e(136),u=e(2882),o=e(2791),a={},d=e(6443),l=e(885),p=e(184),c=function(s){var t=(0,o.useState)(!1),e=(0,l.Z)(t,2),r=e[0],i=e[1],n=(0,o.useState)(s.status),u=(0,l.Z)(n,2),a=u[0],d=u[1];(0,o.useEffect)((function(){d(s.status)}),[s.status]);return(0,p.jsxs)("div",{children:[!r&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"---"})}),r&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(s){d(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(a)},value:a})})]})},h=function(s){var t;if(!s.profile)return(0,p.jsx)(d.Z,{});var e=null!==(t=s.profile.photos.large)&&void 0!==t?t:"https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg";return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:a.descriptionBlock,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:e})}),(0,p.jsx)(c,{status:s.status,updateStatus:s.updateStatus})]})})},f="MyPosts_postsBlock__r5Ws7",j="MyPosts_posts__ZJfWZ",v="Post_item__DLbbI",m=function(s){return(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("img",{src:"https://oper.ru/static/data/gallery/l1048753984.jpg"}),s.message,(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:"like"})," ",s.likesCount]})]})},x=e(6139),g=e(704),P=e(3079),_=e(8918),I=(0,g.Z)({form:"ProfileAddNewPostForm"})((function(s){var t=(0,o.useMemo)((function(){return(0,P.D)(10)}),[]);return(0,p.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,p.jsx)("div",{children:(0,p.jsx)(x.Z,{component:_.g,name:"newPostText",placeholder:"Post Message",validate:[P.C,t]})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Add post"})})]})})),S=o.memo((function(s){var t=s.posts.map((function(s){return(0,p.jsx)(m,{message:s.message,likesCount:s.likesCont},s.id)}));return(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(I,{onSubmit:function(t){s.addPost(t.newPostText)}}),(0,p.jsx)("div",{className:j,children:t})]})})),k=e(364),y=e(81),Z=(0,k.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(t){s((0,y.Wl)(t))}}}))(S),w=function(s){return(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,p.jsx)(Z,{})]})},C=e(9271),b=e(7781),N=function(s){(0,n.Z)(e,s);var t=(0,u.Z)(e);function e(){var s;(0,r.Z)(this,e);for(var i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];return(s=t.call.apply(t,[this].concat(n))).userId=null,s}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){this.userId=this.props.match.params.userId,this.userId||(this.userId=String(this.props.authorizedUserId),this.userId||this.props.history.push("login")),this.props.getFriendsProfile(),this.props.getUserProfile(this.userId),this.props.getStatus(this.userId)}},{key:"componentDidUpdate",value:function(s,t,e){var r=this.props.match.params.userId;this.userId!==r&&(this.userId=r,this.props.getUserProfile(this.userId),this.props.getStatus(this.userId))}},{key:"render",value:function(){return(0,p.jsx)("div",{children:(0,p.jsx)(w,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}]),e}(o.Component),F=(0,b.qC)((0,k.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth,friends:s.profilePage.friends}}),{getUserProfile:y.et,getStatus:y.lR,updateStatus:y.Nf,getFriendsProfile:y._Z}),C.EN)(N)}}]);
//# sourceMappingURL=526.fcf0b68b.chunk.js.map