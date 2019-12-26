<template lang="html">
  <div>
    <v-parallax src="/contact.jpg">
      <h1 class="display-1">Contact</h1>
    </v-parallax>

    <v-container>
      <v-alert type="info">
        Quick note: I am not looking for new freelance work at this time. I'll
        remove this message when my schedule opens up.
      </v-alert>

      <p>
        Do you want to get in touch with me? <strong>That's great news!</strong>
        All you need to do is just fill out the form below and I'll get in
        touch as soon as possible.
      </p>

      <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <v-row>
          <v-col>
            <v-text-field label="Your name" name="name" outlined />
          </v-col>
          <v-col>
            <v-text-field label="Your e-mail address" name="email" outlined />
          </v-col>
        </v-row>

        <v-textarea label="How can I help you?" placeholder="Your awesome idea" name="request" rows="10" outlined />
        <v-textarea label="Extra information" placeholder="List websites that you like, similar examples or exta information that might help get the ball rolling" name="extra" rows="5" outlined />
        <div data-netlify-recaptcha="true" />
        <v-btn color="blue" type="submit" dark> Send in your request! </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Contact me!',
      meta: [
        { name: 'description', content: "Do you want to get in touch with me? All you need to do is just fill out the this form and I'll get in touch as soon as possible." },
        { type: 'og:title', content: 'Contact me!' },
        { type: 'og:drescription', content: "Do you want to get in touch with me? All you need to do is just fill out the this form and I'll get in touch as soon as possible." },
      ]
    }
  }
</script>
