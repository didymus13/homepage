<script>
import Addition from './addition'

export default {
  extends: Addition,

  props: {
    title: { type: String, default: 'Division' },
    operator: { type: String, default: '÷' }
  },

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
