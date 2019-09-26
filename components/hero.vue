<template lang="pug">
b-jumbotron(
  fluid
  :text-variant="hero.fields.variant"
  class="bg-image full"
  :style="`background-image: url('${hero.fields.image.fields.file.url}')`"
)
  span(slot="header") {{ hero.fields.title }}
  span(slot="lead") {{ hero.fields.subtitle }}
  div(v-html="hero.fields.copy")
</template>

<script>
export default {
  props: {
    hero: { type: Object }
  }
}
</script>
