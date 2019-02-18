<template lang="pug">
  b-container
    b-row
      b-col Initiative tracker here
      b-col Notes here
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      round: 1,
      turn: 0,
      chars: [
        { name: 'Foo Bar', init: 3, isPlayer: true },
        { name: 'Monster 1', init: 23, isPlayer: false }
      ],
      notes: ''
    }
  },

  computed: {
    inOrder() {
      return _.sortBy(this.chars, ['init'])
    },
    active() {
      return this.inOrder[this.turn]
    }
  },

  methods: {
    next() {
      let newTurn = this.turn + 1
      let exceeded = newTurn > this.chars.length
      this.turn =  exceeded ? 0 : newTurn
      if (exceeded) this.round = this.round + 1
    },
    addChar(char) {
      this.chars.push(char)
    },
    removeChar(index) {
      this.chars.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
