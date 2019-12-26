<template lang="pug">
  v-row
    v-col(cols="12" sm="6")
      problem(:number-one="problem.number1" :number-two="problem.number2" title="Subtraction" operation="-" @verify="verify($event)")
    v-col(cols="12" sm="6")
      v-card.fill-height
        v-card-text
          div(align="center")
            answer-result(v-show="hasAnswers")
          div
            progress-bar(v-show="hasAnswers")
</template>

<script>
import AdditionPage from '~/pages/kids/math/addition'

export default {
  extends: AdditionPage,

  computed: {
    solution() {
      return this.problem.number1 - this.problem.number2
    }
  },

  methods: {
    createProblem() {
      let num1 = this.config.forcedNumber
        ? this.config.forcedNumber
        : _.random(this.config.numberMin, this.config.numberMax)
      let num2 = _.random(this.config.numberMin, this.config.numberMax)
      this.setProblem({
        number1: this.config.positiveAnswersOnly && num1 < num2 ? num2 : num1,
        number2: this.config.positiveAnswersOnly && num1 < num2 ? num1 : num2
      })
    }
  }
}
</script>
