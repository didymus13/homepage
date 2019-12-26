<template lang="pug">
  div
    v-row
      <!-- Player Character party -->
      v-col(cols="12" sm="6")
        v-card
          v-card-title Characters

          v-card-text
            v-row(v-for="(player, i) in players" :key="i")
              v-col
                v-text-field(label="Number of players" v-model="player.number" type="number" placeholder="1")

              v-col
                v-text-field(label="PC Level" v-model="player.level" type="number" placeholder="1")

              v-col(cols="4" lg="3")
                v-btn(v-if="i === players.length - 1" color="green" icon dark @click="addPlayer")
                  v-icon mdi-plus

                v-btn(color="red" icon dark @click="removePlayer(i)")
                  v-icon mdi-delete

          v-card-actions(justify="between")
            v-row
              v-col(cols="12" lg="4")
                h4.subtitle-1.mr-3 Thresholds:
              v-col
                v-chip(color="green") {{ easyThreshold }}
              v-col
                v-chip(color="yellow") {{ mediumThreshold }}
              v-col
                v-chip(color="red") {{ hardThreshold }}
              v-col
                v-chip(color="black" dark) {{ deadlyThreshold }}

      <!-- Encounter monsters -->
      v-col
        v-card
          v-card-title Monsters
          v-card-text
            v-row(v-for="(monster, i) in monsters" :key="i")
              v-col
                v-text-field(label="Number of monsters" v-model="monster.number" type="number" placeholder="1")
              v-col
                v-text-field(label="Monster XP" v-model="monster.xp" type="number" placeholder="XP")
              v-col(cols="4" lg="3")
                v-btn(v-if="i === monsters.length - 1" color="green" icon dark @click="addMonster")
                  v-icon mdi-plus
                v-btn(color="red" icon dark @click="removeMonster(i)")
                  v-icon mdi-delete

          v-card-text
            v-progress-linear(:color="difficultyClass" :value="difficultyPercentage")
            v-row
              v-col
                v-icon mdi-gauge
                | Difficulty
              v-col
                v-chip(:color="difficultyClass" :dark="difficultyClass == 'black'")
                  | {{ encounterDifficulty }} : {{ difficultyQualifier }}
              v-col
                .font-weight-bold XP Award: {{ totalMonsterXp }} XP
</template>

<script>
import thresholds from './thresholds'
export default {
  data: () => ({
    players: [{ number: 1, level: 1 }],
    monsters: [{ number: 1, xp: 25 }],
    thresholds: thresholds
  }),

  computed: {
    // Calculated encounter Difficulty
    encounterDifficulty() {
      return parseInt(this.encounterMultiplier * this.totalMonsterXp)
    },

    totalMonsterXp() {
      let total = 0
      this.monsters.forEach(function(monster) {
        total = total + monster.number * monster.xp
      })
      return total
    },

    numberOfMonsters() {
      let total = 0
      this.monsters.forEach(function(monster) {
        total += parseInt(monster.number)
      })
      return total
    },

    encounterMultiplier() {
      let offset = this.partySizeOffset
      let multipliers = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
      if (this.numberOfMonsters <= 1) {
        return multipliers[1 + offset]
      }
      if (this.numberOfMonsters === 2) {
        return multipliers[2 + offset]
      }
      if (this.numberOfMonsters >= 3 && this.numberOfMonsters <= 6) {
        return multipliers[3 + offset]
      }
      if (this.numberOfMonsters >= 7 && this.numberOfMonsters <= 10) {
        return multipliers[4 + offset]
      }
      if (this.numberOfMonsters >= 11 && this.numberOfMonsters <= 14) {
        return multipliers[5 + offset]
      }
      return multipliers[6 + offset]
    },

    partySizeOffset() {
      if (this.partySize < 3) return 1
      if (this.partySize > 5) return -1
      return 0
    },

    partySize() {
      let total = 0
      this.players.forEach(function(player) {
        total += parseInt(player.number)
      })
      return total
    },

    // Player Threshold Calculator
    easyThreshold() {
      return this.calculateThresholds('easy')
    },

    mediumThreshold() {
      return this.calculateThresholds('medium')
    },

    hardThreshold() {
      return this.calculateThresholds('hard')
    },

    deadlyThreshold() {
      return this.calculateThresholds('deadly')
    },

    // Encounter difficulty checks
    isTrivial() {
      return this.encounterDifficulty < this.easyThreshold
    },

    isEasy() {
      return (
        this.easyThreshold <= this.encounterDifficulty &&
        this.encounterDifficulty < this.mediumThreshold
      )
    },

    isMedium() {
      return (
        this.mediumThreshold <= this.encounterDifficulty &&
        this.encounterDifficulty < this.hardThreshold
      )
    },

    isHard() {
      return (
        this.hardThreshold <= this.encounterDifficulty &&
        this.encounterDifficulty < this.deadlyThreshold
      )
    },

    isDeadly() {
      return this.encounterDifficulty >= this.deadlyThreshold
    },

    difficultyQualifier() {
      if (this.isTrivial) return 'trivial'
      if (this.isEasy) return 'easy'
      if (this.isMedium) return 'medium'
      if (this.isHard) return 'hard'
      return 'deadly'
    },

    difficultyClass() {
      if (this.isTrivial) return 'blue'
      if (this.isEasy) return 'green'
      if (this.isMedium) return 'yellow'
      if (this.isHard) return 'red'
      return 'black'
    },

    difficultyPercentage() {
      const percentage = this.encounterDifficulty / this.deadlyThreshold * 100
      return Math.min(100, percentage)
    }
  },

  methods: {
    calculateThresholds(difficulty) {
      let t = this.thresholds
      let total = 0
      this.players.forEach(function(player) {
        total += t[player.level - 1][difficulty] * player.number
      })
      return total
    },

    addMonster() {
      this.monsters.push({ number: 1, xp: 25 })
    },

    removeMonster(i) {
      this.monsters = _.filter(this.monsters, (m, j) => i !== j)
      if (! this.monsters.length ) this.addMonster()
    },

    addPlayer() {
      this.players.push({ number: 1, level: 1})
    },

    removePlayer(i) {
      this.players = _.filter(this.players, (m, j) => i !== j)
      if (! this.players.length ) this.addPlayer()
    }
  }
}
</script>
