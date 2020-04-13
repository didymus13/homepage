<template lang="pug">
  .row
    .col
      button.btn.btn-success.btn-sm(@click="$emit('add')")
        span.fas.fa-plus
    .col(v-if="value.length > 1")
      button.btn.btn-danger.btn-sm(@click="$emit('remove')")
        span.fas.fa-trash
</template>

<script>
export default {
  props: {
    value: { type: Array, required: true }
  }
}
</script>