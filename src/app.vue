<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style>
  body {
    font-family: 'Oxygen', sans-serif;
  }
  
  code {
    font-family: monospace;
  }

  .with-radius {
    border-radius: 10px !important;
  }
  
</style>