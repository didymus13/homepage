<template lang="html">
  <span :class="{'text-success': isCorrect, 'text-danger': !isCorrect}">
    <span :class="{'fa-thumbs-up': isCorrect, 'fa-thumbs-down': !isCorrect}" class="fas fa-10x"/>
  </span>
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
