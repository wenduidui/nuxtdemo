(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"k",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"j",(function(){return d})),r.d(e,"b",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"h",(function(){return h})),r.d(e,"i",(function(){return O})),r.d(e,"a",(function(){return C})),r.d(e,"e",(function(){return _}));var n=r(58),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},l=function(t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t.slug),data:{article:t.article}})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},O=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},C=function(data,t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},_=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(e,"/comments/").concat(t)})}},182:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return m})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(58),c=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},o=function(t){return Object(n.b)({method:"POST",url:"/api/users",params:t})},l=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},m=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},d=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},256:function(t,e,r){"use strict";r.r(e);r(20);var n=r(2),c=r(181),o=r(200),l=r.n(o),m=(r(75),r(31),r(32),r(13),r(59),r(45)),d=r(182),f=r(40);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={props:{article:{type:Object,required:!0}},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["user"])),methods:{onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(c.f)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(c.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()},onFollow:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.followDisabled=!0,!article.author.following){t.next=7;break}return t.next=4,Object(d.d)(article.author.username);case 4:article.author.following=!1,t.next=10;break;case 7:return t.next=9,Object(d.a)(article.author.username);case 9:article.author.following=!0;case 10:article.followDisabled=!1;case 11:case"end":return t.stop()}}),t)})))()},delArticle:function(article){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(article.slug);case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},O=r(21),C=Object(O.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),t.article.author.username!==t.user.username?[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{disabled:t.article.followDisabled},on:{click:function(e){return t.onFollow(t.article)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n       \n      "+t._s(t.article.author.following?"Unfollow":"Follow")+" "+t._s(t.article.author.username)+" "),r("span",{staticClass:"counter"})]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},attrs:{disabled:t.article.favoriteDisabled},on:{click:function(e){return t.onFavorite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])]:[r("nuxt-link",{attrs:{to:{name:"editor",params:{slug:t.article.slug}}}},[r("button",{staticClass:"btn btn-sm btn-outline-secondary"},[r("i",{staticClass:"ion-edit"}),t._v("\n         \n        Edit Article\n      ")])]),t._v("\n\n      \n    "),r("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.delArticle(t.article)}}},[r("i",{staticClass:"ion-trash-a"}),t._v("\n       \n      Delete Article\n    ")])]],2)}),[],!1,null,null,null).exports,_={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comments:[],comment:{body:""}}},mounted:function(){this.getCommentList()},methods:{addComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={comment:t.comment},e.next=3,Object(c.a)(data,t.article.slug);case 3:t.getCommentList();case 4:case"end":return e.stop()}}),e)})))()},getCommentList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.i)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},deleteComment:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(c.e)(t,e.article.slug);case 2:e.getCommentList();case 3:case"end":return r.stop()}}),r)})))()}}},j={name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.h)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),article.favoriteDisabled=!1,article.followDisabled=!1,e.abrupt("return",{article:article});case 11:case"end":return e.stop()}}),e)})))()},components:{articleMeta:C,ArticleComments:Object(O.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form",on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"comment.body"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}})]),t._v(" "),t._m(0)]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username)+"\n      ")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createAt,"MMM DD, YYYY")))]),t._v(" "),r("span",{staticClass:"mod-options",on:{click:function(r){return t.deleteComment(e.id)}}},[r("i",{staticClass:"ion-trash-a"})])],1)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-footer"},[e("img",{staticClass:"comment-author-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}}),this._v(" "),e("button",{staticClass:"btn btn-sm btn-primary"},[this._v("\n        Post Comment\n      ")])])}],!1,null,null,null).exports},data:function(){return{}},methods:{}},w=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline"},[t._v("\n        "+t._s(e)+"\n      ")])})),0),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=w.exports}}]);