import Vue from 'vue'
import Vuex from 'vuex'
import SentenceRepository from '../repositories/sentence_repository'
import { Result } from '@/model/result'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sentence: SentenceRepository.randomSentence(),
    base: '',
    result: Result,
    availableValues: []
  },
  actions: {
    randomSentence (context) {
      var sentence = SentenceRepository.randomSentence()
      context.commit('changeSentence', sentence)
    },
    result (context, values) {
      let result: Result = context.state.sentence.resultFor(values)
      context.commit('changeResult', result)
    }
  },
  mutations: {
    changeSentence (state, sentence) {
      state.sentence = sentence
      state.availableValues = sentence.values
      state.base = sentence.withValues([])
    },
    changeResult (state, result) {
      state.result = result
    }
  },
  getters: {
    sentence: state => {
      return state.sentence
    },
    base: state => {
      return state.base
    },
    result: state => {
      return state.result
    },
    availableValues: state => {
      return state.availableValues
    }
  },
  modules: {
  }
})
