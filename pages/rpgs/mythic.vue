<template>
  <b-container>
    <h1>Mythic RPG Fate</h1>
    <chaos-rank :chaos="chaosRank" @chaos-changed="chaosRank = $event"/>

    <b-form-group label="Ask your question">
      <b-input v-model="question" @input="roll = ''" @keyup.enter="rollDice"/>
    </b-form-group>

    <b-form-group label="Choose the odds">
      <b-select v-model="odds" :options="oddsOptions"/>
    </b-form-group>

    <b-button :disabled="hasRoll" variant="primary" @click="rollDice">Answer me!</b-button>

    <div v-show="hasRoll">
      <h3>Answer to: {{ question }}</h3>
      <span v-show="isYes">Yes</span>
      <span v-show="isExceptionalYes">Exceptional Yes!</span>
      <span v-show="isNo">No</span>
      <span v-show="isExceptionalNo">Exceptional No!</span>
      <span class="text-muted">(Rolled a {{ roll }})</span>
    </div>
  </b-container>
</template>

<script>
import ChaosRank from '~/components/Mythic/chaosRank'
import _ from 'lodash'
export default {
  components: {
    ChaosRank
  },

  head: {
    title: 'Mythic RPG: Fate answers'
  },

  data() {
    return {
      chaosRank: 5,
      fateChart: require('~/components/Mythic/fateChart.json'),
      question: '',
      odds: {},
      roll: ''
    }
  },

  computed: {
    oddsOptions() {
      return _.map(this.fateChart, item => {
        return { text: item.label, value: item }
      })
    },
    currentOdds() {
      return _.get(this.odds, this.chaosRank)
    },
    currentExceptionalYes() {
      return Math.floor(this.currentOdds / 5)
    },
    currentExceptionalNo() {
      return 100 - Math.floor((100 - this.currentOdds) / 5) + 1
    },
    isYes() {
      return this.roll <= this.currentOdds && !this.isExceptionalYes
    },
    isExceptionalYes() {
      return this.roll <= this.currentExceptionalYes
    },
    isNo() {
      return this.roll > this.currentOdds && !this.isExceptionalNo
    },
    isExceptionalNo() {
      return this.roll > this.currentExceptionalNo
    },
    hasRoll() {
      return this.roll > 0
    }
  },

  mounted() {
    this.odds = _.find(this.fateChart, { label: '50/50' })
  },

  methods: {
    // Roll a random number between 1 and 100
    rollDice() {
      this.roll = Math.floor(Math.random() * 100) + 1
    }
  }
}
</script>
