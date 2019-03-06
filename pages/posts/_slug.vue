<template lang="pug">
  div
    b-jumbotron(:header="post.title" fluid class="bg-image" text-variant="light" :style="{'background-image': `url(${post.featured_image})`}")
    b-container
      h1 {{ post.title }}
      div(v-html="post.body")
</template>

<script>
export default {
  async asyncData({params, app, payload}) {
    if (payload) return { post: payload }
    const { data } = await app.$butter.post.retrieve(params.slug)
    return {
      post: data.data
    }
  },

  head() {
    return {
      title: this.post.seo_title,
      meta: [
        { name: 'description', content: this.post.summary },
        { type: 'og:title', content: this.post.seo_title },
        { type: 'og:image', content: this.post.featured_image },
        { type: 'og:description', content: this.post.summary },
      ]
    }
  }
}
</script>
