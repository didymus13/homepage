<script>
import Addition from './addition'
export default {
  extends: Addition,

  props: {
    title: { type: String, default: 'Subtraction' },
    operator: { type: String, default: '-' }
  },

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
