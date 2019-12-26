<template lang="pug">
  v-row
    v-col(cols="12" sm="6")
      problem(:number-one="problem.number1" :number-two="problem.number2" title="Addition" operation="+" @verify="verify($event)")
    v-col(cols="12" sm="6")
      v-card.fill-height
        v-card-text
          div(align="center")
            answer-result(v-show="hasAnswers")
          div
            progress-bar(v-show="hasAnswers")
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Problem from '~/components/MathPractice/Problem'
import ProgressBar from '~/components/MathPractice/ProgressBar'
import AnswerResult from '~/components/MathPractice/AnswerResult'

const _ = require('lodash')
const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers('math')

export default {
  components: {
    Problem,
    ProgressBar,
    AnswerResult
  },

  computed: {
    ...mapState(['problem', 'config', 'progress']),
    ...mapGetters(['hasAnswers', 'percentCorrect', 'isCorrect']),
    solution() {
      return this.problem.number1 + this.problem.number2
    }
  },

  mounted() {
    this.createProblem()
  },

  methods: {
    ...mapActions(['checkAnswer']),
    ...mapMutations(['setProblem']),
    createProblem() {
      let num1 = this.config.forcedNumber
        ? this.config.forcedNumber
        : _.random(this.config.numberMin, this.config.numberMax)
      let num2 = _.random(this.config.numberMin, this.config.numberMax)
      this.setProblem({
        number1: num1,
        number2: num2
      })
      if (
        this.config.useTotalForLimit &&
        this.solution > this.config.numberMax
      ) {
        this.createProblem() // Recursive call
      }
    },
    verify(answer) {
      this.checkAnswer({ answer, solution: this.solution })
      this.createProblem()
    }
  }
}
</script>
