<template lang="pug">
  div
    hero(:hero="content.fields.hero")

    v-container.fill-height(fluid)
      v-row
        v-col(cols="12" md="4" lg="3")
          h3.subtitle-1.font-weight-bold Skills:
          div.mb-2(v-for="skill in skills")
            .overline {{ skill.fields.name }}
            v-progress-linear(:value="skill.fields.skillLevel" color="blue")

        v-col
          p {{ content.fields.content }}

          h3.subtitle-1.font-weight-bold His code contributions can be found in such sites as:
          v-row
            v-col(v-for="item in portfolio" :key="item.sys.id" cols="12" sm="6")
              v-card.fill-height(:href="item.fields.url" hover)
                v-card-title {{ item.fields.title }}
                v-card-text {{ item.fields.blurb }}

    v-container.blue.accent-1
      // Recent posts
      h2.headline.white--text Recent Shop talk
      v-row(justify="center")
        v-col(v-for="post in posts" :key="post.id" cols="12" sm="6" md="4")
          post-card.fill-height(:post="post")
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
