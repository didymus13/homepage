<template lang="pug">
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
      <a href="/contact" class="text-light">
        <span class="fas fa-fw fa-envelope fa-2x"/>
      </a>
    </b-jumbotron>

    <b-container>
      <b-row>
        <!-- Skills -->
        <b-col cols="12" sm="4" md="3" lg="2">
          <h3>Skills:</h3>
          <div v-for="skill in skills" class="mb-2">
            <b-progress :value="skill.percent" variant="dark" show-progress /> {{ skill.label }}
          </div>
        </b-col>

        <!-- Blurb -->
        <b-col>
          blockquote.mb-4 Based in Montreal, Canada, and working in web development since 1998, Stéphane Doiron has worked with companies of varying scopes and portfolios, from small static page websites to large websites with multi-million monthly views. Specialized in backend development and APIs, he helps websites become more responsive and adaptable to today’s changing market realities.

          <h3 class="mb-4">His code contributions can be found in such sites as:</h3>
          <b-row class="mb-4">
            <b-col sm="12" md="6" v-for="item,i in portfolio" :key="i">
              <b-card :title="item.title" class="mb-4">
                <p class="card-text">{{ item.content }}</p>
                <p class="card-text"><strong>Role:</strong> {{ item.role }}</p>
                <b-button :href="item.url" variant="primary">Check it out!</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <!-- Recent posts  -->
    b-jumbotron(fluid header="Recent Shop Talk")
      b-row
        b-col(v-for="post in posts" :key="post.id")
          post-card(:post="post")
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import PostCard from '@/components/PostCard'
export default {
  components: {
    MainMenu,
    PostCard
  },

  async asyncData({app, payload}) {
    if (payload) return { posts: payload }
    let res = await app.$butter.post.list({ page: 1, page_size: 3 })
    return {
      posts: res.data.data
    }
  },

  head: {
    title: 'StephaneDoiron.com',
    meta: [
      {
        name: 'description',
        content: 'PHP Developer with 20 years of experience'
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
  },
  data() {
    return {
      portfolio: [
        {
          title: 'PPN Source',
          content: 'Distributor of digital content for events for media, organizations or individuals from around the world.',
          role: 'Lead developer',
          url: 'https://www.ppnsource.com/'
        },
        {
          title: 'GetLeadkit.com',
          content: 'Real Estate Technology & Lead Generation for the Modern Agent.',
          role: 'Lead backend developer',
          url: 'https://www.getleadkit.com/'
        },
        // {
        //   title: 'WeFundRaising.com',
        //   content: 'The revolution in crowd-funding.',
        //   role: 'Lead developer',
        //   url: 'http://www.wefundraising.com/'
        // },
        {
          title: 'AskMen.com',
          content: "Experts in Men's Lifestyle For Over 18 Years.",
          role: 'Web developer',
          url: 'https://www.askmen.com/'
        },
        {
          title: 'TRC.ca',
          content: "Truth and Reconciliation commission of Canada",
          role: 'Web developer',
          url: 'http://www.trc.ca/'
        },
      ],
      skills: [
        { label: 'API / REST / JSON', percent: 90 },
        { label: 'PHP / Laravel', percent: 85 },
        { label: 'MySQL', percent: 85 },
        { label: 'Git', percent: 85 },
        { label: 'PostgreSQL', percent: 80 },
        { label: 'VueJS', percent: 75 }
      ]
    }
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
