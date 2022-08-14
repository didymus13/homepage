<template lang="pug">
div
  b-container
    div(v-html="markedContent")
</template>

<script>
import _ from 'lodash'
import { marked } from 'marked'

export default {
  computed: {
    markedContent() {
      return marked(this.content.fields.content)
    }
  },

  async asyncData({ app }) {
    const contentReq = app.$contentful.getEntries({
      content_type: 'staticPage',
      'fields.slug': 'next-campaign-choices'
    })
    const [content] = await Promise.all([contentReq])
    return {
      content: _.first(content.items)
    }
  }
}
</script>
