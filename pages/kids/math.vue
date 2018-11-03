<template>
  <div>
    <b-jumbotron fluid header="Math practice"/>

    <nuxt-link :to="{name: 'kids-math-addition'}">Addition</nuxt-link>
    <nuxt-link :to="{name: 'kids-math-subtraction'}">Subtraction</nuxt-link>
    <nuxt-link :to="{name: 'kids-math-multiplication'}">Multiplication</nuxt-link>
    <nuxt-link :to="{name: 'kids-math-division'}">Division</nuxt-link>
    <nuxt-link :to="{name: 'kids-math-config'}">Config</nuxt-link>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
