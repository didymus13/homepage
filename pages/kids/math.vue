<template lang="pug">
  div
    v-parallax(src="/math.jpeg" height="300")
      h1.display-1 Math practice

    v-toolbar
      v-toolbar-items
        v-btn(:to="{name: 'kids-math-addition'}" icon)
          v-icon mdi-plus
        v-btn(:to="{name: 'kids-math-subtraction'}" icon)
          v-icon mdi-minus
        v-btn(:to="{name: 'kids-math-multiplication'}" icon)
          v-icon mdi-close
        v-btn(:to="{name: 'kids-math-division'}" icon)
          v-icon mdi-slash-forward
      v-spacer
      v-btn(:to="{name: 'kids-math-config'}" icon)
        v-icon mdi-settings

    v-container
      nuxt-child
</template>
