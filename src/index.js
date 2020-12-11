import packageName from 'depcheck-package-name'

export default function (moduleOptions) {
  this.addModule([
    packageName`@nuxtjs/auth`,
    {
      ...moduleOptions,
      plugins: [...(moduleOptions.plugins || []), require.resolve('./plugin')],
      rewriteRedirects: false,
    },
  ])
}
