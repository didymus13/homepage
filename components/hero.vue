<template lang="pug">
b-jumbotron(
  fluid
  :text-variant="hero.fields.variant"
  class="bg-image full"
  :style="`background-image: url('${bgImage}')`"
)
  span(slot="header") {{ hero.fields.title }}
  span(slot="lead") {{ hero.fields.subtitle }}
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
      return (
        _.get(this.hero, 'fields.image.fields.file.url') +
        '?w=1920&h=600&fit=fill'
      )
    }
  }
}
</script>
