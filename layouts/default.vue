<template lang="pug">
  div
    main-menu
    nuxt
    footer.text-center.small.p-4
      | <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
</template>

<script>
import MainMenu from '~/components/MainMenu'
export default {
  components: {
    MainMenu
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.4.2/css/all.css',
        integrity:
          'sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns',
        crossorigin: 'anonymous'
      }
    ]
  }
}
</script>
