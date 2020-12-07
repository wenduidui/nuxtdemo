exports.ids = [6];
exports.modules = {

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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/index.vue?vue&type=template&id=54c178d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n                Update Settings\n              </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/setting/index.vue?vue&type=template&id=54c178d9&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const Cookie =  false ? undefined : undefined;

/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'SettingIndex',

  data() {
    return {
      user: {
        username: '',
        password: null,
        email: '',
        bio: '',
        image: ''
      }
    };
  },

  mounted() {
    let user = JSON.parse(Cookie.get('user'));
    this.user = user;
    this.user.password = null;
  },

  methods: {
    logout() {
      this.$store.commit('setUser', '');
      Cookie.remove('user');
      this.$router.push('/login');
    },

    async updateInfo() {
      const {
        data
      } = await Object(user["e" /* updateUserInfo */])({
        user: this.user
      }); // 保存用户登录状态

      this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失,我们需要把数据持久初始化

      Cookie.set('user', data.user);
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/setting/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/setting/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "fe546ec2"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map