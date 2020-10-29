<template lang="pug">
  div
    b-jumbotron.bg-image(header="Initiative tracker" fluid bg-variant="dark" text-variant="white")
    b-container
      b-row
        b-col(sm)
          div(v-show="chars.length")
            b-row
              b-col(xs="12" sm="4")
                h3 Round: {{ round }}
              b-col(xs="12")
                h3 {{ active.name }}
            b-button(block variant="primary" @click="next")
              | Next <span class="fas fa-arrow-circle-right"></span>

          .my-4
            participants(:chars="chars" :turn="turn" @remove="removeChar($event)" @drag-end="chars = $event")
            b-row.mt-4
              b-col
                b-button(v-show="hasChars" block @click="reorder") Reorder
              b-col
                b-button(block @click="reset" variant="danger") Clear encounter <span class="fas fa-trash"></span>

          new-participant(@add="addChar($event)")

        b-col
          label Combat notes:
          b-form-textarea(v-model="notes" placeholder="Type your notes here" rows="6" max-rows="50")
</template>

<script>
import _ from 'lodash'
import pCheck from 'pretty-checkbox-vue/check'
import Participants from '@/components/InitiativeTracker/Participants'
import NewParticipant from '@/components/InitiativeTracker/NewParticipant'

export default {
  components: {
    NewParticipant,
    Participants,
    pCheck
  },

  data() {
    return {
      round: 1,
      turn: 0,
      chars: [],
      notes: ''
    }
  },

  computed: {
    active() {
      return this.chars.length ? this.chars[this.turn] : {}
    },

    hasChars() {
      return !!(this.chars && this.chars.length > 1)
    }
  },

  methods: {
    next() {
      let newTurn = this.turn + 1
      let exceeded = newTurn >= this.chars.length
      this.turn = exceeded ? 0 : newTurn
      if (exceeded) this.round = this.round + 1
    },

    addChar(char) {
      this.chars.push({ ...char })
    },

    removeChar(index) {
      this.chars.splice(index, 1)
    },

    reorder() {
      this.chars = _.sortBy(this.chars, 'init').reverse()
    },

    reset() {
      this.chars = []
      this.turn = 0
      this.round = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url('/initTrackerHero.jpg');
}

.display-3 {
  text-shadow: 2px 2px 2px black;
}
</style>
