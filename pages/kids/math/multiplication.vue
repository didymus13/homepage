<script>
import Addition from './addition'

export default {
  extends: Addition,

  props: {
    title: { type: String, default: 'Multiplication' },
    operator: { type: String, default: 'x' }
  },

  computed: {
    solution() {
      return this.problem.number1 * this.problem.number2
    }
  },

  methods: {
    createProblem() {
      this.setProblem({
        number1: this.config.forcedNumber
          ? this.config.forcedNumber
          : _.random(this.config.numberMin, this.config.numberMax),
        number2: _.random(this.config.numberMin, this.config.numberMax)
      })
    }
  }
}
</script>
