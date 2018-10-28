<template>
  <div>
    <b-container>
      <b-row>
        <!-- Player Character party -->
        <b-col>
          <h3>PCs</h3>
          <b-row v-for="(player, i) in players" :key="i">
            <b-col>
              <b-form-group label="Characters">
                <b-input v-model="player.number" type="number" placeholder="1"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="of Level">
                <b-input v-model="player.level" type="number" placeholder="1"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group v-if="i == 0" label="Add">
                <b-button variant="primary" @click="players.push({number: 1, level: 1})">
                  <span class="fas fa-plus"/>
                </b-button>
              </b-form-group>
              <b-form-group v-if="players.length > 1 && i > 0" label="Del">
                <b-button variant="danger" @click="players.splice(i, 1)">
                  <span class="fas fa-trash"/>
                </b-button>
              </b-form-group>
            </b-col>
          </b-row>
          <p>
            Thresholds:
            <b-badge variant="success">{{ easyThreshold }}</b-badge>
            <b-badge variant="warning">{{ mediumThreshold }}</b-badge>
            <b-badge variant="danger">{{ hardThreshold }}</b-badge>
            <b-badge variant="dark">{{ deadlyThreshold }}</b-badge>
          </p>
        </b-col>

        <!-- Encounter monsters -->
        <b-col>
          <h3>Encounter composition</h3>
          <b-row v-for="(monster, i) in monsters" :key="i">
            <b-col>
              <b-form-group label="Monsters">
                <b-input v-model="monster.number" type="number" placeholder="1"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="XP Value">
                <b-input v-model="monster.xp" type="number" placeholder="XP"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group v-if="index == 0" lable="Add">
                <b-button variant="primary" @click="monsters.push({number: 1, xp: 25})">
                  <span class="fas fa-plus"/>
                </b-button>
              </b-form-group>
              <b-form-group v-if="index > 0 && monsters.length > 1" lable="Del">
                <b-button variant="danger" @click="monsters.splice(index, 1)">
                  <span class="fas fa-trash"/>
                </b-button>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <span class="icon"><span class="fa fa-thermometer"/></span>
              Difficulty:
              <b-badge :variant="difficultyClass">
                {{ encounterDifficulty }} : {{ difficultyQualifier }}
              </b-badge>
              <div class="column"><strong>Award: {{ totalMonsterXp }} XP</strong></div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-progress :variant="difficultyClass"
                  :value="encounterDifficulty"
                  :max="deadlyThreshold"
                  show-value
                  class="my-4"/>
    </b-container>
  </div>
</template>

<script>
import thresholds from './thresholds'
export default {
  data() {
    return {
      players: [
        {
          number: 1,
          level: 1
        }
      ],
      monsters: [
        {
          number: 1,
          xp: 25
        }
      ],
      thresholds: thresholds
    }
  },
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
      if (this.isTrivial) return 'info'
      if (this.isEasy) return 'success'
      if (this.isMedium) return 'warning'
      if (this.isHard) return 'danger'
      return 'dark'
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
    }
  }
}
</script>
