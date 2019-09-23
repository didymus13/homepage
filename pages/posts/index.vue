<template lang="pug">
  div
    b-jumbotron(header="Shop talk" lead="Random thoughts and musings" fluid class="bg-image" text-variant="light")
    b-container
      b-row
        b-col(v-for="post in posts" :key="post.sys.id" sm="6" lg="4")
          post-card(:post="post")
</template>

<script>
import PostCard from '@/components/PostCard'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

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
