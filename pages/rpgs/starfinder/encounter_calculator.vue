<template>
  <div>
    <b-jumbotron text-variant="white"
                 fluid
                 header="YASEC"
                 lead="Yet Another Starfinder Encounter Calculator"
                 class="bg-image"/>
    <b-container>
      <b-row>
        <!-- Player Character Information -->
        <b-col cols="*" md="6">
          <h3>
            Average Player Level: {{ averagePlayerLevel }}
          </h3>

          <b-row v-for="(player, i) in players" :key="i">
            <b-col>
              <b-form-group label="# players">
                <b-input v-model="player.num" type="number" placeholder="# of players"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="of level">
                <b-input v-model="player.level" type="number" placeholder="level"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-button v-show="players.length > 1" variant="danger" @click="deletePlayer(i)">
                <span class="fas fa-fw fa-trash"/>
              </b-button>
            </b-col>
          </b-row>
          <b-button variant="primary" @click="addPlayer">Add player</b-button>
        </b-col>

        <!-- Monster Section -->
        <b-col cols="*" md="6">
          <h3>Encounter Cr: {{ encounterCR }}</h3>

          <b-form-group label="Encounter difficulty" label-cols-sm="4">
            <b-form-select v-model="difficulty">
              <option :value="-1">Easy</option>
              <option :value="0">Average</option>
              <option :value="1">Challenging</option>
              <option :value="2">Hard</option>
              <option :value="3">Epic</option>
            </b-form-select>
          </b-form-group>

          <b-row>
            <b-col xs="4">XP Budget: </b-col>
            <b-col>{{ xpBudget - totalXp }}xp</b-col>
          </b-row>

          <hr/>
          <!-- Monster Information -->
          <b-row v-for="(monster, i) in monsters" :key="i">
            <b-col xs="12" sm="6">
              <b-form-group label="# of Monsters">
                <b-form-select v-model="monster.num">
                  <option v-for="(num, i) in [1, 2, 3, 4, 6, 8, 12, 16]" :value="num" :key="i">
                    {{ num }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="of CR" xs="12" sm="6">
                <b-form-select v-model="monster.cr">
                  <option v-for="cr in crChart" :value="cr.cr" :key="cr.cr">{{ cr.cr }}</option>
                </b-form-select>
              </b-form-group>
            </b-col>

            <b-col>
              <b-button v-show="monsters.length > 1" variant="danger" @click="deleteMonster(i)">
                <span class="fas fa-fw fa-trash"/>
              </b-button>
            </b-col>
          </b-row>

          <b-button variant="primary" @click="addMonster">Add monster group</b-button>
        </b-col>
      </b-row>

      <h2>Instructions</h2>
      <ol>
        <li>To calculate your encounter start by adding the number of players that you have and their levels.</li>
        <li>Choose your encounter difficulty, this will give you an XP budget with XP remaining.</li>
        <li>Choose the number of monsters and the CR of those monsters to build your encounter.</li>
        <li>As you add or remove monsters, you'll be able to gauge the encounter's CR and XP budget remaining.</li>
      </ol>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash'
const xpChart = require('~/components/StarfinderEncounterCalculator/xpPerCr.json')

export default {
  data() {
    return {
      players: [{ num: 4, level: 1 }],
      monsters: [{ num: 1, cr: '1' }],
      crChart: xpChart,
      difficulty: 0
    }
  },
  computed: {
    numPlayers() {
      return _.sum(_.map(this.players, 'num'))
    },
    xpBudget() {
      let apl =
        this.averagePlayerLevel > 0 ? this.averagePlayerLevel.toString() : '1/2'
      let i = _.findIndex(this.crChart, { cr: apl })
      let cr = _.nth(this.crChart, i + this.difficulty)
      return cr.xp
    },
    encounterCR() {
      let i = _.findIndex(this.crChart, { xp: this.totalXp })
      let cr = _.nth(this.crChart, i)
      return cr.cr
    },
    totalXp() {
      let total = 0
      _.map(this.monsters, monster => {
        total += this.effectiveMonsterXp(monster)
      })
      return total
    },
    averagePlayerLevel() {
      let levels = 0
      _.map(this.players, player => {
        levels += player.num * player.level
      })
      let apl = _.round(levels / this.numPlayers)
      if (this.numPlayers < 4) apl--
      if (this.numPlayers >= 6) apl++
      return apl
    }
  },
  methods: {
    addPlayer() {
      this.players.push({ num: 1, level: 1 })
    },
    deletePlayer(i) {
      this.players.splice(i, 1)
    },
    addMonster() {
      this.monsters.push({ num: 1, cr: '1' })
    },
    deleteMonster(i) {
      this.monsters.splice(i, 1)
    },
    calcCrOffset(num) {
      let offset = 0
      if (num === 1) offset = 0
      if (num >= 2 && num <= 4) offset = num
      if (num === 6) offset = 5
      if (num === 8) offset = 6
      if (num === 12) offset = 7
      if (num === 16) offset = 8
      return offset
    },
    calcEffectiveMonsterCr(monster) {
      let offset = this.calcCrOffset(parseInt(monster.num))
      let i = _.findIndex(this.crChart, { cr: monster.cr })
      return _.nth(this.crChart, i + offset)
    },
    effectiveMonsterCr(monster) {
      let cr = this.calcEffectiveMonsterCr(monster)
      return cr.cr
    },
    effectiveMonsterXp(monster) {
      let cr = this.calcEffectiveMonsterCr(monster)
      return cr.xp
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('/starfinder-gm.jpg');
  > .container {
    text-shadow: 1px 1px black;
  }
}
.btn.btn-danger {
  margin-top: 2rem;
}
</style>
