<template lang="pug">
v-parallax(:src="bgImage")
  h1.display-4(:class="{ 'headline': $vuetify.breakpoint.xs }") {{ hero.fields.title }}
  h3.display-1(:class="{ 'subtitle-1': $vuetify.breakpoint.xs }") {{ hero.fields.subtitle }}
  div(v-if="!hero.fields.isMarkdown" v-html="hero.fields.copy")
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    hero: { type: Object, required: true }
  },

  computed: {
    bgImage() {
      return _.get(this.hero, 'fields.image.fields.file.url')
    }
  }
}
</script>
