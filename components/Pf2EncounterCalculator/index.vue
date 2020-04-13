<template lang="pug">
  .container
    .row
      .col-xs-12.col-md-4
        party-members(v-model="players" :num-players="numPlayers" :average-level="averageLevel")
      .col-xs-12.col-md-8
        encounter-composition(v-model="monsters" :num-players="numPlayers" :average-level="averageLevel")
</template>

<script>
import sumBy from 'lodash/sumBy'
import sum from 'lodash/sum'
import PartyMembers from '~/components/Pf2EncounterCalculator/PartyMembers'
import EncounterComposition from '~/components/Pf2EncounterCalculator/EncounterComposition'

export default {
  components: { EncounterComposition, PartyMembers },

  data: () => ({
    players: [{ num: 4, level: 1 }],
    monsters: [
      { num: 1, level: 0, name: '', isElite: false, isWeak: false, isSimple: false }
    ],
  }),

  computed: {
    numPlayers() {
      return sumBy(this.players, 'num')
    },
    averageLevel() {
      const total = sum(this.players.map((o) => o.num * o.level))
      return Math.floor(total / this.numPlayers) 
    },
  }
}
</script>