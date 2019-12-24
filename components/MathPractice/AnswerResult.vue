<template lang="pug">
  span
    v-icon(v-show="isCorrect" color="green" size="100") mdi-emoticon-happy
    v-icon(v-show="!isCorrect" color="red" size="100") mdi-emoticon-sad
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('math')

export default {
  computed: {
    ...mapGetters(['isCorrect'])
  }
}
</script>
