<template>
  <div>
    <b-jumbotron fluid text-variant="light" class="bg-image full" style="background-image: url('/homepage-bg.jpg')">
      <span slot="header">Stéphane Doiron</span>
      <span slot="lead">PHP Backend developer with 2 decades of experience</span>
      <a href="https://www.github.com/didymus13" class="text-light">
        <span class="fab fa-fw fa-github fa-2x"/>
      </a>
      <a href="https://www.linkedin.com/in/stephane-doiron-88716932/" class="text-light">
        <span class="fab fa-fw fa-linkedin fa-2x"/>
      </a>
      <a href="https://twitter.com/sirdidymus" class="text-light">
        <span class="fab fa-fw fa-twitter fa-2x"/>
      </a>
      <a href="mailto:stephane@stephanedoiron.com" class="text-light">
        <span class="fas fa-fw fa-envelope fa-2x"/>
      </a>
    </b-jumbotron>
    <b-container>
      <b-row>
        <!-- Skills -->
        <b-col cols="12" sm="4" md="3" lg="2">
          <h3>Skills:</h3>
          <b-progress :value="90" variant="dark" show-progress/> API / REST / JSON
          <b-progress :value="85" variant="dark" show-progress/> PHP / Laravel
          <b-progress :value="85" variant="dark" show-progress/> MySQL
          <b-progress :value="85" variant="dark" show-progress/> Git
          <b-progress :value="75" variant="dark" show-progress/> VueJS
        </b-col>

        <!-- Blurb -->
        <b-col>
          <blockquote class="mb-4">
            Based in the Montreal, Canada area. Crafts web applications for E-Commerce, Media, and Advertising.
          </blockquote>

          <h3 class="mb-4">Things that I've worked on:</h3>
          <b-row class="mb-4">
            <b-col cols="6">
              <b-card title="PPN Source" class="mb-4">
                <p class="card-text">
                  Distributor of digital content for events for media, organizations or individuals from around the
                  world.
                </p>
                <p class="card-text"><strong>Role:</strong> Lead developer</p>
                <b-button href="https://www.ppnsource.com" variant="primary">Check it out!</b-button>
              </b-card>
            </b-col>
            <b-col cols="6">
              <b-card title="GetLeadkit.com">
                <p class="card-text">Real Estate Technology & Lead Generation for the Modern Agent</p>
                <p class="card-text"><strong>Role:</strong> Lead backend developer</p>
                <b-button href="https://www.getleadkit.com" variant="primary">Check it out!</b-button>
              </b-card>
            </b-col>
            <b-col cols="6">
              <b-card title="WeFundRaising.com">
                <p class="card-text">The revolution in crowd-funding.</p>
                <p class="card-text"><strong>Role:</strong> Lead developer</p>
                <b-button href="http://www.wefundraising.com" variant="primary">Check it out!</b-button>
              </b-card>
            </b-col>
            <b-col cols="6">
              <b-card title="AskMen.com">
                <p class="card-text">Experts in Men's Lifestyle For Over 18 Years.</p>
                <p class="card-text"><strong>Role:</strong> Web developer</p>
                <b-button href="https://www.askmen.com" variant="primary">Check it out!</b-button>
              </b-card>
            </b-col>
          </b-row>

          <!-- <h3>What's going on?</h3> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'
export default {
  components: {
    MainMenu
  },
  head: {
    title: 'StephaneDoiron.com',
    meta: [
      {
        name: 'description',
        content: 'PHP Developer with 20 years experience'
      },
      {
        name: 'keywords',
        content:
          'developer, development, PHP, code, javascript, vuejs, mysql, database'
      },
      {
        property: 'og:title',
        content: 'Stephane Doiron PHP Development'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.stephanedoiron.com' },
      {
        property: 'og:image',
        content: 'https://www.stephanedoiron.com/homepage-bg.jpg'
      }
    ]
  }
}
</script>

<style lang="sass">
  .bg-image
    background-position: center
    background-size: cover
  .full
    min-height: 66.66vh
</style>
