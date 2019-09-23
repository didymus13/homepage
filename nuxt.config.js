const pkg = require('./package')
require('dotenv').config()
import butterCMS from 'buttercms'
import _ from 'lodash'

module.exports = {
  mode: 'universal',

  // This is necessary for Netlify SSR
  env: {
    TRELLO_API: process.env.TRELLO_API,
    TRELLO_KEY: process.env.TRELLO_KEY,
    TRELLO_TOKEN: process.env.TRELLO_TOKEN,
    TRELLO_LISTS_PAINTING: process.env.TRELLO_LISTS_PAINTING,
    TRELLO_LISTS_FINISHED: process.env.TRELLO_LISTS_FINISHED,
    CMS_TOKEN: process.env.CMS_TOKEN
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
    '@/plugins/butterCMS.js',
    '@/plugins/contentful'
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

  bootstrapVue: {
    bootstrapCSS: true, // or `css`
    bootstrapVueCSS: true // or `bvCSS`
  },

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
  },

  generate: {
    async routes() {
      const butter = butterCMS(process.env.CMS_TOKEN)
      const { data } = await butter.post.list()
      const pages = [
        { route: '/posts', payload: data },
        { route: '/', payload: _.take(data.data, 3) }
      ]
      const posts = data.data.map((post) => {
        return {
           route: `/posts/${post.slug}`,
           payload: post
        }
      })
      return _.concat(pages, posts)
    }
  }
}
