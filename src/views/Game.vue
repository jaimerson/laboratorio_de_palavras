<template>
  <v-container fluid class="background-home">
    <v-layout>
      <v-row align="center" justify="center">
        <v-layout  class="justify-center">
          <v-card flat class="background-home">
            <v-img
              :src="imagePath"
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
                    {{fraseInicio}}
                  </v-card-title>
                  <v-card-text class="display-1">
                    <div class="px-5 mx-5">
                      {{base}}
                    </div>
                  </v-card-text>
              </v-row>
            </v-img>
          </v-card>
        </v-layout>
      </v-row>
    </v-layout>
    <v-layout class="center" ma-5 pa-5 flex wrap justify-center>
      <v-btn v-for='value in availableValues' :key='value' rounded @click="setValue(value)" :disabled="disabled(value)" color="cyan lighten-4" class='mr-2' v-html="value">
      </v-btn>
    </v-layout>
    <v-layout flex wrap justify-start>
      <v-btn rounded to="/" color="red lighten-3" class="mr-1">
        Menu
      </v-btn>
      <v-btn rounded @click="reset" color="red lighten-3" class="mr-1">
        Limpar
      </v-btn>
      <v-btn rounded @click="next" :disabled="!sentenceComplete" color="cyan lighten-4" class="mr-1">
        Avançar
      </v-btn>
    </v-layout>
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
