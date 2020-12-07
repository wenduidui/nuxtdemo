exports.ids = [2];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=027e8450&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> <button"+(_vm._ssrAttr("disabled",_vm.profile.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active: _vm.profile.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n         \n        "+_vm._s(_vm.profile.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.profile.username)+" ")+"<span class=\"counter\"></span></button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tabType === 'author'},attrs:{"exact":"","to":{
                    name: 'profile'
                  }},nativeOn:{"click":function($event){return _vm.getArticle($event)}}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tabType === 'favorited'},attrs:{"exact":"","to":{
                    name: 'profile',
                    params: {
                      favorited: 'favorites'
                    }
                  }},nativeOn:{"click":function($event){return _vm.getArticle($event)}}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: article.author.username}}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: article.author.username}}}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" <a href class=\"preview-link\"><h1>How to build webapps that scale</h1> <p>This is the description for the post.</p> <span>Read more...</span></a>")],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=027e8450&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'UserProfile',

  data() {
    return {
      profile: '',
      favorited: '',
      author: '',
      tabType: '',
      articles: '',
      articlesCount: 0
    };
  },

  async mounted() {
    const {
      data
    } = await Object(user["f" /* userInfo */])(this.$route.params.username);
    this.profile = data.profile;
    this.profile.followDisabled = false;
    this.getArticle();
  },

  methods: {
    async getArticle() {
      const favorited = this.$route.params.favorited;
      const page = 1;
      const limit = 20;
      const {
        data
      } = await Object(api_article["g" /* getArticle */])({
        limit,
        offset: (page - 1) * limit,
        author: favorited ? null : this.$route.params.username,
        favorited: favorited ? this.$route.params.username : null
      });
      const {
        articles,
        articlesCount
      } = data;
      articles.forEach(article => article.favoriteDisabled = false);
      this.articles = articles;
      this.articlesCount = articlesCount;
    },

    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    },

    async onFollow(article) {
      article.followDisabled = true;

      if (article.following) {
        // 取消关注
        await Object(user["d" /* unFollowUser */])(article.username);
        article.following = false;
      } else {
        // 关注
        await Object(user["a" /* followUser */])(article.username);
        article.following = true;
      }

      article.followDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a2acae90"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map