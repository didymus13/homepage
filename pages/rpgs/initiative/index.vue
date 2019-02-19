<template lang="pug">
  div
    b-jumbotron.bg-image(header="Initiative tracker" fluid bg-variant="dark" text-variant="white")
    b-container
      b-row
        b-col(sm)
          b-row.pb-4
            b-col
              h3 Current round: {{ round }}
            b-col.col-4
              b-button(@click="next" block) Next!

          //- Player List
          b-row.py-1(v-for="char,i in chars" :key="i" :class="{'is-current': turn == i, 'is-player': char.isPlayer, 'is-dead': char.isDead}")
            b-col.col-3
              span.fas.fa-chevron-right.mr-2(:class="{visible: turn == i, invisible: turn != i}")
              | {{ char.init }}
            b-col {{ char.name }}
            b-col.col-2
              p-check.p-icon.p-plain(v-model="char.isDead" color="danger-o" toggle title="Dead?")
                span.icon.fas.fa-skull(slot="extra")
                span.icon.fas.fa-skull(slot="off-extra")

          //- New Participant Form
          b-row.py-2
            b-col.col-4
              b-input(v-model="char.init" type="number" min="1" placeholder="0")
            b-col
              b-input(v-model="char.name" placeholder="Name")
            div.w-100
            b-col.col-4
            b-col
              b-form-checkbox(v-model="char.isPlayer") Is Player?
            b-col
              b-button(block @click="addChar") Add
        b-col(sm)
          label Combat notes:
          b-form-textarea(v-model="notes" placeholder="Entere your notes here" rows="6")
      b-button.float-right(@click="reset") Reset Combat
</template>

<script>
import _ from 'lodash'
import pCheck from 'pretty-checkbox-vue/check'
export default {
  components: {
    pCheck
  },

  data() {
    return {
      round: 1,
      turn: 0,
      char: {},
      chars: [],
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
    addChar() {
      this.chars.push({...this.char})
      this.char = {}
      this.reorder()
    },
    removeChar(index) {
      this.chars.splice(index, 1)
    },
    reorder() {
      this.chars = _.sortBy(this.chars, 'init').reverse()
    },
    reset() {
      this.chars = [],
      this.turn = 0;
      this.round = 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.is-current {
  background-color: whitesmoke
}

.is-player {
  color: darkgreen
}

.is-dead {
  background-color: lightcoral;
  color: darkred;
  text-decoration: line-through;
}

.bg-image {
  background-image: url('/initTrackerhero.jpg')
}

.display-3 {
  text-shadow: 2px 2px 2px black;
}
</style>
