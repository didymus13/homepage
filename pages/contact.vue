<template lang="html">
  <div class="">
    <b-jumbotron fluid header="Contact" class="bg-image"></b-jumbotron>
    <b-container>

      <form method="POST" data-netlify="true">
        <b-form-group label="What... is your name?">
          <b-form-input name="name"></b-form-input>
        </b-form-group>

        <b-form-group label="What... is your quest?">
          <b-form-input name="quest"></b-form-input>
        </b-form-group>

        <b-form-group label="What... is your favorite color?">
          <b-form-input name="color"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Answer me these questions three</b-button>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
}
</script>
