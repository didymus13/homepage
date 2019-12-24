<template lang="pug">
  v-app#inspire
    v-navigation-drawer(v-model="drawer" app)
      main-menu

    v-app-bar(color="indigo" dark app)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Stéphane Doiron.com

    v-content
      nuxt.body-1

    v-footer(color="indigo" dark app) Made with ❤ by Stephane Doiron.
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
