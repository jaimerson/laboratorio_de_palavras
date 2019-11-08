<template>
  <v-container fluid class="background-home">
    <v-layout>
      <v-flex xs5 offset-xs1>
        <div>
          <v-img
            src="../assets/img/lab_art/pngs/prateleira.png"
            height="100"
            width="300"
            ma-5
            >
          </v-img>
          <v-img
            src="../assets/img/lab_art/pngs/clara.png"
            max-width="400"
            class=""
            >
          </v-img>
        </div>
      </v-flex>
      <v-flex xs5>
        <v-layout class="justify-center">
          <v-card flat class="background-home">
            <v-img
              src="../assets/img/lab_art/pngs/quadro.png"
              max-height="500"
              max-width="600"
              >
              <v-row
                align="center"
                justify="center"
                class="fill-height ma-0"
                >
                <v-img
                  src="../assets/img/lab_art/pngs/logo.png"
                  pa-5
                  max-height="100"
                  max-width="250"
                >
                </v-img>
              </v-row>
            </v-img>
          </v-card>
        </v-layout>
        <v-layout align="center" class="justify-space-around" ma-5 pa-5>
          <v-card flat class="background-home" max-height="400" max-width="100">
            <v-img
              src="../assets/img/lab_art/pngs/pot1.png"
            >
            </v-img>
            <v-card-title>
              <v-btn text to="/game"><v-row align="center" justify="center" ma-0>
                <v-img
                  max-height="400"
                  max-width="120"
                  src="../assets/img/lab_art/pngs/placa.png"
                >
                  Iniciar
                </v-img>
              </v-row>
            </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="300" max-width="100">
            <v-row align="center" justify="center" ma-0>
              <v-img
                max-height="400"
                max-width="53"
                src="../assets/img/lab_art/pngs/potion2.png"
              >
              </v-img>
            </v-row>
            <v-card-title>
              <v-btn text to="/help">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="120"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    Ajuda
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="400" max-width="110">
            <v-img
              src="../assets/img/lab_art/pngs/potion3.png"
            >
            </v-img>
            <v-card-title>
              <v-btn @click="sair"><v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="120"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    SAIR
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="400" max-width="110">
            <v-img
              src="../assets/img/lab_art/pngs/potion3.png"
            >
            </v-img>
            <v-card-title>
              <v-btn text to="/credits"><v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="120"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    Créditos
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    generateSentence () {
      console.log('call randomSentence')
      this.$store.dispatch('randomSentence')
        .then(() => {
          this.$router.go('/game')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    sair () {
      open(location, '_self').close()
    }
  }
}
</script>
<style>
  .background-home {
    background-color: #B1CED5 !important;
  }
</style>
