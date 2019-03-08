<template lang="pug">
  div
    b-jumbotron(header="Shop talk" lead="Random thoughts and musings" fluid class="bg-image" text-variant="light")
    b-container
      b-row
        b-col(v-for="post in posts" :key="post.id" sm="6" lg="4")
          post-card(:post="post")
</template>

<script>
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard
  },

  async asyncData({ app, payload }) {
    if (payload) return { posts: payload.data , meta: payload.meta }

    const { data } = await app.$butter.post.list({page: 1})
    return {
      posts: data.data,
      meta: data.meta
    }
  }
}
</script>

<style media="screen" lang="sass" scoped>
  .bg-image
    background-image: linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.8)), url('/posts_hero.jpg')
</style>
