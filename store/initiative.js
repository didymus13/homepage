import sortBy from 'lodash/sortBy'
export const namespaced = true;

export const state = () => ({
    round: 1,
    turn: 0,
    chars: [],
    notes: ''
})

export const getters = {
    active(state) {
        return state.chars.length ? state.chars[state.turn] : {}
    },

    hasChars(state) {
      return !!(state.chars && state.chars.length > 1)
    }
}

export const mutations = {
    setRound: (state, value) => {
        state.round = value
    },

    setTurn: (state, value) => {
        state.turn = value
    },

    setNotes: (state, value) => {
        state.notes = value
    },
    
    setChars: (state, chars) => {
        state.chars = chars
    },

    addCharacter: (state, character) => {
        state.chars.push(character)
    },

    removeCharacter: (state, index) => {
        state.chars.splice(index, 1)
    },

    setNotes: (state, notes) => {
        state.notes = notes
    }
}

export const actions = {
    next({ commit, state }) {
        let newTurn = state.turn + 1
        let isExceeded = newTurn >= state.chars.length
        commit('setTurn', isExceeded ? 0 : newTurn)
        if (isExceeded) {
            commit('setRound', state.round + 1)
        }
    },

    reset({ commit }) {
        commit('setChars', [])
        commit('setTurn', 0)
        commit('setRound', 0)
    },

    reorder({commit, state}) {
        commit('setChars', sortBy(state.chars, 'init').reverse())
    }
}