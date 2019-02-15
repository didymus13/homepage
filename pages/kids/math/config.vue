<template>
  <section id="config">
    <h1>Configuration</h1>

    <b-form-group label="Minimum" horizontal>
      <b-input :value="config.numberMin" type="number" @input="$store.commit('math/setConfig', {field: 'numberMin', value: parseInt($event)})"/>
    </b-form-group>

    <b-form-group label="Maximum" horizontal>
      <b-input :value="config.numberMax" type="number" @input="$store.commit('math/setConfig', {field: 'numberMax', value: parseInt($event)})"/>
    </b-form-group>

    <b-form-group label="Forced number" horizontal>
      <b-input :value="config.forcedNumber" type="number" @input="$store.commit('math/setConfig', {field: 'forcedNumber', value: parseInt($event)})"/>
    </b-form-group>

    <b-form-group label="Use total for limit" horizontal>
      <b-form-radio-group
        :checked="config.useTotalForLimit"
        :options="options"
        @change="$store.commit('math/setConfig', {field: 'useTotalForLimit', value: $event})">
      </b-form-radio-group>
    </b-form-group>

    <b-form-group label="Whole answers only" horizontal>
      <b-form-radio-group
        :checked="config.wholeAnswersOnly"
        :options="options"
        @change="$store.commit('math/setConfig', {field: 'wholeAnswersOnly', value: $event})">
      </b-form-radio-group>
    </b-form-group>

    <b-form-group label="Positive answers only" horizontal>
      <b-form-radio-group
        :checked="config.positiveAnswersOnly"
        :options="options"
        @change="$store.commit('math/setConfig', {field: 'positiveAnswersOnly', value: $event})">
      </b-form-radio-group>
    </b-form-group>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      options: [{text: 'Yes', value: true}, {text: 'No', value: false}]
    }
  },

  computed: {
    ...mapState('math', ['config'])
  }
}
</script>
