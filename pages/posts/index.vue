<template lang="pug">
  div
    v-parallax(src="/posts_hero.jpg")
      h1.display-4(:class="{ 'display-1': $vuetify.breakpoint.xs }") Shop talk
      h3.display-1(:class="{ 'title': $vuetify.breakpoint.xs }") Random thoughts and musings

    v-container
      v-row
        v-col(v-for="post in posts" :key="post.sys.id" cols="12" sm="6" lg="4")
          post-card(:post="post")
</template>

<script>
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard
  },

  async asyncData({ app, payload }) {
    const res = await app.$contentful.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishedAt'
    })

    return {
      posts: res.items,
      meta: res.sys
    }
  }
}
</script>

<style media="screen" lang="sass" scoped>
  .bg-image
    background-image: linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.8)), url('/posts_hero.jpg')
</style>
