<template lang="pug">
  v-form(v-model="valid")
    v-card
      v-card-text
        h1.title Configuration

        v-text-field(label="Minimum" type="number" :value="config.numberMin" @input="$store.commit('math/setConfig', {field: 'numberMin', value: parseInt($event)})")
        v-text-field(label="Maximum" :value="config.numberMax" type="number" @input="$store.commit('math/setConfig', {field: 'numberMax', value: parseInt($event)})")
        v-text-field(label="Forced number" :value="config.forcedNumber" type="number" @input="$store.commit('math/setConfig', {field: 'forcedNumber', value: parseInt($event)})")
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    valid: true,
    options: [{text: 'Yes', value: true}, {text: 'No', value: false}]
  }),

  computed: {
    ...mapState('math', ['config'])
  }
}
</script>
