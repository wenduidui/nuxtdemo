import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c2437ae = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _6ccfdcc4 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _69a26a8a = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _63d8c08a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _26ad759e = () => interopDefault(import('../pages/setting' /* webpackChunkName: "" */))
const _83c1eb28 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _4aa303d7 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6c2437ae,
    children: [{
      path: "",
      component: _6ccfdcc4,
      name: "home"
    }, {
      path: "/login",
      component: _69a26a8a,
      name: "login"
    }, {
      path: "/register",
      component: _69a26a8a,
      name: "register"
    }, {
      path: "/profile/:username/:favorited?",
      component: _63d8c08a,
      name: "profile"
    }, {
      path: "/settings",
      component: _26ad759e,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _83c1eb28,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4aa303d7,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
