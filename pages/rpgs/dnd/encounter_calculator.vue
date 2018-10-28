<template>
  <div id="encounter-calculator">
    <b-jumbotron text-variant="white"
                 fluid
                 header="YAEC" 
                 lead="Yet Another Encounter Calculator for Dungeons and Dragons 5th edition"/>

    <encounter-calculator/>

    <b-container>
      <h2>Instructions</h2>
      <p>
        The calculator will calculate values on the fly. Just put in the number of characters in the party
        and their levels (You can group them by level if you want). Below the party section you will see
        the calculated threshold values for <b-badge variant="success">easy</b-badge>,
        <b-badge variant="warning">medium</b-badge>, <b-badge variant="danger">hard</b-badge> and
        <b-badge variant="dark">deadly</b-badge> encounters.
      </p>
      <p>
        To build the encounter, put in the number of monsters and their respective XP values. The app will calculate
        the XP award given as well as the difficulty of the planned encounter taking into account party size and
        encounter size as well.
      </p>
      <p>
        Below the whole thing is a progress bar that illustrates the relative difficulty between
        <span class="tag is-info">trivial</span> and <span class="tag is-black">deadly</span> encounter
        thresholds for the party.
      </p>

      <h2 class="subtitle">Credits: </h2>
      <p>This calculator has been heavily inspired by
        <a href="http://dhmstark.co.uk/rpgs/encounter-calculator-5th/">http://dhmstark.co.uk/rpgs/encounter-calculator-5th/</a>.
        I've been using that for years. I needed to learn Vuejs so I decided to implement my own version of his/her
        fine utility.
      </p>
      <p>
        And of course, without <a href="http://dnd.wizards.com/dungeons-and-dragons">Dungeons and Dragons 5th
        edition</a>, there would be no Encounter Calculator.
      </p>
    </b-container>
  </div>
</template>

<script>
import EncounterCalculator from '~/components/DndEncounterCalculator'
export default {
  components: {
    EncounterCalculator
  }
}
</script>

<style scoped>
.jumbotron {
  background-position: center;
  background-size: cover;
  background-image: url('/dnd_header.jpg');
}
</style>
