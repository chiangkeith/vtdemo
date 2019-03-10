import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { FILTER_DURATION_DEFINATION } from './constants'
import { filter, get, sortBy, reverse } from 'lodash'

Vue.use(Vuex)

const fetchList = () => axios.get('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')

export default new Vuex.Store({
  state: {
    list: [],
    filter: {
      sort: 'publish',
      duration: 'nolimit'
    }
  },
  mutations: {
    SET_LIST: (state, { list }) => {
      state['list'] = list || []
    },
    SET_SORTBY: (state, { type = 'sort', value = 'publish' }) => {
      state['filter'][ type ] = value
    }
  },
  actions: {
    FETCH_LIST: ({ commit, state }, { params }) => {
      return fetchList().then(response => {
        const list = get(response, 'data.data')
        commit('SET_LIST', { list })
      }).catch(err => {
        console.error('FETING DATA FROM API IN FAIL.')
        console.error(err)
      })
    },
    SET_VALUE_FOR_FILTER: ({ commit }, { type, value }) => commit('SET_SORTBY', { type, value })
  },
  getters: {
    filteredList (state, getters) {
      let filtered = []
      if (state.filter.duration === 'nolimit') {
        filtered = get(state, 'list')
      } else {
        const constraintBottom = get(FILTER_DURATION_DEFINATION, `${state.filter.duration}.0`) * 60
        const constraintTop = get(FILTER_DURATION_DEFINATION, `${state.filter.duration}.1`, 0) * 60
        filtered = filter(get(state, 'list'), item => {
          return constraintTop
            ? item.duration < constraintTop && item.duration >= constraintBottom
            : item.duration >= constraintBottom
        })
      }
      return reverse(sortBy(filtered, [ state.filter.sort ]))
    }
  }
})
