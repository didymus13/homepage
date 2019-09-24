const pkg = require('./package')
require('dotenv').config()
import _ from 'lodash'
const contentful = require("contentful");

module.exports = {
  mode: 'universal',

  // This is necessary for Netlify SSR
  env: {
    TRELLO_API: process.env.TRELLO_API,
    TRELLO_KEY: process.env.TRELLO_KEY,
    TRELLO_TOKEN: process.env.TRELLO_TOKEN,
    TRELLO_LISTS_PAINTING: process.env.TRELLO_LISTS_PAINTING,
    TRELLO_LISTS_FINISHED: process.env.TRELLO_LISTS_FINISHED,
    CONTENTFUL_ID: process.env.CONTENTFUL_ID,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN
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
      const client = contentful.createClient({
        space: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
      });
      const res = await client.getEntries({
        content_type: 'blogPost',
        order: '-fields.publishedAt'
      })

      const pages = [
        { route: '/posts', payload: res.items },
        { route: '/', payload: _.take(res.items, 3) }
      ]

      const posts = res.items.map((post) => {
        return {
           route: `/posts/${post.fields.slug}`,
           payload: post
        }
      })
      return _.concat(pages, posts)
    }
  }
}
