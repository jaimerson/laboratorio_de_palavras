<template>
  <v-container fluid class="background-home">
    <v-layout>
      <v-row align="center" justify="center">
        <v-layout  class="justify-center">
          <v-card flat class="background-home">
            <v-img
              src="../assets/img/lab_art/pngs/quadro.png"
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
                    <div class="px-5 mx-5">O <strong><u>{{msg !== '' ? msg : space}}</u></strong> TOMA O <strong><u>{{msg2 !== '' ? msg2 : space}}</u></strong></div>
                  </v-card-text>
              </v-row>
            </v-img>
          </v-card>
        </v-layout>
      </v-row>
    </v-layout>
    <v-layout>
      <v-row>
        <v-layout align="center" class="center" ma-5 pa-5>
          <v-card flat class="background-home" max-height="400" max-width="100">
            <v-card-title>
              <v-btn text to="/">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="100"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    Voltar
                  </v-img>
              </v-row>
            </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="400" max-width="100">
            <v-card-title>
              <v-btn text @click="msg=''; msg2=''">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="100"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    Limpar
                  </v-img>
              </v-row>
            </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="50" max-width="100">
            <v-card-title>
              <v-btn text @click="test">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="100"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    {{opcao1}}
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="50" max-width="100">
            <v-card-title>
              <v-btn text @click="test2"><v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="100"
                    max-width="100"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    {{opcao2}}
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="50" max-width="100">
            <v-card-title>
              <v-btn text to="/results"><v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="100"
                    max-width="100"
                    src="../assets/img/lab_art/pngs/placa.png"
                  >
                    Finalizar
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-layout>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      fraseInicio: 'MONTE A FRASE:',
      opcao1: 'MENINO',
      opcao2: 'SORVETE',
      resp1: 'MENINO',
      resp2: 'SORVETE',
      msg: '',
      msg2: '',
      space: '______'
    }
  },
  methods: {
    test () {
      if (this.msg === '') {
        this.msg = this.opcao1
      } else if (this.msg2 === '') {
        this.msg2 = this.opcao1
      }
    },
    test2 () {
      if (this.msg === '') {
        this.msg = this.opcao2
      } else if (this.msg2 === '') {
        this.msg2 = this.opcao2
      }
    }
  }
}
</script>
<style>

</style>
