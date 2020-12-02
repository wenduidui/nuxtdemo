export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
    if ((from.name === 'editor') && (from.name === to.name)) {
       return
    } else {
      next()
    }
  })
}