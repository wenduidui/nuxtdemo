exports.ids = [1];
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return userInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unFollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'POST',
    url: '/api/users',
    params
  });
}; // 修改用户信息

const updateUserInfo = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
}; // 获取用户详情

const userInfo = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // 关注用户

const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注

const unFollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* fetch */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=2562f438&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n        "+_vm._s(tag)+"\n      ")+"</li>")}))+"</ul> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=2562f438&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=3cccd006&
var article_metavue_type_template_id_3cccd006_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
    name: 'profile',
    params: {
      username: _vm.article.author.username
    }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username
        }
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.article.author.username !== _vm.user.username)?[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.article.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.author.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+" ")+"<span class=\"counter\"></span></button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+"><i class=\"ion-heart\"></i>\n       \n      Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")]:[_c('nuxt-link',{attrs:{"to":{name: 'editor', params: {slug: _vm.article.slug}}}},[_c('button',{staticClass:"btn btn-sm btn-outline-secondary"},[_c('i',{staticClass:"ion-edit"}),_vm._v("\n         \n        Edit Article\n      ")])]),_vm._ssrNode("\n\n      \n    <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i>\n       \n      Delete Article\n    </button>")]],2)}
var article_metavue_type_template_id_3cccd006_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=3cccd006&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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



/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true; // 取消点赞

      if (article.favorited) {
        await Object(api_article["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    },

    async onFollow(article) {
      article.followDisabled = true;

      if (article.author.following) {
        // 取消关注
        await Object(user["d" /* unFollowUser */])(article.author.username);
        article.author.following = false;
      } else {
        // 关注
        await Object(user["a" /* followUser */])(article.author.username);
        article.author.following = true;
      }

      article.followDisabled = false;
    },

    // 删除文章
    async delArticle(article) {
      await Object(api_article["d" /* delArticle */])(article.slug);
      this.$router.push('/');
    }

  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_3cccd006_render,
  article_metavue_type_template_id_3cccd006_staticRenderFns,
  false,
  injectStyles,
  null,
  "5ab0f8f0"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=7369d51c&
var article_commentvue_type_template_id_7369d51c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment.body))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }}},[_vm._v(_vm._s(comment.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createAt,'MMM DD, YYYY')))+"</span> <span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>")],2)],2)})],2)}
var article_commentvue_type_template_id_7369d51c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=7369d51c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
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

/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      // 文章列表
      comment: {
        body: ''
      }
    };
  },

  mounted() {
    this.getCommentList();
  },

  methods: {
    async addComment() {
      const data = {
        comment: this.comment
      };
      await Object(api_article["a" /* addComments */])(data, this.article.slug);
      this.getCommentList();
    },

    async getCommentList() {
      const {
        data
      } = await Object(api_article["i" /* getComments */])(this.article.slug);
      this.comments = data.comments;
    },

    async deleteComment(id) {
      await Object(api_article["e" /* deleteComment */])(id, this.article.slug);
      this.getCommentList();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue



function article_comment_injectStyles (context) {
  
  
}

/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_7369d51c_render,
  article_commentvue_type_template_id_7369d51c_staticRenderFns,
  false,
  article_comment_injectStyles,
  null,
  "23e6cfa8"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["h" /* getArticleDetail */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    article.favoriteDisabled = false;
    article.followDisabled = false;
    return {
      article: article
    };
  },

  components: {
    articleMeta: article_meta,
    ArticleComments: article_comment
  },

  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "76f42076"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map