import Vue from 'nativescript-vue'
import Vuex from 'vuex'

if(TNS_ENV !== 'production') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
    state: {
      count: 0,
      he: 'hello from store ya mohamed adel basha'
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
})

// Vue.prototype.$store = store

export default store
