(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"k",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"j",(function(){return m})),r.d(e,"b",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"h",(function(){return h})),r.d(e,"i",(function(){return x})),r.d(e,"a",(function(){return O})),r.d(e,"e",(function(){return w}));var n=r(58),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},l=function(t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t.slug),data:{article:t.article}})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},x=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},O=function(data,t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},w=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(e,"/comments/").concat(t)})}},262:function(t,e,r){"use strict";r.r(e);r(20);var n=r(2),c=r(181),o={middleware:"authenticated",name:"EditorIndex",data:function(){return{disabled:!1,errors:[],tagValue:"",article:{title:"",description:"",body:"",tagList:[]}}},mounted:function(){this.$route.params.slug&&this.getArticleDetail(this.$route.params.slug)},methods:{addTag:function(t){-1===this.article.tagList.indexOf(this.tagValue)&&this.article.tagList.push(this.tagValue),t.preventDefault()},delTag:function(t){this.article.tagList.splice(t,1)},onSubmit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var article,r,data,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.disabled=!0,t.prev=1,!e.$route.params.slug){t.next=10;break}return t.next=5,Object(c.k)({article:e.article,slug:e.$route.params.slug});case 5:r=t.sent,data=r.data,article=data.article,t.next=15;break;case 10:return t.next=12,Object(c.c)({article:e.article});case 12:n=t.sent,o=n.data,article=o.article;case 15:e.errors=[],e.$router.push({name:"article",params:{slug:article.slug}}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),e.errors=t.t0.response.data.errors;case 22:e.disabled=!1;case 23:case"end":return t.stop()}}),t,null,[[1,19]])})))()},getArticleDetail:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,data,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(c.h)(t);case 2:n=r.sent,data=n.data,o=data.article,o.title,o.description,o.body,o.tagList,e.article=data.article;case 6:case"end":return r.stop()}}),r)})))()}}},l=r(21),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("ul",{staticClass:"error-messages"},[t._l(t.errors,(function(e,n){return t._l(e,(function(e,c){return r("li",{key:n+e},[t._v(t._s(n)+" "+t._s(e))])}))}))],2),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title",disabled:t.disabled},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?",disabled:t.disabled},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)",disabled:t.disabled},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.tagValue,expression:"tagValue",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags",disabled:t.disabled},domProps:{value:t.tagValue},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag(e)},input:function(e){e.target.composing||(t.tagValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,n){return r("span",{key:n,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(e){return t.delTag(n)}}}),t._v("\n                  "+t._s(e)+"\n                ")])})),0)]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{disabled:t.disabled}},[t._v("\n              Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);