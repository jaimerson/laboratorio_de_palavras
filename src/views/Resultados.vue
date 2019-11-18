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
    <v-layout flex wrap justify-start>
      <v-btn rounded to="/" color="red lighten-3" class="mr-1">
        Menu
      </v-btn>
      <v-btn rounded to="/game" color="red lighten-3" class="mr-1">
        Voltar
      </v-btn>
      <v-btn rounded color="cyan lighten-4" class="mr-1" @click="next">
        Avançar
      </v-btn>
    </v-layout>
  </v-container>
</template>
<script>
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
    this.result = this.$store.getters.result
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
