<template>
  <v-app ma-5 pa-5 class="background-home">
    <router-view></router-view>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  })
})
</script>
<style>
  .background-home {
    background-color: #B1CED5 !important;
  }
</style>
