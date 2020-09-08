<template lang="pug">
  div
    b-jumbotron.bg-image(:header="post.fields.title"
      fluid
      text-variant="light"
      :style="`background-image: url('${ post.fields.featuredImage.fields.file.url }?w=1920&h=600&fit=fill')`"
    )
    b-container
      div(v-html="$options.filters.render(post.fields.content)")
</template>

<script>
import { first } from 'lodash'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import hljs from 'highlight.js'

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => {
      const content = next(node.content)
      if (
        node.nodeType == 'paragraph' &&
        node.content.length === 1 &&
        node.content[0].marks.length === 1 &&
        node.content[0].marks[0].type === 'code'
      ) {
        const content = hljs.highlightAuto(node.content[0].value).value
        // return content;
        return `<pre><code class="hljs">${content}</code></pre>`
      }
      return `<p>${next(node.content)}</p>`
    }
  }
}

export default {
  head() {
    return {
      title: this.post.seo_title || this.post.fields.title,
      meta: [
        {
          name: 'description',
          content: this.post.fields.meta.fields.description
        },
        {
          type: 'og:title',
          content: this.post.seo_title || this.post.fields.title
        },
        {
          type: 'og:image',
          content: this.post.fields.meta.fields.ogImage.fields.file.url
        },
        {
          type: 'og:description',
          content: this.post.fields.meta.fields.description
        }
      ]
    }
  },

  async asyncData({ params, app, payload }) {
    if (payload) return { post: payload }
    const data = await app.$contentful.getEntries({
      'fields.slug': params.slug,
      content_type: 'blogPost',
      limit: 1
    })

    return {
      post: first(data.items)
    }
  },

  filters: {
    render(richText) {
      return documentToHtmlString(richText, richTextOptions)
    }
  }
}
</script>
