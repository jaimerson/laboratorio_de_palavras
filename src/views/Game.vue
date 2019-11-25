<template>
  <v-container fluid class="background-home">
    <v-row align="end" justify="start" class="ma-0">
      <v-col cols="3">
        <v-img
          src="../../assets/clara.gif"
          max-width="300"
          max-height="400"
          position="bottom"
          contain="true"
        />
      </v-col>
      <v-col cols="7">
        <v-row>
          <v-card flat class="background-home">
            <v-img
              :src="imagePath"
              max-height="600"
              max-width="800"
              contain="true"
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
          <v-card flat class="background-home" max-height="50" max-width="100">
            <v-card-title>
              <v-btn text to="/">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="100"
                    max-width="100"
                    src="../../assets/arrow1.png"
                    >
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>

          <v-btn rounded @click="reset" color="red lighten-3" class="mr-1">
            Limpar
          </v-btn>

          <v-card flat class="background-home" max-height="50" max-width="100">
            <v-card-title>
              <v-btn text @click="next" :disabled="!sentenceComplete" to="#">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="100"
                    max-width="100"
                    src="../../assets/arrow2.png"
                    >
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
