<template>
  <v-container fluid class="background-home">
    <v-layout>
      <v-row align="center" justify="center">
        <v-layout  class="justify-center">
          <v-card flat class="background-home">
                    {{text}}
            <v-img
              src="../../assets/quadro.png"
              max-height="600"
              max-width="800"
              >
              <v-row
                align="center"
                justify="center"
                class="fill-height ma-0"
                pa-5
                >
                  <v-card-title class="display-1 ma-0">
                    {{text}}
                  </v-card-title>
                  <v-img :src="image" />
                  <v-card-text class="display-1">
                    {{comment}}
                  </v-card-text>
              </v-row>
            </v-img>
          </v-card>
        </v-layout>
      </v-row>
    </v-layout>
  </v-container>
</template>
<script>
import SentenceRepository from '../repositories/sentence_repository'
import { relativeAssetPath } from '../utils/asset_helper'

const sentence = SentenceRepository.randomSentence()
const result = sentence.resultFor(sentence.values)

export default {
  data () {
    return {
      text: result.title,
      comment: result.comment,
      path: '',
      image: require(`../../assets/results/${this.path}`)
    }
  },
  beforeCreate () {
    this.path = result.imagePath
  },
  beforeMount () {
    this.result = this.$store.getters.result
  }
}
</script>
