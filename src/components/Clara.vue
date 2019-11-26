<template>
  <v-flex xs5 offset-xs1>
    <div>
      <v-img src="../../assets/prateleira.png" height="100" width="300" ma-5></v-img>
      <v-img src="../../assets/clara.png" :max-width="this.imageSize"></v-img>
    </div>
  </v-flex>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    props: ['imageSize']
}
</script>
