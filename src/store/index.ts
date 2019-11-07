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
      var sentence : Sentence = SentenceRepository.getSentence()
      console.log(sentence)
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
