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
              :src="imagePath"
              max-height="600"
              max-width="800"
              contain
              position="center bottom"
              >
              <v-row
                align="center"
                justify="center"
                class="fill-height ma-0"
                pa-5
                >
                  <v-card-title class="display-1 ma-0">
                    {{fraseInicio}}
                  </v-card-title>
                  <v-card-text class="display-1 text-center">
                    <div class="px-5 mx-5">
                      {{base}}
                    </div>
                  </v-card-text>
              </v-row>
            </v-img>
          </v-card>
        </v-row>
        <v-row class="ma-10">
          <v-col>
            <v-row align="center" justify="center">
              <v-btn v-for='value in availableValues' :key='value' rounded @click="setValue(value)" :disabled="disabled(value)" color="cyan lighten-4" class='mr-2' v-html="value">
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-row align="center" justify="space-around">
          <v-card flat class="background-home" max-height="100" max-width="100">
            <v-card-title>
              <v-btn text to="/">
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

          <v-btn v-if="this.$route.name == 'game'" rounded @click="reset" color="red lighten-3" class="mr-1">
            Limpar
          </v-btn>

          <v-btn v-if="this.$route.name == 'results'" rounded @click="reset" color="red lighten-3" class="mr-1">
            Menu
          </v-btn>

          <v-card flat class="background-home" max-height="100" max-width="100">
            <v-card-title>
              <v-btn text @click="next" :disabled="!sentenceComplete" :style="{ opacity: sentenceComplete ? initial : 0.5 }" to="#">    
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
export default {
  name: 'game',
  computed: {
    sentence () {
      return this.$store.getters.sentence
    },
    availableValues () {
      return this.$store.getters.availableValues
    },
    sentenceComplete () {
      console.log(this.sentence.values.length == this.selectedValues.length)
      return this.sentence.values.length == this.selectedValues.length
    }
  },
  data () {
    return {
      fraseInicio: 'MONTE A FRASE:',
      base: '',
      space: '______',
      imagePath: require('../../assets/quadro.png'),
      selectedValues: []
    }
  },
  methods: {
    setValue (value) {
      this.selectedValues.push(value)
      this.base = this.sentence.withValues(this.selectedValues)
    },
    reset () {
      this.base = this.sentence.withValues([])
      this.selectedValues = []
    },
    next () {
      this.$store.dispatch('result', this.selectedValues)
        .then(() => {
          this.$router.push('/results')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    disabled (value) {
      return this.selectedValues.includes(value)
    }
  },
  beforeMount () {
    this.base = this.$store.getters.base
  }
}
</script>
<style>

</style>
