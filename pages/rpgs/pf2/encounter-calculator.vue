<template lang="pug">
  article
    header.jumbotron.jumbotron-fluid.text-white.bg-image(:style="bgImageStyle")
      .container
        h1.display-4 {{ title }}
        p.lead {{ description }}
    encounter-calculator
    footer.text-center 
      | Made with 
      span.fas.fa-heart 
      |
      | by
      |
      nuxt-link(:to="{ name: 'index' }") Stephane Doiron

</template>

<script>
import EncounterCalculator from '~/components/Pf2EncounterCalculator'
export default {
  components: { EncounterCalculator },

  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { type: 'og:title', content: this.title },
        { type: 'og:description', content: this.description },
        { type: 'og:image', content: this.imageUrl }
      ]
    }
  },

  data: () => ({
    title: 'Yet another Pathfinder 2nd edition encounter calculator',
    imageUrl: 'https://cdn.paizo.com/image/content/Secondary/PZO2201-Sample.jpg',
    description: 'An encounter calculator for Pathfinder 2nd edition. Use it to help build or modify encounters.'
  }),

  computed: {
    bgImageStyle() {
      return `background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${this.imageUrl})`
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-position: center;
  background-size: cover;
}
</style>