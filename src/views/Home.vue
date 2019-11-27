<template>
  <v-container fluid class="background-home">
    <v-row>
      <v-col cols="5" style="height:100%">
          <v-row align="end" justify="start" class="ma-0" style="position:fixed;left:0">
            <v-img
              src="../../assets/prateleira.png"
              
            />
          </v-row>
          <v-row style="margin-top: -44px !important; margin-left:20px">
              <v-img
                src="../../assets/clara.gif"
                position="botton"
                contain
                class=""
                style="position:fixed;bottom:0;max-height:82%;width:100%;"
              />
          </v-row>
      </v-col>
      <v-col cols="7">
        <v-row style="position:absolute;right:5%">
          <v-card flat class="background-home">
            <v-img
              src="../../assets/quadro.png"
              max-width="600"
              max-height="500"
              position="top"
              contain
              />
            <v-row
              align="center"
              justify="center"
              class="ma-1"
              style="position:absolute;top:10%;left:3%"
            >
              <v-card-title class="display-1 ma-0 text-center">
                <!--{{text}}teste-->
                <v-img
                  src="../../assets/logo.png"
                  max-width="600"
                  max-height="500"
                  position="top"
                  contain
                />
              </v-card-title>
            </v-row>
          </v-card>
        </v-row>
        <v-row align="center" justify="center">
          <v-img
            src="../../assets/mesa.png"
            position="botton"
            contain
            class=""
            style="position:fixed;bottom:0;margin-left:1%;max-height:100%;width:55%;"
          />
          <v-col style="margin-left:10%;">
            <v-row align="center" justify="center" style="margin-left:27%">
              <v-img
                src="../../assets/pot1.png"
                position="botton"
                contain
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:9%;margin-left:-1%;"
              />
            </v-row>
            <v-row align="center" justify="center" style="margin-left:-30%;">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text @click="generateSentence">
                  <v-row align="center" justify="center" ma-0 style="width:30%;margin-left:10%;margin-top:5%">
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:8px; margin-left: -10px;font-size:18pt"><b>Iniciar</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>
          <v-col>
            <v-row align="center" justify="center" style="margin-left:27%">
              <v-img
                src="../../assets/potion2.png"
                position="botton"
                contain
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:10%;margin-left:-1%;"
              />
            </v-row>
            <v-row align="center" justify="center" style="margin-left:-55%;">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text to="/help">
                  <v-row align="center" justify="center" ma-0 style="width:10%;margin-left:10%;margin-top:12%">
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:8px; margin-left:35px;font-size:18pt"><b>Ajuda</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>

          <v-col>
            <v-row align="center" justify="center" style="margin-left:27%">
              <v-img
                src="../../assets/potion2.png"
                position="botton"
                contain
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:10%;margin-left:-2%;"
              />
            </v-row>
            <v-row align="center" justify="center" style="margin-left:-75%;">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text to="/credits">
                  <v-row align="center" justify="center" ma-0 style="width:30%;margin-left:10%;margin-top:12%">
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:8px; margin-left:15px;font-size:18pt"><b>Creditos</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>

          <v-col>
            <v-row align="center" justify="center" style="margin-left:27%">
              <v-img
                src="../../assets/potion3.png"
                position="botton"
                contain
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:10%;margin-left:-6%;"
              />
            </v-row>
            <v-row align="center" justify="center" style="margin-left:-95%;">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text @click="quit">
                  <v-row align="center" justify="center" ma-0 style="width:30%;margin-left:10%;margin-top:5%">
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:8px; margin-left: -10px;font-size:18pt"><b>Sair</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { remote } from 'electron'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    generateSentence () {
      this.$store.dispatch('randomSentence')
        .then(() => {
          this.$router.push('/game')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    quit () {
      let window = remote.getCurrentWindow()
      window.close()
    }
  }
}
</script>
<style>
  .background-home {
    background-color: #B1CED5 !important;
  }
</style>
