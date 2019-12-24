<template lang="pug">
  v-progress-linear(:color="variant" :value="percentCorrect" height="20")
    | {{ result.correct }} / {{ result.total }}
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('math')

export default {
  computed: {
    ...mapState(['result']),
    ...mapGetters(['percentCorrect']),
    isFail() {
      return this.percentCorrect < 60
    },
    isPass() {
      return this.percentCorrect >= 60 && this.percentCorrect < 80
    },
    isGreat() {
      return this.percentCorrect >= 80
    },
    variant() {
      if (this.isFail) return 'red'
      if (this.isPass) return 'yellow'
      if (this.isGreat) return 'green'
    }
  }
}
</script>
