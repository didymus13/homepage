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
      <b-form-radio-group :value="config.useTotalForLimit" @change="$store.commit('math/setConfig', {field: 'useTotalForLimit', value: $event})">
        <b-form-radio :value="true">Yes</b-form-radio>
        <b-form-radio :value="false">No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-group label="Whole answers only" horizontal>
      <b-form-radio-group :value="config.wholeAnswersOnly" @change="$store.commit('math/setConfig', {field: 'wholeAnswersOnly', value: $event})">
        <b-form-radio :value="true">Yes</b-form-radio>
        <b-form-radio :value="false">No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-group label="Positive answers only" horizontal>
      <b-form-radio-group :value="config.positiveAnswersOnly" @change="$store.commit('math/setConfig', {field: 'positiveAnswersOnly', value: $event})">
        <b-form-radio :value="true">Yes</b-form-radio>
        <b-form-radio :value="false">No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('math', ['config'])
  }
}
</script>
