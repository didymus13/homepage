<template lang="pug">
  div
    v-parallax(src="/contact.jpg")
      h1.display-1 Contact

    v-container
      v-alert(type="info")
        | Quick note: I am not looking for new freelance work at this time. I'll
        | remove this message when my schedule opens up.

      p
        | Do you want to get in touch with me? <strong>That's great news!</strong>
        | All you need to do is just fill out the form below and I'll get in
        | touch as soon as possible.

      form(name="contact" method="POST" netlify netlify-recaptcha)
        v-row
          v-col
            v-text-field(label="Your name" name="name" outlined)
          v-col
            v-text-field(label="Your e-mail address" name="email" outlined)
        v-textarea(label="How can I help you?" placeholder="Your awesome idea" name="request" rows="10" outlined)
        v-textarea(label="Extra information" placeholder="List websites that you like, similar examples or exta information that might help get the ball rolling" name="extra" rows="5" outlined)
        div(netlify-recaptcha)
        v-btn(color="blue" type="submit" dark) Send in your request!
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
