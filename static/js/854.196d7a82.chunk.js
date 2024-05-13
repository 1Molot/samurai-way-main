"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[854],{8854:function(e,s,t){t.r(s),t.d(s,{default:function(){return B}});var i=t(5671),r=t(3144),o=t(136),n=t(2882),a=t(2791),l=t(885),c="ProfileInfo_descriptionBlock__AgFpy",u="ProfileInfo_mainPhoto__Aa5k7",d="ProfileInfo_button__4THij",f="ProfileInfo_contact__MVbxm",h="ProfileInfo_info__lC07w",p="ProfileInfo_contacts__3ILZQ",j=t(6443),x=t(184),m=function(e){var s=(0,a.useState)(!1),t=(0,l.Z)(s,2),i=t[0],r=t[1],o=(0,a.useState)(e.status),n=(0,l.Z)(o,2),c=n[0],u=n[1];(0,a.useEffect)((function(){u(e.status)}),[e.status]);return(0,x.jsxs)(x.Fragment,{children:[!i&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Status:"})," ",(0,x.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"---"})]}),i&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(c)},value:c})})]})},v=t(3556),b=t(6139),g=t(704),P=t(1117),_=t(9234),k=(0,g.Z)({form:"edit-profile"})((function(e){return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"save"})}),e.error&&(0,x.jsx)("div",{className:_.Z.formSummaryError,children:e.error}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),": ",(0,x.jsx)(b.Z,{placeholder:"Full name",name:"fullName",validate:[],component:P.I})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job"}),": ",(0,x.jsx)(b.Z,{placeholder:"",name:"lookingForAJob",validate:[],component:P.I,type:"checkbox"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),": ",(0,x.jsx)(b.Z,{placeholder:"My professional skills",name:"lookingForAJobDescription",validate:[],component:P.g})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),": ",(0,x.jsx)(b.Z,{placeholder:"About me",name:"aboutMe",validate:[],component:P.g})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.profile.contacts).map((function(e){return(0,x.jsx)("div",{className:f,children:(0,x.jsxs)("b",{children:[e,":",(0,x.jsx)(b.Z,{placeholder:e,name:"contacts."+e,validate:[],component:P.I})]})},e)}))]})]})})),y=function(e){e.profile.contacts;var s=Object.keys(e.profile.contacts).map((function(s){return(0,x.jsx)(I,{contactTitle:s,contactValue:e.profile.contacts[s]},s)}));return(0,x.jsxs)("div",{className:h,children:[e.isOwner&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:e.goToEditMode,children:"edit"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),": ",e.profile.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]}),(0,x.jsx)("div",{className:p,children:(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"}),":",s]})})]})},I=function(e){return(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("b",{children:e.contactTitle}),": ",e.contactValue]})},S=function(e){var s=(0,a.useState)(!1),t=(0,l.Z)(s,2),i=t[0],r=t[1];if(!e.profile)return(0,x.jsx)(j.Z,{});return(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:c,children:(0,x.jsxs)("div",{children:[(0,x.jsx)("img",{src:e.profile.photos.large||v,className:u}),e.isOwner&&(0,x.jsx)("label",{htmlFor:"load_avatar",children:(0,x.jsx)("div",{className:d,children:"image"})}),(0,x.jsx)("input",{id:"load_avatar",hidden:!0,type:"file",onChange:function(s){var t=s.currentTarget.files;t&&t.length&&e.savePhoto(t[0])}}),i?(0,x.jsx)(k,{initialValues:e.profile,profile:e.profile,onSubmit:function(s){e.saveProfile(s).then((function(){r(!1)}))}}):(0,x.jsx)(y,{goToEditMode:function(){r(!0)},profile:e.profile,isOwner:e.isOwner}),(0,x.jsx)(m,{status:e.status,updateStatus:e.updateStatus})]})})})},Z="MyPosts_postsBlock__r5Ws7",w="MyPosts_posts__ZJfWZ",N="Post_item__DLbbI",A=function(e){return(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("img",{src:"https://oper.ru/static/data/gallery/l1048753984.jpg"}),e.message,(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"like"})," ",e.likesCount]})]})},C=t(3079),F=(0,g.Z)({form:"ProfileAddNewPostForm"})((function(e){var s=(0,a.useMemo)((function(){return(0,C.D)(10)}),[]),t=function(s){e.handleSubmit(s),e.reset()};return(0,x.jsxs)("form",{onSubmit:t,children:[(0,x.jsx)("div",{children:(0,x.jsx)(b.Z,{component:P.g,name:"newPostText",placeholder:"Post Message",validate:[C.C,s],onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),t(e))}})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{type:"submit",children:"Add post"})})]})})),M=a.memo((function(e){var s=e.posts.map((function(e){return(0,x.jsx)(A,{message:e.message,likesCount:e.likesCont},e.id)}));return(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("h3",{children:"My posts"}),(0,x.jsx)(F,{onSubmit:function(s){e.addPost(s.newPostText)}}),(0,x.jsx)("div",{className:w,children:s})]})})),O=t(364),T=t(81),D=(0,O.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(s){e((0,T.Wl)(s))}}}))(M),J=function(e){return(0,x.jsxs)("div",{children:[(0,x.jsx)(S,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),(0,x.jsx)(D,{})]})},E=t(9271),U=t(2163),L=t(7781),V=function(e){(0,o.Z)(t,e);var s=(0,n.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=s.call.apply(s,[this].concat(o))).userId=null,e}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){this.userId=this.props.match.params.userId,this.userId||(this.userId=String(this.props.authorizedUserId),this.userId||this.props.history.push("login")),this.props.getFriendsProfile(),this.props.getUserProfile(this.userId),this.props.getStatus(this.userId)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)("div",{children:(0,x.jsx)(J,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),t}(a.Component),B=(0,L.qC)((0,O.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth,friends:e.profilePage.friends}}),{getUserProfile:T.et,getStatus:T.lR,updateStatus:T.Nf,getFriendsProfile:T._Z,savePhoto:T.Ju,saveProfile:T.Ii}),E.EN,U.e)(V)}}]);
//# sourceMappingURL=854.196d7a82.chunk.js.map