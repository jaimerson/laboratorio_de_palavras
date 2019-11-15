<template>
  <div class="about">
    <h1>Resultados Aqui</h1>
    <v-btn to="/">
      INICIO
    </v-btn>
    <v-btn to="/game">
      Voltar
    </v-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: null
    }
  },
  beforeMount () {
    this.result = this.$store.getters.result
  }
}
</script>
