<template lang="pug">
  b-container
    h1 Initiative Tracker
    b-row
      b-col(sm)
        h3 Current round: {{ round }}
          b-button(@click="next") Next!
        b-row(v-for="char,i in chars" :key="i" :class="{'is-current': turn == i, 'is-player': char.isPlayer, 'is-dead': char.isDead}")
          b-col {{ char.init }}
          b-col {{ char.name }}
          b-col
            b-button(@click="kill(char)" size="sm") Kill
      b-col(sm)
        label Combat notes:
        b-form-textarea(v-model="notes" placeholder="Entere your notes here" rows="6")
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      round: 1,
      turn: 0,
      chars: [
        { name: 'Monster 1', init: 23, isPlayer: false, isDead: false},
        { name: 'Foo Bar', init: 3, isPlayer: true, isDead: false}
      ],
      notes: ''
    }
  },

  computed: {
    active() {
      return this.inOrder[this.turn]
    }
  },

  methods: {
    next() {
      let newTurn = this.turn + 1
      let exceeded = newTurn >= this.chars.length
      this.turn =  exceeded ? 0 : newTurn
      if (exceeded) this.round = this.round + 1
    },
    addChar(char) {
      this.chars.push(char)
    },
    removeChar(index) {
      this.chars.splice(index, 1)
    },
    kill(char) {
      char.isDead = !char.isDead
    }
  }
}
</script>

<style lang="scss" scoped>
.is-current {
  background-color: lightgrey
}

.is-player {
  color: darkgreen
}

.is-dead {
  text-decoration: line-through
}
</style>
