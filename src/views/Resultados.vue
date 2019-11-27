<template>
  <v-container fluid fill-height class="background-home pa-0">
    <v-row class="ma-0" style="height: 100%">
      <v-col cols="3" class="mt-auto pb-0">
        <v-img
          src="../../assets/clara.gif"
          max-width="450"
          max-height="600"
          contain
        />
      </v-col>
      <v-col cols="7">
        <v-row justify="center">
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
        <v-row class="ma-10"></v-row>
        <v-row class="ma-10"></v-row>
        <v-row align="center" justify="space-around" class="mt-10">
          <v-card flat class="background-home" max-height="100" max-width="100">
            <v-card-title>
              <v-btn text to="/game">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="100"
                    max-width="120"
                    src="../../assets/arrow1.png"
                    >
                    <v-card-title class="body-1">
                      <p class="pa-0 ma-0 ml-5 mt-3">Voltar</p>
                    </v-card-title>
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>

          <v-btn rounded to ="/" color="red lighten-3" class="mr-1">
            Menu
          </v-btn>

          <v-card flat class="background-home" max-height="100" max-width="100">
            <v-card-title>
              <v-btn text @click="next" to="#">
                <v-row align="center" justify="center">
                  <v-img
                    max-height="100"
                    max-width="120"
                    src="../../assets/arrow2.png"
                    >
                  <v-card-title class="body-1">
                    <p class="ma-0 mr-5 mt-3">Avançar</p>
                  </v-card-title>
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
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
