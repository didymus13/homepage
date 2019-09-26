<template lang="pug">
  div
    hero(:hero="content.fields.hero")

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
          blockquote.mb-4 {{ content.fields.content }}

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
import _ from 'lodash'
import Hero from '@/components/hero'
import MainMenu from '@/components/MainMenu.vue'
import PostCard from '@/components/PostCard'
export default {
  components: {
    MainMenu,
    PostCard,
    Hero
  },

  async asyncData({app}) {
    const postsReq = app.$contentful.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishedAt',
      limit: 3
    })
    const skillsReq = app.$contentful.getEntries({ content_type: 'skill', order: '-fields.skillLevel' })
    const portfolioReq = app.$contentful.getEntries({ content_type: 'portfolio', order: 'fields.order' })
    const contentReq = app.$contentful.getEntries({ content_type: 'staticPage', 'fields.slug': 'homepage' })
    const [posts, skills, portfolio, content] = await Promise.all([postsReq, skillsReq, portfolioReq, contentReq])
    return {
      posts: posts.items,
      skills: skills.items,
      portfolio: portfolio.items,
      content: _.first(content.items)
    }
  },

  head() {
    return {
      title: _.get(this.content.fields, 'meta.fields.seoTitle'),
      meta: [
        {
          name: 'description',
          content: _.get(this.content.fields, 'meta.fields.description'),
        },
        {
          name: 'keywords',
          content:
            'developer, development, PHP, code, javascript, vuejs, mysql, database'
        },
        {
          property: 'og:title',
          content: _.get(this.content.fields, 'meta.fields.seoTitle'),
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: '//www.stephanedoiron.com' },
        {
          property: 'og:image',
          content: _.get(this.content.fields, 'meta.fields.ogImage.fields.file.url')
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  .full
    min-height: 66.66vh
</style>
