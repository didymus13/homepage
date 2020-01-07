<template lang="html">
  <div id="division">
    <h1 class="title">Division</h1>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        {{ problem.number1 }} / {{ problem.number2 }} =
      </div>
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <input id="answer"
                   v-model="answer"
                   type="number"
                   name="answer"
                   class="input"
                   @keyup.enter="verify">
          </p>
          <p class="control">
            <b-button variant="primary" @click="verify">Answer</b-button>
          </p>
        </div>
      </div>
    </div>
    <answer-result v-show="hasAnswers" />
    <progress-bar v-show="hasAnswers" />
  </div>
</template>

<script>
import Addition from './addition'

export default {
  extends: Addition,

  computed: {
    solution() {
      return this.problem.number1 / this.problem.number2
    }
  },

  methods: {
    createProblem() {
      let number1 = _.random(this.config.numberMin, this.config.numberMax)
      let number2 = this.config.forcedNumber || _.random(this.config.numberMin, this.config.numberMax)
      if (this.config.wholeAnswersOnly) number1 = number1 * number2
      this.setProblem({ number1, number2 })
    }
  }
}
</script>
