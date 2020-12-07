exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共文章列表

const getArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 发布文章

const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 修改文章

const updateArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'PUT',
    url: `/api/articles/${params.slug}`,
    data: {
      article: params.article
    }
  });
}; // 删除文章

const delArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 获取关注文章列表

const getFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 发布文章评论

const addComments = (data, slug) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 删除文章评论

const deleteComment = (id, slug) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=00f6f024&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,filed){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape(_vm._s(filed)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\""+(_vm._ssrAttr("disabled",_vm.disabled))+" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.tagValue)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.disabled))+" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=00f6f024&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',

  data() {
    return {
      disabled: false,
      errors: [],
      tagValue: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  mounted() {
    this.$route.params.slug && this.getArticleDetail(this.$route.params.slug);
  },

  methods: {
    addTag(e) {
      this.article.tagList.indexOf(this.tagValue) === -1 && this.article.tagList.push(this.tagValue);
      e.preventDefault();
    },

    delTag(index) {
      this.article.tagList.splice(index, 1);
    },

    async onSubmit(e) {
      this.disabled = true;

      try {
        let article;

        if (this.$route.params.slug) {
          // 修改
          const {
            data
          } = await Object(api_article["k" /* updateArticle */])({
            article: this.article,
            slug: this.$route.params.slug
          });
          article = data.article;
        } else {
          // 新增
          const {
            data
          } = await Object(api_article["c" /* createArticle */])({
            article: this.article
          });
          article = data.article;
        }

        this.errors = [];
        this.$router.push({
          name: 'article',
          params: {
            slug: article.slug
          }
        });
      } catch (err) {
        this.errors = err.response.data.errors;
      }

      this.disabled = false;
    },

    async getArticleDetail(slug) {
      const {
        data
      } = await Object(api_article["h" /* getArticleDetail */])(slug);
      const {
        title,
        description,
        body,
        tagList
      } = data.article;
      this.article = data.article;
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "212a92d8"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map