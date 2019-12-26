<template lang="pug">
  div
    v-parallax(src="/dnd_header.jpg" height="300")
      h1.display-1 Yet Another Encounter Calculator for Dungeons and Dragons 5th edition

    v-container
      encounter-calculator

      h2.title Instructions
      p
        | The calculator will calculate values on the fly. Just put in the number
        | of characters in the party and their levels (You can group them by
        | level if you want). Below the party section you will see the
        | calculated threshold values for
        v-chip(color="green") Easy,
        v-chip(color="yellow") Medium,
        v-chip(color="red") Hard,
        v-chip(color="black" dark) and Deadly
        | encounters

      p
        | To build the encounter, put in the number of monsters and their
        | respective XP values. The app will calculate the XP award given as
        | well as the difficulty of the planned encounter taking into account
        | party size and encounter size as well.

      p
        | Below the whole thing is a progress bar that illustrates the relative
        | difficulty between
        v-chip(color="blue" dark) trivial
        | and
        v-chip(color="black" dark) deadly
        | encounter thresholds for the party.

      h2.subtitle-1 Credits:
      p.body-2
        |This calculator has been heavily inspired by
        |
        a(href="http://dhmstark.co.uk/rpgs/encounter-calculator-5th/") http://dhmstark.co.uk/rpgs/encounter-calculator-5th/
        |
        | that I've been using that for years. I needed to learn Vuejs so I
        | decided to implement my own version of his/her fine utility. And of
        | course, without
        |
        a(href="http://dnd.wizards.com/dungeons-and-dragons") Dungeons and Dragons 5th edition,
        |
        | there would be no Encounter Calculator.
</template>

<script>
import EncounterCalculator from '~/components/DndEncounterCalculator'
export default {
  components: {
    EncounterCalculator
  },
  head: {
    title: 'Encounter Calculator for D&D 5th edition',
    meta: [
      {
        name: 'description',
        content: 'An encounter calculator for Dungeons and Dragons 5th edition'
      }
    ]
  }
}
</script>
