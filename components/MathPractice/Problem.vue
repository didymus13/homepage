<template lang="pug">
v-card
  v-card-title {{ title }}
  v-card-text
    v-row.display-1
      v-col(cols="12" md="4") {{ numberOne }} {{ operation }} {{ numberTwo }} =
      v-col(cols="12" sm="6" md="4")
        v-text-field.display-1(label="Answer" v-model="answer" type="number" @keyup.enter="verify")
      v-col(cols="12" sm="6" md="4")
        v-btn(color="green" @click="verify" dark ) Answer
</template>

<script>
export default {
  props: {
    numberOne: { type: Number, required: true },
    numberTwo: { type: Number, required: true },
    operation: { type: String, required: true },
    title: { type: String, required: true }
  },

  data: () => ({
    answer: null
  }),

  methods: {
    verify() {
      this.$emit('verify', this.answer)
      this.answer = null
    }
  }
}
</script>
