<template lang="pug">
  div
    b-alert(v-if="progress < 0" variant="danger" show) One or more monsters are out of bounds, please keep their level from -4 to +4 relative to the party average level.
    .progress(v-else)
      .progress-bar(role="progress-bar" :style="`width: ${progress / max * 100}%`") {{ progress }} / {{ max }} XP
</template>

<script>
export default {
  props: {
    max: { type: Number, default: 100 },
    progress: { type: Number, required: true }
  }
}
</script>