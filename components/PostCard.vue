<template lang="pug">
  b-card(v-if="post.fields" :title="post.fields.title" :img-src="headerImage(post)" :img-alt="post.fields.title" img-top)
    b-card-text {{ post.fields.meta.fields.description }}
    nuxt-link.text-uppercase.btn.btn-primary(
      :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"
    ) Read more
</template>

<script>
import { get } from 'lodash'
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },

  methods: {
    headerImage(post) {
      return get(post, 'fields.featuredImage.fields.file.url') + '?w=640'
    }
  }
}
</script>
