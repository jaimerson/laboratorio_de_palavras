<template>
  <v-container fluid class="background-home">
    <div>
        <v-btn to="/">Inicio</v-btn>
    </div>
    <v-layout>
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-start"
          height="250px"
          src="../assets/img/lab_art/pngs/quadro.png"
        >
          <v-card-title>Como usar:</v-card-title>
            <p class="text-center">
              Ao iniciar o jogo, você deverá selecionar
              as opções de palavras que aparecem para formular
              frases e após isso realizar o experimento.
            </p>
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>

          <v-btn
            color="orange"
            text
          >
            Explore
          </v-btn>
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
