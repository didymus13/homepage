<template>
  <div>
    <b-jumbotron text-variant="light"
                 fluid
                 header="Math practice"
                 class="bg-image"
                 style="background-image: url('/math.jpeg')"/>

    <b-nav justified>
      <b-nav-item><nuxt-link :to="{name: 'kids-math-addition'}">Addition</nuxt-link></b-nav-item>
      <b-nav-item><nuxt-link :to="{name: 'kids-math-subtraction'}">Subtraction</nuxt-link></b-nav-item>
      <b-nav-item><nuxt-link :to="{name: 'kids-math-multiplication'}">Multiplication</nuxt-link></b-nav-item>
      <b-nav-item><nuxt-link :to="{name: 'kids-math-division'}">Division</nuxt-link></b-nav-item>
      <b-nav-item><nuxt-link :to="{name: 'kids-math-config'}">Config</nuxt-link></b-nav-item>
    </b-nav>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="sass" scoped>
  .bg-image
    background-position: center
    background-size: cover

  .display-3
    text-shadow: 2px 2px 4px black
</style>
