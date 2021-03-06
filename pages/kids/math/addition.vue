<template lang="html">
  <div id="addition">
    <h1 class="title">{{ title }}</h1>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        {{ problem.number1 }} {{ operator }} {{ problem.number2 }} =
        <input id="answer"
               v-model="answer"
               type="number"
               name="answer"
               class="input"
               @keyup.enter="verify">
        <b-button variant="primary" @click="verify">Answer</b-button>
      </div>
    </div>
    <div class="clearfix"/>
    <answer-result v-show="hasAnswers" />
    <progress-bar v-show="hasAnswers" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
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
    ProgressBar,
    AnswerResult
  },

  props: {
    title: { type: String, default: 'Addition' },
    operator: { type: String, default: '+' }
  },

  data() {
    return {
      answer: ''
    }
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
    verify() {
      this.checkAnswer({ answer: this.answer, solution: this.solution })
      this.createProblem()
      this.resetForm()
    },
    resetForm() {
      this.answer = ''
    }
  }
}
</script>
