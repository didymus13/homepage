<template lang="pug">
  div
    b-jumbotron(header="Shop talk" lead="Random thoughts and musings" fluid class="bg-image" text-variant="light")
    b-container
      b-row
        b-col(v-for="post in posts" :key="post.id" sm="6" lg="4")
          b-card(:title="post.title" :img-src="headerImage(post)" :img-alt="post.title" img-top)
            b-card-text {{ post.summary }}
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }" class="text-uppercase btn btn-primary">Read more</nuxt-link>
      footer.text-center.small
        p CMS facilities provided by <a href="https://buttercms.com" target="_blank">ButterCMS</a>
</template>

<script>
import _ from 'lodash'
export default {
  async asyncData({ app, payload }) {
    if (payload) return { posts: payload.data , meta: payload.meta }
    
    const { data } = await app.$butter.post.list({page: 1})
    return {
      posts: data.data,
      meta: data.meta
    }
  },

  methods: {
    headerImage(post) {
      return _.replace(post.featured_image, 'https://cdn.buttercms.com/', 'https://fs.buttercms.com/resize=width:480,height:480/')
    }
  }
}
</script>

<style media="screen" lang="sass" scoped>
  .bg-image
    background-image: linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.8)), url('/posts_hero.jpg')
</style>
