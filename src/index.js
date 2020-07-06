import getPackageName from 'get-package-name'

export default function (moduleOptions) {
  this.addModule([
    getPackageName(require.resolve('@nuxtjs/auth')),
    {
      ...moduleOptions,
      plugins: [...(moduleOptions.plugins || []), require.resolve('./plugin')],
      rewriteRedirects: false,
    },
  ])
}
