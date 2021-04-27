import packageName from 'depcheck-package-name'

export default async function (options) {
  options = { plugins: [], ...options }
  await this.addModule([
    packageName`@nuxtjs/auth`,
    {
      ...options,
      plugins: [...options.plugins, require.resolve('./plugin')],
      rewriteRedirects: false,
    },
  ])
}
