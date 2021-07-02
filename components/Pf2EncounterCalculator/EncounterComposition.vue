<template lang="pug">
  div 
    .form-group
      label 
        h3 Encounter type
      select.form-control(v-model="selected")
        option(v-for="(budget, label) in budgets" :key="label" :value="budget") {{ label }}
    encounter-progress.mb-3(:progress="totalHazards" :max="totalBudget")

    .row.border-bottom.mb-3(v-for="(group, i) in value" :key="i")
      .col.form-group
        label #
        input.form-control(v-model.number="group.num" type="number" placeholder="#" min="1")
      .col.form-group
        label Monster
        input.form-control(v-model="group.name" placeholder="Name")
      .col.form-group
        label Level
        input.form-control(v-model.number="group.level" type="number")
      .col
        .row.form-group.form-check(title="-1 level")
          input.form-check-input(v-model="group.isWeak" type="checkbox")
          label.form-check-label Is Weak?
        .row.form-group.form-check(title="+1 level")
          input.form-check-input(v-model="group.isElite" type="checkbox")
          label.form-check-label Is Elite?
        .row.form-group.form-check(title="Traps or non-monsters are usually simple")
          input.form-check-input(v-model="group.isSimple" type="checkbox")
          label.form-check-label Is Simple?
      .col
        row-manager(:value="value" @add="handleAdd()" @remove="handleRemove(i)")
</template>

<script>
import find from 'lodash/find'
import sum from 'lodash/sum'
import RowManager from '~/components/Pf2EncounterCalculator/RowManager'
import EncounterProgress from '~/components/Pf2EncounterCalculator/EncounterProgress'
export default {
  components: { EncounterProgress, RowManager },

  props: {
    value: { type: Array, required: true },
    numPlayers: { type: Number, default: 1 },
    averageLevel: { type: Number, default: 1 }
  },

  data: () => ({
    selected: { base: 80, adj: 20 },
    budgets: {
      trivial: { base: 40, adj: 10 },
      low: { base: 60, adj: 15 },
      moderate: { base: 80, adj: 20 },
      severe: { base: 120, adj: 30 },
      extreme: { base: 160, adj: 40 }
    },
    hazards: [
      { level: -4, simple: 2, complex: 10 },
      { level: -3, simple: 3, complex: 15 },
      { level: -2, simple: 4, complex: 20 },
      { level: -1, simple: 6, complex: 30 },
      { level: 0, simple: 8, complex: 40 },
      { level: 1, simple: 12, complex: 60 },
      { level: 2, simple: 16, complex: 80 },
      { level: 3, simple: 24, complex: 120 },
      { level: 4, simple: 32, complex: 160 },
    ]
  }),

  computed: {
    totalBudget() {
      const { base, adj } = this.selected
      return base + ((this.numPlayers - 4) * adj) || 0
    },
    totalHazards() {
      return sum(this.value.map((o) => this.calcXp(o)))
    }
  },

  watch: {
    value(value) {
      this.$emit('input', this.value)
    }
  },

  methods: {
    calcXp({ num, level, isWeak, isElite, isSimple }) {
      const row = this.getHazardRow(level, isWeak, isElite)
      return num * (isSimple ? row.simple : row.complex)
    },

    getHazardRow(level, isWeak, isElite) {
      if(isWeak) level--
      if(isElite) level++
      const relativeLevel = level - this.averageLevel
      return find(this.hazards, { level: relativeLevel }) || { simple: -1000, complex: -1000 }
    },

    handleAdd() {
      this.value.push({ num: 1, level: 0, isWeak: false, isElite: false, isSimple: false })
    },

    handleRemove(index) {
      this.value.splice(index, 1)
    }
  }
}
</script>