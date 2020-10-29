<template lang="pug">
  div
    strong Participants:
    //- Player List
    draggable(v-model="characters")
      b-row.hoverable(v-for="char,i in characters" :key="i" :class="{'is-current': turn == i, 'is-player': char.isPlayer, 'is-dead': char.isDead}" align-v="center")
        b-col
          span.fas.fa-arrow-right.mr-2(:class="{visible: turn == i, invisible: turn != i}")
          | {{ char.init }}
        b-col {{ char.name }}
        b-col
          p-check.p-icon.p-plain(v-model="char.isDead" color="danger-o" toggle title="Dead?")
            span.icon.fas.fa-skull(slot="extra")
            //- span.icon.fas.fa-skull(slot="off-extra")
            span.icon.fa-stack.fa-2x(slot="off-extra")
              span.fas.fa-stack-1x.fa-skull
              span.fas.fa-stack-1x.fa-ban(style="color: Tomato")
          b-button(variant="link" @click="$emit('remove', i)")
            span.fas.fa-trash
        b-col(cols="1")
          span.fas.fa-grip-vertical
    p(v-show="!chars.length") Enter new participants in the form below.
</template>

<script>
import pCheck from 'pretty-checkbox-vue/check'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
    pCheck
  },

  props: {
    chars: { type: Array, required: true },
    turn: { type: Number, required: true }
  },

  computed: {
    characters: {
      get() {
        return this.chars
      },
      set(value) {
        this.$emit('drag-end', value)
      }
    }
  }
}
</script>

<style lang="scss">
.is-current {
  background-color: whitesmoke;
  font-weight: bold;
}

.is-player {
  color: darkgreen;
}

.is-dead {
  color: darkred;
  text-decoration: line-through;
}
</style>
