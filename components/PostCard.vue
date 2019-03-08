<template lang="pug">
  b-card(:title="post.title" :img-src="headerImage(post)" :img-alt="post.title" img-top)
    b-card-text {{ post.summary }}
    nuxt-link.text-uppercase.btn.btn-primary(:to="{ name: 'posts-slug', params: { slug: post.slug } }") Read more
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    post: { required: true, type: Object }
  },

  methods: {
    headerImage(post) {
      return _.replace(post.featured_image, 'https://cdn.buttercms.com/', 'https://fs.buttercms.com/resize=width:480,height:480/')
    }
  }
}
</script>
