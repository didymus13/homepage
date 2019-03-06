<template lang="pug">
  div
    b-jumbotron(:header="post.title" fluid class="bg-image" text-variant="light" :style="style")
    b-container
      h1 {{ post.title }}
      div(v-html="post.body")
      footer.text-center.small
        p CMS facilities provided by <a href="https://buttercms.com" target="_blank">ButterCMS</a>
</template>

<script>
import _ from 'lodash'
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
  },

  computed: {
    style() {
      const url = _.replace(this.post.featured_image, 'https://cdn.buttercms.com/', 'https://fs.buttercms.com/resize=width:1920,height:640/')
      return {'background-image': `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${url})`}
    }
  }
}
</script>
