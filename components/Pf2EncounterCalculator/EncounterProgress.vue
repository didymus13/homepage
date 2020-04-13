<template lang="pug">
  .progress
    .progress-bar(role="progress-bar" :style="`width: ${progress / max * 100}%`") {{ progress }} / {{ max }}
</template>

<script>
export default {
  props: {
    max: { type: Number, default: 100 },
    progress: { type: Number, required: true }
  }
}
</script>