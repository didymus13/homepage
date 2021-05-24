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
            participants(:chars="chars" :turn="turn" @remove="removeCharacter($event)" @drag-end="setChars($event)")
            b-row.mt-4
              b-col
                b-button(v-show="hasChars" block @click="reorder") Reorder
              b-col
                b-button(block @click="reset" variant="danger") Clear encounter <span class="fas fa-trash"></span>

          new-participant(@add="addCharacter($event)")

        b-col
          label Combat notes:
          b-form-textarea(:value="notes" @change="setNotes($event)" placeholder="Type your notes here" rows="6" max-rows="50")
</template>

<script>
import _ from 'lodash'
import pCheck from 'pretty-checkbox-vue/check'
import Participants from '@/components/InitiativeTracker/Participants'
import NewParticipant from '@/components/InitiativeTracker/NewParticipant'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    NewParticipant,
    Participants,
    pCheck
  },

  computed: {
    ...mapState('initiative', {
      round: (state) => state.round,
      turn: (state) => state.turn,
      chars: (state) => state.chars,
      notes: (state) => state.notes
    }),
    ...mapGetters('initiative', ['active', 'hasChars'])
  },

  methods: {
    ...mapMutations('initiative', ['addCharacter', 'setChars', 'setNotes', 'removeCharacter']),
    ...mapActions('initiative', ['next', 'reset', 'reorder']),
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
