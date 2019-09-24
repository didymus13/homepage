<template lang="pug">
  div
    b-jumbotron(fluid text-variant="light" class="bg-image full" style="background-image: url('/homepage-bg.jpg')")
      span(slot="header") Stéphane Doiron
      span(slot="lead") PHP Backend developer with 2 decades of experience
      a.text-light(href="https://www.github.com/didymus13")
        span.fab.fa-fw.fa-github.fa-2x
      a.text-light(href="https://www.linkedin.com/in/stephane-doiron-88716932/")
        span.fab.fa-fw.fa-linkedin.fa-2x
      a.text-light(href="https://twitter.com/sirdidymus")
        span.fab.fa-fw.fa-twitter.fa-2x
      a.text-light(href="/contact")
        span.fas.fa-fw.fa-envelope.fa-2x

    b-container
      b-row
        // Skills
        b-col(cols="12" sm="4" md="3" lg="2")
          h3 Skills:
          div.mb-2(v-for="skill in skills")
            b-progress(variant="dark" show-progress :value="skill.fields.skillLevel")
            | {{ skill.fields.name }}

        // Blurb
        b-col
          blockquote.mb-4 Based in Montreal, Canada, and working in web development since 1998, Stéphane Doiron has
            |  worked with companies of varying scopes and portfolios, from small static page websites to large websites
            |  with multi-million monthly views. Specialized in backend development and APIs, he helps websites become
            |  more responsive and adaptable to today’s changing market realities.

          h3.mb-4 His code contributions can be found in such sites as:
          b-row.mb-4
            b-col(v-for="item in portfolio" :key="item.sys.id" sm="12" md="6")
              b-card.mb-4(:title="item.fields.title")
                p.card-text {{ item.fields.blurb }}
                p.card-text
                  strong Role:
                    | {{ item.fields.role }}
                b-button(:href="item.fields.url" variant="primary") Check it out!

    // Recent posts
    b-jumbotron(fluid header="Recent Shop Talk")
      b-row
        b-col(v-for="post in posts" :key="post.id")
          post-card(:post="post")
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import PostCard from '@/components/PostCard'
export default {
  components: {
    MainMenu,
    PostCard
  },

  async asyncData({app}) {
    const postsReq = app.$contentful.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishedAt',
      limit: 3
    })
    const skillsReq = app.$contentful.getEntries({ content_type: 'skill', order: '-fields.skillLevel' })
    const portfolioReq = app.$contentful.getEntries({ content_type: 'portfolio', order: 'fields.order' })
    const [posts, skills, portfolio] = await Promise.all([postsReq, skillsReq, portfolioReq])
    return {
      posts: posts.items,
      skills: skills.items,
      portfolio: portfolio.items
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
        content: 'Stephane Doiron: PHP Developer'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '//www.stephanedoiron.com' },
      {
        property: 'og:image',
        content: '//www.stephanedoiron.com/homepage-bg.jpg'
      }
    ]
  },
}
</script>

<style lang="sass">
  .bg-image
    background-position: center
    background-size: cover
  .full
    min-height: 66.66vh
</style>
