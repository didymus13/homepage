<template lang="pug">
  div
    b-jumbotron(header="Shop talk" lead="Random thoughts and musings" fluid)
    b-container
      b-row
        b-col(v-for="post in posts" :key="post.id")
          b-card(:title="post.title" :img-src="post.featured_image" :img-alt="post.title" img-top)
            b-card-text {{ post.summary }}
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }" class="text-uppercase">Read more</nuxt-link>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$butter.post.list({page: 1})
    return {
      posts: data.data,
      meta: data.meta
    }
  }
}
</script>
