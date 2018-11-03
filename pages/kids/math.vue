<template>
  <div>
    <b-jumbotron fluid header="Math practice"/>

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
