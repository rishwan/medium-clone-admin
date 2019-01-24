(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(e,t,a){e.exports=a.p+"static/media/octocat.dbc09740.png"},298:function(e,t,a){e.exports=a(754)},747:function(e,t,a){},752:function(e,t,a){},754:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),c=a(33),i=a(86),o=a(32),s=a(276),u=a(277),d=a.n(u),p=a(31),h=a(14),m=a(15),g=a(278),f=a.n(g),E=!1,b="http://localhost:8888/medium-clone/public/admin_api/",y={Accept:"application/json","Content-Type":"application/json"},v=a(337),O=function(){function e(t,a){Object(h.a)(this,e),this.commonHeaders=a,this.axios=f.a.create({baseURL:t}),this.axios.interceptors.request.use(function(e){e.headers.request_id=v();localStorage.getItem("token_expiry"),new Date;return e},function(e){return Promise.reject(e)}),this.axios.interceptors.response.use(function(e){return e},function(e){return e.response&&401===e.response.status?(console.log("Authentication error of 401"),Promise.reject(e.response)):e.response&&400===e.response.status?(console.log("validation error status of 400"),Promise.reject(e.response)):e.response&&404===e.response.status?Promise.reject(e.response):Promise.reject(e)})}return Object(m.a)(e,[{key:"checkTokenExpiry",value:function(e){e<new Date?console.log("yes, token has expired"):console.log("no, token is not expired")}},{key:"call",value:function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l={url:t,method:e,headers:Object.assign({},this.commonHeaders,n)};switch(e){case"PUT":case"POST":l.data=JSON.stringify(a)}return"function"===typeof r?r(this.axios.request(l)):this.axios.request(l)}},{key:"upload",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=new FormData;r.append(t,a);var l={headers:Object.assign({},this.commonHeaders,n)};return this.axios.post(e,r,l)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.call("GET",e,null,t)}},{key:"post",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.call("POST",e,t,a)}},{key:"put",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.call("PUT",e,t,a)}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.call("DELETE",e,null,t)}},{key:"setAuthToken",value:function(e){e&&(this.commonHeaders.Authorization="Bearer "+e)}}]),e}(),C=y;E&&(C.demo="demo");var F=new O(b,C),j=a(38),k="LOGIN_REQUEST",A="LOGIN_SUCCESS",S="LOGIN_FAILURE",T="LOGOUT_REQUEST",_="LOGOUT_SUCCESS";function R(e){return console.log("authReducer: loginError action called"),{type:S,payload:{isFetching:!1,isAuthenticated:!1,authFlag:!1,authMessage:e,authMessageClass:"red"}}}function I(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return console.log("loginUser action called"),console.log(e),function(t){t(function(e){return console.log("authReducer: requestLogin called."),{type:k,payload:{isFetching:!0,isAuthenticated:!1,user:{username:e.username},authFlag:!0,authMessage:"Verifying..."}}}(e)),F.post("login",{email:e.email,password:e.password}).then(function(e){if("ok"===e.data.status){console.log(e.data.result),F.setAuthToken(e.data.result.access_token),localStorage.setItem("id_token",e.data.result.access_token),localStorage.setItem("user",JSON.stringify(e.data.result.user));var a=new Date;a.setSeconds(a.getSeconds()+e.data.result.expires_in),localStorage.setItem("token_expiry",a),t((n=e.data.result.user,r=e.data.result.token,l=a,console.log("authReducer: loginSuccess action called"),{type:A,payload:{isFetching:!1,isAuthenticated:!0,token:r,tokenExpiry:l,user:n}})),t(Object(j.push)("/article/list")),console.log("login ok")}else console.log("invalid credentials");var n,r,l}).catch(function(e){console.log("*** api error ***"),console.log(e.status),console.log(e),console.log("*** eof. api error ***"),401===e.status?t(R({body:"Invalid credentials"})):t(R({body:"We are unable to log you in at this time.."}))})}}function L(){return function(e){e({type:T,payload:{isFetching:!0,isAuthenticated:!0}}),localStorage.removeItem("id_token"),localStorage.removeItem("user"),localStorage.removeItem("token_expiry"),e((console.log("authReducer: logout action called"),{type:_,payload:{isFetching:!1,isAuthenticated:!1}})),e(Object(j.push)("/login"))}}var w={isFetching:!1,isAuthenticated:!1,user:null,token:null,tokenExpiry:null,authFlag:!1,authMessage:"",authMessageClass:null};var U="FETCH_ARTICLES_REQUEST",x="FETCH_ARTICLES_SUCCESS",N="FETCH_ARTICLES_FAIL",D="FETCH_TOPICS_SUCESS",P="FETCH_TOPICS_FAIL",M="FETCH_TAGS_SUCCESS",q="FETCH_TAGS_FAIL",V="CREATE_ARTICLE_REQUEST",H="CREATE_ARTICLE_SUCCESS",G="CREATE_ARTICLE_FAIL",B="DELETE_ARTICLE_SUCCESS",J="DELETE_ARTICLE_FAIL",K="FETCH_ARTICLE_REQUEST",Q="FETCH_ARTICLE_SUCCESS",z="FETCH_ARTICLE_FAIL",W="UPDATE_ARTICLE_REQUEST",Y="UPDATE_ARTICLE_SUCCESS",X="UPDATE_ARTICLE_FAIL";function Z(){return console.log("updateArticleFail"),{type:X,payload:{isFetching:!1,article:null}}}function $(){return console.log("fetchArticleFail"),{type:z,payload:{isFetching:!1,article:null}}}function ee(){return console.log("deleteArticleFail"),{type:J,payload:{articles:null}}}function te(){return console.log("createArticleFail"),{type:G,payload:{isFetching:!1,article:null}}}function ae(){return console.log("fetchTagsFail"),{type:q,payload:{tags:null}}}function ne(){return console.log("fetchTopicsFail"),{type:P,payload:{topics:null}}}function re(){return console.log("fetchArticleRequest"),{type:U,payload:{isFetching:!0,articles:null}}}function le(){return console.log("fetchArticlesFail"),{type:N,payload:{isFetching:!1,articles:null,topics:[]}}}function ce(){return function(e){F.get("/tags/index").then(function(t){var a;"ok"===t.data.status?e((a=t.data,console.log("fetchTagsSuccess"),{type:M,payload:{tags:a.result.tags}})):e(ae())}).catch(function(t){console.log(t),e(ae())})}}function ie(){return function(e){e(re()),F.get("/articles/index").then(function(t){var a;console.log(t),"ok"===t.data.status?e((a=t.data,console.log("fetchArticlesSuccess"),{type:x,payload:{isFetching:!1,articles:a.result.articles}})):e(le())}).catch(function(t){console.log(t),e(le())})}}function oe(){return function(e){F.get("/topics/index").then(function(t){var a;"ok"===t.data.status?(console.log(t.data),e((a=t.data,console.log("fetchTopicsSuccess"),{type:D,payload:{topics:a.result.topics}}))):e(ne())}).catch(function(t){console.log(t),e(ne())})}}function se(e){return function(t){t((console.log("createArticleRequest"),{type:V,payload:{isFetching:!0}})),F.post("/article/store",e).then(function(e){var a;"ok"===e.data.status?(t((a=e.data,console.log("createArticleSuccess"),{type:H,payload:{isFetching:!1,article:a.result.article}})),t(Object(j.push)("/article/list"))):t(te())}).catch(function(e){console.log(e),t(te())})}}function ue(e,t){return function(a){try{var n=e.slice(),r=e.findIndex(function(e){return e.id===t});n.splice(r,1),F.get("article/delete/"+t).then(function(e){var t;"ok"===e.data.status?a((t=n,console.log("deleteArticleSuccess"),{type:B,payload:{articles:t}})):ee()}).catch(function(e){console.log(e),a(ee())})}catch(l){a(ee())}}}function de(e){return function(t){t(re()),F.get("/article/"+e).then(function(e){var a;"ok"===e.data.status?t((a=e.data,console.log("fetchArticleSuccess"),{type:Q,payload:{isFetching:!1,article:a.result.article}})):t($())}).catch(function(e){console.log(e),t($())})}}function pe(e){return function(t){t((console.log("updateArticleRequest"),{type:W,payload:{isFetching:!0,article:null}})),F.post("/article/update",e).then(function(a){"ok"===a.data.status?(t(function(e){return console.log("updateArticleSuccess"),{type:Y,payload:{isFetching:!1,article:e.result.article}}}(a.data)),t(de(e.article_id))):t(Z())}).catch(function(e){console.log(e),t(Z())})}}var he={isFetching:!1,articles:null,topics:null,tags:null,serverAlert:{type:null,msg:null,display:!1}};var me=Object(o.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var e=localStorage.getItem("user"),t=localStorage.getItem("id_token"),a=localStorage.getItem("token_expiry");return F.setAuthToken(t),{isFetching:!1,isAuthenticated:!!t,user:e?JSON.parse(e):null,token:t,tokenExpiry:a?new Date(a):null,authFlag:!1,authMessage:""}}(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(p.a)({},e,{isFetching:!0,isAuthenticated:!1,authMessage:t.authMessage});case S:return Object(p.a)({},e,{isFetching:!1,isAuthenticated:!1,authFlag:!1,authMessage:t.payload.authMessage,authMessageClass:t.payload.authMessageClass});case A:return Object(p.a)({},e,{isFetching:!1,isAuthenticated:!0,errorMessage:"",user:t.payload.user,token:t.payload.token,tokenExpiry:t.payload.tokenExpiry});case T:return Object(p.a)({},e,{isFetching:!0,isAuthenticated:!1});case _:return w;default:return e}},articlesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:case x:return Object(p.a)({},e,{isFetching:t.payload.isFetching,articles:t.payload.articles});case D:case P:return Object(p.a)({},e,{topics:t.payload.topics});case M:case q:return Object(p.a)({},e,{tags:t.payload.tags});case B:case J:return Object(p.a)({},e,{articles:t.payload.articles});case K:return Object(p.a)({},e,{isFetching:t.payload.isFetching});case Q:return Object(p.a)({},e,{article:t.payload.article,isFetching:t.payload.isFetching});case z:return Object(p.a)({},e,{isFetching:!1,article:t.payload.article});default:return e}}}),ge=d()(),fe=[s.a,Object(i.routerMiddleware)(ge)],Ee=o.d.apply(void 0,[o.a.apply(void 0,fe)].concat([])),be=Object(o.e)(Object(i.connectRouter)(ge)(me),{},Ee),ye=a(762),ve=a(768),Oe=a(19),Ce=a(18),Fe=a(20),je=a(756),ke=a(11),Ae=a(755),Se=a(770),Te=a(757),_e=a(88),Re=a(185),Ie=a.n(Re),Le=(Object(_e.connectedRouterRedirect)({redirectPath:"/login",redirectAction:j.routerActions.replace,authenticatedSelector:function(e){return null!==e.authReducer.user},wrapperDisplayName:"UserIsAuthenticated",predicate:function(e){return e.isAuthenticated}}),Ie()({authenticatedSelector:function(e){return null!==e.authReducer.user&&"admin"===e.authReducer.user.type},wrapperDisplayName:"VisibleOnlyAdmin"}),Ie()({authenticatedSelector:function(e){return null!==e.authReducer.user},wrapperDisplayName:"VisibleOnlyLogged"})),we=Object(_e.connectedRouterRedirect)({redirectPath:"/login",allowRedirectBack:!1,redirectAction:j.routerActions.replace,authenticatedSelector:function(e){return null!==e.authReducer.user&&"admin"===e.authReducer.user.type},wrapperDisplayName:"isAdmin"}),Ue=Object(_e.connectedRouterRedirect)({redirectPath:"/login",allowRedirectBack:!1,redirectAction:j.routerActions.replace,authenticatedSelector:function(e){return null===e.authReducer.user},wrapperDisplayName:"isGuest"}),xe=Object(_e.connectedRouterRedirect)({redirectPath:"/products",allowRedirectBack:!1,redirectAction:j.routerActions.replace,authenticatedSelector:function(e){return null===e.authReducer.user},wrapperDisplayName:"isLoggedIn"}),Ne=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(Oe.a)(this,Object(Ce.a)(t).call(this,e))).handleClick=function(e){a.setState({selectedKeys:e.keyPath})},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.onCollapse=function(e){console.log(e),a.setState({collapsed:e})},a.displayLogo=function(){return!0===a.state.collapsed?r.a.createElement(ke.a,{type:"appstore"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"branding"},r.a.createElement("p",null,"MEDIUMCLONE")))},a.state={collapsed:!1,selectedKeys:null},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(ve.a.Sider,{className:"sidebar-container",trigger:null,collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement("div",{className:"logo",onClick:this.toggle},this.displayLogo()),r.a.createElement("div",{className:"menu-container"},r.a.createElement(Ae.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["dashboard"],selectedKeys:this.state.selectedKeys,onClick:this.handleClick},r.a.createElement(Ae.a.Item,{key:"dashboard"},r.a.createElement(je.a,{to:"/dashboard"},r.a.createElement(ke.a,{type:"dashboard"}),r.a.createElement("span",null,"Dashboard ",r.a.createElement(Se.a,{dot:!1})))),r.a.createElement(Ae.a.Item,{key:"products"},r.a.createElement(je.a,{to:"/article/list"},r.a.createElement(ke.a,{type:"appstore"}),r.a.createElement("span",null,"Articles ",r.a.createElement(Se.a,{dot:!1})))),r.a.createElement(Ae.a.Item,{key:"logout"},r.a.createElement(je.a,{to:"/logout"},r.a.createElement(ke.a,{type:"appstore"}),r.a.createElement("span",null,"Logout ",r.a.createElement(Se.a,{dot:!1})))))),r.a.createElement("div",{className:"side-menu-trigger",onClick:this.toggle},r.a.createElement(ke.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})))}}]),t}(r.a.Component),De=Object(Te.a)(Le(Ne)),Pe=Le(function(e){function t(){return Object(h.a)(this,t),Object(Oe.a)(this,Object(Ce.a)(t).apply(this,arguments))}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(ve.a.Header,{style:{background:"#fff",padding:0}})}}]),t}(r.a.Component)),Me=a(766),qe=a(469),Ve=a(470),He=a(125),Ge=a(764),Be=a(767),Je=a(122),Ke=a(758),Qe=Ge.a.Item,ze=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(Oe.a)(this,Object(Ce.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(He.a)({},r,n))},a.handleSubmit=function(e){e.preventDefault(),console.log("Login Form submitted"),a.props.onSubmit(a.state)},a.state={email:null,password:null},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ge.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(Qe,null,e("userName",{rules:[{required:!0,message:"Please input your username"}]})(r.a.createElement(Be.a,{name:"email",onChange:this.handleInputChange,prefix:r.a.createElement(ke.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(Qe,null,e("password",{rules:[{required:!0,message:"Please input your password"}]})(r.a.createElement(Be.a,{name:"password",onChange:this.handleInputChange,prefix:r.a.createElement(ke.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(Je.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.props.isFetching},"Log in"),r.a.createElement(Ke.a,{type:"horizontal"}),r.a.createElement(Je.a,{className:"login-form-forgot"},"Forgot password?")))}}]),t}(r.a.Component),We=Ge.a.create()(ze),Ye=a(287),Xe=a.n(Ye),Ze=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(Oe.a)(this,(e=Object(Ce.a)(t)).call.apply(e,[this].concat(r)))).onLogin=function(e){console.log("Form submitted with Username:"+e.username+" and password: "+e.password),a.props.loginUser(e)},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-form-container"},r.a.createElement("div",{className:"login-form-content"},r.a.createElement(Me.a,{id:"login-form",bordered:!0,title:""},r.a.createElement(qe.a,null,r.a.createElement(Ve.a,{className:"login-form-left",span:10},r.a.createElement("img",{className:"login-splash",src:Xe.a,alt:"login-branding-logo"}),r.a.createElement("h1",{className:"login-form-branding"},"MediumClone"),r.a.createElement("p",{className:"login-form-branding-sub"},"...")),r.a.createElement(Ve.a,{className:"login-form-right",span:14},r.a.createElement(We,{onSubmit:this.onLogin,authMessage:this.props.authMessage,isAuthenticated:this.props.isAuthenticated,isFetching:this.props.isFetching,authMessageClass:this.props.authMessageClass})))))))}}]),t}(r.a.Component);var $e=Ue(Object(c.connect)(function(e){return{isFetching:e.authReducer.isFetching,isAuthenticated:e.authReducer.isAuthenticated,authMessage:e.authReducer.authMessage,authMessageClass:e.authReducer.authMessageClass,user:e.authReducer.user}},function(e){return Object(o.b)({loginUser:I,goToRegister:function(){return Object(j.push)("/register")}},e)})(xe(Ze))),et=a(759),tt=function(e){function t(){return Object(h.a)(this,t),Object(Oe.a)(this,Object(Ce.a)(t).apply(this,arguments))}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(L())}},{key:"render",value:function(){return r.a.createElement(et.a,{to:"/login"})}}]),t}(n.Component),at=Object(c.connect)()(tt),nt=a(761),rt=r.a.createContext({Articles:null}),lt=a(769),ct=a(760),it=a(763),ot=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(Oe.a)(this,Object(Ce.a)(t).call(this,e))).handleDelete=function(e){a.props.articles.deleteArticle(a.props.articles.articles,e),lt.a.warning("Article ID: "+e+" deleted")},a.state={columns:[{title:"",dataIndex:"thumbnail_url",key:"thumbnailUrl",width:10,render:function(e,t){return r.a.createElement("img",{src:t.feature_img_small_url,alt:t.title,height:32})}},{title:"ID",key:"id",dataIndex:"id"},{title:"Date",key:"date",dataIndex:"created_at"},{title:"Title",key:"title",dataIndex:"title"},{title:"Topic",key:"Topic",dataIndex:"topic.title"},{title:"operation",dataIndex:"operation",width:200,align:"right",render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je.a.Group,null,r.a.createElement(ct.a,{title:"Sure to delete?",onConfirm:function(){return a.handleDelete(t.id)}},r.a.createElement(Je.a,null,"Delete")),r.a.createElement(Je.a,null,r.a.createElement(je.a,{to:"/article/edit/"+t.id},"Edit"))))}}]},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("listing table")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Articles"),r.a.createElement(Ke.a,null),r.a.createElement(je.a,{to:"/article/create"},"Create"),r.a.createElement(Ke.a,null),r.a.createElement(it.a,{bordered:!0,loading:this.props.articles.isFetching,rowKey:function(e){return e.id},columns:this.state.columns,dataSource:this.props.articles.articles}))}}]),t}(r.a.PureComponent),st=r.a.forwardRef(function(e,t){return r.a.createElement(rt.Consumer,null,function(a){return r.a.createElement(ot,Object.assign({},e,{articles:a,ref:t}))})}),ut=function(e){function t(){return Object(h.a)(this,t),Object(Oe.a)(this,Object(Ce.a)(t).apply(this,arguments))}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticles()}},{key:"render",value:function(){return r.a.createElement(rt.Provider,{value:this.props},r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null)))}}]),t}(r.a.Component);var dt=Object(c.connect)(function(e){return{token:e.authReducer.token,isFetching:e.articlesReducer.isFetching,articles:e.articlesReducer.articles,serverAlert:e.articlesReducer.serverAlert}},function(e){return Object(o.b)({fetchArticles:ie,deleteArticle:ue},e)})(ut),pt=a(272),ht=a(123),mt=a(131),gt=a.n(mt),ft=(a(252),a(765)),Et=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(Oe.a)(this,Object(Ce.a)(t).call(this,e))).getBase64=function(e,t){var a=new FileReader;a.addEventListener("load",function(){return t(a.result)}),a.readAsDataURL(e)},a.beforeUpload=function(e){var t="image/jpeg"===e.type;t||lt.a.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||lt.a.error("Image must smaller than 2MB!"),t&&a},a.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&(a.getBase64(e.file.originFileObj,function(e){return a.setState({imageUrl:e,loading:!1})}),a.props.onUpload(e.file.response.result.filename)):a.setState({loading:!0})},a.onProgress=function(e,t){var a=e.percent;console.log("onProgress","".concat(a,"%"),t.name)},a.state={loading:!1},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement(ke.a,{type:this.state.loading?"loading":"plus"}),r.a.createElement("div",{className:"ant-upload-text"},"Upload")),t=this.state.imageUrl;return r.a.createElement(ft.a,{name:"article_image",listType:"picture-card",className:"article-uploader",showUploadList:!1,action:b+"article/image_upload",headers:{Authorization:"Bearer "+this.props.token},beforeUpload:this.beforeUpload,onChange:this.handleChange},t?r.a.createElement("img",{className:"article-upload-img",src:t,alt:"avatar"}):e)}}]),t}(r.a.Component),bt=Ge.a.Item,yt=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(Oe.a)(this,Object(Ce.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){console.log("Received values of form: ",t);var n={title:a.props.form.getFieldValue("title"),tag_line:a.props.form.getFieldValue("tag_line"),body:a.state.body,article_img:a.state.article_img,topic:a.props.form.getFieldValue("topic"),published:a.state.published,tags:a.props.form.getFieldValue("tags"),featured:a.state.featured};console.log(n),a.props.articles.createArticle(n),lt.a.success("Article saved")}})},a.onFileUpload=function(e){a.setState({article_img:e})},a.bodyChange=function(e){a.setState({body:e})},a.onPublishChange=function(e){a.setState({published:e.target.checked})},a.onFeatureChange=function(e){a.setState({featured:e.target.checked})},a.state={article_img:null,body:"",published:!1,featured:!1},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.articles.fetchTopics(),this.props.articles.fetchTags()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.articles,a=t.topics,n=t.tags;return a&&n?r.a.createElement(Ge.a,{onSubmit:this.handleSubmit},r.a.createElement(qe.a,{gutter:24},r.a.createElement(Ve.a,{span:17},r.a.createElement(bt,{label:"Title"},e("title",{rules:[{required:!0,message:"Article Title..."}]})(r.a.createElement(Be.a,{name:"article_title",placeholder:"Title..."}))),r.a.createElement(bt,{label:"Tag Line"},e("tag_line",{rules:[{required:!0,message:"Tag Line..."}]})(r.a.createElement(Be.a,{name:"tag_line",placeholder:"Tag Line..."}))),r.a.createElement(Ke.a,null),r.a.createElement(gt.a,{className:"quill-editor",defaultValue:this.state.text,onChange:this.bodyChange})),r.a.createElement(Ve.a,{span:7},r.a.createElement(bt,{label:"Topic"},e("topic",{rules:[{required:!0,message:"Select a topic..."}]})(r.a.createElement(pt.a,{name:"attribute_type",onChange:this.handleAttributeChange},a.map(function(e){return r.a.createElement(pt.a.Option,{key:e.id,value:e.id},e.title)})))),r.a.createElement(Ke.a,null),r.a.createElement(Et,{token:this.props.articles.token,onUpload:this.onFileUpload}),r.a.createElement(Ke.a,null),r.a.createElement(bt,{label:"Tags"},e("tags",{rules:[{required:!0,message:"apply some tags to this article"}]})(r.a.createElement(pt.a,{name:"tags",mode:"tags",onChange:this.handleAttributeChange,tokenSeparators:[","]},n.map(function(e){return r.a.createElement(pt.a.Option,{key:e.id,value:e.name},e.name)})))),r.a.createElement(Ke.a,null),r.a.createElement(ht.a,{onChange:this.onPublishChange},"Publish"),r.a.createElement(ht.a,{onChange:this.onFeatureChange},"Featured"),r.a.createElement(Ke.a,null),r.a.createElement(Je.a,{type:"primary",htmlType:"submit",className:"article-save-button"},"Save")))):r.a.createElement("div",null,"Loading")}}]),t}(r.a.Component),vt=Ge.a.create()(yt),Ot=r.a.forwardRef(function(e,t){return r.a.createElement(rt.Consumer,null,function(a){return r.a.createElement(vt,Object.assign({},e,{articles:a,ref:t}))})}),Ct=function(e){function t(){return Object(h.a)(this,t),Object(Oe.a)(this,Object(Ce.a)(t).apply(this,arguments))}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(rt.Provider,{value:this.props},r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,null)))}}]),t}(r.a.Component);var Ft=Object(c.connect)(function(e){return{token:e.authReducer.token,isFetching:e.articlesReducer.isFetching,serverAlert:e.articlesReducer.serverAlert,topics:e.articlesReducer.topics,tags:e.articlesReducer.tags}},function(e){return Object(o.b)({fetchTopics:oe,fetchTags:ce,createArticle:se},e)})(Ct),jt=Ge.a.Item,kt=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(Oe.a)(this,Object(Ce.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){console.log("Received values of form: ",t);var n={article_id:a.props.articles.article.id,title:a.props.form.getFieldValue("title"),tag_line:a.props.form.getFieldValue("tag_line"),body:a.state.body,article_img:a.state.article_img,topic:a.props.form.getFieldValue("topic"),published:a.state.published,tags:a.props.form.getFieldValue("tags"),featured:a.state.featured};console.log(n),a.props.articles.updateArticle(n),lt.a.success("Article saved")}})},a.onFileUpload=function(e){a.setState({article_img:e})},a.bodyChange=function(e){a.setState({body:e})},a.onPublishChange=function(e){a.setState({published:e.target.checked})},a.onFeatureChange=function(e){a.setState({featured:e.target.checked})},a.state={article_img:null,body:"",published:!1,featured:!1},a}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.articles,a=t.topics,n=t.tags,l=t.article;return a&&n&&l?r.a.createElement(Ge.a,{onSubmit:this.handleSubmit},r.a.createElement(qe.a,{gutter:24},r.a.createElement(Ve.a,{span:17},r.a.createElement(jt,{label:"Title"},e("title",{rules:[{required:!0,message:"Article Title..."}],initialValue:l.title})(r.a.createElement(Be.a,{name:"article_title",placeholder:"Title..."}))),r.a.createElement(jt,{label:"Tag Line"},e("tag_line",{rules:[{required:!0,message:"Tag Line..."}],initialValue:l.tag_line})(r.a.createElement(Be.a,{name:"tag_line",placeholder:"Tag Line..."}))),r.a.createElement(Ke.a,null),r.a.createElement(gt.a,{className:"quill-editor",defaultValue:l.body,onChange:this.bodyChange})),r.a.createElement(Ve.a,{span:7},r.a.createElement(jt,{label:"Topic"},e("topic",{rules:[{required:!0,message:"Select a topic..."}],initialValue:l.topic_id})(r.a.createElement(pt.a,{name:"attribute_type",onChange:this.handleAttributeChange},a.map(function(e){return r.a.createElement(pt.a.Option,{key:e.id,value:e.id},e.title)})))),r.a.createElement(Ke.a,null),r.a.createElement("div",{className:""},r.a.createElement("p",null,r.a.createElement("b",null,"Current Feature Image")),r.a.createElement("img",{className:"article-img-edit-preview",src:l.feature_img_url,alt:l.title})),r.a.createElement("p",null,r.a.createElement("b",null,"Upload a new Feature Image")),r.a.createElement(Et,{token:this.props.articles.token,onUpload:this.onFileUpload}),r.a.createElement(Ke.a,null),r.a.createElement(jt,{label:"Tags"},e("tags",{rules:[{required:!0,message:"apply some tags to this article"}],initialValue:l.current_tags})(r.a.createElement(pt.a,{name:"tags",mode:"tags",onChange:this.handleAttributeChange,tokenSeparators:[","]},n.map(function(e){return r.a.createElement(pt.a.Option,{key:e.id,value:e.name},e.name)})))),r.a.createElement(Ke.a,null),r.a.createElement(ht.a,{onChange:this.onPublishChange,defaultChecked:l.published},"Publish"),r.a.createElement(ht.a,{onChange:this.onFeatureChange,defaultChecked:l.featured},"Featured"),r.a.createElement(Ke.a,null),r.a.createElement(Je.a,{type:"primary",htmlType:"submit",className:"article-save-button"},"Save")))):r.a.createElement("div",null,"Loading")}}]),t}(r.a.Component),At=Ge.a.create()(kt),St=r.a.forwardRef(function(e,t){return r.a.createElement(rt.Consumer,null,function(a){return r.a.createElement(At,Object.assign({},e,{articles:a,ref:t}))})}),Tt=function(e){function t(){return Object(h.a)(this,t),Object(Oe.a)(this,Object(Ce.a)(t).apply(this,arguments))}return Object(Fe.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTopics(),this.props.fetchTags(),this.props.fetchArticle(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement(rt.Provider,{value:this.props},r.a.createElement(r.a.Fragment,null,r.a.createElement(St,null)))}}]),t}(r.a.Component);var _t=Object(c.connect)(function(e){return{token:e.authReducer.token,isFetching:e.articlesReducer.isFetching,serverAlert:e.articlesReducer.serverAlert,topics:e.articlesReducer.topics,tags:e.articlesReducer.tags,article:e.articlesReducer.article}},function(e){return Object(o.b)({fetchTopics:oe,fetchTags:ce,fetchArticle:de,updateArticle:pe},e)})(Tt),Rt=we(function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(nt.a,null,r.a.createElement(ye.a,{path:"".concat(t.path,"/list"),component:dt}),r.a.createElement(ye.a,{path:"".concat(t.path,"/edit/:id"),component:_t}),r.a.createElement(ye.a,{path:"".concat(t.path,"/create"),component:Ft}),r.a.createElement(ye.a,{component:function(){return r.a.createElement("div",null,"You lost?")}})))}),It=(a(747),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(ve.a,null,r.a.createElement(De,null),r.a.createElement(ve.a,null,r.a.createElement(Pe,null),r.a.createElement(ve.a.Content,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},r.a.createElement(ye.a,{exact:!0,path:"/",component:$e}),r.a.createElement(ye.a,{exact:!0,path:"/login",component:$e}),r.a.createElement(ye.a,{path:"/article",component:Rt}),r.a.createElement(ye.a,{exact:!0,path:"/logout",component:at}))))))}),Lt=(a(750),a(752),document.querySelector("#root"));Object(l.render)(r.a.createElement(c.Provider,{store:be},r.a.createElement(i.ConnectedRouter,{history:ge},r.a.createElement("div",null,r.a.createElement(It,null)))),Lt)}},[[298,2,1]]]);
//# sourceMappingURL=main.a196c128.chunk.js.map