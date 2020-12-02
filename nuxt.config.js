/**
 * Nuxt.js 配置文件
 */
module.exports = {
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // console.log(routes)
      // 清除 Nuxt.js 基于 pages 目录生成的路由规则
      routes.splice(0)
      routes.push(...[{
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        children: [{
            path: '', // 默认子路由
            name: 'home',
            component: resolve(__dirname, 'pages/home/')
          },
          {
            path: '/login', // 默认子路由
            name: 'login',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/register', // 默认子路由
            name: 'register',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/profile/:username/:favorited?',
            name: 'profile',
            component: resolve(__dirname, 'pages/profile/')
          },
          {
            path: '/settings',
            name: 'settings',
            component: resolve(__dirname, 'pages/setting/')
          },
          {
            path: '/editor/:slug?',
            name: 'editor',
            component: resolve(__dirname, 'pages/editor/')
          },
          {
            path: '/article/:slug',
            name: 'article',
            component: resolve(__dirname, 'pages/article/')
          }
        ]
      }])
    }
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js',
    '~/plugins/routeguard.js'
  ]
}