<template lang="pug">
  div
    b-jumbotron.bg-image(:header="post.fields.title"
      fluid
      text-variant="light"
      :style="`background-image: url('${ post.fields.hero.fields.file.url }')`"
    )
    b-container
      div(v-html="$options.filters.render(post.fields.content)")
</template>

<script>
import _ from 'lodash'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  head() {
    return {
      title: this.post.seo_title || this.post.fields.title,
      meta: [
        { name: 'description', content: this.post.fields.meta.fields.description },
        { type: 'og:title', content: this.post.seo_title || this.post.fields.title },
        { type: 'og:image', content: this.post.fields.meta.fields.ogImage.fields.file.url },
        { type: 'og:description', content: this.post.fields.meta.fields.description },
      ]
    }
  },

  async asyncData({ params, app, payload }) {
    if (payload) return { post: payload }
    const data = await app.$contentful.getEntries({
      'fields.slug': params.slug,
      'content_type': 'blogPost',
      limit: 1
    })

    return {
      post: _.first(data.items)
    }
  },

  filters: {
    render(richText) {
      return documentToHtmlString(richText)
    }
  }
}
</script>
