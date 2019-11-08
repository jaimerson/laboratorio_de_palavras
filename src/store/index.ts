import Vue from 'vue'
import Vuex from 'vuex'
import { Sentence } from '../model/sentence'
import SentenceRepository from '../repositories/sentence_repository'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sentence: Sentence
  },
  mutations: {
    changeSentence (state, obj) {
      state.sentence = obj
    }
  },
  actions: {
    randomSentence () {
      console.log(SentenceRepository.randomSentence())
    }
  },
  getters: {
    getSentence: state => {
      return state.sentence
    }
  },
  modules: {
  }
})
