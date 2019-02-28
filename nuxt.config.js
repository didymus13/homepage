const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',
  env: {
    TRELLO_API: 'NUXT_ENV_TRELLO_API',
    TRELLO_KEY: 'NUXT_ENV_TRELLO_KEY',
    TRELLO_LISTS_FINISHED: process.env.TRELLO_LISTS_FINISHED || 'NUXT_ENV_TRELLO_LISTS_FINISHED',
    TRELLO_LISTS_PAINTING: 'NUXT_ENV_TRELLO_LISTS_PAINTING',
    TRELLO_TOKEN: 'NUXT_ENV_TRELLO_TOKEN'
  },
  
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'pretty-checkbox/dist/pretty-checkbox.min.css',
    '@/assets/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/dotenv', { systemvars: true }],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  }
}
