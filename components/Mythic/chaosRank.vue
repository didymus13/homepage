<template>
  <div>
    Chaos:
    <b-button @click="decrement">
      <span class="fas fa-minus"/>
    </b-button>
    {{ chaos }}
    <b-button @click="increment">
      <span class="fas fa-plus"/>
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    chaos: { type: Number, required: true }
  },

  methods: {
    increment() {
      this.changeChaos(this.chaos + 1)
    },
    decrement() {
      this.changeChaos(this.chaos - 1)
    },
    changeChaos(chaos) {
      if (chaos < 1 || chaos > 9) {
        return
      }
      this.$emit('chaos-changed', chaos)
    }
  }
}
</script>
