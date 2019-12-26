<template lang="pug">
  v-app#inspire
    v-navigation-drawer(v-model="drawer" app)
      main-menu

    v-app-bar(color="grey lighten-3" app)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-toolbar-title
        nuxt-link(to="/") Stéphane Doiron.com
      v-spacer
      v-btn(icon href="https://www.github.com/didymus13" target="_blank")
        v-icon mdi-github-circle
      v-btn(icon href="https://www.linkedin.com/in/stephane-doiron-88716932/" target="_blank")
        v-icon mdi-linkedin-box
      //- v-btn(icon href="https://twitter.com/sirdidymus" target="_blank")
      //-   v-icon mdi-twitter
      v-btn(icon :to="{ name: 'contact' }")
        v-icon mdi-email

    v-content
      nuxt.body-1

    v-footer(color="grey lighten-3" app)
      v-row(align="center" justify="center") Made with ❤ by Stephane Doiron.
</template>

<script>
import MainMenu from '~/components/MainMenu'
export default {
  components: {
    MainMenu
  },

  head: {
    link: [
      // {
      //   rel: 'stylesheet',
      //   href: 'https://use.fontawesome.com/releases/v5.4.2/css/all.css',
      //   integrity:
      //     'sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns',
      //   crossorigin: 'anonymous'
      // }
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' }
    ]
  },

  data: () => ({
    drawer: null
  })
}
</script>

<style media="screen" lang="scss" scoped>
.v-toolbar__title > a {
  text-decoration: none;
  color: rgba(0,0,0,0.54)
}
</style>
