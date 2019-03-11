<template lang="pug">
  div
    h5 Add a new participant:
    b-form-group(label="Init" label-cols="3")
      b-input(v-model.number="char.init" type="number" min="1" placeholder="1" @keyup.enter="addChar")
    b-form-group(label="Character" label-cols="3")
      b-input(v-model="char.name" placeholder="Name" @keyup.enter="addChar")
    b-form-group(label-cols="3")
      b-form-checkbox(v-model="char.isPlayer") Is Player?
    b-button(block @click="addChar" :disabled="!isValid") Add <span class="fas fa-plus-circle"></span>
</template>

<script>
export default {
  data() {
    return {
      char: { name: '', init: '', isPlayer: false }
    }
  },

  computed: {
    isValid() {
      return this.char.init > 0 && this.char.name.length
    }
  },

  methods: {
    addChar() {
      if (!this.isValid) return
      this.$emit('add', {...this.char})
      this.char = { name: '', init: '', isPlayer: false }
    }
  }
}
</script>
