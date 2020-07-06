export default context => {
  if (context.app.localePath) {
    context.$auth.onRedirect(to => context.app.localePath(to))
  }
}
