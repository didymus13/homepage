<template lang="pug">
  div Party Average Level: {{ averageLevel }}
    .row.form-group(v-for="(group, i) in value" :key="i")
      .col
        label # Players
        input.form-control(v-model.number="group.num" type="number" placeholder="#")
      .col
        label Level
        input.form-control(v-model.number="group.level" type="number" placeholder="Level")
      .col
        row-manager(:value="value" @add="handleAdd()" @remove="handleRemove(i)")
</template>

<script>
import RowManager from '~/components/Pf2EncounterCalculator/RowManager'
export default {
  components: { RowManager },

  props: {
    value: { type: Array, required: true },
    numPlayers: { type: Number, required: true },
    averageLevel: { type: Number, required: true }
  },

  watch: {
    value(value) {
      this.$emit('input', value)
    }
  },

  methods: {
    handleAdd() {
      this.value.push({ num: 1, level: 1 })
    },
    handleRemove(index) {
      this.value.splice(index, 1)
    }
  }
}
</script>