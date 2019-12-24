<template lang="pug">
  v-card(v-if="post.fields" :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }" hover)
    v-img.white--text.align-end(
      :src="`${post.fields.featuredImage.fields.file.url}?w=640`"
       aspect-ratio="2"
       gradient="to top, rgba(0,0,0,0.5), rgba(0,0,0,0)"
    )
      v-card-title {{ post.fields.meta.fields.seoTitle }}
    v-card-text {{ post.fields.meta.fields.description }}
</template>

<script>
import { get } from 'lodash'
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  }
}
</script>
