<template lang="html">
  <div>
    <b-progress :variant="variant" :value="result.correct" :max="result.total" :label="`${percentCorrect}%`"/>
    {{ result.correct }} / {{ result.total }}
  </div>
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
      if (this.isFail) return 'danger'
      if (this.isPass) return 'warning'
      if (this.isGreat) return 'success'
    }
  }
}
</script>
