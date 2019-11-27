<template>
  <v-container fluid class="background-home">
    <v-row align="end" justify="start" class="ma-0">
      <v-col cols="3">
        <v-img
          src="../../assets/clara.gif"
          max-width="300"
          max-height="400"
          position="bottom"
          contain=true
        />
      </v-col>
      <v-col cols="7">
        <v-row>
          <v-card flat class="background-home">
            <v-img
              src="../../assets/quadro.png"
              max-height="600"
              max-width="800"
              contain=true
              >
              <v-row
                align="center"
                justify="center"
                class="ma-1"
                >
                  <v-card-title class="display-1 ma-0 text-center">
                    {{text}}
                  </v-card-title>
              </v-row>
              <v-row align="center" justify="center">
                <v-img :src="image" max-height="300" max-width="300"/>
              </v-row>
              <v-row align="center" justify="center">
                <v-card-subtitle class="title ma-2 text-center">
                  {{comment}}
                </v-card-subtitle>
              </v-row>
            </v-img>
          </v-card>
        </v-row>
        <v-row class="ma-10">
          <v-col>
            <v-row align="center" justify="center">
              <v-btn rounded to="/" color="yellow lighten-3" class="mr-1">
                Menu
              </v-btn>
              <v-btn rounded to="/game" color="yellow lighten-3" class="mr-1">
                Voltar
              </v-btn>
              <v-btn rounded color="yellow lighten-3" class="mr-1" @click="next">
                Avançar
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SentenceRepository from '../repositories/sentence_repository'

export default {
  data () {
    return {
      text: '',
      comment: '',
      image: '',
      result: null
    }
  },
  beforeMount () {
    let sentence = SentenceRepository.randomSentence()
    this.result = this.$store.getters.result || sentence.resultFor(sentence.values) // in case of refresh
    this.text = this.result.title
    this.comment = this.result.comment
    this.image = require(`../../assets/results/${this.result.imagePath}`)
  },
  methods: {
    next () {
      this.$store.dispatch('randomSentence')
        .then(() => {
          this.$router.push('/game')
        })
    }
  }
}
</script>
