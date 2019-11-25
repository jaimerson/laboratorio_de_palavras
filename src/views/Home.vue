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
                src="../../assets/clara.png"
                position="botton"
                contain="true"
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
              contain="true"
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
                  contain="true"
                />
              </v-card-title>
            </v-row>
          </v-card>
        </v-row>
        <v-row align="center" justify="center">
          <v-img
            src="../../assets/mesa.png"
            position="botton"
            contain="true"
            class=""
            style="position:fixed;bottom:0;margin-left:1%;max-height:100%;width:52%;"
          />
          <v-col style="margin-left:10%;">
            <v-row align="center" justify="center" >
              <v-img
                src="../../assets/pot1.png"
                position="botton"
                contain="true"
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:10%;"
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text @click="generateSentence">
                  <v-row align="center" justify="center" ma-0 class="font-weight-bold;">
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:10px; margin-left: -10px;font-size:18pt"><b>Iniciar</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>
          <v-col>
            <v-row align="center" justify="center" >
              <v-img
                src="../../assets/potion2.png"
                position="botton"
                contain="true"
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:10%;"
              />
            </v-row>
            <v-row align="center" justify="center" style="margin-left:-30%;">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text @click="generateSentence">
                  <v-row align="center" justify="center" ma-0>
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:10px; margin-left: -10px;font-size:18pt"><b>Ajuda</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>
          <v-col>
            <v-row align="center" justify="center" style="margin-left:-50%;">
              <v-img
                src="../../assets/potion3.png"
                position="botton"
                contain="true"
                class=""
                style="position:fixed;bottom:4%;max-height:25%;width:10%;"
              />
            </v-row>
            <v-row align="center" justify="center" style="margin-left:-50%;">
              <v-card-title style="position:fixed;bottom:1%;max-height:100%;width:10%;">
                <v-btn text @click="generateSentence">
                  <v-row align="center" justify="center" ma-0>
                    <v-img                                            
                      src="../../assets/placa.png"
                    >
                      <div style="margin-top:10px; margin-left: -10px;font-size:18pt"><b>Sair</b></div>
                    </v-img>
                  </v-row>
                </v-btn>
              </v-card-title>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!--
    <v-layout class="justify-end">
      <v-flex xs5 offset-xs1>
          <v-img
            src="../../assets/prateleira.png"
            height="100"
            width="300"
            ma-5
            >
          </v-img>
          <v-img
            src="../../assets/clara.png"
            max-width="400"
            max-height="500"
            position="botton"
            contain="true"
            class=""
            >
          </v-img>
      </v-flex>
      <v-flex xs5>
        <v-layout class="justify-center">
          <v-card flat class="background-home">
            <v-img
              src="../../assets/quadro.png"
              max-height="500"
              max-width="600"
              height="250"
              width="500"
              >
              <v-row
                align="center"
                justify="center"
                class="fill-height ma-0"
                >
                <v-img
                  src="../../assets/logo.png"
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
              src="../../assets/pot1.png"
            >
            </v-img>
            <v-card-title>
              <v-btn text @click="generateSentence"><v-row align="center" justify="center" ma-0>
                <v-img
                  max-height="400"
                  max-width="120"
                  src="../../assets/placa.png"
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
                src="../../assets/potion2.png"
              >
              </v-img>
            </v-row>
            <v-card-title>
              <v-btn text to="/help">
                <v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="120"
                    src="../../assets/placa.png"
                  >
                    Ajuda
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="400" max-width="110">
            <v-img
              src="../../assets/potion3.png"
            >
            </v-img>
            <v-card-title>
              <v-btn @click="sair"><v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="120"
                    src="../../assets/placa.png"
                  >
                    SAIR
                  </v-img>
                </v-row>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-card flat class="background-home" max-height="400" max-width="110">
            <v-img
              src="../../assets/potion3.png"
            >
            </v-img>
            <v-card-title>
              <v-btn text to="/credits"><v-row align="center" justify="center" ma-0>
                  <v-img
                    max-height="400"
                    max-width="120"
                    src="../../assets/placa.png"
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
    -->
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
      this.$store.dispatch('randomSentence')
        .then(() => {
          this.$router.push('/game')
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
