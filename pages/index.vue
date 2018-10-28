<template>
  <div>
    <b-container>
      <div>
        <logo/>
        <h1 class="title">
          StephaneDoiron.com
        </h1>
        <h2 class="subtitle">
          My Homepage
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'
export default {
  components: {
    MainMenu
  }
}
</script>
