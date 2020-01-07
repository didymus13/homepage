<template lang="html">
  <div class="">
    <b-jumbotron fluid
      :header="page.fields.hero.fields.title"
      class="bg-image"
      :style="{'background-image': `url(${ page.fields.hero.fields.image.fields.file.url })`}"
      :text-variant="page.fields.hero.fields.variant"
    />

    <b-container>
      <p>{{ page.fields.content }}</p>

      <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <b-form-group label="Your name">
          <b-form-input name="name" placeholder="Your name" />
        </b-form-group>

        <b-form-group label="Your E-mail">
          <b-form-input name="email" placeholder="foo@example.com" />
        </b-form-group>

        <b-form-group label="How can I help you?">
          <b-form-textarea name="request" placeholder="Your awesome idea" rows="10" />
        </b-form-group>

        <b-form-group label="Extra information">
          <b-form-textarea name="extra"
            placeholder="List websites that you like, similar examples or exta information that might help get the ball rolling"
            rows="5"
          />
        </b-form-group>

        <div data-netlify-recaptcha="true"></div>

        <b-button type="submit" variant="primary">Send in your request!</b-button>
      </form>
    </b-container>
  </div>
</template>

<script>
import first from 'lodash/first'
export default {
  head() {
    return {
      title: this.page.fields.meta.fields.seoTitle,
      meta: [
        { name: 'description', content: this.page.fields.meta.fields.drescription },
        { type: 'og:title', content: this.page.fields.meta.fields.seoTitle },
        { type: 'og:drescription', content: this.page.fields.meta.fields.drescription },
        { type: 'og:image', content: this.page.fields.meta.fields.ogImage.fields.file.url }
      ]
    }
  },

  async asyncData({ app }) {
    const res = await app.$contentful.getEntries({
      content_type: 'staticPage',
      'fields.slug': 'contact',
      limit: 1
    })

    return {
      page: first(res.items)
    }
  }
}
</script>
