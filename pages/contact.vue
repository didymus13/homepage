<template lang="html">
  <div class="">
    <b-jumbotron fluid header="Contact" class="bg-image" :style="{'background-image': 'url(/contact.jpg)'}" text-variant="light"></b-jumbotron>
    <b-container>

      <p>Do you want to get in touch with me? <strong>That's great news!</strong> All you need to do is just fill out
        the form below and I'll get in touch as soon as possible.</p>

      <b-alert show variant="info">
        <strong>Quick note:</strong> I am not looking for new freelance work at this time. I'll remove
        this message when my schedule opens up.
      </b-alert>

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
