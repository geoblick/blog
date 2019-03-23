module.exports = {
  head: {
    title: 'Nuxtent Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxtent project' }
    ],
    script: [
      { src: '/js/vendor/jquery.min.js' },
      { src: '/js/vendor/popper.min.js' },
      { src: '/js/vendor/bootstrap.min.js' },
      { src: '/js/functions.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,600,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css'},
      { rel: 'stylesheet', href: '/css/main.css' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxtent']
  ],
  loading: { color: '#3B8070' }
}
