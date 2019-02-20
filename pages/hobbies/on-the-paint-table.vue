<template lang="pug">
  div
    b-jumbotron(header="On the paint table" :lead='`Currently working on "${painting.name}"`' fluid)
    b-container
      b-row
        b-col(sm)
          h3 Recently finished
          ol
            li(v-for="item,id in recentlyFinished" :key="id") {{ item.dateLastActivity | toDateString }} : {{ item.name }}
        b-col(sm)
          h3 Finished this year
          ol
            li(v-for="item,id in finishedThisYear" :key="id") {{ item.dateLastActivity | toDateString }} : {{ item.name }}
      h5 That's this?
      p
        | I am heavily invested in the miniature painting hobby. So much so that I easily lose track of what I'm working
        | on and more importantly, finished. I set up a
        | #[a(href="https://trello.com/b/xbpUQcZl/miniature-painting-schedule") Trello board ] to keep myself organized
        | so I decided to make a page to consume Trello's API to create a kind of "executive summary" to track my progess
        | as it is more encouraging to see what has been done instead of staring at what is left to do.
      p
        | The name is adopted from
        | #[a(href="https://www.youtube.com/channel/UCbO4Vs1vlAA9hz7Ad7IMgug") Guerilla Miniature Game channel's] weekly
        | feature on youTube.
</template>

<script>
import _ from 'lodash'
import moment from 'moment'

export default {
  async asyncData( {$axios, env, app} ) {
    let params = { key: env.TRELLO_KEY, token: env.TRELLO_TOKEN }
    let paintingReq = $axios.$get(`${env.TRELLO_API}/lists/${env.TRELLO_LISTS_PAINTING}/cards`)
    let finishedReq = $axios.$get(`${env.TRELLO_API}/lists/${env.TRELLO_LISTS_FINISHED}/cards`)
    const [paintingRes, finishedRes] = await Promise.all([paintingReq, finishedReq])
    return {
      paintingList: paintingRes,
      finishedList: finishedRes
    }
  },

  computed: {
    painting() {
      return _.first(this.paintingList)
    },
    orderedFinishedList() {
      return _.sortBy(this.finishedList, 'pos')
    },
    recentlyFinished() {
      return _.take(this.orderedFinishedList, 5)
    },
    finishedThisYear() {
      let start = moment().startOf('year')
      let end = moment().endOf('year')
      return _.filter(this.orderedFinishedList, (item) => {
        let itemDate = moment(item.dateLastActivity)
        return itemDate.isBetween(start, end)
      })
    }
  },

  filters: {
    toDateString(value) {
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
