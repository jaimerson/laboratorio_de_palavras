<template>
  <v-container fluid class="background-home">
    <v-layout>
      <v-card
        class="mx-auto"
        max-width="400"
        :elevation="10"
      >
        <v-img
        src="../../assets/quadro.png"
        aspect-ratio="1.6"
        class="grey lighten-2"
        max-width="500"
        max-height="300"
        >
          <h1 class="text-center">Como usar:</h1>
          <p class="text-center">
                  Ao iniciar o jogo, você deverá selecionar <br/>
                  as opções de palavras que aparecem para <br/>
                  formar frases e então realizar o experimento.
          </p>
      
        </v-img>
          <v-card-title>Dica</v-card-title>

        <v-card-text class="text--primary">
          <div>Clique e arraste as palavras na parte inferior
              e então as solte nos devidos espaços.</div>
        </v-card-text>

        <v-card-actions>
          <v-img
          src="../../assets/arrow1.png"
          aspect-ratio="1"
          max-width="75"
          max-height="50"
          >
            <v-btn
              color="orange"
              to="/"
              text
              elevation = "100"
            >
              <p class="text-center">
                <br/>
                <br/>
                
              </p>
            </v-btn>
          </v-img>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'help',
  data () {
    return {

    }
  }
}
</script>